import React from 'react';
import { ShoppingCart, CheckCircle2, AlertTriangle, CreditCard, XCircle, ShieldAlert } from 'lucide-react';

export default function TerminalPOS() {
  return (
    <div className="w-full h-[calc(100vh-37px)] bg-slate-100 flex flex-col font-sans select-none overflow-hidden">
      <header className="bg-[#1A4171] text-white px-6 py-3 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-3">
          <ShoppingCart className="h-7 w-7 text-white" />
          <span className="text-2xl font-bold tracking-wide">Global-Market | VISIOCART - Cashier Receipt</span>
        </div>
        <div className="flex items-center space-x-2 text-sm bg-slate-700/50 px-3 py-1.5 rounded-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Online Sync</span>
        </div>
      </header>

      <div className="flex-1 flex p-4 gap-4 overflow-hidden">
        <div className="flex-1 bg-white rounded-xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h2 className="text-xl font-bold text-slate-800">Cart #117</h2>
              <span className="text-xs bg-blue-50 text-[#1A4171] font-semibold px-3 py-1 rounded-full border border-blue-200">
                Imported Order (RF-03)
              </span>
            </div>

            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b text-slate-400 text-xs font-semibold uppercase">
                  <th className="py-2">Item</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Verify</th>
                  <th className="py-2">Weight</th>
                  <th className="py-2 text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                <tr>
                  <td className="py-3 font-medium text-slate-800">Organic Milk (1 pcs)</td>
                  <td className="py-3 text-slate-600">$3.50</td>
                  <td className="py-3"><CheckCircle2 className="h-5 w-5 text-[#16A34A]" /></td>
                  <td className="py-3 text-slate-600">1.00 kg</td>
                  <td className="py-3 text-right font-semibold">$17.00</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-slate-800">Apples (2 pcs)</td>
                  <td className="py-3 text-slate-600">$5.00</td>
                  <td className="py-3"><CheckCircle2 className="h-5 w-5 text-[#16A34A]" /></td>
                  <td className="py-3 text-slate-600">2.00 kg</td>
                  <td className="py-3 text-right font-semibold">$15.00</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-slate-800">Cereal Box (1 pcs)</td>
                  <td className="py-3 text-slate-600">$6.50</td>
                  <td className="py-3"><CheckCircle2 className="h-5 w-5 text-[#16A34A]" /></td>
                  <td className="py-3 text-slate-600">1.50 kg</td>
                  <td className="py-3 text-right font-semibold">$89.50</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between text-sm text-slate-500 mb-1">
              <span>Subtotal:</span>
              <span>$85.00</span>
            </div>
            <div className="flex justify-between text-sm text-slate-500 mb-2">
              <span>Tax (5%):</span>
              <span>$4.50</span>
            </div>
            <div className="flex justify-between items-center text-2xl font-bold text-slate-900 border-t pt-2">
              <span>Total Due:</span>
              <span className="text-[#1A4171]">$89.50</span>
            </div>
          </div>
        </div>

        <div className="w-80 flex flex-col gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm flex-1">
            <h3 className="font-bold text-slate-700 text-sm mb-3 flex items-center gap-2">
              <ShieldAlert className="h-4 w-4 text-[#1A4171]" />
              System Status & Discrepancies
            </h3>
            <div className="space-y-3 text-xs">
              <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-2 text-emerald-800">
                <CheckCircle2 className="h-4 w-4 text-[#16A34A]" />
                <div>
                  <p className="font-semibold">Sensor Status</p>
                  <p className="text-[10px]">Online</p>
                </div>
              </div>
              <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-2 text-emerald-800">
                <CheckCircle2 className="h-4 w-4 text-[#16A34A]" />
                <div>
                  <p className="font-semibold">Weight Match Check</p>
                  <p className="text-[10px]">Passed (Green)</p>
                </div>
              </div>
              <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-2 text-emerald-800">
                <CheckCircle2 className="h-4 w-4 text-[#16A34A]" />
                <div>
                  <p className="font-semibold">Camera Verification</p>
                  <p className="text-[10px]">OK (0 Warnings)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button className="w-full bg-[#16A34A] hover:bg-green-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-green-600/20">
              <CreditCard className="h-5 w-5" />
              <span>PROCESS PAYMENT</span>
            </button>
            <button className="w-full bg-[#DC2626] hover:bg-red-700 text-white font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2">
              <XCircle className="h-4 w-4" />
              <span>VOID CART</span>
            </button>
            <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              <span>REQUEST SUPERVISOR</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}