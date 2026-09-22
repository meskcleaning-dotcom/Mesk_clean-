export interface ServiceItem {
  id: string;
  name: string;
  nameEn?: string;
  description: string;
  descriptionEn?: string;
  details: string[];
  detailsEn?: string[];
  image: string;
  imagePosition: string;
  iconName: string;
  active?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  titleEn?: string;
  excerpt: string;
  excerptEn?: string;
  intro: string;
  introEn?: string;
  image: string;
  imagePosition: string;
  date: string;
  dateEn?: string;
  readTime: string;
  readTimeEn?: string;
  sections: {
    title: string;
    titleEn?: string;
    body: string;
    bodyEn?: string;
  }[];
}

export type CustomerType = 'individual' | 'corporate';

export interface BookingFormData {
  fullName: string;
  phone: string;
  serviceId: string;
  customerType: CustomerType;
  propertyType: string;
  city: string;
  district: string;
  address: string;
  date: string;
  preferredTime: string;
  targetWhatsApp: string;
  notes: string;
}

export type BookingStatus = 'new' | 'contacted' | 'in_progress' | 'completed' | 'cancelled';

export interface BookingRequestRecord extends BookingFormData {
  id: string;
  createdAt: string;
  serviceName: string;
  status: BookingStatus;
}

export interface FAQItem {
  id: string;
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
  category?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  nameEn: string;
  customerType: 'individual' | 'corporate';
  rating: number;
  service: string;
  serviceEn: string;
  comment: string;
  commentEn: string;
  date: string;
  district?: string;
}

export interface CompanySettings {
  arabicName: string;
  englishName: string;
  subtitle: string;
  subtitleEn: string;
  description: string;
  descriptionEn: string;
  city: string;
  cityEn: string;
  address: string;
  addressEn: string;
  phone1: string;
  phone2: string;
  whatsapp: string;
  email: string;
  workingHours: string;
  workingHoursEn: string;
  instagram: string;
  facebook: string;
  tiktok: string;
  pinterest: string;
}

