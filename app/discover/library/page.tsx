import Link from 'next/link';

export default function LibraryIndexPage() {
  const categories = [
    { name: "الكتب (PDF)", path: "pdfs" },
    { name: "الصوتيات واللطميات", path: "audio" },
    { name: "الصور والمخطوطات", path: "images" },
    { name: "الفيديوهات", path: "videos" }, // تم إضافة الفيديوهات هنا
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-right">
      <h1 className="text-4xl font-black text-[#310055] mb-8 border-b-2 border-[#4A107A] pb-4">
        مكتبة الحسن
      </h1>
      <p className="text-gray-600 mb-8">اختر قسماً للتصفح:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link key={cat.path} href={`/discover/library/${cat.path}`}>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#4A107A] transition-all text-center cursor-pointer">
              <h2 className="text-xl font-bold text-[#4A107A]">{cat.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

