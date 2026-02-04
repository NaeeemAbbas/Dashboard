import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardHeader = ({ onMenuClick }) => {
  const navigate = useNavigate();

  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
      {/* Mobile Toggle Button */}
      <button onClick={onMenuClick} className="md:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {/* Right Side Info */}
      <div className="ml-auto flex items-center gap-4">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-bold text-slate-800">Admin User</p>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">System Manager</p>
        </div>
        <button 
          onClick={() => navigate('/setting')} 
          className="w-10 h-10 rounded-full border-2 border-violet-100 overflow-hidden shadow-sm hover:scale-105 transition-transform"
        >
          <img src="https://ui-avatars.com/api/?name=Admin&background=7c3aed&color=fff" alt="Avatar" />
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;