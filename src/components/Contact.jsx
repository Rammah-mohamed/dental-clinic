export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.الاسم.value.trim();
    const phone = form.الجوال.value.trim();
    const service = form.الخدمة.value;
    const message = form.رسالة.value.trim();

    if (!name || !phone || service === "اختر الخدمة" || !message) {
      alert("يرجى ملء جميع الحقول المطلوبة");
      return;
    }

    const phoneRegex = /^(\+966|0)?5\d{8}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
      alert("يرجى إدخال رقم جوال صحيح (يجب أن يبدأ بـ 5 ويحتوي على 9 أرقام)");
      return;
    }

    const subject = encodeURIComponent(`استفسار جديد: ${service}`);
    const body = encodeURIComponent(
      `الاسم: ${name}\nرقم الجوال: ${phone}\nالخدمة: ${service}\n\nالرسالة:\n${message}`,
    );
    window.location.href = `mailto:info@ibtisama-dental.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-white py-20 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="flex flex-col justify-start order-last lg:order-last">
          <h2 className="text-2xl font-bold text-[#0A4D68] mb-2">تواصل معنا</h2>
          <p className="text-gray-500 mb-8">
            نحن هنا للإجابة على استفساراتك وحجز موعدك
          </p>

          <div className="flex items-center gap-4 mb-5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0A4D68"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <p className="text-gray-600">
              شارع الملك فهد، حي الروضة، الرياض 12345
            </p>
          </div>

          <div className="flex items-center gap-4 mb-5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0A4D68"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <a
              href="tel:+966112345678"
              className="text-gray-600 hover:text-[#0A4D68] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0A4D68]/20 rounded"
              dir="ltr"
            >
              +966 11 234 5678
            </a>
          </div>

          <div className="flex items-center gap-4 mb-5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a6.963 6.963 0 00-6.961 6.961v.003c0 1.908.528 3.78 1.529 5.425l-1.627 5.947 6.084-1.597a6.963 6.963 0 005.431-6.771v-.003c0-3.851 3.11-6.97 6.961-6.97 1.87 0 3.63.73 4.947 2.042 1.317 1.313 2.043 3.07 2.043 4.948 0 3.851-3.109 6.97-6.96 6.97-1.87 0-3.63-.73-4.947-2.042-1.316-1.313-2.043-3.07-2.043-4.948 0-1.87.73-3.627 2.042-4.944 1.313-1.316 3.07-2.043 4.948-2.043" />
            </svg>
            <a
              href="https://wa.me/966112345678?text=مرحباً،%20أريد%20حجز%20موعد%20في%20العيادة"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-[#25D366]/20 rounded"
            >
              واتساب
            </a>
          </div>

          <div className="flex items-center gap-4 mb-5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0A4D68"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <p className="text-gray-600">السبت – الخميس: 9 صباحًا – 9 مساءً</p>
          </div>

          <div className="mt-6">
            <a
              href="https://www.google.com/maps/search/?api=1&query=شارع+الملك+فهد،+حي+الروضة،+الرياض"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop"
                alt="خريطة موقع العيادة"
                className="w-full h-48 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow"
              />
            </a>
            <p className="text-xs text-gray-400 mt-2 text-center">
              انقر لفتح الموقع في خرائط جوجل
            </p>
          </div>
        </div>

        <div className="order-first lg:order-first">
          <form
            onSubmit={handleSubmit}
            className="bg-[#F8FAFB] rounded-xl p-6 shadow-sm"
          >
            <label className="block text-sm font-bold text-[#0A4D68] mb-1">
              الاسم الكامل
            </label>
            <input
              type="text"
              name="الاسم"
              placeholder="أدخل اسمك"
              required
              className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-200 bg-white text-right outline-none focus:border-[#0A4D68] focus:ring-2 focus:ring-[#0A4D68]/10 transition-all"
            />

            <label className="block text-sm font-bold text-[#0A4D68] mb-1">
              رقم الجوال
            </label>
            <input
              type="tel"
              name="الجوال"
              placeholder="5XXXXXXXX"
              required
              className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-200 bg-white text-right outline-none focus:border-[#0A4D68] focus:ring-2 focus:ring-[#0A4D68]/10 transition-all"
              dir="ltr"
            />

            <label className="block text-sm font-bold text-[#0A4D68] mb-1">
              الخدمة المطلوبة
            </label>
            <select
              name="الخدمة"
              required
              className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-200 bg-white text-right outline-none focus:border-[#0A4D68] focus:ring-2 focus:ring-[#0A4D68]/10 transition-all"
            >
              <option value="">اختر الخدمة</option>
              <option>تبييض الأسنان</option>
              <option>تقويم الأسنان</option>
              <option>زراعة الأسنان</option>
              <option>علاج اللثة</option>
              <option>استشارة عامة</option>
            </select>

            <label className="block text-sm font-bold text-[#0A4D68] mb-1">
              رسالتك
            </label>
            <textarea
              name="رسالة"
              rows="4"
              placeholder="اكتب رسالتك أو استفسارك..."
              required
              className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-200 bg-white text-right outline-none focus:border-[#0A4D68] focus:ring-2 focus:ring-[#0A4D68]/10 transition-all resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#C9A96E] text-white py-3 rounded-full font-bold hover:opacity-90 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/50 focus:ring-offset-2"
            >
              إرسال الرسالة
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
