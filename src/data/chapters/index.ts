// Import all chapters
import { chapter1 } from './chapter1';
import { chapter2 } from './chapter2';
import { chapter3 } from './chapter3';
import { chapter4 } from './chapter4';
import { chapter5 } from './chapter5';
import { chapter7 } from './chapter7';
import { chapter9 } from './chapter9';
import { chapter10 } from './chapter10';

import type { Chapter } from '../../types';

// Export all chapters as an array
export const chapters: Chapter[] = [
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
  chapter7,
  chapter9,
  chapter10
];

// Export individual chapters for direct import
export {
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
  chapter7,
  chapter9,
  chapter10
};

export default chapters;
