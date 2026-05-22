"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
// import { Button } from "@/components/Button";

export default function Home() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  return (
    <main className="min-h-screen">
      <div className="relative h-screen bg-[url('/Finance-Hero.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Dark overlay + inner shadow */}
        <div className="absolute inset-0 bg-black/70 shadow-[inset_0_0_200px_rgba(0,0,0,0.9)]"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full items-center justify-center">
          <h1 className="text-4xl font-bold text-white">
            Experience the best Banking Options
          </h1>

          <p className="text-white mt-4 w-80">
            Apply online in 10 minutes to experience banking unlike anything
            that’s come before.
          </p>

          <div className="flex flex-gap-8 items-center justify-center mt-8 bg-slate-500 rounded-full px-3 py-2">
            <input
              className="rounded-full focus:outline-none bg-gray-100 px-6 py-2 w-80"
              placeholder="Enter your email"
            />

            <button className="text-white bg-blue-500 rounded-full px-4 py-2 cursor-pointer active:opacity-75">
              Open Account
            </button>
          </div>
        </div>
      </div>

      {/* SECTION */}
      <section className="bg-[#07111F] px-6 md:px-12 lg:px-20 py-20">
        {/* Top heading */}
        <div className="max-w-4xl mb-14">
          <p className="text-emerald-400 font-medium mb-3">
            Modern Financial Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Built to help you manage money with clarity and confidence.
          </h2>

          <p className="text-gray-400 mt-5 text-lg leading-8 max-w-2xl">
            Track spending, monitor investments, and manage transactions from
            one clean and secure dashboard experience.
          </p>
        </div>

        <section className="grid grid-cols-3 items-center justify-center gap-6 p-8">
  {/* Card 1: Total Balance */}
  <div className="w-65 h-90 rounded-2xl p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 shadow-xl shadow-black/40 relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-300">
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 opacity-80" />
    
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
          <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">Total Balance</span>
      </div>
      <span className="text-emerald-400 text-xs font-semibold bg-emerald-500/10 px-2 py-1 rounded-full">+2.4%</span>
    </div>

    <div className="mb-6">
      <h2 className="text-3xl font-bold text-white tracking-tight">$24,562.80</h2>
      <p className="text-slate-500 text-sm mt-1">Across 3 accounts</p>
    </div>

    <div className="w-full h-30 rounded-xl bg-slate-800/50 border border-slate-700/30 p-4 relative overflow-hidden">
      {/* <div className="flex items-end justify-between h-full gap-1">
        <div className="w-full bg-emerald-500/20 rounded-sm" style={{ height: '40%' }} />
        <div className="w-full bg-emerald-500/20 rounded-sm" style={{ height: '65%' }} />
        <div className="w-full bg-emerald-500/20 rounded-sm" style={{ height: '45%' }} />
        <div className="w-full bg-emerald-500/20 rounded-sm" style={{ height: '80%' }} />
        <div className="w-full bg-emerald-500/20 rounded-sm" style={{ height: '55%' }} />
        <div className="w-full bg-emerald-500/20 rounded-sm" style={{ height: '90%' }} />
        <div className="w-full bg-emerald-500/20 rounded-sm" style={{ height: '70%' }} />
        <div className="w-full bg-emerald-500/20 rounded-sm" style={{ height: '85%' }} />
        <div className="w-full bg-emerald-500/20 rounded-sm" style={{ height: '60%' }} />
        <div className="w-full bg-emerald-500/20 rounded-sm" style={{ height: '75%' }} />
        <div className="w-full bg-emerald-500/20 rounded-sm" style={{ height: '50%' }} />
        <div className="w-full bg-emerald-500/20 rounded-sm" style={{ height: '95%' }} />
      </div> */}
    </div>

    <div className="mt-6 flex gap-2">
      <button className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium py-2.5 rounded-lg transition-colors">
        Deposit
      </button>
      <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm font-medium py-2.5 rounded-lg transition-colors">
        Transfer
      </button>
    </div>
  </div>

  {/* Card 2: Monthly Spending */}
  <div className="w-65 h-90 rounded-2xl p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 shadow-xl shadow-black/40 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-400 to-blue-500 opacity-80" />
    
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        </div>
        <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">This Month</span>
      </div>
      <span className="text-rose-400 text-xs font-semibold bg-rose-500/10 px-2 py-1 rounded-full">-12%</span>
    </div>

    <div className="mb-6">
      <h2 className="text-3xl font-bold text-white tracking-tight">$3,240.50</h2>
      <p className="text-slate-500 text-sm mt-1">Budget: $4,000.00</p>
    </div>

    <div className="w-full h-30 rounded-xl bg-slate-800/50 border border-slate-700/30 p-4 flex flex-col justify-center gap-3">
      {/* <div className="space-y-2">
        <div className="flex justify-between text-xs text-slate-400">
          <span>Housing</span>
          <span className="text-white">$1,200</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }} />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-slate-400">
          <span>Food & Dining</span>
          <span className="text-white">$845</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '45%' }} />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-slate-400">
          <span>Transport</span>
          <span className="text-white">$320</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '25%' }} />
        </div>
      </div> */}
    </div>

    <div className="mt-6">
      <button className="w-full bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2">
        View Details
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>

  {/* Card 3: Investment Portfolio */}
  <div className="w-65 h-90 rounded-2xl p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 shadow-xl shadow-black/40 relative overflow-hidden group hover:border-amber-500/30 transition-all duration-300">
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500 opacity-80" />
    
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
          <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">Portfolio</span>
      </div>
      <span className="text-emerald-400 text-xs font-semibold bg-emerald-500/10 px-2 py-1 rounded-full">+8.1%</span>
    </div>

    <div className="mb-6">
      <h2 className="text-3xl font-bold text-white tracking-tight">$18,920.00</h2>
      <p className="text-slate-500 text-sm mt-1">12 assets tracked</p>
    </div>

    <div className="w-full h-30 rounded-xl bg-slate-800/50 border border-slate-700/30 p-4 relative">
      {/* <div className="flex items-center justify-center h-full">
        <div className="relative w-24 h-24">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path className="text-slate-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
            <path className="text-amber-500" strokeDasharray="45, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
            <path className="text-blue-500" strokeDasharray="30, 100" strokeDashoffset="-45" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
            <path className="text-emerald-500" strokeDasharray="25, 100" strokeDashoffset="-75" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-xs font-bold">YTD</span>
          </div>
        </div>
      </div> */}
    </div>

    <div className="mt-6 grid grid-cols-3 gap-2 text-center">
      <div className="bg-slate-800/50 rounded-lg p-2">
        <p className="text-amber-400 text-xs font-bold">45%</p>
        <p className="text-slate-500 text-[10px]">Stocks</p>
      </div>
      <div className="bg-slate-800/50 rounded-lg p-2">
        <p className="text-blue-400 text-xs font-bold">30%</p>
        <p className="text-slate-500 text-[10px]">Crypto</p>
      </div>
      <div className="bg-slate-800/50 rounded-lg p-2">
        <p className="text-emerald-400 text-xs font-bold">25%</p>
        <p className="text-slate-500 text-[10px]">Bonds</p>
      </div>
    </div>
  </div>
</section>
      </section>
    </main>
  );
}
