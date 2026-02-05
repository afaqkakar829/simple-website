
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const chatWithGemini = async (prompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  const ai = getAIClient();
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: 'You are Lumina, a sleek and helpful AI assistant. Keep responses concise, helpful, and professional.',
    },
  });

  // Since the specific chat history interface might vary, we can just use generateContent for simple context-aware simulation
  // or use the chat instance. Here we use generateContent for simplicity in a stateless-like wrapper.
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [
        ...history.map(h => ({ role: h.role === 'model' ? 'model' : 'user', parts: [{ text: h.parts[0].text }] })),
        { role: 'user', parts: [{ text: prompt }] }
    ],
  });

  return response.text || "I couldn't generate a response.";
};

export const generateImage = async (prompt: string): Promise<string | null> => {
  const ai = getAIClient();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image generation failed:", error);
    return null;
  }
};
