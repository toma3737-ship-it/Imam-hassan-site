import StoryPage from '@/components/StoryPage';

export default function IdentitySection() {
  return (
    <main className="space-y-20 pb-20"> {/* مسافة كبيرة بين القصص */}
      
      {/* القصة الأولى: الولادة والتسمية */}
      <section>
        <StoryPage 
          title="كانت المدينة تلك الليلة مختلفة…"
          phaseName="القسم الأول: الهوية والاصطفاء"
          phasePath="/biography/divine-foundation"
          source="سيرة الإمام الحسن، ج1، ص91"
          investigation="هنا نضع تحقيق السيد جعفر حول اختيار اسم الحسن..."
          nextStoryPath="#quranic-texts" // رابط ينزل للقصة التالية في نفس الصفحة
        >
          <p>رمضان يلفّ الأزقّة بسكونٍ مهيب...</p>
          {/* ضعي هنا بقية نص قصة الولادة */}
        </StoryPage>
      </section>

      {/* فاصل جمالي بين القصص */}
      <div className="h-px w-1/2 mx-auto bg-h3/20"></div>

      {/* القصة الثانية: النصوص القرآنية (تبدأ من هنا) */}
      <section id="quranic-texts">
        <StoryPage 
          title="نور السبط في محكم التنزيل"
          phaseName="القسم الأول: الهوية والاصطفاء"
          phasePath="/biography/divine-foundation"
          source="سيرة الإمام الحسن، ج1، ص10"
          investigation="تحليل السيد جعفر لآية التطهير والمباهلة..."
        >
          <p>لم يكن ذكر الحسن (ع) في القرآن مجرد ذكر عابر، بل كان تجسيداً لآيات الطهر...</p>
          {/* هنا تكتبين النص الأدبي للنصوص القرآنية */}
        </StoryPage>
      </section>

    </main>
  );
}