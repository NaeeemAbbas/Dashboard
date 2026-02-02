import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Website/LandingPage";
import LoginPage from "./Website/LoginPage";
import SignupPage from "./Website/SignUp";
import DashboardPage from "./Dashboard/Dashboard"
import SettingsPage from "./Dashboard/Setting";
import UserDetailsPage from "./Dashboard/UserDetails";
import AnalyticsPage from "./Dashboard/Analytics";
import UserPage from "./Dashboard/User";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/setting" element={<SettingsPage />} />
        <Route path="/user/:id" element={<UserDetailsPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="users" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
