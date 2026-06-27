export default function Services() {
  const services = [
    {
      title: "تبييض الأسنان",
      description: "نتائج مضمونة في جلسة واحدة بتقنية الليزر الحديثة",
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="24"
            y1="2"
            x2="24"
            y2="46"
            stroke="#0A4D68"
            strokeWidth="2"
          />
          <line
            x1="2"
            y1="24"
            x2="46"
            y2="24"
            stroke="#0A4D68"
            strokeWidth="2"
          />
          <line
            x1="8"
            y1="8"
            x2="40"
            y2="40"
            stroke="#0A4D68"
            strokeWidth="2"
          />
          <line
            x1="40"
            y1="8"
            x2="8"
            y2="40"
            stroke="#0A4D68"
            strokeWidth="2"
          />
          <circle cx="24" cy="4" r="2.5" fill="#0A4D68" />
          <circle cx="24" cy="44" r="2.5" fill="#0A4D68" />
          <circle cx="4" cy="24" r="2.5" fill="#0A4D68" />
          <circle cx="44" cy="24" r="2.5" fill="#0A4D68" />
          <circle cx="10" cy="10" r="2.5" fill="#0A4D68" />
          <circle cx="38" cy="38" r="2.5" fill="#0A4D68" />
          <circle cx="38" cy="10" r="2.5" fill="#0A4D68" />
          <circle cx="10" cy="38" r="2.5" fill="#0A4D68" />
        </svg>
      ),
    },
    {
      title: "تقويم الأسنان",
      description: "تقويم شفاف وتقليدي للأطفال والبالغين بإشراف متخصص",
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 10 24 Q 24 12 38 24"
            stroke="#0A4D68"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <rect x="8" y="22" width="6" height="4" fill="#0A4D68" />
          <rect x="21" y="20" width="6" height="4" fill="#0A4D68" />
          <rect x="34" y="22" width="6" height="4" fill="#0A4D68" />
          <line
            x1="11"
            y1="26"
            x2="14"
            y2="30"
            stroke="#0A4D68"
            strokeWidth="1"
          />
          <line
            x1="24"
            y1="24"
            x2="24"
            y2="30"
            stroke="#0A4D68"
            strokeWidth="1"
          />
          <line
            x1="37"
            y1="26"
            x2="34"
            y2="30"
            stroke="#0A4D68"
            strokeWidth="1"
          />
        </svg>
      ),
    },
    {
      title: "زراعة الأسنان",
      description: "زراعة فورية بضمان 10 سنوات مع متابعة دورية مجانية",
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 18 10 Q 16 16 16 22 Q 16 28 24 32 Q 32 28 32 22 Q 32 16 30 10 Z"
            fill="none"
            stroke="#0A4D68"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="24"
            y1="32"
            x2="24"
            y2="42"
            stroke="#0A4D68"
            strokeWidth="2"
          />
          <line
            x1="22"
            y1="34"
            x2="26"
            y2="34"
            stroke="#0A4D68"
            strokeWidth="1.5"
          />
          <line
            x1="22"
            y1="38"
            x2="26"
            y2="38"
            stroke="#0A4D68"
            strokeWidth="1.5"
          />
          <circle cx="24" cy="42" r="2" fill="#0A4D68" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="bg-[#EAF4F8] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#C9A96E] text-sm font-bold uppercase tracking-widest">
            ما نقدمه
          </p>
          <h2 className="text-3xl font-bold text-[#0A4D68] mt-2">
            خدماتنا المتخصصة
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-[#0A4D68]/20"
              tabIndex={0}
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-lg font-bold text-[#0A4D68] mt-4">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
