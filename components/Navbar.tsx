import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "الرئيسية", path: "/" },
    { name: "المقدمة", path: "/introduction" },
    { name: "الولادة والنشأة", path: "/birth" },
    { name: "الزواج المبارك", path: "/marriage" },
    { name: "المحنة الكبرى", path: "/ordeal" },
    { name: "الوصية والرحيل", path: "/departure" },
    { name: "المصادر", path: "/references" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-fatima-gold/20 shadow-sm font-kufi">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Title */}
          <Link
            to="/"
            className="text-2xl font-amiri font-bold text-fatima-teal flex items-center gap-2"
          >
            <span className="w-8 h-8 rounded-full bg-fatima-teal text-fatima-cream flex items-center justify-center pt-1">
              ف
            </span>
            <span className="hidden sm:inline">فاطمة الزهراء (ع)</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm lg:text-base ${
                  isActive(item.path)
                    ? "bg-fatima-teal text-white font-bold shadow-md"
                    : "text-fatima-dark/70 hover:text-fatima-teal hover:bg-fatima-teal/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-fatima-teal/10 text-fatima-teal transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-fatima-gold/20 shadow-xl p-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`px-4 py-3 rounded-xl transition-all duration-300 text-center ${
                isActive(item.path)
                  ? "bg-fatima-teal text-white font-bold shadow-md"
                  : "text-fatima-dark/70 hover:text-fatima-teal hover:bg-fatima-teal/10"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
