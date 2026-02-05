
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Chat from './components/Chat';
import Studio from './components/Studio';
import Analytics from './components/Analytics';
import { Tab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home onNavigate={setActiveTab} />;
      case 'chat':
        return <Chat />;
      case 'studio':
        return <Studio />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Home onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="flex h-screen bg-black overflow-hidden selection:bg-indigo-500/30">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 relative overflow-hidden flex flex-col">
        {/* Top bar */}
        <div className="h-16 border-b border-zinc-900 bg-zinc-950 flex items-center justify-between px-6 md:px-12 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 text-sm font-medium">Session:</span>
            <span className="text-zinc-100 text-sm font-semibold flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              Live - Global Core
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-zinc-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            </button>
            <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden cursor-pointer hover:border-zinc-500 transition-all">
                <img src="https://picsum.photos/32/32" alt="Avatar" />
            </div>
          </div>
        </div>

        {/* Dynamic Page Content */}
        <div className="flex-1 overflow-hidden">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
