import React, { useState, useEffect } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getStoredFAQs } from '../data/store';
import { FAQItem } from '../types';
import { COMPANY_INFO } from '../data/companyInfo';

export const FAQSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const loadFaqs = () => {
    setFaqs(getStoredFAQs());
  };

  useEffect(() => {
    loadFaqs();
    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.type === 'faqs') {
        loadFaqs();
      }
    };
    window.addEventListener('mesk_store_updated', handleUpdate);
    return () => window.removeEventListener('mesk_store_updated', handleUpdate);
  }, []);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 relative overflow-hidden bg-slate-50/70 dark:bg-[#021327]/60 border-y border-slate-200 dark:border-cyan-900/30">
      {/* Glow background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t('faq.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
            {t('faq.title')}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-cyan-200/80">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const question = language === 'ar' ? faq.question : faq.questionEn;
            const answer = language === 'ar' ? faq.answer : faq.answerEn;

            return (
              <div
                key={faq.id || idx}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-white dark:bg-[#051c36] border-cyan-500/40 shadow-lg shadow-cyan-950/5'
                    : 'bg-white/80 dark:bg-[#03172e] border-slate-200 dark:border-cyan-900/30 hover:border-slate-300 dark:hover:border-cyan-800/60'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-start p-5 sm:p-6 flex items-center justify-between gap-4 font-bold focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg text-slate-900 dark:text-white flex-1 leading-snug">
                    {question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-cyan-500 text-white rotate-180'
                        : 'bg-slate-100 dark:bg-[#072448] text-slate-500 dark:text-cyan-300'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-cyan-950/40">
                    <p>{answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Ask CTA */}
        <div className="mt-10 p-6 rounded-2xl bg-cyan-50 dark:bg-[#051d38] border border-cyan-200 dark:border-cyan-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {language === 'ar' ? 'لديك استفسار لم تجد إجابته هنا؟' : 'Have a question not listed here?'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-cyan-200/70">
                {language === 'ar' ? 'تواصل معنا مباشرة وسيجيبك خبراؤنا على الفور.' : 'Contact us directly and our specialists will assist you right away.'}
              </p>
            </div>
          </div>

          <a
            href={COMPANY_INFO.phone1.waUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{language === 'ar' ? 'اسألنا عبر واتساب' : 'Ask on WhatsApp'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
