"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import BackButton from "@/components/BackButton";

// تعريف هيكل البيانات (Interface)
interface LibraryItem {
  id: string;
  title: string;
  file_url: string;
  category: string;
}

// تحديث النوع لـ params ليتوافق مع Next.js الحديث
export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const [category, setCategory] = useState<string>("");
  const [items, setItems] = useState<LibraryItem[]>([]);
  const [loading, setLoading] = useState(true);

  const categoryNames: { [key: string]: string } = {
    pdfs: "مكتبة الكتب",
    audio: "مكتبة الصوتيات",
    images: "مكتبة الصور",
    videos: "مكتبة الفيديوهات"
  };

  const actionTexts: { [key: string]: string } = {
    pdfs: "قراءة",
    audio: "استماع",
    images: "عرض",
    videos: "مشاهدة"
  };

  useEffect(() => {
    async function getParamsAndFetch() {
      // انتظار الـ params لأنها Promise
      const p = await params;
      setCategory(p.category);
      
      const { data, error } = await supabase
        .from('library_items')
        .select('*')
        .eq('category', p.category);

      if (data) setItems(data as LibraryItem[]);
      if (error) console.error("خطأ في جلب البيانات:", error);
      setLoading(false);
    }
    getParamsAndFetch();
  }, [params]);

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-right">
       <BackButton />
      <h1 className="text-3xl font-bold text-[#310055] mb-8">
        {categoryNames[category] || `مكتبة الـ ${category}`}
      </h1>

      <div className="grid gap-4">
        {loading ? (
          <p className="text-center text-gray-500">جاري تحميل المحتويات...</p>
        ) : items.length > 0 ? (
          items.map((item) => {
            const actionText = actionTexts[category] || "عرض";

            return (
              <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-lg border shadow-sm">
                <span className="font-medium text-gray-700">{item.title}</span>

                <div className="flex gap-2">
                  <a 
                    href={item.file_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 text-[#310055] px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors border border-[#310055]"
                  >
                    {actionText}
                  </a>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center text-purple-500 py-10 border-2 border-dashed">
            <p>لا توجد ملفات في هذا القسم حالياً.</p>
          </div>
        )}
      </div>
    </main>
  );
}
