import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import DashboardHeader from './Components/Header';

const DashboardLayout = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      {/* Sidebar gets the state and the setter */}
      <Sidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />

      <main className="flex-1 flex flex-col min-w-0">
        {/* Header gets the click handler to open sidebar on mobile */}
        <DashboardHeader onMenuClick={() => setIsMobileOpen(true)} />

        <section className="flex-1 overflow-y-auto p-8">
          <Outlet /> 
        </section>
      </main>

      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div 
          onClick={() => setIsMobileOpen(false)} 
          className="fixed inset-0 bg-slate-900/40 z-40 md:hidden backdrop-blur-sm" 
        />
      )}
    </div>
  );
};

export default DashboardLayout;