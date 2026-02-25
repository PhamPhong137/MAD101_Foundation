import type { Chapter } from '../../types';

export const chapter5: Chapter = {
  id: 'chapter-5',
  number: 5,
  title: 'Counting',
  titleVi: 'Đếm',
  description: 'Nguyên lý đếm cơ bản, hoán vị, tổ hợp',
  icon: '🔢',
  color: 'from-yellow-500 to-orange-500',
  topics: [
    {
      id: 'basics-of-counting',
      title: 'The Basics of Counting (Cơ bản về Đếm)',
      content: [
        {
          type: 'theorem',
          title: 'The Sum Rule (Nguyên lý Cộng)',
          content: 'Let A and B be two disjoint sets. Then |A ∪ B| = |A| + |B|'
        },
        {
          type: 'theorem',
          title: 'The Inclusion-Exclusion Principle',
          content: 'Let A and B be two arbitrary sets. Then: |A ∪ B| = |A| + |B| - |A ∩ B|'
        },
        {
          type: 'example',
          title: 'Example 1: Class Representative',
          content: 'A class has 24 male students and 2 female students. The number of choices to pick someone from this class to be a representative to University\'s Student council is 24 + 2 = 26.'
        },
        {
          type: 'theorem',
          title: 'Counting Numbers',
          content: 'The number of positive integers not exceeding n and divisible by k is ⌊n/k⌋.'
        },
        {
          type: 'example',
          title: 'Example 3: Counting Divisible Numbers',
          content: '(a) The number of positive integers not exceeding 1000 and divisible by 12: ⌊1000/12⌋ = 83 | (b) The number of positive integers less than 1000, greater than 100 and divisible by 12: ⌊999/12⌋ - ⌊100/12⌋ = 83 - 8 = 75 | (c) The number of integers not exceeding 1000 and divisible by 12 or 8: |A ∪ B| = |A| + |B| - |A ∩ B| = ⌊1000/12⌋ + ⌊1000/8⌋ - ⌊1000/24⌋ = 83 + 125 - 41 = 167 | (d) The number of positive integers less than 1000, divisible by 12 but not divisible by 8: |A - B| = |A| - |A ∩ B| = 83 - 41 = 42'
        },
        {
          type: 'theorem',
          title: 'Product Rule (Nguyên lý Nhân)',
          content: 'Let A and B be two sets. Then |A × B| = |A| · |B|'
        },
        {
          type: 'example',
          title: 'Example 1: Dancing Contest',
          content: 'A class has 24 male students and 2 female students. The number of choices to pick a pair of one male and one female student for a dancing contest is 24 × 2 = 48.'
        },
        {
          type: 'example',
          title: 'Example 2: Bit Strings',
          content: 'The number of bit strings of length n is 2ⁿ. | Explanation: Each position has 2 choices (0 or 1), and there are n positions, so 2 × 2 × ... × 2 (n times) = 2ⁿ.'
        },
        {
          type: 'example',
          title: 'Example 3: Bit Strings with Conditions',
          content: 'Count the number of bit strings of length 7 that either start with a 0 or end with the two bits 10. | Let A = strings starting with 0 → |A| = 2⁶ = 64 | Let B = strings ending with 10 → |B| = 2⁵ = 32 | A ∩ B = strings starting with 0 AND ending with 10 → |A ∩ B| = 2⁴ = 16 | Answer: |A ∪ B| = 64 + 32 - 16 = 80'
        },
        {
          type: 'theorem',
          title: 'Counting Functions',
          content: 'Let A and B be finite sets with |A| = m and |B| = n.'
        },
        {
          type: 'table',
          title: 'Number of Functions',
          content: {
            headers: ['Type', 'Formula', 'Condition'],
            rows: [
              ['All functions f: A → B', 'nᵐ', 'Always possible'],
              ['One-to-one functions', 'n(n-1)(n-2)...(n-m+1) = n!/(n-m)!', 'm ≤ n'],
              ['Onto functions', 'Complex formula', 'm ≥ n']
            ]
          }
        },
        {
          type: 'example',
          title: 'Example 4: Counting Functions',
          content: '(a) The number of functions from a set of 5 elements to a set of 3 elements: 3⁵ = 243 | (b) The number of one-to-one functions from a set of 5 elements to a set of 3 elements: 0 (impossible, since 5 > 3) | (c) The number of one-to-one functions from a set of 3 elements to a set of 5 elements: 5 × 4 × 3 = 60'
        },
        {
          type: 'note',
          title: '💡 Key Insight',
          content: 'Sum Rule: Use when choices are mutually exclusive (OR) | Product Rule: Use when making a sequence of independent choices (AND) | Inclusion-Exclusion: Use when sets overlap'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q5-1',
      question: 'If A and B are disjoint sets with |A| = 5 and |B| = 3, then |A ∪ B| = 8.',
      answer: true,
      explanation: 'For disjoint sets, |A ∪ B| = |A| + |B| = 5 + 3 = 8.'
    },
    {
      id: 'q5-2',
      question: 'The number of bit strings of length 5 is 32.',
      answer: true,
      explanation: 'Each of 5 positions has 2 choices, so 2⁵ = 32.'
    },
    {
      id: 'q5-3',
      question: 'The number of positive integers not exceeding 100 and divisible by 7 is 14.',
      answer: true,
      explanation: '⌊100/7⌋ = ⌊14.28...⌋ = 14.'
    },
    {
      id: 'q5-4',
      question: 'For any two sets A and B, |A ∪ B| = |A| + |B|.',
      answer: false,
      explanation: 'Only true if A and B are disjoint. Generally, |A ∪ B| = |A| + |B| - |A ∩ B|.'
    },
    {
      id: 'q5-5',
      question: 'The number of functions from a 3-element set to a 4-element set is 64.',
      answer: true,
      explanation: 'Each of 3 elements can map to any of 4 elements: 4³ = 64.'
    },
    {
      id: 'q5-6',
      question: 'There exists a one-to-one function from a 5-element set to a 3-element set.',
      answer: false,
      explanation: 'Impossible by pigeonhole principle. Need at least 5 elements in codomain.'
    },
    {
      id: 'q5-7',
      question: 'The number of one-to-one functions from a 3-element set to a 5-element set is 60.',
      answer: true,
      explanation: '5 × 4 × 3 = 60 (choose distinct images for each element).'
    },
    {
      id: 'q5-8',
      question: 'If |A| = 10 and |B| = 15, then |A × B| = 150.',
      answer: true,
      explanation: 'By product rule, |A × B| = |A| · |B| = 10 × 15 = 150.'
    },
    {
      id: 'q5-9',
      question: 'The sum rule applies when we make a sequence of choices.',
      answer: false,
      explanation: 'Sum rule applies to mutually exclusive choices (OR). Product rule applies to sequences (AND).'
    },
    {
      id: 'q5-10',
      question: 'The product rule applies when choices are independent and sequential.',
      answer: true,
      explanation: 'Product rule: multiply the number of ways for each independent step.'
    },
    {
      id: 'q5-11',
      question: 'The number of bit strings of length 8 that start with 1 is 128.',
      answer: true,
      explanation: 'First bit is fixed as 1, remaining 7 bits have 2⁷ = 128 possibilities.'
    },
    {
      id: 'q5-12',
      question: 'If A and B overlap, we must subtract |A ∩ B| when computing |A ∪ B|.',
      answer: true,
      explanation: 'Inclusion-exclusion principle: |A ∪ B| = |A| + |B| - |A ∩ B|.'
    },
    {
      id: 'q5-13',
      question: 'The number of integers from 1 to 100 divisible by both 4 and 6 is ⌊100/12⌋.',
      answer: true,
      explanation: 'Numbers divisible by both 4 and 6 are divisible by lcm(4,6) = 12. So ⌊100/12⌋ = 8.'
    },
    {
      id: 'q5-14',
      question: 'A class with 20 boys and 15 girls has 300 ways to select a boy-girl pair.',
      answer: true,
      explanation: 'By product rule: 20 × 15 = 300.'
    },
    {
      id: 'q5-15',
      question: 'The number of functions from an m-element set to an n-element set is mⁿ.',
      answer: false,
      explanation: 'It\'s nᵐ (each of m elements maps to one of n elements).'
    }
  ]
};
