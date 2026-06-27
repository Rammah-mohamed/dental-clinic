export default function TrustBar() {
  const stats = [
    { number: "15+", label: "سنة خبرة" },
    { number: "8000+", label: "مريض سعيد" },
    { number: "12", label: "طبيب متخصص" },
    { number: "98%", label: "رضا المرضى" },
  ];

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto px-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`text-center ${
              index < 3 ? "md:border-r md:border-gray-200" : ""
            }`}
          >
            <div className="text-4xl font-bold text-[#C9A96E]">
              {stat.number}
            </div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
