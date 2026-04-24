"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import BackButton from "@/components/BackButton";

interface LibraryItem {
  id: string;
  title: string;
  file_url: string;
  category: string;
}

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const [category, setCategory] = useState<string>("");
  const [items, setItems] = useState<LibraryItem[]>([]);
  const [loading, setLoading] = useState(true);

  const categoryNames: { [key: string]: string } = {
    pdfs: "مكتبة الكتب",
    audios: "مكتبة الصوتيات",
    images: "مكتبة الصور",
    videos: "مكتبة الفيديوهات"
  };

  const actionTexts: { [key: string]: string } = {
    pdfs: "قراءة",
    audios: "استماع",
    images: "عرض",
    videos: "مشاهدة"
  };

  useEffect(() => {
    async function getParamsAndFetch() {
      const p = await params;
      setCategory(p.category);
      
      const { data, error } = await supabase
        .from('library_items')
        .select('*')
        .eq('category', p.category);

      if (error) {
        console.error("خطأ في جلب البيانات:", error.message);
      } else if (data) {
        setItems(data as LibraryItem[]);
      }
      setLoading(false);
    }
    getParamsAndFetch();
  }, [params]);

  return (
    <main className="max-w-4xl w-full mx-auto px-3 py-6 text-right">
      <div className="mb-6">
       <BackButton />
       </div>
      <h1 className="text-3xl font-bold text-[#310055] mb-8">
        {categoryNames[category] || `مكتبة الـ ${category}`}
      </h1>

      <div className="flex flex-col gap-4 ">
        {loading ? (
          <p className="text-center text-purple-500">جارٍ تحميل المحتويات...</p>
        ) : items.length > 0 ? (
          // استبدلي هذا الجزء داخل الـ map
items.map((item) => (
  <div 
    key={item.id} 
    className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-4 rounded-lg border shadow-sm gap-4"
  >
    {/* اسم الملف - أضفنا break-words ليتناسب مع عرض الهاتف */}
    <span className="font-medium text-purple-700 w-full wrap-break-words">
      {item.title}
    </span>
    
    {/* الأزرار - أضفنا w-full لكي تأخذ عرض الشاشة بالكامل على الهاتف */}
    <div className="flex gap-2 w-full md:w-auto justify-end">
      <a 
        href={item.file_url} 
        download 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors text-sm flex-1 md:flex-none text-center"
      >
        تحميل
      </a>

      <a 
        href={item.file_url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-white-100 text-[#310055] px-4 py-2 rounded-lg hover:bg-white-200 transition-colors border border-[#310055] text-sm flex-1 md:flex-none text-center"
      >
        {actionTexts[category] || "عرض"}
      </a>
    </div>
  </div>
))

        ) : (
          <div className="text-center text-purple-500 py-10 border-2 border-dashed">
            <p>لا توجد ملفات في قسم {categoryNames[category] || category} حالياً.</p>
          </div>
        )}
      </div>
    </main>
  );
}


