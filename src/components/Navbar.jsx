"use client";

import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScroll, setHasScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setHasScroll(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: "الرئيسية", href: "#home" },
    { label: "خدماتنا", href: "#services" },
    { label: "لماذا نحن", href: "#why-us" },
    { label: "آراء المرضى", href: "#testimonials" },
    { label: "الأسئلة الشائعة", href: "#faq" },
    { label: "تواصل معنا", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
          hasScroll ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0A4D68"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V4c0-1.1-.9-2-2-2Z" />
              <path d="M12 14c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2v-4c0-1.1-.9-2-2-2Z" />
              <path d="M7 6c0-1.1-.9-2-2-2S3 4.9 3 6v8c0 1.1.9 2 2 2s2-.9 2-2V6Z" />
              <path d="M19 6c0-1.1-.9-2-2-2s-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V6Z" />
            </svg>
            <span className="font-bold text-lg" style={{ color: "#0A4D68" }}>
              عيادة الابتسامة الذهبية
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#0A4D68]/20 focus:ring-offset-2 rounded px-2 py-1 ${
                  activeSection === link.href.slice(1)
                    ? "text-[#0A4D68] font-bold"
                    : "text-gray-600 hover:text-[#0A4D68]"
                }`}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="px-5 py-2 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/50 focus:ring-offset-2"
              style={{ backgroundColor: "#C9A96E" }}
            >
              احجز موعدك الآن
            </a>
          </div>

          <button
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0A4D68]/20"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0A4D68"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0A4D68"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div
            ref={menuRef}
            className="md:hidden bg-white shadow-lg py-4 px-6 flex flex-col gap-4 border-t border-gray-100"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#0A4D68]/20 rounded px-3 py-2 ${
                  activeSection === link.href.slice(1)
                    ? "text-[#0A4D68] font-bold bg-[#0A4D68]/5"
                    : "text-gray-600 hover:text-[#0A4D68] hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="px-5 py-3 rounded-full text-sm font-bold text-white text-center transition-all hover:opacity-90 active:scale-95 w-full focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/50 focus:ring-offset-2"
              style={{ backgroundColor: "#C9A96E" }}
              onClick={() => setIsOpen(false)}
            >
              احجز موعدك الآن
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
