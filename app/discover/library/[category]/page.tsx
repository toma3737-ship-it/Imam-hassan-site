"use client"; // نحتاج هذا لأننا سنستخدم useEffect
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase"; // تأكدي أن هذا المسار صحيح لمكان ملف supabase.ts

export default function CategoryPage({ params }: { params: { category: string } }) {
  // استخدام التعديل الأحدث لـ Next.js لجلب الـ params
  const [category, setCategory] = useState<string>("");
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 1. قاموس الأسماء (مذهل! احتفظي به)
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

  // جلب البيانات عند تغير الـ category
  useEffect(() => {
    async function getParamsAndFetch() {
      const p = await params;
      setCategory(p.category);
      
      const { data, error } = await supabase
        .from('library_items')
        .select('*')
        .eq('category', p.category);

      if (data) setItems(data);
      if (error) console.error("خطأ في جلب البيانات:", error);
      setLoading(false);
    }
    getParamsAndFetch();
  }, [params]);

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-right">
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
                  {/* هنا يمكننا إزالة زر "تحميل" أو تركه ليفتح الرابط أيضاً */}
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center text-gray-500 py-10 border-2 border-dashed">
            <p>لا توجد ملفات في هذا القسم حالياً.</p>
          </div>
        )}
      </div>
    </main>
  );
}








