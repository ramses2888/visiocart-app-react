import React, { useState } from 'react';
import { ShoppingCart, Map, AlertCircle, User, Trash2, ArrowLeft, Navigation, QrCode, CheckCircle } from 'lucide-react';

export default function TabletCarrito() {
  const [items, setItems] = useState([
    { id: 1, name: 'Organic Milk', price: 3.90, qty: 1, img: '🥛' },
    { id: 2, name: 'Fuji Apples', price: 5.00, qty: 2, img: '🍎' },
    { id: 3, name: 'Artisan Bread', price: 4.00, qty: 1, img: '🍞' },
    { id: 4, name: 'Cereal Box', price: 6.50, qty: 1, img: '🥣' },
  ]);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full h-[calc(100vh-37px)] bg-slate-100 flex flex-col font-sans select-none overflow-hidden">
      <header className="bg-[#1A4171] text-white px-6 py-3 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-3">
          <ShoppingCart className="h-7 w-7 text-white" />
          <span className="text-2xl font-bold tracking-wide">Global-Market | VISIOCART</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 bg-slate-700/50 px-3 py-1.5 rounded-lg text-sm">
            <AlertCircle className="h-4 w-4 text-yellow-400" />
            <span>Rounded Alarms</span>
          </button>
          <div className="p-2 bg-slate-700/50 rounded-full">
            <User className="h-5 w-5" />
          </div>
        </div>
      </header>

      <div className="flex-1 flex p-4 gap-4 overflow-hidden">
        <nav className="w-16 bg-white rounded-xl shadow-sm flex flex-col items-center py-6 gap-6 text-[#545859]">
          <button className="p-3 bg-blue-50 text-[#1A4171] rounded-xl"><ShoppingCart className="h-6 w-6" /></button>
          <button className="p-3 hover:bg-slate-100 rounded-xl"><Map className="h-6 w-6" /></button>
        </nav>

        <section className="w-1/3 bg-white rounded-xl p-4 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold text-slate-700">Current store aisle</h2>
            <button className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded border">Map</button>
          </div>
          <div className="flex-1 bg-slate-50 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center relative my-2">
            <div className="text-center text-slate-400">
              <Navigation className="h-10 w-10 mx-auto mb-2 text-[#1A4171]" />
              <p className="text-sm font-medium">Navegación Activa Pasillo 4</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 py-2 border rounded-lg flex items-center justify-center gap-1 text-sm text-slate-600 font-medium">
              <ArrowLeft className="h-4 w-4" /> Back List
            </button>
            <button className="flex-1 py-2 bg-[#1A4171] text-white rounded-lg flex items-center justify-center gap-1 text-sm font-medium">
              <Navigation className="h-4 w-4" /> Navigation
            </button>
          </div>
        </section>

        <section className="w-1/3 bg-white rounded-xl p-4 shadow-sm flex flex-col">
          <h2 className="font-semibold text-slate-700 mb-3">Product List</h2>
          <div className="flex-1 overflow-y-auto space-y-3 pr-1">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.img}</span>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{item.name}</p>
                    <p className="text-xs text-slate-500">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold bg-slate-200 px-2 py-0.5 rounded text-slate-700">{item.qty}</span>
                  <button onClick={() => removeItem(item.id)} className="text-[#DC2626] hover:bg-red-50 p-1 rounded">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t bg-slate-50 -mx-4 -mb-4 p-4 rounded-b-xl border-slate-100">
            <p className="text-xs text-slate-500 font-medium">Subtotal:</p>
            <p className="text-2xl font-bold text-[#1A4171]">${subtotal.toFixed(2)}</p>
          </div>
        </section>

        <section className="w-1/3 flex flex-col gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm flex-1 flex flex-col">
            <h2 className="font-semibold text-slate-700 mb-2">Visual Detection (RF-02)</h2>
            <div className="flex-1 bg-slate-900 rounded-lg relative overflow-hidden flex items-center justify-center">
              <div className="border-2 border-[#16A34A] bg-emerald-500/10 p-4 rounded-md text-center">
                <p className="text-white font-bold text-xs tracking-wider">CEREAL BOX DETECTED</p>
              </div>
              <span className="absolute bottom-2 left-2 bg-slate-800/80 text-white text-[10px] px-2 py-1 rounded">
                Item Added: Cereal Box
              </span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-center mb-1">
              <span className="text-slate-500 font-medium">Total</span>
              <span className="text-xl font-bold text-slate-800">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mb-4 text-xs">
              <span className="text-slate-400">Payment State</span>
              <span className="text-[#16A34A] font-semibold flex items-center gap-1">
                <CheckCircle className="h-3 w-3" /> Shared
              </span>
            </div>
            <button className="w-full bg-[#16A34A] hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-green-600/20">
              <QrCode className="h-5 w-5" />
              <span>Generate Checkout QR (RF-06)</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}