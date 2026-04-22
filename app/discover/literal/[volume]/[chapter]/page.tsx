import { biographyData } from "@/app/data/biography";

// تعريف أنواع البيانات لتجنب أخطاء TypeScript
interface Section { heading: string; text: string; }
interface Chapter { id: string; title: string; sections: Section[]; }

export default async function ChapterPage({ params }: { params: { volume: string; chapter: string } }) {
  const { volume, chapter } = await params;
  
  // 1. جلب بيانات الجزء
  const volData = (biographyData as any)[volume];
  
  // 2. البحث عن الفصل المطلوب داخل الأبواب
  let foundChapter: Chapter | null = null;
  
  if (volData) {
    for (const door of volData.doors) {
      const ch = door.chapters.find((c: Chapter) => c.id === chapter);
      if (ch) {
        foundChapter = ch;
        break; // وجدنا الفصل، نخرج من الحلقة
      }
    }
  }

  // 3. إذا لم نجد الفصل
  if (!foundChapter) {
    return <div className="p-10 text-center">عذراً، هذا الفصل غير موجود.</div>;
  }

  // 4. عرض المحتوى
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-right">
      <h1 className="text-4xl font-black text-[#310055] mb-8 border-b-4 border-[#4A107A] pb-4">
        {foundChapter.title}
      </h1>
      
      <div className="prose prose-lg text-[#333]">
        {foundChapter.sections.map((sec, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold text-[#4A107A] mb-3">{sec.heading}</h2>
            <p className="leading-relaxed text-justify">{sec.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
