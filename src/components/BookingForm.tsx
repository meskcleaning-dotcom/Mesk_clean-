import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle2,
  Phone,
  Calendar,
  Clock,
  MapPin,
  User,
  MessageCircle,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  Building,
  Home,
  RefreshCw,
  Copy,
  Check,
  Mail
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getStoredServices, saveStoredOrder, getStoredCompanySettings } from '../data/store';
import { CITIES_DATA } from '../data/citiesDistricts';
import { BookingFormData, BookingRequestRecord, CustomerType } from '../types';
import {
  generateMathChallenge,
  MathChallenge,
  sanitizeInput,
  validateSaudiPhone,
  checkRateLimit
} from '../utils/security';

interface BookingFormProps {
  initialServiceId?: string;
  initialDistrict?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialServiceId,
  initialDistrict,
}) => {
  const { language, t } = useLanguage();
  const services = getStoredServices().filter(s => s.active !== false);
  const company = getStoredCompanySettings();

  const [selectedCityKey, setSelectedCityKey] = useState<string>('jeddah');

  const currentCityData = CITIES_DATA[selectedCityKey] || CITIES_DATA.jeddah;
  const currentDistricts = language === 'ar' ? currentCityData.districtsAr : currentCityData.districtsEn;

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    serviceId: initialServiceId || (services[0]?.id || 'homes'),
    customerType: 'individual',
    propertyType: 'شقة',
    city: currentCityData.nameAr,
    district: initialDistrict || currentCityData.districtsAr[0],
    address: '',
    date: '',
    preferredTime: 'صباحاً (8:00 ص - 12:00 م)',
    targetWhatsApp: company.whatsapp || '966547161157',
    notes: '',
  });

  // Honeypot field (spam trap)
  const [honeypot, setHoneypot] = useState('');

  // Math challenge for bot protection
  const [challenge, setChallenge] = useState<MathChallenge>(generateMathChallenge());
  const [challengeAnswer, setChallengeAnswer] = useState('');

  // State
  const [submitted, setSubmitted] = useState(false);
  const [confirmedRecord, setConfirmedRecord] = useState<BookingRequestRecord | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCityChange = (cityKey: string) => {
    setSelectedCityKey(cityKey);
    const newCity = CITIES_DATA[cityKey] || CITIES_DATA.jeddah;
    setFormData((prev) => ({
      ...prev,
      city: language === 'ar' ? newCity.nameAr : newCity.nameEn,
      district: language === 'ar' ? newCity.districtsAr[0] : newCity.districtsEn[0]
    }));
  };

  useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: initialServiceId }));
    }
  }, [initialServiceId]);

  useEffect(() => {
    if (initialDistrict) {
      setFormData((prev) => ({ ...prev, district: initialDistrict }));
    }
  }, [initialDistrict]);

  const refreshChallenge = () => {
    setChallenge(generateMathChallenge());
    setChallengeAnswer('');
  };

  const propertyTypes = language === 'ar'
    ? ['شقة', 'فيلا', 'منزل', 'مكتب عمل', 'عمارة سكنية', 'استراحة / مجلس', 'معرض تجاري', 'أخرى']
    : ['Apartment', 'Villa', 'House', 'Office', 'Residential Building', 'Majlis / Chalet', 'Showroom', 'Other'];

  const timeSlots = language === 'ar'
    ? [
        'صباحاً (8:00 ص - 12:00 م)',
        'بعد الظهر (12:00 م - 4:00 م)',
        'مساءً (4:00 م - 9:00 م)',
        'أي وقت متاح'
      ]
    : [
        'Morning (8:00 AM - 12:00 PM)',
        'Afternoon (12:00 PM - 4:00 PM)',
        'Evening (4:00 PM - 9:00 PM)',
        'Any Available Time'
      ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // 1. Honeypot check (if filled, bot detected)
    if (honeypot.trim().length > 0) {
      console.warn('Bot submission blocked via honeypot');
      return;
    }

    // 2. Math Anti-Spam Challenge
    const parsedAnswer = parseInt(challengeAnswer.trim(), 10);
    if (isNaN(parsedAnswer) || parsedAnswer !== challenge.expectedAnswer) {
      setErrorMessage(t('security.spamError'));
      refreshChallenge();
      return;
    }

    // 3. Rate limiting check (prevent submission abuse)
    if (!checkRateLimit('booking_form', 15)) {
      setErrorMessage(t('security.rateLimitError'));
      return;
    }

    // 4. Sanitize and validate inputs
    const cleanName = sanitizeInput(formData.fullName, 80);
    if (!cleanName || cleanName.length < 3) {
      setErrorMessage(language === 'ar' ? 'يرجى إدخال اسم كريم صحيح لا يقل عن 3 أحرف.' : 'Please enter a valid name (at least 3 characters).');
      return;
    }

    const phoneValidation = validateSaudiPhone(formData.phone);
    if (!phoneValidation.isValid) {
      setErrorMessage(language === 'ar' ? phoneValidation.errorMsgAr : phoneValidation.errorMsgEn);
      return;
    }

    const cleanAddress = sanitizeInput(formData.address, 150);
    const cleanNotes = sanitizeInput(formData.notes, 300);

    setIsSubmitting(true);

    const selectedServiceObj = services.find((s) => s.id === formData.serviceId);
    const serviceName = selectedServiceObj
      ? (language === 'ar' ? selectedServiceObj.name : (selectedServiceObj.nameEn || selectedServiceObj.name))
      : 'تنظيف عام';

    // 5. Generate secure reference code
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const bookingId = `MSK-2026-${randomSuffix}`;

    const newRecord: BookingRequestRecord = {
      id: bookingId,
      createdAt: new Date().toISOString(),
      fullName: cleanName,
      phone: phoneValidation.normalized,
      serviceId: formData.serviceId,
      serviceName,
      customerType: formData.customerType,
      propertyType: formData.propertyType,
      city: formData.city,
      district: formData.district,
      address: cleanAddress,
      date: formData.date || 'أقرب موعد متاح',
      preferredTime: formData.preferredTime,
      targetWhatsApp: company.whatsapp || '966547161157',
      notes: cleanNotes,
      status: 'new'
    };

    // 6. Save in persistent store for Admin Dashboard
    saveStoredOrder(newRecord);
    setConfirmedRecord(newRecord);
    setSubmitted(true);
    setIsSubmitting(false);

    // 7. Auto-open WhatsApp with the prefilled message so the lead reaches the
    // team even if the customer never notices/clicks the confirmation button.
    // (The customer still has to tap "Send" inside WhatsApp — that step cannot
    // be automated for security/anti-spam reasons on WhatsApp's side.)
    const waUrl = buildWhatsAppUrl(newRecord);
    window.open(waUrl, '_blank');

    // Smooth scroll into confirmation
    setTimeout(() => {
      const el = document.getElementById('booking-confirmation');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 150);
  };

  const buildWhatsAppUrl = (record: BookingRequestRecord) => {
    const msgLines = [
      `*طلب حجز خدمة — شركة مسك كلين* 🧼`,
      `━━━━━━━━━━━━━━━━━━`,
      `🔖 *رقم الطلب المرجعي:* ${record.id}`,
      `👤 *الاسم:* ${record.fullName}`,
      `🏢 *نوع العميل:* ${record.customerType === 'corporate' ? 'شركة / مؤسسة' : 'فرد'}`,
      `📱 *رقم الجوال:* ${record.phone}`,
      `✨ *الخدمة المطلوبة:* ${record.serviceName}`,
      `🏠 *نوع المكان:* ${record.propertyType}`,
      `🏙️ *المدينة:* ${record.city}`,
      `📍 *الحي:* ${record.district}`,
      record.address ? `📌 *العنوان التفصيلي:* ${record.address}` : '',
      `📅 *التاريخ المفضل:* ${record.date || 'أقرب موعد متاح'}`,
      `⏰ *الوقت المناسب:* ${record.preferredTime}`,
      record.notes ? `📝 *ملاحظات إضافية:* ${record.notes}` : '',
      `━━━━━━━━━━━━━━━━━━`,
      `_تم الإرسال عبر موقع مسك كلين الرسمي_`
    ].filter(Boolean).join('\n');

    const encodedMsg = encodeURIComponent(msgLines);
    return `https://wa.me/${record.targetWhatsApp}?text=${encodedMsg}`;
  };

  const getWhatsAppUrl = () => {
    if (!confirmedRecord) return '#';
    return buildWhatsAppUrl(confirmedRecord);
  };

  const getMailtoUrl = () => {
    if (!confirmedRecord) return '#';
    const subject = encodeURIComponent(`طلب حجز جديد - ${confirmedRecord.id}`);
    const body = encodeURIComponent(
      `الاسم: ${confirmedRecord.fullName}\nالجوال: ${confirmedRecord.phone}\nالخدمة: ${confirmedRecord.serviceName}\nالمدينة: ${confirmedRecord.city}\nالحي: ${confirmedRecord.district}\nالعنوان: ${confirmedRecord.address || '-'}\nالتاريخ المفضل: ${confirmedRecord.date || 'أقرب موعد متاح'}\nالوقت المناسب: ${confirmedRecord.preferredTime}\nملاحظات: ${confirmedRecord.notes || '-'}`
    );
    return `mailto:${company.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyCode = async () => {
    if (confirmedRecord) {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(confirmedRecord.id);
        } else {
          const textArea = document.createElement('textarea');
          textArea.value = confirmedRecord.id;
          textArea.style.position = 'fixed';
          textArea.style.opacity = '0';
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }
      } catch (err) {
        console.warn('Copy failed:', err);
      }
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setConfirmedRecord(null);
    setFormData((prev) => ({
      ...prev,
      fullName: '',
      phone: '',
      address: '',
      notes: '',
    }));
    refreshChallenge();
  };

  return (
    <section id="booking" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('booking.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
            {t('booking.title')}
          </h2>

          <p className="text-base text-slate-600 dark:text-cyan-200/80">
            {t('booking.subtitle')}
          </p>
        </div>

        {/* Confirmation State */}
        {submitted && confirmedRecord ? (
          <div
            id="booking-confirmation"
            className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#051c36] border-2 border-emerald-500/50 shadow-2xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-300"
          >
            <div className="w-20 h-20 rounded-3xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                {t('booking.successTitle')}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-lg mx-auto mt-2">
                {t('booking.successMsg')}
              </p>
            </div>

            {/* Reference Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-100 dark:bg-[#072448] border border-slate-200 dark:border-cyan-800/40">
              <span className="text-xs font-bold text-slate-500 dark:text-cyan-300/80">
                {t('booking.refCode')}
              </span>
              <span className="text-base sm:text-lg font-mono font-black text-cyan-600 dark:text-cyan-400">
                {confirmedRecord.id}
              </span>
              <button
                type="button"
                onClick={handleCopyCode}
                className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-[#0a3161] text-slate-500 dark:text-cyan-300 transition-colors"
                title="نسخ رقم الطلب"
              >
                {copiedCode ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Summary Box */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#03152a] border border-slate-200 dark:border-cyan-950 text-start text-xs sm:text-sm grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
              <div>
                <span className="text-slate-400 dark:text-slate-500">{language === 'ar' ? 'الاسم:' : 'Name:'}</span>{' '}
                <span className="font-bold text-slate-900 dark:text-white">{confirmedRecord.fullName}</span>
              </div>
              <div>
                <span className="text-slate-400 dark:text-slate-500">{language === 'ar' ? 'الجوال:' : 'Phone:'}</span>{' '}
                <span className="font-bold text-slate-900 dark:text-white" dir="ltr">{confirmedRecord.phone}</span>
              </div>
              <div>
                <span className="text-slate-400 dark:text-slate-500">{language === 'ar' ? 'الخدمة:' : 'Service:'}</span>{' '}
                <span className="font-bold text-cyan-600 dark:text-cyan-400">{confirmedRecord.serviceName}</span>
              </div>
              <div>
                <span className="text-slate-400 dark:text-slate-500">{language === 'ar' ? 'الحي:' : 'District:'}</span>{' '}
                <span className="font-bold text-slate-900 dark:text-white">{confirmedRecord.district}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-950/20 active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t('booking.openWhatsApp')}</span>
              </a>

              <a
                href={getMailtoUrl()}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-bold text-sm text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-[#072448] hover:bg-slate-200 dark:hover:bg-[#0a3161] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{language === 'ar' ? 'إرسال بالبريد الإلكتروني' : 'Send via Email'}</span>
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-bold text-sm text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-[#072448] hover:bg-slate-200 dark:hover:bg-[#0a3161] transition-colors"
              >
                <span>{t('booking.anotherOrder')}</span>
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form Card */
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 shadow-xl space-y-6"
          >
            {/* Honeypot field (hidden from genuine users) */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <label htmlFor="website_hp_confirm">Leave this field blank</label>
              <input
                id="website_hp_confirm"
                type="text"
                name="website_hp_confirm"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-300 text-sm flex items-center gap-3 animate-shake">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Customer Type Selector (Individual vs Corporate) */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-cyan-200/90 mb-2">
                {t('booking.customerType')}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, customerType: 'individual' }))}
                  className={`py-3 px-4 rounded-2xl border text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                    formData.customerType === 'individual'
                      ? 'bg-cyan-500 text-white border-cyan-500 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-50 dark:bg-[#072448] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-cyan-900/40 hover:bg-slate-100'
                  }`}
                >
                  <Home className="w-4 h-4" />
                  <span>{t('booking.individual')}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, customerType: 'corporate' }))}
                  className={`py-3 px-4 rounded-2xl border text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                    formData.customerType === 'corporate'
                      ? 'bg-cyan-500 text-white border-cyan-500 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-50 dark:bg-[#072448] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-cyan-900/40 hover:bg-slate-100'
                  }`}
                >
                  <Building className="w-4 h-4" />
                  <span>{t('booking.corporate')}</span>
                </button>
              </div>
            </div>

            {/* Row 1: Name and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-cyan-200/90 mb-1.5">
                  {t('booking.fullName')} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute start-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder={language === 'ar' ? 'الاسم الثلاثي أو اسم الشركة' : 'Full Name or Company Name'}
                    className="w-full ps-10 pe-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#072448] border border-slate-200 dark:border-cyan-900/40 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-cyan-200/90 mb-1.5">
                  {t('booking.phone')} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute start-3.5 top-3.5" />
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="05xxxxxxxx"
                    className="w-full ps-10 pe-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#072448] border border-slate-200 dark:border-cyan-900/40 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-end"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Service & Property Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-cyan-200/90 mb-1.5">
                  {t('booking.service')} <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#072448] border border-slate-200 dark:border-cyan-900/40 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {language === 'ar' ? s.name : (s.nameEn || s.name)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-cyan-200/90 mb-1.5">
                  {t('booking.propertyType')}
                </label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#072448] border border-slate-200 dark:border-cyan-900/40 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                >
                  {propertyTypes.map((type, idx) => (
                    <option key={idx} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 3: City & District */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-cyan-200/90 mb-1.5">
                {t('booking.city')} <span className="text-rose-500">*</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {Object.values(CITIES_DATA).map((city) => {
                  const isSelected = selectedCityKey === city.id;
                  return (
                    <button
                      key={city.id}
                      type="button"
                      onClick={() => handleCityChange(city.id)}
                      className={`py-2.5 px-3 rounded-2xl border text-xs sm:text-sm font-bold transition-all text-center ${
                        isSelected
                          ? 'bg-cyan-600 text-white border-cyan-600 shadow-md shadow-cyan-500/20'
                          : 'bg-slate-50 dark:bg-[#072448] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-cyan-900/40 hover:bg-slate-100 dark:hover:bg-[#0b3366]'
                      }`}
                    >
                      {language === 'ar' ? city.nameAr : city.nameEn}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Row 4: District & Detailed Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-cyan-200/90 mb-1.5">
                  {t('booking.district')} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute start-3.5 top-3.5" />
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full ps-10 pe-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#072448] border border-slate-200 dark:border-cyan-900/40 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  >
                    {currentDistricts.map((district, idx) => (
                      <option key={idx} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-cyan-200/90 mb-1.5">
                  {t('booking.address')}
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder={language === 'ar' ? 'اسم الشارع، رقم المبنى، أو علامة مميزة' : 'Street name, building number, or landmark'}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#072448] border border-slate-200 dark:border-cyan-900/40 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                />
              </div>
            </div>

            {/* Row 4: Date & Preferred Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-cyan-200/90 mb-1.5">
                  {t('booking.date')}
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute start-3.5 top-3.5" />
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full ps-10 pe-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#072448] border border-slate-200 dark:border-cyan-900/40 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-cyan-200/90 mb-1.5">
                  {t('booking.preferredTime')}
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-slate-400 absolute start-3.5 top-3.5" />
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full ps-10 pe-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#072448] border border-slate-200 dark:border-cyan-900/40 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  >
                    {timeSlots.map((slot, idx) => (
                      <option key={idx} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-cyan-200/90 mb-1.5">
                {t('booking.notes')}
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder={language === 'ar' ? 'أي تفاصيل خاصة مثل عدد المكيفات، مساحة الفلة، أماكن تركيب شبك الحمام...' : 'Any details like number of ACs, villa size, or bird spikes location...'}
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#072448] border border-slate-200 dark:border-cyan-900/40 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 resize-none"
              ></textarea>
            </div>

            {/* Security Anti-Spam Challenge */}
            <div className="p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-700 dark:text-cyan-200">
                    {t('security.spamChallenge')}
                  </span>
                  <span className="text-sm font-black text-cyan-600 dark:text-cyan-400">
                    {language === 'ar' ? challenge.questionAr : challenge.questionEn}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <input
                  type="number"
                  required
                  value={challengeAnswer}
                  onChange={(e) => setChallengeAnswer(e.target.value)}
                  placeholder={t('security.answerPlaceholder')}
                  className="w-full sm:w-32 px-3.5 py-2 rounded-xl bg-white dark:bg-[#072448] border border-slate-200 dark:border-cyan-900/40 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-center font-bold"
                />
                <button
                  type="button"
                  onClick={refreshChallenge}
                  title="تغيير المسألة"
                  className="p-2 rounded-xl bg-slate-100 dark:bg-[#072448] text-slate-500 dark:text-cyan-300 hover:bg-slate-200 transition-colors shrink-0"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-2xl font-black text-base text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-xl shadow-cyan-600/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
              <span>{isSubmitting ? (language === 'ar' ? 'جارٍ الإرسال...' : 'Submitting...') : t('booking.submit')}</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
