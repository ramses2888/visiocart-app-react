import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TabletCarrito from './pages/TabletCarrito';
import TerminalPOS from './pages/TerminalPOS';
import DashboardAdmin from './pages/DashboardAdmin';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-100 flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<TabletCarrito />} />
          <Route path="/pos" element={<TerminalPOS />} />
          <Route path="/admin" element={<DashboardAdmin />} />
        </Routes>
      </div>
    </Router>
  );
}