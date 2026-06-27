export default function WhyUs() {
  const features = [
    {
      title: "تقنيات طبية حديثة",
      description:
        "نستخدم أحدث الأجهزة الأمريكية والأوروبية في التشخيص والعلاج",
    },
    {
      title: "فريق طبي معتمد",
      description:
        "جميع أطبائنا حاصلون على شهادات دولية ومرخصون من الجهات الصحية",
    },
    {
      title: "أسعار شفافة بلا مفاجآت",
      description: "تقديرًا مجانيًا قبل البدء بأي علاج — لا رسوم خفية",
    },
    {
      title: "ضمان جودة العلاج",
      description: "نضمن رضاك التام أو نعيد العلاج مجانًا خلال فترة الضمان",
    },
  ];

  return (
    <section id="why-us" className="bg-white py-20 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        {/* LEFT COLUMN - TEXT */}
        <div>
          <div className="text-[#C9A96E] text-sm font-bold uppercase tracking-widest">
            لماذا نحن
          </div>
          <h2 className="text-3xl font-bold text-[#0A4D68] mt-2 mb-8">
            لماذا تختار عيادتنا؟
          </h2>

          {/* FEATURES */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                {/* CHECKMARK CIRCLE SVG */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="shrink-0 mt-1"
                >
                  <circle cx="12" cy="12" r="11" fill="#C9A96E" />
                  <path
                    d="M8 12.5L11 15.5L16.5 8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* TEXT */}
                <div>
                  <h3 className="font-bold text-[#0A4D68]">{feature.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN - VISUAL CARD */}
        <div className="bg-[#EAF4F8] rounded-2xl h-80 flex flex-col items-center justify-center gap-4">
          {/* MOLAR TOOTH SVG */}
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60 10C60 10 40 20 40 40C40 55 45 65 60 70C75 65 80 55 80 40C80 20 60 10 60 10Z"
              fill="#0A4D68"
            />
            <path
              d="M50 70C45 75 45 85 50 90L60 100L70 90C75 85 75 75 70 70"
              fill="#0A4D68"
            />
            <circle cx="55" cy="55" r="6" fill="white" opacity="0.3" />
            <circle cx="65" cy="55" r="6" fill="white" opacity="0.3" />
          </svg>

          {/* TEXT */}
          <h3 className="text-xl font-bold text-[#0A4D68]">رعاية تستحقها</h3>
          <p className="text-[#C9A96E] font-bold text-lg">منذ 2009</p>
        </div>
      </div>
    </section>
  );
}
