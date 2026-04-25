import { biographyData } from "@/app/data/biography";
import BackButton from "@/components/BackButton";

interface Section { heading: string; text: string; }
interface Chapter { id: string; title: string; sections: Section[]; }
interface Door { chapters: Chapter[]; }
interface VolumeData { doors: Door[]; }
type BiographyDataType = Record<string, VolumeData>;

// هذه الدالة سيعملها Next.js أثناء الـ build
export async function generateStaticParams() {
  const data = biographyData as BiographyDataType;
  const paths: { volume: string; chapter: string }[] = [];

  for (const volumeId in data) {
    const volumeData = data[volumeId];
    if (volumeData?.doors) {
      for (const door of volumeData.doors) {
        if (door.chapters) {
          for (const chapter of door.chapters) {
            paths.push({
              volume: volumeId,
              chapter: chapter.id,
            });
          }
        }
      }
    }
  }
  return paths;
}

export default async function ChapterPage({ params }: { params: Promise<{ volume: string; chapter: string }> }) {
  // تذكري: في Next.js 16 يجب التعامل مع params كـ Promise
  const { volume, chapter } = await params;
  
  const data = biographyData as BiographyDataType;
  const volData = data[volume];
  
  let foundChapter: Chapter | null = null;
  
  if (volData) {
    for (const door of volData.doors) {
      const ch = door.chapters.find((c: Chapter) => c.id === chapter);
      if (ch) {
        foundChapter = ch;
        break; 
      }
    }
  }

  if (!foundChapter) {
    return <div className="p-10 text-center">عذراً، هذا الفصل غير موجود.</div>;
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-right">
       <BackButton />
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


