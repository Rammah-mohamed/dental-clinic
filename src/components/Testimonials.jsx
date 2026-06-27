export default function Testimonials() {
  const testimonials = [
    {
      stars: "★★★★★",
      quote:
        "تجربة رائعة من أول زيارة. الأطباء محترفون جداً والعيادة نظيفة ومريحة. سأنصح بها كل من يحتاج لطبيب أسنان موثوق.",
      name: "— أحمد المطيري",
      location: "الكويت",
    },
    {
      stars: "★★★★★",
      quote:
        "زرعت ضرسين في عيادة الابتسامة الذهبية وكانت التجربة أفضل مما توقعت. بدون ألم تقريباً والنتيجة ممتازة.",
      name: "— سارة العتيبي",
      location: "الرياض",
    },
    {
      stars: "★★★★★",
      quote:
        "بيّضت أسناني قبل زفافي بأسبوعين والنتيجة كانت مذهلة. شكراً لفريق العيادة على الاهتمام والمتابعة.",
      name: "— منى الزهراني",
      location: "جدة",
    },
  ];

  return (
    <section id="testimonials" className="bg-[#EAF4F8] py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#C9A96E] text-sm font-bold uppercase tracking-widest">
            آراء المرضى
          </p>
          <h2 className="text-3xl font-bold text-[#0A4D68] mt-2">
            ماذا يقول مرضانا
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-200"
            >
              <div className="text-[#C9A96E] text-xl mb-3">
                {testimonial.stars}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {testimonial.quote}
              </p>
              <p className="font-bold text-[#0A4D68] mt-4">
                {testimonial.name}
              </p>
              <p className="text-sm text-gray-400">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
