
import React from 'react';
import { Tab } from '../types';

interface HomeProps {
  onNavigate: (tab: Tab) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="h-full overflow-y-auto bg-zinc-950 p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] rounded-[40px] overflow-hidden flex items-center justify-center p-8 text-center bg-gradient-to-br from-zinc-900 via-black to-zinc-900 border border-zinc-800 shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080')] opacity-10 mix-blend-overlay grayscale"></div>
          <div className="relative z-10 space-y-6 max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
              FUTURE OF <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">CREATIVITY.</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl font-medium">
              Seamlessly integrate cutting-edge AI into your workflow with Lumina's minimalist intelligence interface.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button 
                onClick={() => onNavigate('chat')}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)]"
              >
                Start Chatting
              </button>
              <button 
                onClick={() => onNavigate('studio')}
                className="bg-white hover:bg-zinc-200 text-black font-bold px-8 py-4 rounded-2xl transition-all shadow-xl"
              >
                Enter Studio
              </button>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[32px] bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all group shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Instant Insights</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">Leverage the power of Gemini 3 Flash for near-instantaneous reasoning and creative writing support.</p>
            </div>
            <div className="p-8 rounded-[32px] bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all group shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Fluid Visuals</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">Generate ultra-sharp 1K images with semantic understanding that captures the essence of your prompts.</p>
            </div>
            <div className="p-8 rounded-[32px] bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all group shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-pink-500/10 text-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Analytics Dashboard</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">Monitor your usage metrics and token consumption with beautiful real-time data visualizations.</p>
            </div>
        </section>

        {/* Recent Activity Mock */}
        <section className="space-y-6">
            <h3 className="text-2xl font-bold text-white">System Status</h3>
            <div className="bg-zinc-900/40 rounded-[32px] border border-zinc-800 divide-y divide-zinc-800">
                <div className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                        <span className="font-semibold text-white">Gemini 3 Flash</span>
                    </div>
                    <span className="text-zinc-500 text-sm">Lat: 142ms</span>
                </div>
                <div className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                        <span className="font-semibold text-white">Gemini 2.5 Flash Image</span>
                    </div>
                    <span className="text-zinc-500 text-sm">Lat: 2.1s</span>
                </div>
                <div className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-zinc-700 rounded-full"></div>
                        <span className="font-semibold text-zinc-500">Video Synthesis (Beta)</span>
                    </div>
                    <span className="text-zinc-500 text-sm">Offline</span>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
