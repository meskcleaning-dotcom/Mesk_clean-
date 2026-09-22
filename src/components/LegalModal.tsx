import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export type LegalDocType = 'privacy' | 'terms' | null;

interface LegalModalProps {
  type: LegalDocType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const { language, t } = useLanguage();

  if (!type) return null;

  const isPrivacy = type === 'privacy';

  const contentAr = isPrivacy
    ? {
        title: 'سياسة الخصوصية',
        subtitle: 'التزام شركة مسك كلين بحماية خصوصية وأمان بيانات عملائها في المملكة العربية السعودية.',
        sections: [
          {
            title: '١. جمع واستخدام البيانات',
            body: 'نقوم بجمع المعلومات الضرورية فقط مثل الاسم، رقم الهاتف، والموقع داخل مدينة جدة، وذلك بغرض تنسيق المواعيد وتنفيذ خدمات التنظيف وشبك الحمام بأعلى درجات الدقة والاحترافية.',
          },
          {
            title: '٢. سرية المعلومات',
            body: 'نلتزم التزاماً تاماً بعدم مشاركة أو بيع أو تأجير بيانات عملائنا لأي أطراف خارجية تحت أي ظرف، وتستخدم البيانات حصرياً من قبل فريق الدعم والتشغيل لدينا.',
          },
          {
            title: '٣. أمان وسائل التواصل والحجز',
            body: 'تتم جميع الاتصالات والمراسلات عبر قنوات مشفرة وآمنة عبر الهاتف والواتساب المعتمدين لضمان سرية موقع منزلك وتفاصيل طلباتك.',
          },
          {
            title: '٤. تواصل معنا',
            body: 'إذا كانت لديك أي استفسارات تتعلق بسياسة الخصوصية، يمكنك التواصل معنا مباشرة عبر أرقام خدمة العملاء الموضحة في الموقع.',
          },
        ],
      }
    : {
        title: 'الشروط والأحكام',
        subtitle: 'شروط وأحكام طلب خدمات التنظيف ومكافحة الحمام من شركة مسك كلين في جدة.',
        sections: [
          {
            title: '١. حجز وتأكيد المواعيد',
            body: 'يتم تأكيد الموعد النهائي للخدمة بعد التنسيق المباشر بين منسق خدمة العملاء والعميل بناءً على التوقيت المفضل والموقع داخل جدة.',
          },
          {
            title: '٢. ضمان جودة الخدمة',
            body: 'تلتزم شركة مسك كلين بتقديم أعلى معايير النظافة واستخدام مواد معتمدة وآمنة. في حال وجود أي ملاحظة يحق للعميل إبلاغ المشرف فوراً لإعادة المعالجة.',
          },
          {
            title: '٣. تركيب شبك وطوارد الحمام',
            body: 'نقدم ضماناً معتمداً على جودة وثبات أشواك الستانلس ستيل والشبك المقاوم للعوامل الجوية وأشعة الشمس في جدة.',
          },
          {
            title: '٤. الإلغاء وإعادة الجدولة',
            body: 'يمكن للعميل إعادة جدولة موعد الخدمة مجاناً قبل ساعتين على الأقل من موعد وصول الفريق بالتواصل مع خدمة العملاء.',
          },
        ],
      };

  const contentEn = isPrivacy
    ? {
        title: 'Privacy Policy',
        subtitle: 'Mesk Clean commitment to protecting client privacy and data security across Saudi Arabia.',
        sections: [
          {
            title: '1. Information Collection & Use',
            body: 'We collect only essential details such as name, contact phone number, and location in Jeddah to schedule, coordinate, and execute cleaning and bird netting services accurately.',
          },
          {
            title: '2. Confidentiality & Security',
            body: 'We strictly guarantee that customer data is never sold, shared, or leased to any external third party. Data is solely used by our verified operations and support staff.',
          },
          {
            title: '3. Secure Communication',
            body: 'All communications via direct phone or WhatsApp follow standard secure protocols to protect your home location and service requests.',
          },
          {
            title: '4. Inquiries & Support',
            body: 'If you have any questions regarding our privacy practices, please contact our support desk directly through the official contact channels on this website.',
          },
        ],
      }
    : {
        title: 'Terms & Conditions',
        subtitle: 'Terms governing cleaning and bird deterrent services provided by Mesk Clean in Jeddah.',
        sections: [
          {
            title: '1. Bookings & Confirmations',
            body: 'Final service time is confirmed after direct coordination between our support representative and the customer based on chosen time and Jeddah neighborhood.',
          },
          {
            title: '2. Quality Guarantee',
            body: 'Mesk Clean commits to top-tier cleaning standards using certified, safe detergents. Any concerns raised during or immediately following service will be promptly addressed.',
          },
          {
            title: '3. Bird Netting & Spikes Warranty',
            body: 'We provide guaranteed durability on all stainless steel anti-bird spikes and UV-treated netting against harsh coastal weather in Jeddah.',
          },
          {
            title: '4. Rescheduling & Cancellations',
            body: 'Appointments may be rescheduled free of charge up to 2 hours prior to scheduled team arrival by contacting customer support.',
          },
        ],
      };

  const activeContent = language === 'ar' ? contentAr : contentEn;

  return (
    <div
      id="legal-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="legal-modal-container"
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#04162c] border border-slate-200 dark:border-cyan-800/60 shadow-2xl p-6 sm:p-8 text-start text-slate-900 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-cyan-900/40 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
              {isPrivacy ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {activeContent.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-cyan-200/70">
                {activeContent.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
            aria-label={t('modal.close')}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-5">
          {activeContent.sections.map((sec, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-[#07203e] border border-slate-200/80 dark:border-cyan-900/40">
              <h4 className="font-bold text-base text-slate-900 dark:text-cyan-300 mb-1.5">
                {sec.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {sec.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-slate-200 dark:border-cyan-900/40 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl font-bold text-sm text-white bg-cyan-600 hover:bg-cyan-500 transition-colors cursor-pointer"
          >
            {t('modal.close')}
          </button>
        </div>
      </div>
    </div>
  );
};
