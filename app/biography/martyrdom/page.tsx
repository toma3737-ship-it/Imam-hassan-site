"use client";

import StoryPage from '@/components/StoryPage';
import BackButton from '@/components/BackButton';

export default function MartyrdomStage() {
  return (
    <main className="space-y-32 pb-20 bg-[#FDFBFF]" dir="rtl">
      
      {/* الملاحة العلوية */}
      <nav className="pt-10">
        <BackButton />
      </nav>

      {/* رأس الصفحة */}
      <header className="px-6 md:px-20 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-black text-[#310055] mb-6">
          المرحلة السابعة: الشهادة والإرث
        </h1>
        <p className="text-2xl text-[#5E2D91] font-light leading-relaxed border-r-4 border-[#A656E2] pr-6">
          الرحيل الغادر بـالسمّ، ومنع الجسد الطاهر من جوار جده ﷺ.. حين يكتمل نصر الأخلاق بالشهادة.
        </p>
      </header>

      {/* المحتوى التحقيقي: الجزء العاشر */}
      <section id="martyrdom-event">
        <StoryPage 
          title="المؤامرة: حين يغتالون الروح بالسّم"
          phaseName="الجزء العاشر: الشهادة"
          phasePath="/biography"
          source="سيرة الإمام الحسن (ع)، ج10، ص42"
          investigation="يوضح المحقق السيد جعفر مرتضى أن اغتيال الإمام بالسم لم يكن فعلاً فردياً من جعدة، بل كان قراراً سياسياً أموياً بامتياز لإخلاء الساحة من العقبة الكبرى أمام مشروع 'العهد ليزيد'."
          nextStoryPath="#legacy"
        >
          <p>
            تسلل الغدر إلى أواني الشرب في المدينة. كان السّم يمزق أحشاء الإمام الذي لطالما سقى الناس حكمةً وصيراً. وفي لحظاته الأخيرة، كان همّه الأول هو "حفظ دماء المسلمين" حتى وهو يوصي أخاه الحسين.
          </p>
        </StoryPage>
      </section>

      <section id="legacy">
        <StoryPage 
          title="الجنازة والإرث: السهام التي استهدفت الحقيقة"
          phaseName="الجزء العاشر: الشهادة"
          phasePath="/biography"
          source="سيرة الإمام الحسن (ع)، ج10، ص188"
          investigation="يحلل المحقق أحداث الجنازة والاعتداء عليها بالسهام، مبيناً أنها كانت محاولة أخيرة لطمس ذكرى الحسن، لكنها أدت لعكس ذلك؛ حيث ثبتت مظلوميته تاريخياً وجعلت منه رمزاً للمقاومة بالصبر."
        >
          <p>
            رحل الحسن (ع) جسداً، لكنه بقي "بصيرة". ترك للأمة مدرسةً في التخطيط، ودرساً في التضحية بالمكانة من أجل بقاء العقيدة. لولا "صبر الحسن" لما كان "قيام الحسين" ممكناً.
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