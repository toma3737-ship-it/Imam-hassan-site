import Link from 'next/link';
import { biographyData } from "@/app/data/biography";

// 1. تعريف شكل البيانات ليفهمها TypeScript
interface Chapter { id: string; title: string; }
interface Door { doorTitle: string; chapters: Chapter[]; }
interface Volume { title: string; doors: Door[]; }

export default async function VolumePage({ params }: { params: { volume: string } }) {
  const { volume } = await params;
  
  // 2. استخدام "التأكيد" (as) لنخبر TypeScript أن هذا هو الشكل الصحيح للبيانات
  const data = biographyData as { [key: string]: Volume };
  const volData = data[volume];

  if (!volData) {
    return <div className="p-10 text-center text-red-500">هذا الجزء غير موجود!</div>;
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-12 text-right">
      <h1 className="text-4xl font-black text-[#310055] mb-8">{volData.title}</h1>
      
      {volData.doors.map((door: Door, dIndex: number) => (
        <div key={dIndex} className="mb-10">
          <h2 className="text-2xl font-bold text-[#4A107A] mb-4 border-r-4 border-[#4A107A] pr-3">
            {door.doorTitle}
          </h2>
          <div className="space-y-3">
            {door.chapters.map((chapter: Chapter) => (
              <Link key={chapter.id} href={`/discover/literal/${volume}/${chapter.id}`}>
                <div className="block bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:border-[#4A107A] hover:bg-[#F3E5F5] transition-all">
                  {chapter.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
} // هذا القوس الأخير كان مفقوداً عندكِ

