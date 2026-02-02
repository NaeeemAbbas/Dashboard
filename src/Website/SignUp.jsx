import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle visibility

  const handleSignup = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/login');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex bg-white font-sans selection:bg-violet-100 selection:text-violet-700">
      {/* LEFT SIDE (Same as before) */}
      <div className="hidden lg:flex flex-1 bg-violet-600 items-center justify-center p-16 text-white">
        <div className="max-w-md">
          <h2 className="text-5xl font-black mb-8 leading-tight">Join the next generation of builders.</h2>
          <ul className="space-y-6">
            {["Unlimited workspaces", "Team collaboration", "24/7 Support"].map((text, i) => (
              <li key={i} className="flex items-center gap-4 text-lg font-medium">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* RIGHT SIDE: FORM */}
      <div className="flex-1 flex flex-col justify-center py-12 px-6 sm:px-12 lg:px-24 xl:px-32">
        <div className="mx-auto w-full max-w-sm">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Create Account</h2>
          <p className="mt-2 text-sm text-slate-500 mb-8">Start your free trial today.</p>

          <form className="space-y-4" onSubmit={handleSignup}>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" required placeholder="First" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all" />
              <input type="text" required placeholder="Last" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all" />
            </div>
            
            <input type="email" required placeholder="Work Email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all" />
            
            {/* --- PASSWORD FIELD WITH EYE ICON --- */}
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} // Dynamic type
                required 
                placeholder="Create Password" 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all pr-12" 
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-violet-600 transition-colors focus:outline-none"
              >
                {showPassword ? (
                  /* Eye Off Icon */
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  /* Eye On Icon */
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.177z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>

            <button type="submit" disabled={isLoading} className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 shadow-xl transition-all">
              {isLoading ? 'Creating Account...' : 'SignUp'}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center lg:text-left">
            <p className="text-sm text-slate-500">
              Already using Solo? <Link to="/login" className="font-bold text-violet-600">Log in here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;