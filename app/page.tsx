import Link from 'next/link';
export default function Home() {
  return (
    // استخدام bg-background بدلاً من الكود الثابت
    <main className="min-h-screen bg-background font-sans pb-20 transition-colors duration-300" dir="rtl">
      
      {/* الهيدر: تم تغيير التدرج ليتناسب مع ألوانك */}
      <header className="relative h-[60vh] flex items-center justify-center text-center px-4 overflow-hidden bg-gradient-to-b from-background to-h6/10">
        <div className="relative z-10">
          {}
          <h1 className="text-5xl md:text-7xl mb-6 drop-shadow-sm ">
            كريمُ آلِ البيت
          </h1>
          <p className="text-2xl md:text-3xl font-light max-w-3xl mx-auto leading-relaxed ">
            حيث يلتقي الحلمُ النبوي، بالكرمِ العلوي، في سيرةِ سبطِ المصطفى 
            <span className="font-bold"> (صلى الله عليه وآله وسلم) </span>
          </p>
          <div className="mt-10 animate-bounce text-4xl ">↓</div>
        </div>
      </header>

      <div className="container mx-auto px-4 max-w-6xl -mt-20 relative z-20">
        
        {/* بطاقة الترحيب */}
        <section className="bg-white/10 backdrop-blur-md rounded-[40px] p-12 shadow-xl border border-h6/20 text-center mb-20">
          {/* استخدام text-h2 و border-h3 */}
          <h2 className="text-3xl  font-bold mb-8 italic text-right border-r-4 border-h3 pr-4">
            "كان يشبه رسول الله خَلقًا وخُلقًا..."
          </h2>
          {/* استخدام text-text-main */}
          <p className="text-2xl md:text-3xl leading-snug mb-10 text-right text-text-main">
            هل تساءلت يوماً كيف يمكن لإنسان أن يقاسم الله ماله ثلاث مرات؟ وكيف يواجه القسوة بابتسامة صلحٍ أعزت أمة كاملة؟ 
            <br /><br />
            هنا، لا نسرد تاريخًا جافًا... نحن نستحضر "نورًا" يضيء لنا عتمة الأيام، مستندين في كل حرف إلى أصدق ما سطره المحققون، لاسيما العلامة السيد جعفر مرتضى العاملي، لنقدم لك الحقيقة في أبهى صورها الأدبية.
          </p>
        
        {/* 2. هنا نضع الكبسة مغلفة بالرابط داخل المحتوى */}
        <Link href="/biography">
          <button className="bg-btn text-btn-text px-12 py-5 rounded-2xl text-2xl font-bold hover:shadow-2xl transition-all">
            اكتشفوا أسرار السيرة
          </button>
          </Link>
        </section>

        {/* شبكة الرحلة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* الكروت: تم استخدام ألوان العناوين H4 و H3 و H2 */}
          <div className="group bg-white/5 p-10 rounded-[35px] shadow-sm hover:shadow-xl transition-all border-b-8 border-h5 hover:border-h1">
            <h4 className="text-2xl font-bold mb-6 ">جمالُ الملامح</h4>
            <p className="text-xl leading-relaxed text-text-main">
              عن ذاك الوجه الذي كان إذا رآه الناس ذكروا رسول الله ﷺ وآله. رحلة في تفاصيل الحسن الباهر والسكينة النبوية.
            </p>
          </div>

          <div className="group bg-white/5 p-10 rounded-[35px] shadow-sm hover:shadow-xl transition-all border-b-8 border-h5 hover:border-h1">
            <h4 className="text-2xl font-bold mb-6 ">قلبٌ يتسع للجميع</h4>
            <p className="text-xl leading-relaxed text-text-main">
              قصص الكرم التي لم تكن مالاً فحسب، بل كانت جبراً للخواطر وسمواً في التعامل لم يشهد التاريخ له مثيلاً.
            </p>
          </div>

          <div className="group bg-white/5 p-10 rounded-[35px] shadow-sm hover:shadow-xl transition-all border-b-8 border-h4 hover:border-h1">
            <h4 className="text-2xl font-bold mb-6">حكمةُ السلام</h4>
            <p className="text-xl leading-relaxed text-text-main">
              لماذا اختار الإمام (ع) أن يضع السيف؟ اكتشفي القوة الخفية خلف قرار الصلح، وكيف حفظ بها بيضة الإسلام.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}