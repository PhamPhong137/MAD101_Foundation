export interface TrueFalseQuestion {
  id: string;
  question: string;
  answer: boolean;
  explanation: string;
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  titleVi: string;
  description: string;
  icon: string;
  color: string;
  topics: Topic[];
  quiz?: TrueFalseQuestion[];
}

export interface Topic {
  id: string;
  title: string;
  content: ContentBlock[];
}

export interface ContentBlock {
  type: 'text' | 'formula' | 'table' | 'note' | 'theorem' | 'example' | 'list' | 'image';
  content: string | string[] | TableData;
  title?: string;
  imageSrc?: string;
}

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface NavItem {
  label: string;
  path: string;
  icon?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  chapter: string;
}
