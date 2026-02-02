import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
  const [users, setUsers] = useState([]);
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

  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-slate-900">Team Directory</h2>
        <p className="text-slate-500">Manage and view all active team members.</p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="h-48 bg-slate-200 animate-pulse rounded-2xl"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map(user => (
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
              <p className="text-sm text-slate-600 mb-4">📧 {user.email}</p>
              <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-violet-500">View Details</span>
                <svg className="w-4 h-4 text-violet-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserPage;