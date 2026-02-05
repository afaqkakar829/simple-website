
export type Tab = 'home' | 'chat' | 'studio' | 'analytics';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  timestamp: Date;
}

export interface UsageData {
  name: string;
  tokens: number;
  requests: number;
}
