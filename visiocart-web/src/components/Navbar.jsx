import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Monitor, LayoutDashboard } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Tablet Carrito (T02)', icon: ShoppingCart },
    { path: '/pos', label: 'Terminal POS (C02)', icon: Monitor },
    { path: '/admin', label: 'Dashboard Admin (A02)', icon: LayoutDashboard },
  ];

  return (
    <nav className="bg-slate-900 text-slate-300 px-6 py-2 flex items-center justify-between text-sm border-b border-slate-800">
      <div className="flex items-center space-x-2 font-bold text-white">
        <span className="bg-[#1A4171] text-xs px-2 py-0.5 rounded border border-blue-400">VISIOCART</span>
        <span className="text-xs text-slate-400">Selector de Módulos (Demo)</span>
      </div>
      <div className="flex space-x-4">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center space-x-1.5 px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                isActive ? 'bg-[#1A4171] text-white' : 'hover:bg-slate-800 text-slate-400'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}