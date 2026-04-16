"use client";

import StoryPage from '@/components/StoryPage';
import BackButton from '@/components/BackButton';

export default function PoliticalLifePage() {
  return (
    <main className="space-y-32 pb-20 bg-[#FDFBFF]" dir="rtl">
      
      {/* الملاحة العلوية */}
      <nav className="pt-10">
        <BackButton />
      </nav>

      {/* رأس الصفحة - التقديم للكتاب التحليلي */}
      <header className="px-6 md:px-20 max-w-5xl">
        <div className="inline-block bg-[#A656E2]/10 text-[#4A107A] px-4 py-1 rounded-full text-sm font-bold mb-4">
          القراءة التحليلية المركّزة
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-[#310055] mb-6">
          الحياة السياسية للإمام الحسن (ع)
        </h1>
        <p className="text-2xl text-[#5E2D91] font-light leading-relaxed border-r-4 border-[#4A107A] pr-6">
          استكشاف الاستراتيجيات العميقة التي أدار بها الإمام موازين القوى، وكيف أسس لانتصار الوعي على القوة العسكرية.
        </p>
      </header>

      {/* المحور الأول: مفهوم الإمامة والصلح */}
      <section id="political-concept">
        <StoryPage 
          title="بين السلطة والإمامة: قراءة في فكر العاملي"
          phaseName="كتاب الحياة السياسية"
          phasePath="/biography"
          source="الحياة السياسية للإمام الحسن، المقدمة - ص45"
          investigation="يؤصل السيد جعفر مرتضى العاملي في هذا الكتاب لمفهوم 'الإمامة السياسية'؛ موضحاً أن الإمام يظل قائداً للأمة وسلطة شرعية حتى لو جُرّد من منصبه التنفيذي، وأن الصلح كان ممارسة لهذه السلطة بأسلوب مغاير."
          nextStoryPath="#hussain-connection"
        >
          <p>
            لم تكن السياسة عند الحسن (ع) صراعاً على كرسي، بل كانت مسؤولية لحفظ "جوهر الدين". الكتاب يحلل كيف استطاع الإمام أن يحول التنازل عن الحكم إلى وسيلةٍ لتعرية النظام الأموي وتحجيم نفوذه العقائدي.
          </p>
          <p>
            من خلال تحليل المجتمع الكوفي والمدني، يكشف لنا الكتاب أن قرار الصلح كان ضرورة استراتيجية فرضها واقع المجتمع، ولم تكن خياراً شخصياً عابراً.
          </p>
        </StoryPage>
      </section>

      {/* المحور الثاني: الارتباط بكربلاء */}
      <section id="hussain-connection">
        <StoryPage 
          title="التمهيد الكبير: لولا الحسن لما كان الحسين"
          phaseName="كتاب الحياة السياسية"
          phasePath="/biography"
          source="الحياة السياسية للإمام الحسن، ص210 - النهاية"
          investigation="يختم المحقق كتابه بنتيجة حاسمة: أن العلاقة بين صلح الحسن وثورة الحسين هي علاقة 'السبب بالنتيجة'. فالصلح هو الذي كشف زيف معاوية، مما جعل ثورة الحسين ضد يزيد تجد صدىً في وجدان الأمة التي استيقظت بفضل صبر الحسن."
        >
          <p>
            إن النتائج التاريخية بعيدة المدى للصلح أثبتت أن الإمام الحسن (ع) لم يهزم، بل حقق انتصاراً أخلاقياً وسياسياً تجلى لاحقاً في صرخة الحسين (ع). لقد كان الصلح هو "المختبر" الذي كشف للأمة حقيقة الوعود الأموية الكاذبة.
          </p>
        </StoryPage>
      </section>

      {/* الملاحة السفلية */}
      <footer className="mt-20 border-t border-[#A656E2]/10 pt-10">
        <BackButton />
      </footer>

    </main>
  );
}