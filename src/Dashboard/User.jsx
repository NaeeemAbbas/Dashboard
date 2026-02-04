import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // New state for search
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  // Filter users based on search term (Name or Email)
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900">Team Directory</h2>
          <p className="text-slate-500">Manage and view all active team members.</p>
        </div>

        {/* --- SEARCH BAR --- */}
        <div className="relative group w-full md:w-80">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-slate-400 group-focus-within:text-violet-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Search by name or email..."
            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-medium focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500 outline-none transition-all shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="h-48 bg-slate-200 animate-pulse rounded-3xl"></div>
          ))}
        </div>
      ) : (
        <>
          {/* --- RESULTS GRID --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.map(user => (
              <div 
                key={user.id} 
                onClick={() => navigate(`/user/${user.id}`)}
                className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={`https://ui-avatars.com/api/?name=${user.name}&background=7c3aed&color=fff`} 
                    className="w-12 h-12 rounded-xl" 
                    alt="avatar" 
                  />
                  <div>
                    <h3 className="font-bold text-slate-800 group-hover:text-violet-600 transition-colors">{user.name}</h3>
                    <p className="text-xs font-medium text-slate-400">{user.company.name}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4 truncate">📧 {user.email}</p>
                <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-violet-500">View Details</span>
                  <svg className="w-4 h-4 text-violet-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* --- NO RESULTS STATE --- */}
          {filteredUsers.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
              <p className="text-slate-400 font-medium">No team members found matching "{searchTerm}"</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-2 text-sm font-bold text-violet-600 hover:text-violet-700"
              >
                Clear search
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UserPage;