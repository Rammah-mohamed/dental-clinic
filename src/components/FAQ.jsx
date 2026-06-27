export default function FAQ() {
  const faqs = [
    {
      question: "هل تحتاج إلى موعد مسبق للزيارة؟",
      answer: "نعم، نفضل حجز موعد مسبق لضمان حصولك على الوقت المناسب. يمكنك الحجز عبر الهاتف أو واتساب.",
    },
    {
      question: "هل تقبلون التأمين الصحي؟",
      answer: "نعم، نتعامل مع معظم شركات التأمين الصحي المعتمدة. يرجى التواصل معنا للتأكد من تغطية خطتك.",
    },
    {
      question: "كم تستغرق جلسة تبييض الأسنان؟",
      answer: "تستغرق جلسة تبييض الأسنان بالليزر حوالي ساعة واحدة، وستلاحظ النتائج فوراً بعد الجلسة.",
    },
    {
      question: "هل زراعة الأسنان مؤلمة؟",
      answer: "نستخدم التخدير الموضعي لتقليل الألم، ومعظم المرضى يصفون العملية بأنها أقل إزعاجاً من خلع الضرس.",
    },
    {
      question: "ما هي طرق الدفع المتاحة؟",
      answer: "نقبل الدفع النقدي، البطاقات الائتمانية، ونقدم خطط تقسيط مريحة للعلاجات باهظة التكلفة.",
    },
    {
      question: "هل تقدمون خدمات الطوارئ؟",
      answer: "نعم، نقدم خدمات الطوارئ لآلام الأسنان الحادة خلال ساعات العمل. للحالات الطارئة خارج ساعات العمل، يرجى الاتصال بنا.",
    },
  ];

  return (
    <section id="faq" className="bg-[#EAF4F8] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#C9A96E] text-sm font-bold uppercase tracking-widest">
            الأسئلة الشائعة
          </p>
          <h2 className="text-3xl font-bold text-[#0A4D68] mt-2">
            إجابات على استفساراتك
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <h3 className="font-bold text-[#0A4D68] mb-2">{faq.question}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
