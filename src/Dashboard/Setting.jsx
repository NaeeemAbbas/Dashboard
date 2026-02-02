import React, { useState } from 'react';

const SettingsPage = () => {
  const [activeSettingTab, setActiveSettingTab] = useState('Profile');

  const tabs = [
    { name: 'Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { name: 'Security', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
    { name: 'Billing', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
    { name: 'Notifications', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900">Settings</h1>
        <p className="text-slate-500">Manage your account preferences and configurations.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* --- SETTINGS NAVIGATION --- */}
        <aside className="w-full lg:w-64 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveSettingTab(tab.name)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeSettingTab === tab.name
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-200'
                  : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tab.icon} />
              </svg>
              {tab.name}
            </button>
          ))}
        </aside>

        {/* --- SETTINGS CONTENT AREA --- */}
        <div className="flex-1 bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-10">
          {activeSettingTab === 'Profile' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="flex items-center gap-6 pb-8 border-b border-slate-50">
                <div className="relative group">
                  <div className="w-24 h-24 rounded-2xl bg-slate-100 overflow-hidden">
                    <img src="https://ui-avatars.com/api/?name=User&background=7c3aed&color=fff" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <button className="absolute -bottom-2 -right-2 p-2 bg-white rounded-lg shadow-md border border-slate-100 text-violet-600 hover:text-violet-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    </svg>
                  </button>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Profile Photo</h3>
                  <p className="text-sm text-slate-500">JPG, GIF or PNG. 1MB max.</p>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Display Name</label>
                    <input type="text" defaultValue="John Doe" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Email Address</label>
                    <input type="email" defaultValue="john@example.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Bio</label>
                  <textarea rows="4" placeholder="Tell us about yourself..." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all"></textarea>
                </div>

                <div className="pt-6 border-t border-slate-50 flex justify-end gap-3">
                  <button type="button" className="px-6 py-2.5 rounded-xl font-bold text-slate-500 hover:bg-slate-50 transition">Cancel</button>
                  <button type="submit" className="px-6 py-2.5 bg-violet-600 text-white rounded-xl font-bold hover:bg-violet-700 shadow-lg shadow-violet-200 transition">Save Changes</button>
                </div>
              </form>
            </div>
          )}

          {activeSettingTab === 'Security' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900">Change Password</h3>
              <div className="space-y-4 max-w-md">
                <input type="password" placeholder="Current Password" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all" />
                <input type="password" placeholder="New Password" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all" />
                <button className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition">Update Password</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;