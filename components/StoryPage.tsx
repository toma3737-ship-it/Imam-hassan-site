// components/StoryPage.tsx
import Link from 'next/link';
import { ReactNode } from 'react';

// تعريف "المعلومات" التي يحتاجها القالب (Props)
interface StoryProps {
  title: string;          // عنوان القصة أو الموقف
  phaseName: string;      // اسم القسم (مثلاً: الهوية والاصطفاء)
  phasePath: string;      // رابط العودة للفهرس
  children: ReactNode;    // هذا هو النص الأدبي الذي ستكتبينه
  source: string;         // المصدر (سيرة الإمام الحسن، ج...)
  investigation: string;  // الكلام التحقيقي للسيد جعفر
  nextStoryPath?: string; // رابط اختياري للقصة التالية
}

export default function StoryPage({ 
  title, 
  phaseName, 
  phasePath, 
  children, 
  source, 
  investigation, 
  nextStoryPath 
}: StoryProps) {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 px-4 md:px-0">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* العناوين العلوية */}
        <header className="mb-12 text-right">
          <Link href={phasePath} className="text-h3 text-sm font-bold hover:underline mb-2 block">
            {phaseName} ←
          </Link>
          <h2 className="text-4xl md:text-5xl text-h1 font-serif leading-tight">
            {title}
          </h2>
          <div className="h-1.5 w-24 bg-h3 mt-6 rounded-full opacity-40"></div>
        </header>

        {/* النص القصصي الأدبي */}
        <div className="space-y-8 text-xl md:text-2xl text-text-main leading-relaxed font-light text-right">
          {children}
        </div>

        {/* صندوق التحقيق العلمي (على طريقة السيد جعفر) */}
        <footer className="mt-16 bg-h6/5 rounded-[40px] p-8 md:p-12 border border-h6/10">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🔎</span>
            <h3 className="text-h1 font-bold text-xl">ميزان التحقيق</h3>
          </div>
          
          <div className="space-y-4 text-right">
            <p className="text-sm font-bold text-h6 underline decoration-h3/30 underline-offset-4">
              المصدر: {source}
            </p>
            <div className="text-lg leading-loose text-text-main italic">
              {investigation}
            </div>
          </div>

          {/* أزرار التنقل السريع */}
          {nextStoryPath && (
            <div className="mt-10 pt-8 border-t border-h6/10 flex justify-start">
              <Link 
                href={nextStoryPath} 
                className="bg-h1 text-white px-8 py-3 rounded-full hover:bg-h3 transition-all flex items-center gap-2"
              >
                تابعي القصة التالية 
              </Link>
            </div>
          )}
        </footer>
      </div>
    </section>
  );
}