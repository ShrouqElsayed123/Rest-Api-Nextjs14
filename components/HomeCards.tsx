"use client";

import Link from "next/link";
import { FaUsers, FaList, FaBlog } from "react-icons/fa";

export default function HomeCards() {
  const cards = [
    {
      title: "Users",
      icon: <FaUsers size={40} />,
      href: "/users",
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Category",
      icon: <FaList size={40} />,
      href: "/category",
      color: "from-green-500 to-green-700",
    },
    {
      title: "Blog",
      icon: <FaBlog size={40} />,
      href: "/blog",
      color: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <Link key={card.title} href={card.href} className="group">
            <div
              className={`
                bg-gradient-to-br ${card.color}
                text-white p-10 rounded-3xl shadow-xl border border-white/20
                flex flex-col items-center justify-center gap-4
                backdrop-blur-sm
                transition-all duration-500 
                hover:scale-110 hover:shadow-2xl hover:-translate-y-2
                relative overflow-hidden
              `}
            >
              {/* Ripple Effect */}
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

              {/* Icon */}
              <div className="group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                {card.icon}
              </div>

              {/* Title */}
              <h2 className="text-2xl font-semibold tracking-wide group-hover:translate-y-1 transition-all duration-300">
                {card.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
