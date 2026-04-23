"use client";
import { useEffect, useState } from "react";
// استخدمي نفس المسار الذي تستخدمينه لـ supabase في مشروعك
import { supabase } from "../lib/supabase"; 

export default function LibraryList({ category }: { category: string }) {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      // هنا نقوم بسحب البيانات من الجدول الجديد library_items
      const { data, error } = await supabase
        .from('library_items')
        .select('*')
        .eq('category', category); // جلب البيانات بناءً على النوع (audio, pdf, etc)

      if (error) {
        console.error("خطأ في جلب البيانات:", error);
      } else if (data) {
        setItems(data);
      }
      setLoading(false);
    }
    fetchData();
  }, [category]);

  if (loading) return <p>جاري تحميل المحتوى...</p>;
  if (items.length === 0) return <p>لا توجد ملفات في هذا القسم حالياً.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {items.map((item) => (
        <div key={item.id} className="border border-purple-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg mb-2 text-purple-900">{item.title}</h3>
          <a 
            href={item.file_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
          >
            عرض الملف
          </a>
        </div>
      ))}
    </div>
  );
}

