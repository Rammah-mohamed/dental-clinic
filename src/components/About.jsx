export default function About() {
  return (
    <section id="about" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#C9A96E] text-sm font-bold uppercase tracking-widest">
            من نحن
          </p>
          <h2 className="text-3xl font-bold text-[#0A4D68] mt-2">
            قصة عيادة الابتسامة الذهبية
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">
              تأسست عيادة الابتسامة الذهبية في عام 2009 برؤية واضحة: تقديم رعاية
              أسنان عالمية المستوى في بيئة مريحة وآمنة. نحن فخورون بخدمة أكثر من
              8000 مريض سعيد على مر السنين، وبناء سمعة قوّية مبنية على الثقة
              والجودة.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              يضم فريقنا 12 طبيباً متخصصاً في مختلف فروع طب الأسنان، جميعهم حاصلون
              على شهادات دولية ومرخصون من الجهات الصحية السعودية. نستثمر باستمرار
              في أحدث التقنيات والأجهزة الطبية لضمان حصولك على أفضل العلاج الممكن.
            </p>
            <p className="text-gray-600 leading-relaxed">
              نؤمن بأن كل مريض يستحق علاجاً مخصصاً يلبي احتياجاته الفريدة. من
              الفحص الأولي وحتى المتابعة بعد العلاج، نكون معك في كل خطوة لضمان
              راحتك ورضاك التام.
            </p>
          </div>

          <div className="bg-[#EAF4F8] rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C9A96E] mb-2">15+</div>
                <div className="text-sm text-gray-600">سنة خبرة</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C9A96E] mb-2">8000+</div>
                <div className="text-sm text-gray-600">مريض سعيد</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C9A96E] mb-2">12</div>
                <div className="text-sm text-gray-600">طبيب متخصص</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C9A96E] mb-2">98%</div>
                <div className="text-sm text-gray-600">رضا المرضى</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
