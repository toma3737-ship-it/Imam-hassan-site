import Link from 'next/link';
import BackButton from '@/components/BackButton';

export default function CaliphateMainPage() {
  const sections = [
    {
      id: "government-start",
      title: "الجزء السادس: بداية الحكم الحسني",
      desc: "البيعة العامة، تنظيم شؤون الدولة، والمراسلات التاريخية مع معاوية قبل المواجهة.",
      path: "/biography/caliphate/government-start"
    },
    {
      id: "internal-collapse",
      title: "الجزء السابع: انهيار الجبهة الداخلية",
      desc: "التحديات الكبرى؛ من شراء الذمم والحرب النفسية إلى محاولة اغتيال الإمام عليه السلام.",
      path: "/biography/caliphate/internal-collapse"
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFBFF] text-right py-20 px-6 md:px-20" dir="rtl">
      
      {/* الملاحة العلوية */}
      <nav className="mb-10">
        <BackButton />
      </nav>

      {/* رأس الصفحة */}
      <header className="max-w-4xl mx-auto mb-16 border-r-8 border-[#310055] pr-6">
        <h1 className="text-5xl md:text-7xl font-black text-[#310055] leading-tight mb-6">
          المرحلة الرابعة: <br/> الإمامة والخلافة
        </h1>
        <p className="text-2xl text-[#5E2D91] leading-relaxed font-light italic">
          "والله ما سلمت الأمر إليه إلا لأني لم أجد أنصاراً.." - فصولٌ من الحكم والخذلان.
        </p>
      </header>

      {/* بطاقات الأجزاء */}
      <div className="max-w-4xl mx-auto grid gap-8">
        {sections.map((section) => (
          <Link key={section.id} href={section.path} className="group">
            <div className="bg-white border-2 border-[#A656E2]/10 p-8 rounded-[2rem] shadow-sm transition-all hover:border-[#4A107A] hover:-translate-y-1">
              <h2 className="text-3xl font-bold text-[#310055] mb-4 group-hover:text-[#4A107A]">
                {section.title}
              </h2>
              <p className="text-[#5E2D91] text-xl leading-relaxed">
                {section.desc}
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#A656E2] font-bold">
                <span>ابدأ القراءة</span>
                <span className="group-hover:translate-x-[-5px] transition-transform">←</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* الملاحة السفلية */}
      <footer className="mt-20 border-t border-[#A656E2]/10 pt-10">
        <BackButton />
      </footer>
      
    </main>
  );
}