import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicLayout from './components/PublicLayout';
import { DashboardProvider } from './context/DashboardContext';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import MyCards from './pages/MyCards';
import Analytics from './pages/Analytics';
import Budgets from './pages/Budgets';
import Settings from './pages/Settings';

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Dashboard Routes (Self-contained Layout) */}
      <Route path="/dashboard/*" element={
        <DashboardProvider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="cards" element={<MyCards />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="budgets" element={<Budgets />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </DashboardProvider>
      } />
    </Routes>
  );
}

export default App;
