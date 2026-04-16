import Link from 'next/link';
import BackButton from '@/components/BackButton';

export default function AliSchoolStage() {
  const parts = [
    {
      id: "leader-preparation",
      title: "الجزء الرابع: إعداد القائد",
      desc: "دور الإمام الحسن في حكومة أمير المؤمنين، مشاركته في الحروب (الجمل، صفين، النهروان)، وبراعة القيادة العسكرية والخطابة.",
      path: "/biography/ali-school/leader-preparation"
    },
    {
      id: "leadership-prelude",
      title: "الجزء الخامس: التمهيد للإمامة",
      desc: "قراءة المجتمع الكوفي المتقلب، فهم التيارات السياسية، وبناء الموقع القيادي المستقل تمهيداً للمرحلة القادمة.",
      path: "/biography/ali-school/leadership-prelude"
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFBFF] text-right font-serif py-20 px-6 md:px-20" dir="rtl">
      <BackButton />
      {/* رأس الصفحة */}
      <header className="max-w-4xl mx-auto mb-20 border-r-8 border-[#310055] pr-6">
        <h1 className="text-5xl md:text-7xl font-black text-[#310055] leading-tight mb-6">
          المرحلة الثالثة: <br/> مدرسة أمير المؤمنين (ع)
        </h1>
        <p className="text-2xl text-[#5E2D91] leading-relaxed font-light">
          هنا نُحتت معالم الشخصية القيادية؛ من ميادين القتال في صفين إلى أروقة السياسة والإدارة في الكوفة.
        </p>
      </header>

      {/* روابط الأجزاء */}
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {parts.map((part) => (
          <Link key={part.id} href={part.path} className="group block">
            <div className="bg-white border-2 border-[#A656E2]/10 p-10 rounded-[2.5rem] shadow-sm transition-all hover:border-[#4A107A] hover:shadow-md">
              <h2 className="text-3xl font-bold text-[#310055] mb-4 group-hover:text-[#4A107A] transition-colors">
                {part.title}
              </h2>
              <p className="text-[#5E2D91] text-xl leading-relaxed mb-6">
                {part.desc}
              </p>
              <span className="text-[#6722A6] font-bold text-lg flex items-center gap-2">
                استكشف هذا الجزء ←
              </span>
            </div>
          </Link>
        ))}

        {/* زر العودة للفهرس العام */}
        <div className="mt-10">
          <Link href="/biography" className="text-[#A656E2] hover:text-[#310055] font-bold text-lg underline underline-offset-8">
            العودة إلى الفهرس الرئيسي
          </Link>
        </div>
      </div>
      
    </main>
  );
}