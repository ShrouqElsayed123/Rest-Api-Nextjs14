"use client";

import { useState } from "react";
import { FaHome, FaUser, FaCog, FaBars } from "react-icons/fa";
import Link from "next/link";

interface SidebarItem {
  name: string;
  icon: JSX.Element;
  href: string;
}

const sidebarItems: SidebarItem[] = [
  { name: "Home", icon: <FaHome />, href: "/" },
  { name: "Profile", icon: <FaUser />, href: "/profile" },
  { name: "Settings", icon: <FaCog />, href: "/settings" },
];

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-gray-800 text-white h-screen p-4 transition-all duration-300`}
      >
        <button
          className="mb-6 text-white text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>

        <ul className="space-y-4">
          {sidebarItems.map((item) => (
            <li key={item.name} className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md">
              <span className="text-lg">{item.icon}</span>
              {isOpen && <Link href={item.href}>{item.name}</Link>}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold">Dashboard Content</h1>
      </div>
    </div>
  );
}
