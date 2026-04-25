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

export default function CategoryClient({ category }: { category: string }) {
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
    async function fetchData() {
      setLoading(true);
      const { data, error } = await supabase
        .from('library_items')
        .select('*')
        .eq('category', category);

      if (error) console.error(error.message);
      else if (data) setItems(data as LibraryItem[]);
      setLoading(false);
    }
    fetchData();
  }, [category]);

  return (
    <main className="max-w-4xl w-full mx-auto px-3 py-6 text-right">
      <div className="mb-6"><BackButton /></div>
      <h1 className="text-3xl font-bold text-[#310055] mb-8">
        {categoryNames[category] || `مكتبة الـ ${category}`}
      </h1>
      {/* ... باقي كود العرض كما هو بالضبط ... */}
      <div className="flex flex-col gap-4 ">
        {loading ? <p className="text-center text-purple-500">جارٍ تحميل...</p> : 
         items.length > 0 ? items.map((item) => (
           <div key={item.id} className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg border gap-4">
             <span className="font-medium text-purple-700">{item.title}</span>
             <div className="flex gap-2">
               <a href={item.file_url} className="bg-purple-700 text-white px-4 py-2 rounded-lg">تحميل</a>
               <a href={item.file_url} className="border border-[#310055] px-4 py-2 rounded-lg">{actionTexts[category] || "عرض"}</a>
             </div>
           </div>
         )) : <p className="text-center">لا توجد ملفات.</p>}
      </div>
    </main>
  );
}
