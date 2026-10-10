import React from 'react';
import { BookOpen } from 'lucide-react';

export const KhulaisGuideSection: React.FC = () => {
  return (
    <article
      id="khulais-cleaning-guide"
      className="py-16 sm:py-24 bg-white dark:bg-[#03152a] border-t border-slate-200 dark:border-cyan-900/40 text-start font-tajawal transition-colors"
      aria-label="دليل خدمات النظافة المتكاملة بمحافظة خليص ومراكزها"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header Badge */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-bold mb-4">
            <BookOpen className="w-4 h-4 text-cyan-500" />
            <span>دليل النظافة المتخصص بمحافظة خليص</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            دليلك الشامل لاختيار أفضل شركة تنظيف بخليص للمنازل والفلل والاستراحات
          </h2>
        </div>

        {/* Introduction Block */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#061e38] border border-slate-200 dark:border-cyan-900/40 shadow-sm space-y-4">
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            تتميز محافظة خليص ومراكزها التابعة كغران، البرزة، والظبية ببيئة زراعية ووديان خضراء وطبيعة هادئة تضم العديد من الفلل الحديثة، الاستراحات العائلية، والمزارع الخاصة. هذه الطبيعة الفريدة تفرض تحديات بيئية مختلفة، مثل وفرة الأتربة والغبار الزراعي، نشاط الحشرات الموسمية كالأرضة (النمل الأبيض) والعقارب والزواحف، بالإضافة إلى اعتماد العقارات بشكل كبير على الخزانات الأرضية الكبيرة. إذا كنت تبحث عن <strong className="font-bold text-slate-900 dark:text-white">شركة تنظيف بخليص</strong> توفر حلولاً شاملة واحترافية، فهذا الدليل يضع بين يديك كل ما تحتاج معرفته لاختيار <strong className="font-bold text-slate-900 dark:text-white">أفضل شركة تنظيف بخليص</strong>.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            لماذا تتطلب المنازل والاستراحات بخليص تنظيفًا دوريًا متخصصًا؟
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            المساحات المفتوحة ووجود الاستراحات والأحواش الكبيرة في خليص يجعلها عرضة للغبار الريفي السريع، بينما تتطلب الخزانات تنظيفًا وتعقيمًا مستمرًا للحفاظ على سلامة المياه الصالحة للاستخدام. كما تستدعي البيئة الزراعية المحيطة وقاية متقدمة من الزواحف، القوارض، وحشرات الخشب، فضلاً عن أهمية مكافحة الطيور والحمام التي تعشش في الشبابيك والمظلات. لهذا السبب، تعتبر الاستعانة بـ <strong className="font-bold text-slate-900 dark:text-white">شركة تنظيف منازل بخليص</strong> خيارًا ضروريًا للحفاظ على صحة وراحة الأسرة والضيوف.
          </p>
        </div>

        {/* Section 3 */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            الخدمات الـ 11 المتكاملة المتوفرة بخليص ومراكزها
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            نقدم لأهالي خليص وغران والبرزة حزمة خدمات احترافية متكاملة تشمل:
          </p>
          <ul className="space-y-3 list-disc list-inside text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed pr-2">
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">تنظيف المنازل والبيوت بخليص:</strong> جلي السيراميك والرخام، مسح الأسقف والجدران، إزالة الأتربة، وتعقيم الحمامات والأبواب.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">تنظيف الفلل والاستراحات والشاليهات:</strong> تجهيز كامل للاستراحات والفلل والمجالس الخارجية والأحواش وجلسات الحدائق قبل عطلات نهاية الأسبوع والمناسبات.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">تنظيف وعزل الخزانات بخليص:</strong> غسيل الخزانات الأرضية الخرسانية والعلوية وتعقيمها بالكلور المصرح به وعزلها لمنع تسرب المياه والحفاظ على نقائها.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">غسيل وتنظيف المكيفات سبليت:</strong> تنظيف فلاتر ومراوح ودريسات المكيفات بأحدث مضخات ضغط المياه لتحسين التبريد وتوفير استهلاك الكهرباء.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">مكافحة الحشرات والنمل الأبيض (الأرضة):</strong> حقن ورش مخصص لمكافحة دفان الأرضة قبل وبعد البناء، ورش الصراصير والبعوض بمبيدات مرخصة آمنة تمامًا.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">مكافحة الزواحف والقوارض:</strong> حلول وقائية وعلاجية متخصصة لطرد الفئران، الجرذان، العقارب، والثعابين من محيط المنازل والاستراحات والمزارع.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">تركيب شبك وطارد الحمام بخليص:</strong> تركيب أشواك ستانلس استيل وشبك حماية مقاوم للشمس على النوافذ والأسطح والمظلات لمنع تجمعات الحمام.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">تنظيف الكنب والمجالس الأرضية بالبخار:</strong> أجهزة بخار ساخنة مخصصة للمجالس العربية والكنب والسجاد لإزالة البقع المستعصية والروائح وتعقيم الأقمشة.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">تنظيف السجاد والموكيت والمفارش:</strong> غسيل عميق وتجفيف فائق السرعة للسجاد والموكيت في مكانه داخل الفلل والاستراحات.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">تنظيف المطابخ وإزالة الزيوت:</strong> تنظيف شامل لمطابخ المنازل والاستراحات، إزالة دهون الأفران والشوايات وتعقيم أسطح إعداد الطعام.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">تنظيف المكاتب والمحلات التجارية بخليص:</strong> خدمات تنظيف دورية ومرتبة للمكاتب الإدارية، العيادات، والمعارض التجارية بالمحافظة.
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            متى تكون في حاجة ماسة لطلب خدمة التنظيف بخليص؟
          </h2>
          <ul className="space-y-2.5 list-disc list-inside text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed pr-2">
            <li>قبل إقامة العزائم العائلية والجمعات في الاستراحات والفلل بمحافظة خليص وغران.</li>
            <li>بعد انتهاء أعمال البناء أو التشطيب لبيوت ومخططات خليص الجديدة (الدف، المغاربة، الصاعدية).</li>
            <li>عند ملاحظة ترسبات طينية أو طحالب في خزانات المياه الخاصة بالعقار.</li>
            <li>مع بداية فصل الصيف للوقاية من الزواحف والقوارض والحشرات وغسيل المكيفات.</li>
            <li>لحماية واجهات المنازل من أسراب الحمام وتجنب تلف المكيفات وتراكم الفضلات.</li>
          </ul>
        </div>

        {/* Section 5 */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            تنظيف الفلل والاستراحات والمزارع بمحافظة خليص
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            تتميز خليص بكثرة الاستراحات والفلل ذات المساحات الرحبة والحدائق. يتطلب هذا النوع من العقارات فرق عمل مؤهلة تمتلك أجهزة جلي ضخمة، مكائن ضغط ماء لغسيل الأحواش، وأجهزة بخار متنقلة للمجالس الخارجية والخيام. نوفر في <strong className="font-bold text-slate-900 dark:text-white">مسك كلين</strong> حلولاً مخصصة تلبي كافة متطلبات النظافة العميقة والتعقيم لتبقى استراحتك دائمًا واجهة مشرفة لضيوفك.
          </p>
        </div>

        {/* Section 6 */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            كيف تختار أفضل شركة تنظيف بخليص؟
          </h2>
          <ol className="space-y-3 list-decimal list-inside text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed pr-2">
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">تغطية المراكز والقرى المجاورة:</strong> قدرة الشركة على الوصول الفوري لأحياء خليص (الدف، المغاربة، الصاعدية، الطلعة) وقرى غران، البرزة، وأم الجرم.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">أمان المواد والمبيدات:</strong> استخدام مبيدات عديمة الرائحة مرخصة من هيئة الغذاء والدواء لحماية الأطفال والأشجار والحيوانات.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">الشمولية والجاهزية:</strong> إنجاز أعمال تنظيف المنزل، تعقيم الخزان، صيانة المكيف، ومكافحة الآفات في موعد واحد منظم.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">الضمان الحقيقي:</strong> التزام واضح بتقديم ضمان رسمي 10 سنوات على أعمال عزل الخزانات.
            </li>
          </ol>
        </div>

        {/* Section 7 */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            نصائح للمحافظة على نظافة الاستراحات والبيوت في خليص
          </h2>
          <ul className="space-y-2.5 list-disc list-inside text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed pr-2">
            <li>إحكام أغطية الخزانات الأرضية العميقة لتفادي سقوط الحشرات أو الأتربة المنقولة بالرياح.</li>
            <li>رش وقائي حول أسوار الاستراحة والمزارع لمنع اقتراب الزواحف والعقارب.</li>
            <li>تغطية وحدات التكييف الخارجية بشبك حماية طارد للحمام لتفادي الأعشاش وتلف الأسلاك.</li>
            <li>تنظيف فلاتر المكيفات بانتظام بعد هبوب العواصف الترابية.</li>
          </ul>
        </div>

        {/* Section 8 - FAQ */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            أسئلة شائعة عن خدمات التنظيف بمحافظة خليص
          </h2>
          <div className="space-y-4 pt-1">
            <div className="rounded-2xl bg-slate-50 dark:bg-[#061e38] border border-slate-200 dark:border-cyan-900/40 p-5 space-y-2 shadow-sm">
              <p className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                هل تقدمون خدمات التنظيف في غران والبرزة والمراكز التابعة لخليص؟
              </p>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                نعم، نخدم كافة أحياء ومخططات خليص (الدف، المغاربة، الطلعة، العزيزية) بالإضافة إلى غران، البرزة، وادي خليص، ستارة، وأم الجرم.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 dark:bg-[#061e38] border border-slate-200 dark:border-cyan-900/40 p-5 space-y-2 shadow-sm">
              <p className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                هل تنظفون الاستراحات والمجالس الخارجية الكبيرة؟
              </p>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                نعم، لدينا معدات مخصصة للاستراحات والشاليهات تشمل جلي الأحواش، غسيل المجالس بالبخار، وتنظيف وتطهير المطابخ ودورات المياه.
              </p>
            </div>
          </div>
        </div>

        {/* Section 9 - Booking CTA */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-[#061e38] dark:to-[#021429] border border-cyan-200 dark:border-cyan-900/60 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            احجز الآن مع شركة تنظيف بخليص
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            إذا كنت بحاجة إلى خدمة تنظيف احترافية وموثوقة لمنزلك، فلتك، استراحتك، أو لمكافحة الآفات وعزل الخزانات بخليص، فإن فريق <strong className="font-bold text-slate-900 dark:text-white">مسك كلين</strong> مستعد لخدمتك على مدار الساعة. احجز موعدك الآن عبر الموقع أو اتصل بنا مباشرة على <a href="tel:0547161147" className="text-cyan-600 dark:text-cyan-400 font-semibold underline underline-offset-4 hover:text-cyan-500" dir="ltr">0547161147</a>.
          </p>
        </div>

      </div>
    </article>
  );
};
