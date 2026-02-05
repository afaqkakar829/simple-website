
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Mon', tokens: 4200, images: 12 },
  { name: 'Tue', tokens: 3800, images: 8 },
  { name: 'Wed', tokens: 5500, images: 24 },
  { name: 'Thu', tokens: 4800, images: 15 },
  { name: 'Fri', tokens: 7200, images: 32 },
  { name: 'Sat', tokens: 2100, images: 6 },
  { name: 'Sun', tokens: 1800, images: 4 },
];

const Analytics: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto bg-zinc-950 p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Usage Analytics</h2>
          <p className="text-zinc-400">Detailed insights into your AI interactions and resource consumption over time.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-sm">
                <p className="text-zinc-500 text-xs font-bold uppercase mb-2">Total Tokens</p>
                <p className="text-3xl font-black text-white">29.4k</p>
                <p className="text-xs text-green-500 mt-2 font-medium">↑ 12.5% from last week</p>
            </div>
            <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-sm">
                <p className="text-zinc-500 text-xs font-bold uppercase mb-2">Assets Generated</p>
                <p className="text-3xl font-black text-white">101</p>
                <p className="text-xs text-green-500 mt-2 font-medium">↑ 4.2% from last week</p>
            </div>
            <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-sm">
                <p className="text-zinc-500 text-xs font-bold uppercase mb-2">Avg. Response</p>
                <p className="text-3xl font-black text-white">1.8s</p>
                <p className="text-xs text-indigo-500 mt-2 font-medium">Stable Performance</p>
            </div>
            <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-sm">
                <p className="text-zinc-500 text-xs font-bold uppercase mb-2">Context Load</p>
                <p className="text-3xl font-black text-white">64%</p>
                <div className="w-full bg-zinc-800 h-1.5 mt-4 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full w-[64%]"></div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-8 rounded-[32px] border border-zinc-800 min-h-[400px]">
                <h4 className="text-lg font-bold text-white mb-8">Token Consumption (Daily)</h4>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorTokens" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#27272a" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#71717a', fontSize: 12}} />
                            <YAxis axisLine={false} tickLine={false} tick={{fill: '#71717a', fontSize: 12}} />
                            <Tooltip 
                                contentStyle={{backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '12px'}}
                                itemStyle={{color: '#fff'}}
                            />
                            <Area type="monotone" dataKey="tokens" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorTokens)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-[32px] border border-zinc-800 min-h-[400px]">
                <h4 className="text-lg font-bold text-white mb-8">Image Assets Created</h4>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#27272a" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#71717a', fontSize: 12}} />
                            <YAxis axisLine={false} tickLine={false} tick={{fill: '#71717a', fontSize: 12}} />
                            <Tooltip 
                                cursor={{fill: '#18181b'}}
                                contentStyle={{backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '12px'}}
                                itemStyle={{color: '#fff'}}
                            />
                            <Bar dataKey="images" fill="#a855f7" radius={[6, 6, 0, 0]} barSize={24} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
