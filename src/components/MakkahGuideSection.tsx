import React from 'react';
import { BookOpen } from 'lucide-react';

export const MakkahGuideSection: React.FC = () => {
  return (
    <article
      id="makkah-cleaning-guide"
      className="py-16 sm:py-24 bg-white dark:bg-[#03152a] border-t border-slate-200 dark:border-cyan-900/40 text-start font-tajawal transition-colors"
      aria-label="دليل خدمات النظافة الشاملة بمكة المكرمة"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header Badge */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-bold mb-4">
            <BookOpen className="w-4 h-4 text-cyan-500" />
            <span>دليل النظافة المتخصص بمكة المكرمة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            دليلك الشامل لاختيار أفضل شركة تنظيف بمكة المكرمة لكافة الخدمات
          </h2>
        </div>

        {/* Introduction Block */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#061e38] border border-slate-200 dark:border-cyan-900/40 shadow-sm space-y-4">
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            تتميز مكة المكرمة بطبيعة جغرافية ومناخية جبلية حارة وجافة، مع حركة ضيافة مستمرة ومواسم عمرة وحج تتطلب مستويات تعقيم فائقة للمنازل، العمائر السكنية، والفنادق. مع ضيق الوقت وكثرة المتطلبات، يبحث أهالي العاصمة المقدسة عن <strong className="font-bold text-slate-900 dark:text-white">شركة تنظيف بمكة</strong> تمتلك الخبرة الميدانية والعمالة المحترفة لتنفيذ كافة الأعمال بدقة. في هذا الدليل نستعرض أهم الخدمات المتكاملة التي تحتاجها عقارات مكة المكرمة وكيفية اختيار <strong className="font-bold text-slate-900 dark:text-white">أفضل شركة تنظيف بمكة المكرمة</strong> لضمان بيئة صحية ونقية.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            لماذا تتطلب مباني ومنازل مكة المكرمة عناية تنظيف خاصة؟
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            تتعرض المباني في مكة المكرمة لتراكم الأتربة الناعمة والغبار الجبلي المتطاير، إلى جانب الحاجة المستمرة لتعقيم خزانات المياه الأرضية والعلوية نظرًا للاستهلاك المرتفع، بالإضافة إلى حماية واجهات وشبابيك العمائر من تجمع أسراب الحمام. التنظيف التقليدي لا يستطيع الوصول للدهون المستعصية في المطابخ الكبيرة أو تعقيم المفروشات بالبخار والقضاء على حشرات الصيف، ولذلك فإن الاستعانة بـ <strong className="font-bold text-slate-900 dark:text-white">شركة تنظيف منازل بمكة</strong> يوفر حماية وقائية شاملة للمنزل بأحدث المعدات.
          </p>
        </div>

        {/* Section 3 */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            خدمات التنظيف والصيانة المتكاملة بمكة المكرمة
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            تغطي خدماتنا المتخصصة في مكة المكرمة جميع أرجاء العقار من الداخل والخارج:
          </p>
          <ul className="space-y-3 list-disc list-inside text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed pr-2">
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">تنظيف المنازل والشقق:</strong> تنظيف شامل للغرف، جلي وتلميع السيراميك والرخام، مسح النوافذ، وتعقيم الحمامات والأبواب.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">تنظيف الفلل والعمائر السكنية:</strong> فرق متخصصة للفلل والعمائر متعددة الطوابق، مع غسيل الأحواش، السلالم، ومداخل العقارات.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">تنظيف وعزل الخزانات بمكة:</strong> غسيل الخزانات الأرضية والعلوية، إزالة الطحالب والرواسب الكلسية، وعزل مائي معتمد لمنع التسربات.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">غسيل وتنظيف المكيفات سبليت وشباك:</strong> تنظيف الفلاتر والمبخرات بمضخات الضغط العالي لتحسين التبريد وتوفير استهلاك الكهرباء.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">مكافحة الحشرات والعتة وبق الفراش:</strong> رش مبيدات آمنة ومرخصة للقضاء على الصراصير، النمل الأبيض، العتة، وبق الفراش.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">مكافحة القوارض والزواحف:</strong> مكافحة الفئران والجرذان والزواحف في الأحواش والمناطق الجبلية المحيطة بالعقارات.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">تركيب شبك وطارد الحمام بمكة:</strong> تركيب طوارد استانلس استيل وشبك بوليمر متين على النوافذ والأسطح لمنع أعشاش الحمام والروائح.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">تنظيف الكنب والمجالس والسجاد بالبخار:</strong> أجهزة بخار حرارية تزيل البقع الصعبة وتعقم المفروشات وتقضي على الروائح فورًا.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">تنظيف المطابخ وإزالة الدهون:</strong> إذابة الدهون المتراكمة على الشفاطات والبوتاجازات والجدران وتطهير الدواليب من الداخل والخارج.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">نظافة المكاتب والشركات:</strong> عقود نظافة دورية للمكاتب الإدارية والمحلات التجارية بمكة.
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            متى تحتاج عقارات مكة إلى خدمات التنظيف الاحترافية؟
          </h2>
          <ul className="space-y-2.5 list-disc list-inside text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed pr-2">
            <li>قبل وبعد مواسم رمضان والعمرة والحج لتجهيز المنازل والوحدات الفندقية.</li>
            <li>بعد انتهاء أعمال التشطيب والدهان والترميم لإزالة بقايا البوية والأسمنت.</li>
            <li>عند الانتقال إلى سكن جديد في مخططات مكة الحديثة (الزايدي، بطحاء قريش، العوالي).</li>
            <li>عند ظهور علامات تلوث في مياه الخزانات أو تغير في الرائحة واللون.</li>
            <li>مع دخول فصل الصيف للتخلص من الحشرات وتنظيف المكيفات لرفع كفاءتها.</li>
            <li>للتخلص من إزعاج الحمام والطيور على النوافذ والأسطح المكية.</li>
          </ul>
        </div>

        {/* Section 5 */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            تنظيف شقق وعمائر بمكة المكرمة
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            تتعدد الشقق والعمائر السكنية في أحياء مكة المكرمة كالعزيزية، الشوقية، النوارية، والشرائع. تنظيف الشقق يحتاج دقة عالية في تنظيف المطابخ والشبابيك والأرضيات، بينما تحتاج العمائر السكنية إلى تنظيف المداخل والسلالم والأسطح وغسيل واجهات المباني. نوفر في <strong className="font-bold text-slate-900 dark:text-white">مسك كلين بمكة</strong> خطط عمل مرنة للشقق المفروشة والشاغرة والعمائر السكنية لضمان أعلى مستوى من الجودة.
          </p>
        </div>

        {/* Section 6 */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            تنظيف الفلل والقصور بمكة المكرمة
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            تتطلب الفلل في أحياء مثل العوالي وبطحاء قريش والخالدية تجهيزات خاصة، حيث تضم مساحات واسعة وأحواشًا خارجية وخزانات كبيرة ومجالس ضيافة فاخرة. تتولى فرقنا جلي الرخام بمكائن متطورة، غسيل الواجهات الزجاجية والحجرية، تنظيف الكنب والمجالس بالبخار الحار في الموقع، وتنظيف المسابح والحدائق لضمان مظهر مشرف يليق بأصحاب المكان.
          </p>
        </div>

        {/* Section 7 */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            معايير اختيار أفضل شركة تنظيف بمكة المكرمة
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            عند المقارنة بين شركات التنظيف بمكة، تأكد من المعايير التالية لضمان الحصول على خدمة احترافية متميزة:
          </p>
          <ol className="space-y-3 list-decimal list-inside text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed pr-2">
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">الترخيص والمواد المعتمدة:</strong> استخدام مبيدات ومواد تنظيف مصرحة من هيئة الغذاء والدواء وآمنة على الأسرة.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">شمولية الخدمات:</strong> توفير كافة الخدمات (تنظيف، خزانات، مكيفات، حشرات، طارد حمام) في زيارة متناسقة دون الحاجة لشركات متعددة.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">سرعة الوصول وتغطية الأحياء:</strong> وصول الفرق سريعًا لأحياء مكة (العزيزية، العوالي، الشوقية، الشرائع، النوارية وغيرها).
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">الالتزام بالمواعيد والضمان:</strong> تقديم ضمان رسمي 10 سنوات على أعمال عزل الخزانات.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">الأسعار الواضحة:</strong> تسعير شفاف دون تكاليف خفية أو مفاجآت بعد إتمام العمل.
            </li>
          </ol>
        </div>

        {/* Section 8 */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            العوامل المحددة لنطاق خدمة التنظيف بمكة
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            يتم تحديد نطاق العمل بناءً على متطلباتك الدقيقة:
          </p>
          <ul className="space-y-2.5 list-disc list-inside text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed pr-2">
            <li>نوع العقار: شقة، فيلا، عمارة سكنية، استراحة أو منشأة تجارية.</li>
            <li>طبيعة الخدمة: تنظيف ما بعد التشطيب، تنظيف موسمي عميق، أو تنظيف صيانة دوري.</li>
            <li>الخدمات المتخصصة المطلوبة: عزل وغسيل الخزانات، رش الحشرات، تركيب الشبك، أو غسيل المكيفات.</li>
            <li>حجم ونوع المفروشات المراد تنظيفها بالبخار الحار.</li>
          </ul>
        </div>

        {/* Section 9 */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            خطوات تنفيذ الخدمة في مسك كلين بمكة
          </h2>
          <ol className="space-y-3 list-decimal list-inside text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed pr-2">
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">الحجز والتنسيق:</strong> التواصل وتحديد الحي والخدمات المطلوبة وتحديد الموعد المناسب فورًا.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">وصول الفريق الميداني:</strong> يصل فريق العمل المجهز بالمكائن والمواد المتخصصة في الموعد المحدد تمامًا.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">تنفيذ العمل بدقة:</strong> تقسيم المهام بين الفنيين (الأرضيات، الحمامات، الخزانات، المكيفات، المفروشات) لإنجاز العمل بأعلى معايير الإتقان.
            </li>
            <li>
              <strong className="font-bold text-slate-900 dark:text-white">المعاينة والتسليم:</strong> تسليم الموقع للعميل ومراجعة كافة التفاصيل والتأكد من رضاه التام مع تسليم شهادة ضمان 10 سنوات لأعمال عزل الخزانات.
            </li>
          </ol>
        </div>

        {/* Section 10 */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            نصائح للحفاظ على نظافة عقارك بمكة المكرمة
          </h2>
          <ul className="space-y-2.5 list-disc list-inside text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed pr-2">
            <li>إحكام إغلاق أغطية الخزانات الأرضية والعلوية لمنع تسرب الأتربة أو دخول الحشرات.</li>
            <li>تركيب طوارد الحمام مبكرًا على حواف النوافذ والمكيفات لمنع تراكم الفضلات والروائح الكريهة.</li>
            <li>غسيل فلاتر المكيفات شهريًا بسبب الأتربة العالقة لضمان هواء صحي ونقي.</li>
            <li>معالجة أي تسربات مائية فورًا لتجنب جذب الصراصير والقوارض.</li>
            <li>التهوية الجيدة للمفروشات والكنب واستخدام المكانس الكهربائية بانتظام.</li>
          </ul>
        </div>

        {/* Section 11 - FAQ */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            أسئلة شائعة عن خدمات التنظيف بمكة المكرمة
          </h2>
          <div className="space-y-4 pt-1">
            <div className="rounded-2xl bg-slate-50 dark:bg-[#061e38] border border-slate-200 dark:border-cyan-900/40 p-5 space-y-2 shadow-sm">
              <p className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                هل تخدمون جميع أحياء مكة المكرمة وضواحيها؟
              </p>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                نعم، نغطي كافة أحياء مكة بما فيها العزيزية، العوالي، الشوقية، بطحاء قريش، الشرائع، النوارية، الخالدية، الكعكية، الزايدي وضواحيها.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 dark:bg-[#061e38] border border-slate-200 dark:border-cyan-900/40 p-5 space-y-2 shadow-sm">
              <p className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                هل يشمل العمل تنظيف وعزل الخزانات وغسيل المكيفات في نفس اليوم؟
              </p>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                نعم، يمكن تجهيز فرق متكاملة لتنفيذ تنظيف المنزل مع الخزانات والمكيفات ورش المبيدات في زيارة منسقة لتوفير وقتك.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 dark:bg-[#061e38] border border-slate-200 dark:border-cyan-900/40 p-5 space-y-2 shadow-sm">
              <p className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                هل المبيدات المستخدمة في مكافحة الحشرات بمكة آمنة؟
              </p>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                نستخدم مبيدات صحة عامة معتمدة من هيئة الغذاء والدواء بدون رائحة نفاذة، آمنة تمامًا على الأطفال وكبار السن وأصحاب الحساسية.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 dark:bg-[#061e38] border border-slate-200 dark:border-cyan-900/40 p-5 space-y-2 shadow-sm">
              <p className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                هل يتوفر ضمان على خدمات عزل الخزانات بمكة؟
              </p>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                نعم، نقدم ضماناً رسمياً معتمداً لمدة 10 سنوات على كافة أعمال عزل الخزانات المائية والإيبوكسية المنفذة من قبلنا.
              </p>
            </div>
          </div>
        </div>

        {/* Section 12 - Booking CTA */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-[#061e38] dark:to-[#021429] border border-cyan-200 dark:border-cyan-900/60 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
            احجز الآن مع شركة تنظيف بمكة المكرمة
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            إذا كنت تبحث عن شركة تنظيف بمكة المكرمة تقدم خدمة شاملة واحترافية لمنازلك، شققك، خزاناتك أو مكافحة الآفات، فإن فريق <strong className="font-bold text-slate-900 dark:text-white">مسك كلين</strong> في خدمتك على مدار الساعة. احجز موعدك مباشرة عبر الموقع أو تواصل معنا هاتفيًا أو عبر الواتساب على <a href="tel:0547161147" className="text-cyan-600 dark:text-cyan-400 font-semibold underline underline-offset-4 hover:text-cyan-500" dir="ltr">0547161147</a>.
          </p>
        </div>

      </div>
    </article>
  );
};
