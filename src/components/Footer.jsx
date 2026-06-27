export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A4D68] text-white">
      <div className="py-12 px-4">
        <div className="flex items-center justify-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 2C16 2 12 8 12 14C12 18.4183 13.7909 22.3284 16 25.2924C18.2091 22.3284 20 18.4183 20 14C20 8 16 2 16 2Z" />
            <circle cx="16" cy="14" r="3" fill="#0A4D68" />
          </svg>
          <h1 className="text-lg font-bold text-white">
            عيادة الابتسامة الذهبية
          </h1>
        </div>
        <p className="text-sm text-white/60 mt-2 text-center">
          صحة أسنانك — مسؤوليتنا
        </p>
      </div>

      <div className="border-t border-white/20 mx-4"></div>

      <div className="py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center md:text-right">
            <h3 className="text-[#C9A96E] font-bold mb-3">خدماتنا</h3>
            <div className="space-y-2">
              <a
                href="#services"
                className="block text-white/70 hover:text-white text-sm leading-loose transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 rounded"
              >
                تبييض الأسنان
              </a>
              <a
                href="#services"
                className="block text-white/70 hover:text-white text-sm leading-loose transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 rounded"
              >
                تقويم الأسنان
              </a>
              <a
                href="#services"
                className="block text-white/70 hover:text-white text-sm leading-loose transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 rounded"
              >
                زراعة الأسنان
              </a>
              <a
                href="#services"
                className="block text-white/70 hover:text-white text-sm leading-loose transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 rounded"
              >
                علاج اللثة
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-[#C9A96E] font-bold mb-3">روابط سريعة</h3>
            <div className="space-y-2">
              <a
                href="#home"
                className="block text-white/70 hover:text-white text-sm leading-loose transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 rounded"
              >
                الرئيسية
              </a>
              <a
                href="#services"
                className="block text-white/70 hover:text-white text-sm leading-loose transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 rounded"
              >
                خدماتنا
              </a>
              <a
                href="#why-us"
                className="block text-white/70 hover:text-white text-sm leading-loose transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 rounded"
              >
                لماذا نحن
              </a>
              <a
                href="#faq"
                className="block text-white/70 hover:text-white text-sm leading-loose transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 rounded"
              >
                الأسئلة الشائعة
              </a>
              <a
                href="#contact"
                className="block text-white/70 hover:text-white text-sm leading-loose transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 rounded"
              >
                تواصل معنا
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-[#C9A96E] font-bold mb-3">تابعنا</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 rounded p-1"
                aria-label="فيسبوك"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="28"
                    height="28"
                    rx="4"
                    fill="currentColor"
                    opacity="0.2"
                  />
                  <path
                    d="M14 7C10.134 7 7 10.134 7 14C7 17.866 10.134 21 14 21C17.866 21 21 17.866 21 14C21 10.134 17.866 7 14 7ZM14.5 14.5H13V18H11.5V14.5H10V13.2H11.5V12.2C11.5 11 12 10.5 13.2 10.5H14.5V11.8H13.8C13.3 11.8 13.1 12 13.1 12.5V13.2H14.5L14.5 14.5Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 rounded p-1"
                aria-label="انستغرام"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="26"
                    height="26"
                    rx="6"
                    fill="none"
                    stroke="currentColor"
                    opacity="0.2"
                    strokeWidth="2"
                  />
                  <circle cx="14" cy="14" r="4" fill="white" />
                  <circle cx="20" cy="8" r="1.5" fill="white" />
                  <path
                    d="M7 14C7 10.134 10.134 7 14 7C17.866 7 21 10.134 21 14C21 17.866 17.866 21 14 21C10.134 21 7 17.866 7 14Z"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </a>

              <a
                href="https://wa.me/966112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#25D366] transition-colors focus:outline-none focus:ring-2 focus:ring-[#25D366]/30 rounded p-1"
                aria-label="واتساب"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="14"
                    cy="14"
                    r="12"
                    fill="currentColor"
                    opacity="0.2"
                  />
                  <path
                    d="M14 2C7.373 2 2 7.373 2 14C2 16.5 2.75 18.812 4.05 20.746L2.5 27.5L9.5 25.938C11.5 27 13.687 27.5 14 27.5C20.627 27.5 26 22.127 26 15.5C26 8.873 20.627 2 14 2ZM14 25C12.75 25 10.625 24.625 8.812 23.5L8.375 23.25L4.125 24.375L5.25 20.25L5 19.812C3.875 17.875 3.5 15.875 3.5 14C3.5 8.438 8.063 3.875 13.625 3.875C19.187 3.875 23.75 8.438 23.75 14C23.75 19.562 19.187 24.5 14 25ZM19.5 16.75C19.25 16.625 17.875 15.875 17.625 15.75C17.375 15.625 17.25 15.625 17 15.875C16.75 16.125 16.125 16.875 15.875 17.125C15.625 17.375 15.375 17.375 15.125 17.25C14.875 17.125 14 16.75 13 15.75C12.25 15 11.75 14 12 13.75C12.125 13.5 12.25 13.375 12.5 13.155C12.75 12.875 12.875 12.75 13 12.5C13.125 12.25 13.125 12.125 13 12C12.875 11.875 12.375 10.5 12.125 9.875C11.875 9.25 11.625 9.375 11.5 9.375C11.375 9.375 11.25 9.375 11.125 9.375C11 9.375 10.75 9.5 10.625 9.75C10.5 10 9.875 11.375 9.875 12.75C9.875 14.125 10.5 15.375 10.625 15.625C10.75 15.875 12.375 18.25 14.75 19.375C17.125 20.5 17.875 20.375 18.375 20.375C18.875 20.375 19.875 19.875 20.125 19.25C20.375 18.625 20.375 18.125 20.25 18C20.125 17.875 19.75 16.875 19.5 16.75Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mx-4"></div>

      <div className="py-6 px-4 text-center text-white/50 text-sm">
        © {currentYear} عيادة الابتسامة الذهبية — جميع الحقوق محفوظة
      </div>
    </footer>
  );
}
