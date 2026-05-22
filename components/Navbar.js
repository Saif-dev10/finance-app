 "use client"
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const toggleMenu = () => setDropDown(!dropDown);

  return (
    <main className="bg-white shadow shadow-gray-300 w-full">
      <div className="h-15 px-5 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#1D4ED8]">Finance App</h1>

        <ul className="text-gray-800 hidden md:flex md:gap-8">
           <Link href="/dashboard/add-funds">
              <li className="hover:text-[#1D4ED8] cursor-pointer">Add Funds</li>
            </Link>

            <Link href="/dashboard/withdraw">
              <li className="hover:text-[#1D4ED8] cursor-pointer">Withdraw</li>
            </Link>

            <Link href="/dashboard/history">
              <li className="hover:text-[#1D4ED8] cursor-pointer">History</li>
            </Link>

            <Link href="/dashboard/profile">
              <li className="hover:text-[#1D4ED8] cursor-pointer">Profile</li>
            </Link>
        </ul>

        <Link href="/login">
          <div className="hidden md:block">
            <button className="w-20 h-10 shadow bg-[#1D4ED8] text-white rounded-md cursor-pointer active:opacity-80">Login</button>
          </div>
        </Link>

        <div className="block md:hidden">
          <RiMenu3Line onClick={toggleMenu} className="text-2xl text-[#1D4ED8] cursor-pointer" />
        </div>
      </div>

      {dropDown && (
        <div className="flex flex-col gap-3 justify-center items-center py-3 md:hidden">
          <ul className="text-gray-800 flex flex-col gap-3">
            <Link href="/dashboard/add-funds">
              <li className="hover:text-[#1D4ED8] cursor-pointer">Add Funds</li>
            </Link>

            <Link href="/dashboard/withdraw">
              <li className="hover:text-[#1D4ED8] cursor-pointer">Withdraw</li>
            </Link>

            <Link href="/dashboard/history">
              <li className="hover:text-[#1D4ED8] cursor-pointer">History</li>
            </Link>

            <Link href="/dashboard/profile">
              <li className="hover:text-[#1D4ED8] cursor-pointer">Profile</li>
            </Link>
          </ul>

          <Link href="/login">
            <div>
              <button className="w-20 h-10 shadow bg-[#1D4ED8] text-white rounded-md cursor-pointer active:opacity-80">Login</button>
            </div>
          </Link>
        </div>
      )}
    </main>
  );
}