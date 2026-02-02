import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UserDetailsPage = () => {
  const { id } = useParams(); // Get ID from URL
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) return <div className="p-10">Loading profile...</div>;

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-8 flex items-center gap-2 text-slate-500 hover:text-violet-600 font-bold transition"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        Back to Dashboard
      </button>

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="h-32 bg-violet-600"></div>
        <div className="px-8 pb-8">
          <div className="relative -mt-12 mb-6">
            <img 
              src={`https://ui-avatars.com/api/?name=${user.name}&background=fff&color=7c3aed&size=128`} 
              className="w-24 h-24 rounded-2xl border-4 border-white shadow-lg"
              alt="Avatar"
            />
          </div>
          <h1 className="text-3xl font-black text-slate-900">{user.name}</h1>
          <p className="text-slate-500 mb-8">{user.company?.name} • {user.address?.city}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase text-slate-400 tracking-widest">Contact Info</h4>
              <p className="text-slate-700 font-medium">📧 {user.email}</p>
              <p className="text-slate-700 font-medium">📞 {user.phone}</p>
              <p className="text-slate-700 font-medium">🌐 {user.website}</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;