import fs from 'fs';
import path from 'path';

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = await params;

  // 1. قاموس الأسماء العربية للمكتبات
  const categoryNames: { [key: string]: string } = {
    pdfs: "مكتبة الكتب",
    audio: "مكتبة الصوتيات",
    images: "مكتبة الصور",
    videos: "مكتبة الفيديوهات"
  };

  // 2. قاموس نصوص الأزرار
  const actionTexts: { [key: string]: string } = {
    pdfs: "قراءة",
    audio: "استماع",
    images: "عرض",
    videos: "مشاهدة"
  };

  const folderPath = path.join(process.cwd(), 'public', 'library', category);

  let files: string[] = [];

  try {
    if (fs.existsSync(folderPath)) {
      files = fs.readdirSync(folderPath);
    }
  } catch (error) {
    console.error("خطأ:", error);
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-right">
      {/* عرض الاسم العربي للمكتبة */}
      <h1 className="text-3xl font-bold text-[#310055] mb-8">
        {categoryNames[category] || `مكتبة الـ ${category}`}
      </h1>

      <div className="grid gap-4">
        {files.length > 0 ? (
          files.map((fileName) => {
            // تحديد الزر المناسب، وإذا لم نجد نوعاً محدداً نضع "عرض" كخيار افتراضي
            const actionText = actionTexts[category] || "عرض";

            return (
              <div key={fileName} className="flex justify-between items-center bg-white p-4 rounded-lg border shadow-sm">
                <span className="font-medium text-gray-700">{fileName}</span>

                <div className="flex gap-2">
                  {/* زر الفتح (قراءة/استماع/مشاهدة/عرض) */}
                  <a 
                    href={`/library/${category}/${fileName}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 text-[#310055] px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors border border-[#310055]"
                  >
                    {actionText}
                  </a>

                  {/* زر التحميل */}
                  <a 
                    href={`/library/${category}/${fileName}`} 
                    download 
                    className="bg-[#4A107A] text-white px-4 py-2 rounded-lg hover:bg-[#310055] transition-colors"
                  >
                    تحميل
                  </a>
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







