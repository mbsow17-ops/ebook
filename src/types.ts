export interface Chapter {
  number: string;
  title: string;
  page: number;
}

export interface PracticalExercise {
  title: string;
  description: string;
  steps: string[];
}

export interface SampleChapter {
  chapterNumber: string;
  chapterTitle: string;
  intro: string;
  paragraphs: string[];
  quote: string;
  practicalExercise: PracticalExercise;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  outcome: string;
  verified: boolean;
}

export interface Ebook {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'imposteur' | 'prise-de-parole' | 'estime' | 'affirmation' | 'action';
  categoryLabel: string;
  price: number;
  originalPrice: number;
  coverImage: string;
  author: string;
  authorBio: string;
  pages: number;
  readTime: string;
  publicationYear: number;
  rating: number;
  reviewCount: number;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  keyTakeaways: string[];
  tableOfContents: Chapter[];
  sampleChapter: SampleChapter;
  audioDuration: string;
  bonusIncluded: string;
  featured?: boolean;
  bestseller?: boolean;
}

export interface CartItem {
  ebook: Ebook;
  quantity: number;
  format: 'pack-complet' | 'epub-only';
}
