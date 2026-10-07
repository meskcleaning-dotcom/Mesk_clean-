import React from 'react';
import { BookOpen } from 'lucide-react';

export const JeddahGuideSection: React.FC = () => {
  return (
    <article
      id="jeddah-cleaning-guide"
      className="py-16 sm:py-24 bg-white dark:bg-[#03152a] border-t border-slate-200 dark:border-cyan-900/40 text-start font-tajawal transition-colors"
      aria-label="دليل خدمات التنظيف بجدة"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header Badge */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-bold mb-4">
            <BookOpen className="w-4 h-4 text-cyan-500" />
            <span>دليل النظافة المتخصص بجدة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            دليلك لاختيار أفضل شركة تنظيف بجدة للمنازل والشقق والبيوت
          </h2>
        </div>

        {/* Introduction Block */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#061e38] border border-slate-200 dark:border-cyan-900/40 shadow-sm space-y-4">
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            تشهد جدة طقسًا رطبًا وغبارًا متكررًا، وهذا يجعل المنازل تتسخ أسرع مما نتوقع، حتى مع الاهتمام اليومي بالنظافة. ومع ضيق الوقت وكثرة الالتزامات، يبحث كثيرون عن <strong className="font-bold text-slate-900 dark:text-white">شركة تنظيف بجدة</strong> تتولى المهمة بإتقان وتوفر عليهم الجهد. في هذا الدليل نشرح لك ما تقدمه شركات التنظيف المتخصصة، وكيف تختار <strong className="font-bold text-slate-900 dark:text-white">أفضل شركة تنظيف بجدة</strong> لمنزلك، وما الذي يجب أن تعرفه قبل الحجز. وسواء كنت تسكن شقة صغيرة أو بيتًا واسعًا، ستجد هنا ما يساعدك على اتخاذ قرار مناسب.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            لماذا تحتاج المنازل بجدة إلى تنظيف متخصص؟
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            الرطوبة العالية تساعد على نمو العفن في الزوايا والحمامات، والغبار يتسلل من النوافذ ويستقر على الأثاث والأرضيات والمكيفات. والتنظيف المنزلي العادي بالمكنسة والممسحة لا يزيل الدهون المتراكمة في المطبخ، ولا ترسبات الجير على الحنفيات والبلاط، ولا الأتربة المختبئة خلف الأثاث وداخل الخزائن. لذلك يلجأ كثيرون إلى <strong className="font-bold text-slate-900 dark:text-white">شركة تنظيف منازل بجدة</strong> تملك الأدوات والمواد والخبرة اللازمة للوصول إلى هذه التفاصيل، وتنجز العمل في وقت أقصر وبنتيجة أفضل.
          </p>
        </div>

        {/* Section 3 */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            خدمات شركة تنظيف منازل بجدة
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            تختلف الخدمات من شركة لأخرى، لكن الخدمة الشاملة تغطي عادة:
          </p>
          <ul className="space-y-2.5 list-disc list-inside text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed pr-2">
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">المطبخ:</strong> تنظيف الأسطح والأحواض والخزائن من الخارج والداخل، وإزالة الدهون من الموقد والشفاط.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">الحمامات:</strong> إزالة الترسبات والجير، وتلميع المحابس والمرايا، وتعقيم الأسطح.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">الأرضيات:</strong> كنس وتنظيف وغسيل حسب نوع الأرضية، مع الاهتمام بالفواصل والزوايا.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">النوافذ والزجاج:</strong> تنظيف الزجاج والإطارات والأبواب.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">الغرف والصالات:</strong> إزالة الغبار عن الأثاث والأرفف والإضاءة.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">الكنب والسجاد والموكيت:</strong> تنظيف بالبخار لإزالة البقع والروائح.
            </li>
          </ul>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal pt-1">
            وتستطيع اختيار ما يناسبك، سواء تنظيفًا شاملًا للمنزل أو خدمة محددة فقط.
          </p>
        </div>

        {/* Section 4 */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            متى تحتاج إلى خدمة تنظيف المنازل؟
          </h2>
          <ul className="space-y-2.5 list-disc list-inside text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed pr-2">
            <li>عند الانتقال إلى منزل أو شقة جديدة.</li>
            <li>بعد الانتهاء من الدهان أو الصيانة أو الديكور.</li>
            <li>قبل المناسبات ومواسم الضيافة والأعياد.</li>
            <li>بعد غياب طويل عن المنزل.</li>
            <li>كصيانة دورية كل ثلاثة إلى ستة أشهر.</li>
            <li>عند تسليم الشقة المؤجرة أو استلامها.</li>
          </ul>
        </div>

        {/* Section 5 */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            تنظيف شقق بجدة: ما الذي يتضمنه؟
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            الشقق مساحات أصغر، لكنها تحتاج عناية دقيقة لأن تفاصيلها متقاربة، ومعظم العمل يتركز في المطبخ والحمامات والنوافذ. وتتنوع حالات <strong className="font-bold text-slate-900 dark:text-white">تنظيف شقق بجدة</strong> بين شقة جديدة قبل السكن، وشقة بعد أعمال الدهان والصيانة، وشقة مؤجرة قبل التسليم أو بعد الاستلام، وشقة تحتاج صيانة دورية فقط. وفي كل حالة يتفق الفريق معك على نطاق العمل، حتى تحصل على نتيجة تناسب احتياجك دون أعمال لا تحتاجها.
          </p>
        </div>

        {/* Section 6 */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            شركة تنظيف بيوت بجدة: للفلل والبيوت الكبيرة
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            البيوت والفلل متعددة الأدوار تحتاج تنظيمًا مختلفًا، فالمساحة أكبر والملحقات أكثر، من مجالس وصالات وغرف نوم وسلالم ومداخل. وتعتمد <strong className="font-bold text-slate-900 dark:text-white">شركة تنظيف بيوت بجدة</strong> المتخصصة على فريق من أكثر من فرد، وتقسّم العمل بين الأدوار والغرف ليكتمل في وقت مناسب. وننصح بتحديد الأولويات مسبقًا، مثل المطبخ والحمامات والمجالس، لتعرف ما سيُنجز أولًا.
          </p>
        </div>

        {/* Section 7 */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            كيف تختار أفضل شركة تنظيف بجدة؟
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            لا توجد شركة تصلح للجميع، لكن هذه المعايير تساعدك على اختيار <strong className="font-bold text-slate-900 dark:text-white">أفضل شركة تنظيف بجدة</strong> لاحتياجك:
          </p>
          <ol className="space-y-3 list-decimal list-inside text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed pr-2">
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">السمعة والتقييمات:</strong> اقرأ تقييمات العملاء على خرائط جوجل، وانتبه إلى التعليقات المتكررة وليس إلى النجوم فقط.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">وضوح الخدمة:</strong> الشركة الجيدة تخبرك بما تشمله الخدمة قبل الحجز ولا تترك الأمور غامضة.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">المواد والأدوات:</strong> اسأل عن نوع المواد المستخدمة، وهل هي مناسبة لوجود الأطفال والحيوانات الأليفة.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">الالتزام بالمواعيد:</strong> الاتفاق على موعد محدد وتنفيذه من أبسط علامات الاحترافية.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">التواصل:</strong> سرعة الرد ووضوح الإجابات منذ أول اتصال يدلان على أسلوب العمل لاحقًا.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">الوضوح والمصداقية:</strong> التأكد من جودة المواد المعتمدة وخبرة الكوادر الفنية قبل بدء الخدمة.
            </li>
          </ol>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal pt-1">
            نحرص في مسك كلين على تلبية هذه المعايير، لنكون خيارًا مناسبًا لمن يبحث عن شركة تنظيف بجدة يثق بها.
          </p>
        </div>

        {/* Section 8 */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            ما الذي يحدد نطاق ومتطلبات خدمة التنظيف؟
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            تختلف خطة التنظيف المتبعة باختلاف احتياجات كل منزل، وتتأثر بعدة عوامل:
          </p>
          <ul className="space-y-2.5 list-disc list-inside text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed pr-2">
            <li>مساحة المنزل أو الشقة وعدد الغرف والحمامات.</li>
            <li>حالة المكان: هل هو نظيف نسبيًا أم يحتاج إزالة أوساخ متراكمة؟</li>
            <li>نوع الخدمة: تنظيف عادي أو عميق أو بعد الصيانة.</li>
            <li>الخدمات الإضافية كتنظيف الكنب والسجاد.</li>
          </ul>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal pt-1">
            لتنسيق تفاصيل الخدمة بدقة، أخبرنا بمساحة المكان وحالته وسنوضح لك كافة الترتيبات قبل البدء.
          </p>
        </div>

        {/* Section 9 */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            كيف تتم الخدمة معنا؟
          </h2>
          <ol className="space-y-3 list-decimal list-inside text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed pr-2">
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">الحجز:</strong> عبر الموقع أو بالاتصال، مع تحديد الحي والموعد المناسب.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">الاتفاق:</strong> نحدد معك نطاق العمل وتفاصيل الزيارة بالكامل قبل البدء.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">التنفيذ:</strong> يصل الفريق بأدواته ومواده ويعمل حسب الاتفاق.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">التسليم:</strong> تراجع النتيجة معنا قبل انتهاء الزيارة.
            </li>
          </ol>
        </div>

        {/* Section 10 */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            كيف تجهّز منزلك قبل وصول الفريق؟
          </h2>
          <ul className="space-y-2.5 list-disc list-inside text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed pr-2">
            <li>ارفع الأغراض الثمينة والمستندات من الأسطح.</li>
            <li>نبّه الفريق إلى الأسطح أو القطع الحساسة.</li>
            <li>وفّر الكهرباء والماء في أماكن العمل.</li>
            <li>أبعد الأطفال والحيوانات الأليفة عن مكان التنظيف حتى ينتهي ويجف.</li>
          </ul>
        </div>

        {/* Section 11 */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            نصائح للحفاظ على نظافة منزلك
          </h2>
          <ul className="space-y-2.5 list-disc list-inside text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed pr-2">
            <li>افتح النوافذ لتجديد الهواء في غير أوقات الغبار.</li>
            <li>امسح الأسطح بقطعة رطبة بدل الجافة حتى لا ينتشر الغبار.</li>
            <li>نظّف بقع الطعام والمشروبات فور حدوثها.</li>
            <li>أزل الدهون من المطبخ أسبوعيًا حتى لا تتراكم.</li>
            <li>نظّف فلاتر المكيف دوريًا للحفاظ على جودة الهواء.</li>
          </ul>
        </div>

        {/* Section 12 */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            أسئلة شائعة عن خدمات التنظيف بجدة
          </h2>
          <div className="space-y-4 pt-1">
            <div className="rounded-2xl bg-slate-50 dark:bg-[#061e38] border border-slate-200 dark:border-cyan-900/40 p-5 space-y-2 shadow-sm">
              <p className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                كم تستغرق عملية التنظيف؟
              </p>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                تختلف المدة حسب المساحة والحالة، ونحدد لك وقتًا تقديريًا عند الحجز.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 dark:bg-[#061e38] border border-slate-200 dark:border-cyan-900/40 p-5 space-y-2 shadow-sm">
              <p className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                هل يجب أن أكون موجودًا أثناء التنظيف؟
              </p>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                يفضّل وجودك عند وصول الفريق لتوضيح التفاصيل، ثم يمكنك المغادرة إذا اتفقنا على ذلك.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 dark:bg-[#061e38] border border-slate-200 dark:border-cyan-900/40 p-5 space-y-2 shadow-sm">
              <p className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                هل تخدمون جميع أحياء جدة؟
              </p>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                نخدم أحياء جدة، ويمكنك التأكد من حيّك عند الحجز.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 dark:bg-[#061e38] border border-slate-200 dark:border-cyan-900/40 p-5 space-y-2 shadow-sm">
              <p className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                هل يمكن إضافة تنظيف الكنب والسجاد؟
              </p>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                نعم، يمكن إضافتها إلى الزيارة نفسها.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 dark:bg-[#061e38] border border-slate-200 dark:border-cyan-900/40 p-5 space-y-2 shadow-sm">
              <p className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                ما الفرق بين التنظيف العادي والعميق؟
              </p>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                العادي يعتني بالمظهر العام، أما العميق فيصل إلى الدهون والترسبات والغبار المتراكم في الأماكن المخفية.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 dark:bg-[#061e38] border border-slate-200 dark:border-cyan-900/40 p-5 space-y-2 shadow-sm">
              <p className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                كم مرة يجب تنظيف المنزل عميقًا؟
              </p>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                يُنصح بمرة كل ثلاثة إلى ستة أشهر، وبعد الترميم أو قبل المناسبات الكبيرة.
              </p>
            </div>
          </div>
        </div>

        {/* Section 13 */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-[#061e38] dark:to-[#021429] border border-cyan-200 dark:border-cyan-900/60 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            احجز مع شركة تنظيف منازل بجدة
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            إذا كنت تبحث عن شركة تنظيف بجدة تتولى منزلك أو شقتك أو بيتك بإتقان، فنحن في <strong className="font-bold text-slate-900 dark:text-white">مسك كلين</strong> جاهزون لخدمتك. احجز موعدك أونلاين من <a href="https://www.meskclean.com/" className="text-cyan-600 dark:text-cyan-400 font-semibold underline underline-offset-4 hover:text-cyan-500">https://www.meskclean.com/</a> أو تواصل معنا على <a href="tel:0547161147" className="text-cyan-600 dark:text-cyan-400 font-semibold underline underline-offset-4 hover:text-cyan-500" dir="ltr">0547161147</a>.
          </p>
        </div>

      </div>
    </article>
  );
};
