export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center px-4 overflow-hidden"
      style={{ backgroundColor: "#0A4D68" }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover absolute inset-0"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width="800"
          height="450"
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#0A4D68]/90 to-[#0E6B92]/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Tooth Icon */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 96 96"
          className="mx-auto mb-6"
        >
          <g fill="white">
            <rect x="24" y="16" width="48" height="36" rx="4" />
            <polygon points="24,52 36,40 24,40" />
            <polygon points="36,52 48,40 36,40" />
            <polygon points="48,52 60,40 48,40" />
            <polygon points="60,52 72,40 60,40" />
            <polygon points="72,52 84,40 72,40" />
            <path d="M 32 52 Q 28 68 26 80 Q 26 86 32 86 Q 38 86 38 80 Q 36 68 32 52" />
            <path d="M 48 52 Q 44 68 42 80 Q 42 86 48 86 Q 54 86 54 80 Q 52 68 48 52" />
            <path d="M 64 52 Q 60 68 58 80 Q 58 86 64 86 Q 70 86 70 80 Q 68 68 64 52" />
          </g>
        </svg>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
          ابتسامتك تستحق الأفضل
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90 mb-8">
          عيادة الابتسامة الذهبية — رعاية أسنانك بأحدث التقنيات وأيدي متخصصة في
          قلب المدينة
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Call Button */}
          <a
            href="tel:+966112345678"
            className="w-full sm:w-auto min-w-45 bg-[#C9A96E] text-white px-8 py-4 rounded-full font-bold hover:opacity-90 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/50 focus:ring-offset-2 focus:ring-offset-[#0A4D68] flex items-center justify-center gap-2"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span dir="ltr">+966 11 234 5678</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/966112345678?text=مرحباً،%20أريد%20الاستفسار%20عن%20خدماتكم"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-45 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:opacity-90 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 focus:ring-offset-2 focus:ring-offset-[#0A4D68] flex items-center justify-center gap-2"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a6.963 6.963 0 00-6.961 6.961v.003c0 1.908.528 3.78 1.529 5.425l-1.627 5.947 6.084-1.597a6.963 6.963 0 005.431-6.771v-.003c0-3.851 3.11-6.97 6.961-6.97 1.87 0 3.63.73 4.947 2.042 1.317 1.313 2.043 3.07 2.043 4.948 0 3.851-3.109 6.97-6.96 6.97-1.87 0-3.63-.73-4.947-2.042-1.316-1.313-2.043-3.07-2.043-4.948 0-1.87.73-3.627 2.042-4.944 1.313-1.316 3.07-2.043 4.948-2.043" />
            </svg>
            واتساب
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#services"
          className="text-white/60 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 rounded-full p-2"
          aria-label="انتقل للأسفل"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="animate-bounce"
            style={{ animationDuration: "2s" }}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </div>
    </section>
  );
}
