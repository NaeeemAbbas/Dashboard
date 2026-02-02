import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const DashboardLayout = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();

  const navClass = ({ isActive }) => 
    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
      isActive ? 'bg-white text-violet-600 shadow-lg' : 'text-violet-100 hover:bg-violet-500'
    }`;

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      
      {/* --- SIDEBAR --- */}
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
          <NavLink to="/user/:id" onClick={() => setIsMobileOpen(false)} className={navClass}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            Users Details
          </NavLink>

          <NavLink to="/setting" onClick={() => setIsMobileOpen(false)} className={navClass}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg>
            Settings
          </NavLink>
        </nav>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">
          <button onClick={() => setIsMobileOpen(true)} className="md:hidden p-2 text-slate-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          
          <div className="ml-auto flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-800">Admin User</p>
            </div>
            <button onClick={() => navigate('/setting')} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm hover:scale-105 transition">
              <img src="https://ui-avatars.com/api/?name=Admin&background=7c3aed&color=fff" alt="Avatar" />
            </button>
          </div>
        </header>

        {/* --- DYNAMIC PAGE CONTENT --- */}
        <section className="flex-1 overflow-y-auto p-8">
          <Outlet /> 
        </section>
      </main>

      {isMobileOpen && <div onClick={() => setIsMobileOpen(false)} className="fixed inset-0 bg-slate-900/40 z-40 md:hidden backdrop-blur-sm" />}
    </div>
  );
};

export default DashboardLayout;