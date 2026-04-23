import { biographyData } from "@/app/data/biography";
import BackButton from "@/components/BackButton";
import Link from "next/link";

// تعريف الواجهات لمنع خطأ any
interface Volume {
  title: string;
}

// تعريف نوع البيانات للكائن
type BiographyDataType = Record<string, Volume>;

export default function LiteralBiography() {
  // تحويل الكائن إلى مصفوفة من المفاتيح (أرقام الأجزاء 1، 2، 3...)
  const data = biographyData as BiographyDataType;
  const volumeKeys = Object.keys(data); // سيجلب كل المفاتيح من 1 إلى 10

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-right">
      <BackButton />
      <h1 className="text-3xl font-black text-[#310055] mb-8 border-r-4 border-[#4A107A] pr-4">
        السيرة من الكتاب
      </h1>

      {/* عرض الأجزاء العشرة في شبكة مرتبة */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {volumeKeys.map((key) => (
          <Link key={key} href={`/discover/literal/${key}`}>
            <div className="p-8 bg-white rounded-xl border border-purple-100 shadow-sm hover:shadow-md hover:border-purple-500 transition-all text-center cursor-pointer group">
              <span className="text-xs text-purple-600 font-bold block mb-2 group-hover:scale-110 transition-transform">
                إضغط للتصفح
              </span>
              <h2 className="text-2xl font-bold text-[#310055]">
                {data[key].title}
              </h2>
              <p className="text-gray-400 mt-2 text-sm italic">الجزء {key}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}




