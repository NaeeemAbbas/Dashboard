import React from 'react';

const AnalyticsPage = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-slate-900">Analytics</h2>
          <p className="text-slate-500">Real-time performance metrics.</p>
        </div>
        <div className="flex gap-2 bg-white p-1 rounded-xl border border-slate-200">
          <button className="px-4 py-2 text-xs font-bold bg-violet-600 text-white rounded-lg">12M</button>
          <button className="px-4 py-2 text-xs font-bold text-slate-500 hover:bg-slate-50 rounded-lg">30D</button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Revenue', val: '$128k', color: 'text-violet-600' },
          { label: 'Sessions', val: '42.5k', color: 'text-blue-600' },
          { label: 'Bounce', val: '24%', color: 'text-emerald-600' },
          { label: 'Churn', val: '2.1%', color: 'text-rose-600' }
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase mb-1">{item.label}</p>
            <h3 className={`text-2xl font-black ${item.color}`}>{item.val}</h3>
          </div>
        ))}
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm h-80 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-violet-50 text-violet-600 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
        </div>
        <h4 className="font-bold text-slate-800">Traffic Analysis Chart</h4>
        <p className="text-sm text-slate-400">Chart.js or Recharts integration goes here.</p>
      </div>
    </div>
  );
};

export default AnalyticsPage;