import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isMobileOpen, setIsMobileOpen }) => {
  // Shared style for links
  const navClass = ({ isActive }) => 
    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
      isActive ? 'bg-white text-violet-600 shadow-lg' : 'text-violet-100 hover:bg-violet-500'
    }`;

  return (
    <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-violet-600 text-white transform transition-transform duration-300 md:relative md:translate-x-0 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-8">
        <h1 className="text-2xl font-black tracking-tighter">SOLO</h1>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        <NavLink to="/analytics" onClick={() => setIsMobileOpen(false)} className={navClass}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          Analytics
        </NavLink>

        <NavLink to="/users" onClick={() => setIsMobileOpen(false)} className={navClass}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          Users
        </NavLink>

        <NavLink to="/setting" onClick={() => setIsMobileOpen(false)} className={navClass}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg>
          Settings
        </NavLink>
      </nav>

      <div className="p-6 border-t border-violet-500">
        <NavLink to="/">
        <button className="flex items-center gap-3 cursor-pointer text-violet-200 hover:text-white font-bold text-sm px-4">
          Logout
        </button>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;