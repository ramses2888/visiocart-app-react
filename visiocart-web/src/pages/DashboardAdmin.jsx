import React from 'react';
import { ShoppingCart, LayoutDashboard, FileText, AlertOctagon, Package, Battery, Signal } from 'lucide-react';

export default function DashboardAdmin() {
  return (
    <div className="w-full h-[calc(100vh-37px)] bg-slate-100 flex flex-col font-sans select-none overflow-hidden">
      <header className="bg-[#1A4171] text-white px-6 py-3 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-3">
          <ShoppingCart className="h-7 w-7 text-white" />
          <span className="text-2xl font-bold tracking-wide">Global-Market | VISIOCART - Store Fleet Overview</span>
        </div>
      </header>

      <div className="flex-1 flex p-4 gap-4 overflow-hidden">
        <aside className="w-56 bg-white rounded-xl shadow-sm p-4 flex flex-col gap-2 text-sm text-[#545859]">
          <button className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-[#1A4171] font-semibold rounded-lg">
            <LayoutDashboard className="h-4 w-4" /> Dashboard
          </button>
          <button className="flex items-center gap-3 px-3 py-2 hover:bg-slate-50 rounded-lg">
            <FileText className="h-4 w-4" /> Reports
          </button>
          <button className="flex items-center gap-3 px-3 py-2 hover:bg-slate-50 rounded-lg">
            <ShoppingCart className="h-4 w-4" /> Cart Management
          </button>
          <button className="flex items-center gap-3 px-3 py-2 hover:bg-slate-50 rounded-lg text-red-600 font-medium">
            <AlertOctagon className="h-4 w-4" /> Technical Alerts
            <span className="ml-auto bg-red-100 text-red-600 text-[10px] px-1.5 py-0.5 rounded-full font-bold">2</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 hover:bg-slate-50 rounded-lg">
            <Package className="h-4 w-4" /> Product Catalog
          </button>
        </aside>

        <main className="flex-1 flex flex-col gap-4 overflow-hidden">
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <p className="text-xs text-slate-500 font-medium">Carts in Use</p>
              <p className="text-2xl font-bold text-[#1A4171] mt-1">85%</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <p className="text-xs text-slate-500 font-medium">Average Battery Level</p>
              <p className="text-2xl font-bold text-slate-800 mt-1">78%</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <p className="text-xs text-slate-500 font-medium">System Status</p>
              <p className="text-2xl font-bold text-[#16A34A] mt-1 flex items-center gap-1">
                <Signal className="h-5 w-5" /> Operational
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <p className="text-xs text-slate-500 font-medium">Active Alerts</p>
              <p className="text-2xl font-bold text-[#DC2626] mt-1">2 Warnings</p>
            </div>
          </div>

          <div className="flex-1 flex gap-4 overflow-hidden">
            <div className="flex-1 bg-white rounded-xl p-4 shadow-sm flex flex-col">
              <h2 className="font-bold text-slate-700 text-sm mb-2">Store Fleet Map (Real-time Location)</h2>
              <div className="flex-1 bg-slate-50 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center relative">
                <p className="text-xs text-slate-400 font-medium">[ Mapa interactivo de carritos en sala ]</p>
              </div>
            </div>

            <div className="w-72 bg-white rounded-xl p-4 shadow-sm flex flex-col">
              <h2 className="font-bold text-slate-700 text-sm mb-3">Cart Status</h2>
              <div className="space-y-2 overflow-y-auto flex-1">
                <div className="p-2.5 bg-slate-50 rounded-lg text-xs border flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-800">Cart #107</p>
                    <p className="text-[10px] text-emerald-600 font-semibold">Good Status</p>
                  </div>
                  <span className="flex items-center gap-1 font-bold text-slate-600">
                    <Battery className="h-3.5 w-3.5 text-emerald-500" /> 89%
                  </span>
                </div>
                <div className="p-2.5 bg-amber-50 rounded-lg text-xs border border-amber-200 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-amber-900">Cart #108</p>
                    <p className="text-[10px] text-amber-600 font-semibold">Low Battery</p>
                  </div>
                  <span className="flex items-center gap-1 font-bold text-amber-700">
                    <Battery className="h-3.5 w-3.5 text-amber-500" /> 18%
                  </span>
                </div>
                <div className="p-2.5 bg-red-50 rounded-lg text-xs border border-red-200 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-red-900">Cart #112</p>
                    <p className="text-[10px] text-red-600 font-semibold">Fault (Camera AI)</p>
                  </div>
                  <span className="flex items-center gap-1 font-bold text-red-700">
                    <Battery className="h-3.5 w-3.5 text-red-500" /> 45%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}