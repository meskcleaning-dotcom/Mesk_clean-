import React, { useState, useEffect } from 'react';
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import type { User } from 'firebase/auth';
import { collection, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import {
  Lock,
  LogOut,
  ArrowRight,
  ClipboardList,
  Sparkles,
  BookOpen,
  HelpCircle,
  Star,
  Settings,
  Plus,
  Trash2,
  Edit2,
  CheckCircle2,
  Clock,
  Search,
  ExternalLink,
  Phone,
  MessageCircle,
  Building,
  User as UserIcon,
  ShieldAlert,
  Save,
  Download
} from 'lucide-react';
import {
  getStoredOrders,
  updateStoredOrderStatus,
  deleteStoredOrder,
  getStoredServices,
  saveStoredServices,
  getStoredBlog,
  saveStoredBlog,
  getStoredFAQs,
  saveStoredFAQs,
  getStoredTestimonials,
  saveStoredTestimonials,
  getStoredCompanySettings,
  saveStoredCompanySettings,
  isAdminAuthenticated,
  setAdminAuthenticated
} from '../data/store';
import {
  BookingRequestRecord,
  ServiceItem,
  BlogPost,
  FAQItem,
  TestimonialItem,
  CompanySettings
} from '../types';

interface AdminDashboardProps {
  onBackToSite: () => void;
}

type TabType = 'orders' | 'services' | 'blog' | 'faqs' | 'testimonials' | 'settings';

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBackToSite }) => {
  // Auth state
  const [currentUser, setCurrentUser] = useState<User | null>(auth.currentUser);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    isAdminAuthenticated() || (auth.currentUser?.email?.toLowerCase() === 'meskcleaning@gmail.com')
  );
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Active Tab
  const [activeTab, setActiveTab] = useState<TabType>('orders');

  // Data states
  const [orders, setOrders] = useState<BookingRequestRecord[]>([]);
  const [orderFilter, setOrderFilter] = useState<string>('all');
  const [orderSearch, setOrderSearch] = useState<string>('');

  const [services, setServices] = useState<ServiceItem[]>([]);
  const [editingService, setEditingService] = useState<ServiceItem | null>(null);

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [editingFaq, setEditingFaq] = useState<FAQItem | null>(null);

  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [editingTestimonial, setEditingTestimonial] = useState<TestimonialItem | null>(null);

  const [companySettings, setCompanySettings] = useState<CompanySettings>(getStoredCompanySettings());
  const [saveSuccessMsg, setSaveSuccessMsg] = useState<string>('');

  // Load all data
  const loadAll = () => {
    setOrders(getStoredOrders());
    setServices(getStoredServices());
    setBlogPosts(getStoredBlog());
    setFaqs(getStoredFAQs());
    setTestimonials(getStoredTestimonials());
    setCompanySettings(getStoredCompanySettings());
  };

  // Monitor Firebase auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        if (user.email?.toLowerCase() === 'meskcleaning@gmail.com') {
          setIsAuthenticated(true);
          setAdminAuthenticated(true);
          setLoginError('');
        } else {
          setIsAuthenticated(false);
          setAdminAuthenticated(false);
          setLoginError(`عفواً، حساب جوجل (${user.email}) غير مصرح له بالدخول. البريد الإلكتروني المصرح له فقط هو: meskcleaning@gmail.com`);
          signOut(auth);
        }
      } else {
        if (!isAdminAuthenticated()) {
          setIsAuthenticated(false);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  // Sync orders from Firestore in real-time when authenticated
  useEffect(() => {
    if (!isAuthenticated) return;
    loadAll();

    try {
      const ordersRef = collection(db, 'orders');
      const unsubscribeOrders = onSnapshot(
        ordersRef,
        (snapshot) => {
          const fetchedOrders: BookingRequestRecord[] = [];
          snapshot.forEach((doc) => {
            fetchedOrders.push({ id: doc.id, ...doc.data() } as BookingRequestRecord);
          });
          if (fetchedOrders.length > 0) {
            fetchedOrders.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            setOrders(fetchedOrders);
          }
        },
        (err) => {
          console.warn('Firestore orders sync notice:', err);
        }
      );
      return () => unsubscribeOrders();
    } catch (e) {
      console.warn('Firestore listener setup warning:', e);
    }
  }, [isAuthenticated]);

  const handleGoogleLogin = async () => {
    setLoginError('');
    setIsLoggingIn(true);
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      const result = await signInWithPopup(auth, provider);
      if (result.user.email?.toLowerCase() !== 'meskcleaning@gmail.com') {
        setLoginError(`عفواً، حساب جوجل (${result.user.email}) غير مصرح له بالدخول. البريد الإلكتروني المصرح له فقط هو: meskcleaning@gmail.com`);
        await signOut(auth);
        setIsAuthenticated(false);
        setAdminAuthenticated(false);
      } else {
        setIsAuthenticated(true);
        setAdminAuthenticated(true);
        loadAll();
      }
    } catch (err: any) {
      console.error('Google Sign-In Error:', err);
      if (err.code !== 'auth/popup-closed-by-user') {
        setLoginError('حدث خطأ أثناء تسجيل الدخول باستخدام جوجل. يرجى التأكد من الاتصال بالإنترنت والمحاولة مجدداً.');
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    if (username.trim() === 'admin' && password.trim() === 'meskclean2026') {
      setIsAuthenticated(true);
      setAdminAuthenticated(true);
      loadAll();
    } else {
      setLoginError('اسم المستخدم أو كلمة المرور غير صحيحة. يرجى المحاولة مجدداً.');
    }
  };

  const handleLogout = async () => {
    setIsAuthenticated(false);
    setAdminAuthenticated(false);
    try {
      await signOut(auth);
    } catch {}
  };

  const triggerNotification = (msg: string) => {
    setSaveSuccessMsg(msg);
    setTimeout(() => setSaveSuccessMsg(''), 3000);
  };

  // Orders handlers
  const handleStatusChange = (orderId: string, status: BookingRequestRecord['status']) => {
    updateStoredOrderStatus(orderId, status);
    setOrders(getStoredOrders());
    triggerNotification('تم تحديث حالة الطلب بنجاح');
  };

  const handleDeleteOrder = (orderId: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذا الطلب نهائياً؟')) {
      deleteStoredOrder(orderId);
      setOrders(getStoredOrders());
      triggerNotification('تم حذف الطلب بنجاح');
    }
  };

  // Filtered orders
  const filteredOrders = orders.filter((o) => {
    const matchesFilter = orderFilter === 'all' || o.status === orderFilter;
    const matchesSearch =
      o.fullName.toLowerCase().includes(orderSearch.toLowerCase()) ||
      o.phone.includes(orderSearch) ||
      o.id.toLowerCase().includes(orderSearch.toLowerCase()) ||
      o.district.toLowerCase().includes(orderSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Export all orders to a downloadable CSV file (backup, since orders are only
  // stored in this browser's local storage and could be lost if it's cleared)
  const handleExportOrdersCSV = () => {
    if (orders.length === 0) return;
    const headers = ['رقم الطلب', 'التاريخ', 'الاسم', 'الجوال', 'الخدمة', 'المدينة', 'الحي', 'العنوان', 'الحالة', 'ملاحظات'];
    const rows = orders.map((o) => [
      o.id,
      new Date(o.createdAt).toLocaleString('ar-SA'),
      o.fullName,
      o.phone,
      o.serviceName,
      o.city,
      o.district,
      o.address || '',
      o.status,
      (o.notes || '').replace(/\n/g, ' ')
    ]);
    const csvContent = [headers, ...rows]
      .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','))
      .join('\n');
    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `mesk-clean-orders-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Services save
  const handleSaveService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingService) return;
    const updated = services.map((s) => (s.id === editingService.id ? editingService : s));
    setServices(updated);
    saveStoredServices(updated);
    setEditingService(null);
    triggerNotification('تم حفظ بيانات الخدمة بنجاح');
  };

  // FAQs save
  const handleSaveFaq = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingFaq) return;
    let updated: FAQItem[];
    if (editingFaq.id.startsWith('new-')) {
      const newFaq = { ...editingFaq, id: `faq-${Date.now()}` };
      updated = [...faqs, newFaq];
    } else {
      updated = faqs.map((f) => (f.id === editingFaq.id ? editingFaq : f));
    }
    setFaqs(updated);
    saveStoredFAQs(updated);
    setEditingFaq(null);
    triggerNotification('تم حفظ السؤال بنجاح');
  };

  const handleDeleteFaq = (id: string) => {
    if (window.confirm('هل تريد حذف هذا السؤال؟')) {
      const updated = faqs.filter((f) => f.id !== id);
      setFaqs(updated);
      saveStoredFAQs(updated);
      triggerNotification('تم حذف السؤال بنجاح');
    }
  };

  // Testimonials save
  const handleSaveTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTestimonial) return;
    let updated: TestimonialItem[];
    if (editingTestimonial.id.startsWith('new-')) {
      const newTestimonial = { ...editingTestimonial, id: `test-${Date.now()}` };
      updated = [...testimonials, newTestimonial];
    } else {
      updated = testimonials.map((t) => (t.id === editingTestimonial.id ? editingTestimonial : t));
    }
    setTestimonials(updated);
    saveStoredTestimonials(updated);
    setEditingTestimonial(null);
    triggerNotification('تم حفظ التقييم بنجاح');
  };

  const handleDeleteTestimonial = (id: string) => {
    if (window.confirm('هل تريد حذف هذا التقييم؟')) {
      const updated = testimonials.filter((t) => t.id !== id);
      setTestimonials(updated);
      saveStoredTestimonials(updated);
      triggerNotification('تم حذف التقييم');
    }
  };

  // Company settings save
  const handleSaveCompanySettings = (e: React.FormEvent) => {
    e.preventDefault();
    saveStoredCompanySettings(companySettings);
    triggerNotification('تم تحديث بيانات الشركة وتفاصيل الاتصال بنجاح');
  };

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4 font-tajawal">
        <div className="max-w-md w-full p-8 rounded-3xl bg-slate-800/90 border border-slate-700 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto border border-cyan-500/20">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-black tracking-tight">
              لوحة تحكم مسك كلين الإدارية
            </h1>
            <p className="text-xs text-slate-400">
              تسجيل الدخول الآمن عبر Google Authentication
            </p>
          </div>

          {loginError && (
            <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs flex items-start gap-2.5 leading-relaxed">
              <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
              <span>{loginError}</span>
            </div>
          )}

          <div className="space-y-4">
            {/* Google Sign-In Button */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={isLoggingIn}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-lg flex items-center justify-center gap-3 border border-slate-200 disabled:opacity-60 cursor-pointer active:scale-[0.99]"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>{isLoggingIn ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول باستخدام جوجل (Google)'}</span>
            </button>

            <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-900/50 text-xs text-cyan-300 space-y-1.5 leading-relaxed text-center">
              <p className="font-bold text-cyan-200">البريد الإلكتروني المصرح له بالوصول:</p>
              <p className="font-mono dir-ltr text-white text-xs bg-cyan-900/60 py-1 px-2.5 rounded border border-cyan-500/30 inline-block font-semibold">
                meskcleaning@gmail.com
              </p>
            </div>

            <div className="relative my-4 flex items-center justify-center">
              <div className="border-t border-slate-700 w-full"></div>
              <span className="bg-slate-800 px-3 text-[11px] text-slate-400 absolute font-medium">أو عبر الحساب المحلي</span>
            </div>

            <form onSubmit={handleLogin} className="space-y-3 pt-1">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  اسم المستخدم
                </label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  كلمة المرور
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-slate-700 hover:bg-slate-600 transition-colors shadow"
              >
                دخول بالحساب المحلي
              </button>
            </form>

            <button
              type="button"
              onClick={onBackToSite}
              className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-slate-400 hover:text-white transition-colors"
            >
              العودة إلى الموقع الرئيسي
            </button>
          </div>
        </div>
      </div>
    );
  }

  // DASHBOARD MAIN SCREEN
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-tajawal flex flex-col">
      {/* Top Bar */}
      <header className="bg-slate-800 border-b border-slate-700 px-4 sm:px-8 py-3.5 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-cyan-500 text-white font-black flex items-center justify-center text-sm shadow-md">
            M
          </div>
          <div>
            <h1 className="text-base font-black text-white">لوحة تحكم مسك كلين</h1>
            <span className="text-[11px] text-cyan-400 font-bold">Mesk Clean Admin Portal</span>
          </div>
        </div>

        {/* Global Notification banner */}
        {saveSuccessMsg && (
          <div className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs animate-in fade-in">
            <CheckCircle2 className="w-4 h-4" />
            <span>{saveSuccessMsg}</span>
          </div>
        )}

        <div className="flex items-center gap-2">
          {currentUser?.email && (
            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-cyan-200 bg-slate-700/60 border border-slate-600/50 dir-ltr">
              <UserIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>{currentUser.email}</span>
            </span>
          )}

          <button
            type="button"
            onClick={onBackToSite}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-colors"
          >
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            <span>عرض الموقع</span>
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 transition-colors"
            title="تسجيل الخروج"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">خروج</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Sidebar Nav */}
        <aside className="w-full md:w-64 bg-slate-850 p-4 border-b md:border-b-0 md:border-e border-slate-800 flex md:flex-col gap-1.5 overflow-x-auto shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('orders')}
            className={`flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors shrink-0 ${
              activeTab === 'orders'
                ? 'bg-cyan-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <div className="flex items-center gap-2">
              <ClipboardList className="w-4 h-4" />
              <span>طلبات العملاء</span>
            </div>
            {orders.length > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-cyan-800 text-cyan-200 text-[10px] font-bold">
                {orders.length}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('services')}
            className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors shrink-0 ${
              activeTab === 'services'
                ? 'bg-cyan-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>إدارة الخدمات</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('blog')}
            className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors shrink-0 ${
              activeTab === 'blog'
                ? 'bg-cyan-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>مقالات المدونة</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('faqs')}
            className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors shrink-0 ${
              activeTab === 'faqs'
                ? 'bg-cyan-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>الأسئلة الشائعة</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('testimonials')}
            className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors shrink-0 ${
              activeTab === 'testimonials'
                ? 'bg-cyan-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Star className="w-4 h-4" />
            <span>آراء العملاء</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors shrink-0 ${
              activeTab === 'settings'
                ? 'bg-cyan-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>بيانات التواصل والشركة</span>
          </button>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
          {/* TAB 1: ORDERS */}
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white">طلبات العملاء وحجوزات الموقع</h2>
                  <p className="text-xs text-slate-400">إجمالي الطلبات المستلمة: {orders.length}</p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute start-3 top-3" />
                    <input
                      type="text"
                      value={orderSearch}
                      onChange={(e) => setOrderSearch(e.target.value)}
                      placeholder="بحث بالاسم أو الهاتف أو الكود..."
                      className="ps-8 pe-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>

                  <select
                    value={orderFilter}
                    onChange={(e) => setOrderFilter(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
                  >
                    <option value="all">جميع الحالات</option>
                    <option value="new">جديد</option>
                    <option value="contacted">تم التواصل</option>
                    <option value="in_progress">قيد التنفيذ</option>
                    <option value="completed">مكتمل</option>
                    <option value="cancelled">ملغي</option>
                  </select>

                  <button
                    type="button"
                    onClick={handleExportOrdersCSV}
                    disabled={orders.length === 0}
                    title="تصدير جميع الطلبات كنسخة احتياطية (CSV)"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>تصدير CSV</span>
                  </button>
                </div>
              </div>

              {filteredOrders.length === 0 ? (
                <div className="p-12 text-center rounded-2xl bg-slate-800/50 border border-slate-800 space-y-3">
                  <ClipboardList className="w-12 h-12 text-slate-600 mx-auto" />
                  <p className="text-sm text-slate-400">لا توجد طلبات تطابق الفلتر الحالي.</p>
                </div>
              ) : (
                <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-800/40">
                  <table className="w-full text-start text-xs">
                    <thead className="bg-slate-800 text-slate-300 font-bold border-b border-slate-700">
                      <tr>
                        <th className="p-3.5 text-start">رقم الطلب</th>
                        <th className="p-3.5 text-start">العميل</th>
                        <th className="p-3.5 text-start">الخدمة</th>
                        <th className="p-3.5 text-start">الحي / العنوان</th>
                        <th className="p-3.5 text-start">الموعد</th>
                        <th className="p-3.5 text-start">الحالة</th>
                        <th className="p-3.5 text-start">الإجراءات</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {filteredOrders.map((o) => (
                        <tr key={o.id} className="hover:bg-slate-800/60 transition-colors">
                          <td className="p-3.5 font-mono text-cyan-400 font-bold">
                            {o.id}
                            <div className="text-[10px] text-slate-500">
                              {new Date(o.createdAt).toLocaleDateString('ar-SA')}
                            </div>
                          </td>
                          <td className="p-3.5">
                            <div className="font-bold text-white flex items-center gap-1.5">
                              {o.customerType === 'corporate' ? (
                                <Building className="w-3.5 h-3.5 text-blue-400" />
                              ) : (
                                <UserIcon className="w-3.5 h-3.5 text-slate-400" />
                              )}
                              <span>{o.fullName}</span>
                            </div>
                            <div className="text-slate-400 font-mono text-[11px]" dir="ltr">
                              {o.phone}
                            </div>
                          </td>
                          <td className="p-3.5">
                            <span className="font-medium text-slate-200">{o.serviceName}</span>
                            <span className="block text-[10px] text-slate-400">{o.propertyType}</span>
                          </td>
                          <td className="p-3.5">
                            <span className="font-bold text-slate-200">{o.district}</span>
                            {o.address && (
                              <span className="block text-[10px] text-slate-400 max-w-xs truncate">
                                {o.address}
                              </span>
                            )}
                          </td>
                          <td className="p-3.5 text-slate-300">
                            <div>{o.date || 'أقرب موعد'}</div>
                            <div className="text-[10px] text-slate-500">{o.preferredTime}</div>
                          </td>
                          <td className="p-3.5">
                            <select
                              value={o.status}
                              onChange={(e) => handleStatusChange(o.id, e.target.value as any)}
                              className={`px-2 py-1 rounded-lg text-xs font-bold border ${
                                o.status === 'new'
                                  ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                                  : o.status === 'completed'
                                  ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                                  : o.status === 'in_progress'
                                  ? 'bg-blue-500/10 text-blue-300 border-blue-500/30'
                                  : 'bg-slate-700 text-slate-300 border-slate-600'
                              }`}
                            >
                              <option value="new">جديد</option>
                              <option value="contacted">تم التواصل</option>
                              <option value="in_progress">قيد التنفيذ</option>
                              <option value="completed">مكتمل</option>
                              <option value="cancelled">ملغي</option>
                            </select>
                          </td>
                          <td className="p-3.5">
                            <div className="flex items-center gap-1.5">
                              <a
                                href={`https://wa.me/966${o.phone.replace(/^0+/, '')}`}
                                target="_blank"
                                rel="noreferrer"
                                className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                                title="مراسلة عبر واتساب"
                              >
                                <MessageCircle className="w-4 h-4" />
                              </a>
                              <a
                                href={`tel:${o.phone}`}
                                className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                                title="اتصال هاتفي"
                              >
                                <Phone className="w-4 h-4" />
                              </a>
                              <button
                                type="button"
                                onClick={() => handleDeleteOrder(o.id)}
                                className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition-colors"
                                title="حذف الطلب"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: SERVICES */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white">إدارة الخدمات الـ 11 المعتمدة</h2>
                  <p className="text-xs text-slate-400">تعديل نصوص ووصف وتفاصيل الخدمات المعروضة</p>
                </div>
              </div>

              {editingService ? (
                <form onSubmit={handleSaveService} className="p-6 rounded-2xl bg-slate-800 border border-slate-700 space-y-4">
                  <h3 className="text-base font-bold text-cyan-400">تعديل بيانات الخدمة: {editingService.name}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">اسم الخدمة (عربي)</label>
                      <input
                        type="text"
                        required
                        value={editingService.name}
                        onChange={(e) => setEditingService({ ...editingService, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">اسم الخدمة (English)</label>
                      <input
                        type="text"
                        value={editingService.nameEn || ''}
                        onChange={(e) => setEditingService({ ...editingService, nameEn: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">الوصف المختصر (عربي)</label>
                    <textarea
                      rows={2}
                      value={editingService.description}
                      onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">نقاط وتفاصيل الخدمة (كل نقطة في سطر منفصل)</label>
                    <textarea
                      rows={4}
                      value={editingService.details.join('\n')}
                      onChange={(e) => setEditingService({ ...editingService, details: e.target.value.split('\n').filter(Boolean) })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                    />
                  </div>

                  <div className="flex gap-2 justify-end pt-2">
                    <button
                      type="button"
                      onClick={() => setEditingService(null)}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white"
                    >
                      إلغاء
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500"
                    >
                      حفظ التعديلات
                    </button>
                  </div>
                </form>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((srv) => (
                    <div key={srv.id} className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-sm text-white">{srv.name}</h4>
                          <span className="text-[10px] text-cyan-400 font-mono">{srv.id}</span>
                        </div>
                        <p className="text-xs text-slate-400 line-clamp-2 mb-3">{srv.description}</p>
                      </div>

                      <div className="pt-3 border-t border-slate-700/50 flex justify-between items-center">
                        <span className="text-[11px] text-slate-500">{srv.details.length} نقاط تفصيلية</span>
                        <button
                          type="button"
                          onClick={() => setEditingService(srv)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                          <span>تعديل</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: BLOG */}
          {activeTab === 'blog' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white">مقالات المدونة ودليل النظافة</h2>
                  <p className="text-xs text-slate-400">إدارة المقالات والنصائح التثقيفية المنشورة</p>
                </div>
              </div>

              <div className="space-y-4">
                {blogPosts.map((post) => (
                  <div key={post.slug} className="p-4 rounded-2xl bg-slate-800 border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-sm text-white">{post.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-1">{post.excerpt}</p>
                      <div className="flex items-center gap-3 text-[11px] text-cyan-400 mt-2">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>{post.sections.length} أقسام</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs px-2 py-1 rounded bg-slate-900 text-slate-400 font-mono">
                        /{post.slug}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: FAQS */}
          {activeTab === 'faqs' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white">الأسئلة الشائعة (FAQ)</h2>
                  <p className="text-xs text-slate-400">إضافة وتعديل الأسئلة مع دعم Schema.org</p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setEditingFaq({
                      id: `new-${Date.now()}`,
                      question: '',
                      questionEn: '',
                      answer: '',
                      answerEn: '',
                      category: 'عام'
                    })
                  }
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>إضافة سؤال جديد</span>
                </button>
              </div>

              {editingFaq ? (
                <form onSubmit={handleSaveFaq} className="p-6 rounded-2xl bg-slate-800 border border-slate-700 space-y-4">
                  <h3 className="text-sm font-bold text-cyan-400">بيانات السؤال والإجابة</h3>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">نص السؤال (عربي)</label>
                    <input
                      type="text"
                      required
                      value={editingFaq.question}
                      onChange={(e) => setEditingFaq({ ...editingFaq, question: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">نص السؤال (English)</label>
                    <input
                      type="text"
                      value={editingFaq.questionEn}
                      onChange={(e) => setEditingFaq({ ...editingFaq, questionEn: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">الإجابة (عربي)</label>
                    <textarea
                      rows={3}
                      required
                      value={editingFaq.answer}
                      onChange={(e) => setEditingFaq({ ...editingFaq, answer: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">الإجابة (English)</label>
                    <textarea
                      rows={3}
                      value={editingFaq.answerEn}
                      onChange={(e) => setEditingFaq({ ...editingFaq, answerEn: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                    />
                  </div>

                  <div className="flex gap-2 justify-end pt-2">
                    <button
                      type="button"
                      onClick={() => setEditingFaq(null)}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white"
                    >
                      إلغاء
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500"
                    >
                      حفظ السؤال
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-3">
                  {faqs.map((faq) => (
                    <div key={faq.id} className="p-4 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-between gap-4">
                      <div>
                        <h4 className="font-bold text-sm text-white">{faq.question}</h4>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-1">{faq.answer}</p>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={() => setEditingFaq(faq)}
                          className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20"
                          title="تعديل"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteFaq(faq.id)}
                          className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20"
                          title="حذف"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 5: TESTIMONIALS */}
          {activeTab === 'testimonials' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white">آراء وتقييمات العملاء</h2>
                  <p className="text-xs text-slate-400">إدارة تجارب العملاء المعروضة على الموقع</p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setEditingTestimonial({
                      id: `new-${Date.now()}`,
                      name: '',
                      nameEn: '',
                      customerType: 'individual',
                      rating: 5,
                      service: 'تنظيف منازل',
                      serviceEn: 'Home Cleaning',
                      comment: '',
                      commentEn: '',
                      date: 'اليوم',
                      district: 'حي الروضة'
                    })
                  }
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>إضافة تقييم جديد</span>
                </button>
              </div>

              {editingTestimonial ? (
                <form onSubmit={handleSaveTestimonial} className="p-6 rounded-2xl bg-slate-800 border border-slate-700 space-y-4">
                  <h3 className="text-sm font-bold text-cyan-400">إدخال تقييم العميل</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">اسم العميل (عربي)</label>
                      <input
                        type="text"
                        required
                        value={editingTestimonial.name}
                        onChange={(e) => setEditingTestimonial({ ...editingTestimonial, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">نوع العميل</label>
                      <select
                        value={editingTestimonial.customerType}
                        onChange={(e) => setEditingTestimonial({ ...editingTestimonial, customerType: e.target.value as any })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                      >
                        <option value="individual">فرد</option>
                        <option value="corporate">شركة / مؤسسة</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">التقييم (النجوم)</label>
                      <select
                        value={editingTestimonial.rating}
                        onChange={(e) => setEditingTestimonial({ ...editingTestimonial, rating: parseInt(e.target.value, 10) })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                      >
                        <option value={5}>5 نجوم ★★★★★</option>
                        <option value={4}>4 نجوم ★★★★</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">نص التجربة أو الرأي (عربي)</label>
                    <textarea
                      rows={3}
                      required
                      value={editingTestimonial.comment}
                      onChange={(e) => setEditingTestimonial({ ...editingTestimonial, comment: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                    />
                  </div>

                  <div className="flex gap-2 justify-end pt-2">
                    <button
                      type="button"
                      onClick={() => setEditingTestimonial(null)}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white"
                    >
                      إلغاء
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500"
                    >
                      حفظ التقييم
                    </button>
                  </div>
                </form>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {testimonials.map((test) => (
                    <div key={test.id} className="p-4 rounded-2xl bg-slate-800 border border-slate-700 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-sm text-white">{test.name}</h4>
                          <span className="text-amber-400 font-bold text-xs">{'★'.repeat(test.rating || 5)}</span>
                        </div>
                        <p className="text-xs text-slate-300 italic mb-2">"{test.comment}"</p>
                      </div>
                      <div className="pt-2 border-t border-slate-700/50 flex items-center justify-between">
                        <span className="text-[11px] text-cyan-400">{test.service} • {test.district || 'جدة'}</span>
                        <button
                          type="button"
                          onClick={() => handleDeleteTestimonial(test.id)}
                          className="p-1 rounded-lg text-rose-400 hover:bg-rose-500/20"
                          title="حذف"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 6: SETTINGS */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-white">بيانات الشركة والتواصل</h2>
                <p className="text-xs text-slate-400">تحديث أرقام الهاتف والواتساب ومواعيد العمل وحسابات التواصل</p>
              </div>

              <form onSubmit={handleSaveCompanySettings} className="p-6 rounded-2xl bg-slate-800 border border-slate-700 space-y-4 max-w-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">رقم الاتصال الرئيسي (Phone 1)</label>
                    <input
                      type="text"
                      dir="ltr"
                      value={companySettings.phone1}
                      onChange={(e) => setCompanySettings({ ...companySettings, phone1: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">رقم الاتصال الثاني (Phone 2)</label>
                    <input
                      type="text"
                      dir="ltr"
                      value={companySettings.phone2}
                      onChange={(e) => setCompanySettings({ ...companySettings, phone2: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">رقم الواتساب للاستقبال (مع مفتاح الدولة)</label>
                    <input
                      type="text"
                      dir="ltr"
                      value={companySettings.whatsapp}
                      onChange={(e) => setCompanySettings({ ...companySettings, whatsapp: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">البريد الإلكتروني</label>
                    <input
                      type="email"
                      dir="ltr"
                      value={companySettings.email}
                      onChange={(e) => setCompanySettings({ ...companySettings, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">أوقات العمل واستقبال الطلبات</label>
                  <input
                    type="text"
                    value={companySettings.workingHours}
                    onChange={(e) => setCompanySettings({ ...companySettings, workingHours: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">رابط انستغرام (Instagram)</label>
                  <input
                    type="url"
                    dir="ltr"
                    value={companySettings.instagram}
                    onChange={(e) => setCompanySettings({ ...companySettings, instagram: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                  />
                </div>

                <div className="pt-3 border-t border-slate-700 flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors shadow-md"
                  >
                    <Save className="w-4 h-4" />
                    <span>حفظ كافة التغييرات</span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
