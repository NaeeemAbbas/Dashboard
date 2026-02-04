import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./Website/LandingPage";
import LoginPage from "./Website/LoginPage";
import SignupPage from "./Website/SignUp";
import SettingsPage from "./Dashboard/Setting";
import UserDetailsPage from "./Dashboard/UserDetails";
import AnalyticsPage from "./Dashboard/Analytics";
import UserPage from "./Dashboard/User";
import DashboardLayout from "./Dashboard/Dashboard"; // This is your Layout with Sidebar/Header

function App() {
  return (
    <Router>
      <Routes>
        {/* --- PUBLIC ROUTES --- */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* --- PROTECTED DASHBOARD ROUTES --- */}
        {/* We wrap these in the DashboardLayout so the Sidebar/Header always show */}
        <Route element={<DashboardLayout />}>
          {/* Use 'path' for the main dashboard view or a redirect */}
          <Route path="/dashboard" element={<AnalyticsPage />} /> 
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/user/:id" element={<UserDetailsPage />} />
          <Route path="/setting" element={<SettingsPage />} />
        </Route>

        {/* Catch-all: redirect to home if route doesn't exist */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;