import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <main className="bg-[#1D4ED8] px-10 py-3 inset-shadow-sm md:flex md:justify-between">
      <ul className="text-white">
        <li className="text-2xl font-bold">Finance App</li>
        <li className="text-sm">Financial Institution</li>
        <li className="text-xs">&copy;{year} Allrights Reserved</li>
      </ul>

      <ul className="text-white">
        <li className="text-sm">Privacy</li>
        <li className="text-sm">Cookies</li>
        <li className="text-sm">Terms of Service</li>
      </ul>

      <div>
        <p className="text-white text-xl font-bold">Social Media Handles</p>
        <ul className="flex gap-3 mt-2">
          <li className="text-white"><FaFacebookF className="text-xl text-white" /></li>
          <li className="text-white"><FaInstagram className="text-xl text-white" /></li>
          <li className="text-white"><FaXTwitter className="text-xl text-white" /></li>
          <li className="text-white"><FaTiktok className="text-xl text-white" /></li>
        </ul>
      </div>
    </main>
  );
}