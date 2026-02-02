import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // New state for password visibility
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      if (email === "user@example.com" && password === "password123") {
        setIsLoading(false);
        navigate('/dashboard');
      } else {
        setIsLoading(false);
        setError('Invalid email or password. Please try again.');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex bg-white font-sans selection:bg-violet-100 selection:text-violet-700">
      
      {/* --- LEFT SIDE: VALUE PROPOSITION --- */}
      <div className="hidden lg:flex flex-1 bg-violet-600 items-center justify-center p-16 text-white relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/10 blur-[100px] rounded-full"></div>
        <div className="max-w-md relative z-10">
          <h2 className="text-5xl font-black mb-8 leading-tight">Welcome back to the workspace.</h2>
          <ul className="space-y-6">
            {["Resume your projects instantly", "Check team progress updates", "Access your secure vault"].map((text, i) => (
              <li key={i} className="flex items-center gap-4 text-lg font-medium">
                <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* --- RIGHT SIDE: LOGIN FORM --- */}
      <div className="flex-1 flex flex-col justify-center py-12 px-6 sm:px-12 lg:px-24 xl:px-32">
        <div className="mx-auto w-full max-w-sm">
          <div className="lg:hidden mb-10">
            <Link to="/" className="text-2xl font-black text-violet-600 flex items-center gap-2">
              <div className="w-8 h-8 bg-violet-600 rounded-lg shadow-lg"></div> SOLO
            </Link>
          </div>
          
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Login</h2>
          <p className="mt-2 text-sm text-slate-500 mb-8">Enter your email and password to continue.</p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-medium">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {error}
              </div>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Work Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="user@example.com" 
                required
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all" 
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">Password</label>
                <Link to="#" className="text-xs font-bold text-violet-600">Forgot password?</Link>
              </div>
              
              {/* --- PASSWORD INPUT CONTAINER --- */}
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all pr-12" 
                />
                
                {/* --- EYE ICON BUTTON --- */}
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-violet-600 transition-colors focus:outline-none"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.177z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className={`w-full py-4 rounded-xl font-bold text-white shadow-xl transition-all active:scale-[0.98] mt-2 flex justify-center items-center ${
                isLoading ? 'bg-slate-700 cursor-not-allowed' : 'bg-slate-900 hover:bg-slate-800'
              }`}
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : 'Login'}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center lg:text-left">
            <p className="text-sm text-slate-500">
              New here? {' '}
              <Link to="/signup" className="font-bold text-violet-600 hover:text-violet-700 transition">Create an account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;