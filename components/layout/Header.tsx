"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const navLinks = [
  { name: "サービス内容", href: "#services" },
  { name: "選ばれる理由", href: "#reason" },
  { name: "料金プラン", href: "#price" },
  { name: "お客様の声", href: "#reviews" },
  { name: "よくある質問", href: "#faq" },
  { name: "無料相談", href: "#cta-section" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white shadow-md transition-all duration-300">
      <div className="container mx-auto px-6 h-16 flex justify-between items-center">
        <a
          href="#"
          className="font-serif font-bold text-lg text-navy"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          中央相続事務所
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-50 text-navy transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-white shadow-lg"
          >
            <ul className="flex flex-col items-center py-4">
              {navLinks.map((link) => (
                <li key={link.name} className="w-full text-center">
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="block py-3 text-navy font-semibold hover:bg-light-gray w-full transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
