
import React, { useState } from 'react';
import { generateImage } from '../services/geminiService';
import { GeneratedImage } from '../types';

const Studio: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [images, setImages] = useState<GeneratedImage[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim() || isGenerating) return;

    setIsGenerating(true);
    try {
      const url = await generateImage(prompt);
      if (url) {
        setImages(prev => [{
          id: Date.now().toString(),
          url,
          prompt,
          timestamp: new Date()
        }, ...prev]);
        setPrompt('');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="h-full overflow-y-auto bg-zinc-950 p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Creative Studio</h2>
          <p className="text-zinc-400 max-w-xl">Transform your ideas into high-fidelity visuals using Lumina's advanced imaging engine.</p>
        </header>

        <section className="bg-zinc-900/50 border border-zinc-800 p-6 md:p-8 rounded-3xl shadow-2xl">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-zinc-300">Image Prompt</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="A futuristic city in the style of cyberpunk with neon lights and flying cars, cinematic lighting..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-zinc-100 h-32 focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
            />
            <div className="flex justify-end pt-2">
              <button
                onClick={handleGenerate}
                disabled={!prompt.trim() || isGenerating}
                className="bg-white text-black font-bold px-8 py-3 rounded-2xl hover:bg-zinc-200 disabled:opacity-50 transition-all shadow-xl flex items-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-black" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </>
                ) : 'Generate Asset'}
              </button>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Your Collection</h3>
            <span className="text-sm text-zinc-500">{images.length} assets generated</span>
          </div>

          {images.length === 0 ? (
            <div className="border-2 border-dashed border-zinc-800 rounded-3xl h-64 flex flex-col items-center justify-center text-zinc-600 gap-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p>No images generated yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((img) => (
                <div key={img.id} className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 transition-all hover:border-zinc-700 shadow-lg">
                  <img src={img.url} alt={img.prompt} className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                    <p className="text-white text-sm line-clamp-2 italic">"{img.prompt}"</p>
                    <div className="flex gap-2 mt-4">
                        <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg transition-colors">Download</button>
                        <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg transition-colors">Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Studio;
