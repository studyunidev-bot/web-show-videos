export interface TgatSectionItem {
  label: string;
  description: string;
  timestamp: number;
}

export interface TgatSection {
  title: string;
  subtitle?: string;
  items: TgatSectionItem[];
}

export interface TgatData {
  slug: string;
  title: string;
  subjectName: string;
  setNumber: string;
  questionCount: string;
  duration: string;
  video: string;
  poster: string;
  shopUrl?: string;
  sections: TgatSection[];
}
