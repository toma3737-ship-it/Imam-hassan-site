import BackButton from "@/components/BackButton";

export default function LiteralBiography() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-right">
       <BackButton />
      <h1 className="text-3xl font-black text-[#310055] mb-6 border-r-4 border-[#4A107A] pr-4">السيرة من الكتاب</h1>
      <div className="bg-white p-6 rounded-xl border border-[#A656E2]/10 shadow-sm">
        <p className="text-[#5E2D91] text-lg leading-relaxed">
          هنا سيتم عرض النصوص الحرفية الموثقة من الكتاب الأصلي. 
          (يمكنك إضافة المحتوى هنا لاحقاً أو ربطه بقاعدة بيانات).
        </p>
      </div>
    </main>
  );
}
