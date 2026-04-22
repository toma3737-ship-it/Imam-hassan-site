import BackButton from '@/components/BackButton';
import Link from 'next/link';

export default function DiscoverPage() {
  const sections = [
    { title: "السيرة كقصة", path: "/biography", description: "اكتشف رحلة الإمام بأسلوب سردي مشوق" },
    { title: "السيرة من الكتاب", path: "/discover/literal", description: "النص الحرفي الموثق من الكتاب الأصلي" },
    { title: "المكتبة", path: "/discover/library", description: "المصادر والمراجع والكتب المتعلقة" },
    { title: "اختبار المعلومات", path: "/discover/quiz", description: "اختبر فهمك للمسار الذي اخترته" },
  ];

  return (
    
    <main className="max-w-4xl mx-auto px-6 py-16 text-right">
      {/* العنوان الرئيسي */}
      <BackButton />
      <header className="mb-12">
        <h1 className="text-4xl font-black text-[#310055] mb-4">اكتشفوا السيرة</h1>
        <p className="text-[#5E2D91] text-lg">بوابة المعرفة: اختر المسار الذي تود البدء به</p>
      </header>

      {/* منطقة المربعات (Grid) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <Link key={section.path} href={section.path} className="group block">
            <div className="bg-white p-8 rounded-2xl border border-[#A656E2]/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-r-4 border-r-[#4A107A]">
              <h2 className="text-2xl font-bold text-[#310055] mb-3">{section.title}</h2>
              <p className="text-[#5E2D91]/70 leading-relaxed">{section.description}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
