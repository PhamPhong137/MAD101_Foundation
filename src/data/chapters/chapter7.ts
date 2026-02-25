import type { Chapter } from '../../types';

export const chapter7: Chapter = {
  id: 'chapter-7',
  number: 7,
  title: 'Advanced Counting Techniques',
  titleVi: 'Kỹ thuật đếm nâng cao',
  description: 'Quan hệ đệ quy, divide-and-conquer, Master Theorem',
  icon: '🐰',
  color: 'from-pink-500 to-rose-500',
  topics: [
    {
      id: 'recurrence-relations',
      title: 'Recurrence Relations (Quan hệ Đệ quy)',
      content: [
        {
          type: 'text',
          content: 'A recurrence relation defines a sequence based on previous terms.'
        },
        {
          type: 'example',
          title: 'Example 1: Compound Interest',
          content: 'A person deposited $10,000 in a saving account at 11% annual interest compounded annually. How much after 30 years? | Let Pₙ = amount after n years | P₀ = 10000 | Pₙ = Pₙ₋₁ + 0.11Pₙ₋₁ = 1.11Pₙ₋₁ | Solution: Pₙ = 10000(1.11)ⁿ | P₃₀ = 10000(1.11)³⁰'
        },
        {
          type: 'example',
          title: 'Example 2: Rabbit Problem (Fibonacci)',
          content: 'A young pair of rabbits (one of each sex) is placed on an island. A pair does not breed until 2 months old. After 2 months, each month they produce a new pair. Find recurrence relation for number of pairs after n months. | Let fₙ = number of pairs after n months | f₁ = 1, f₂ = 1 | fₙ = fₙ₋₁ + fₙ₋₂ (new pairs = pairs from last month + new births from pairs ≥ 2 months old) | Sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...'
        },
        {
          type: 'example',
          title: 'Example 3: Tower of Hanoi',
          content: '64 disks on first peg in order of size. Move all to another peg, never placing larger disk on smaller. Find minimum moves. | Let Hₙ = minimum moves for n disks | H₁ = 1 | Hₙ = 2Hₙ₋₁ + 1 (move n-1 to spare, move largest, move n-1 back) | Solution: Hₙ = 2ⁿ - 1 | H₆₄ = 2⁶⁴ - 1 ≈ 1.8 × 10¹⁹ moves!'
        },
        {
          type: 'example',
          title: 'Example 4: Bit Strings Without Consecutive 0s',
          content: 'How many bit strings of length 10 have no two consecutive 0s? | Let aₙ = number of such strings of length n | a₁ = 2 (0, 1) | a₂ = 3 (01, 10, 11) | aₙ = aₙ₋₁ + aₙ₋₂ (strings ending in 1: aₙ₋₁ ways, ending in 10: aₙ₋₂ ways) | This is Fibonacci! a₁₀ = 144'
        }
      ]
    },
    {
      id: 'divide-and-conquer',
      title: 'Divide-and-Conquer and Recurrence Relations',
      content: [
        {
          type: 'theorem',
          title: 'Divide-and-Conquer Recurrence',
          content: 'A divide-and-conquer recurrence relation has the form: f(n) = af(n/b) + g(n) | where a, b are constants and g(n) is some function.'
        },
        {
          type: 'example',
          title: 'Merge Sort Recurrence',
          content: 'Recall merge sort algorithm divides list in half, sorts each, then merges. | Let f(n) = number of comparisons for list of size n | f(1) = 0 | f(n) = 2f(n/2) + n (divide into 2 halves, merge takes n comparisons) | By Master Theorem: f(n) = O(n log n)'
        },
        {
          type: 'example',
          title: 'Example: Simple Recurrence',
          content: 'Let f(1) = 2 and f(n) = f(n/3) + 1. Find f(81), f(3ᵏ). | f(3) = f(1) + 1 = 3 | f(9) = f(3) + 1 = 4 | f(27) = f(9) + 1 = 5 | f(81) = f(27) + 1 = 6 | Pattern: f(3ᵏ) = k + 2'
        },
        {
          type: 'theorem',
          title: 'Master Theorem',
          content: 'Let f be an increasing function satisfying f(n) = af(n/b) + cnᵈ for n = bᵏ, where k is a positive integer, a ≥ 1, b > 1, c, d > 0. Then:'
        },
        {
          type: 'formula',
          content: 'f(n) = O(nᵈ) if a < bᵈ | f(n) = O(nᵈ log n) if a = bᵈ | f(n) = O(n^(log_b a)) if a > bᵈ'
        },
        {
          type: 'example',
          title: 'Master Theorem Examples',
          content: '(a) f(n) = 2f(n/2) + n: a=2, b=2, d=1 → a = bᵈ → f(n) = O(n log n) | (b) f(n) = 4f(n/2) + n: a=4, b=2, d=1 → a > bᵈ → f(n) = O(n²) | (c) f(n) = 2f(n/2) + n²: a=2, b=2, d=2 → a < bᵈ → f(n) = O(n²)'
        },
        {
          type: 'theorem',
          title: 'Fast Multiplication Algorithm',
          content: 'Conventional multiplication of two n-bit integers: O(n²). | Fast algorithm: Let a = 2ⁿA₁ + A₀, b = 2ⁿB₁ + B₀ | ab = (2²ⁿ + 2ⁿ)A₁B₁ + 2ⁿ(A₁-A₀)(B₀-B₁) + (2ⁿ + 1)A₀B₀ | Only 3 multiplications instead of 4! | Recurrence: f(2n) = 3f(n) + Cn | By Master Theorem: f(n) = O(n^(log₂ 3)) ≈ O(n^1.6)'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q7-1',
      question: 'The Fibonacci sequence is defined by fₙ = fₙ₋₁ + fₙ₋₂ with f₁ = f₂ = 1.',
      answer: true,
      explanation: 'This is the standard definition of the Fibonacci sequence.'
    },
    {
      id: 'q7-2',
      question: 'The Tower of Hanoi with n disks requires exactly 2ⁿ - 1 moves.',
      answer: true,
      explanation: 'The recurrence Hₙ = 2Hₙ₋₁ + 1 with H₁ = 1 gives Hₙ = 2ⁿ - 1.'
    },
    {
      id: 'q7-3',
      question: 'Merge sort has time complexity O(n²).',
      answer: false,
      explanation: 'Merge sort has O(n log n) complexity, much better than O(n²).'
    },
    {
      id: 'q7-4',
      question: 'In the Master Theorem, if a = bᵈ, then f(n) = O(nᵈ log n).',
      answer: true,
      explanation: 'This is the second case of the Master Theorem.'
    },
    {
      id: 'q7-5',
      question: 'The fast multiplication algorithm reduces complexity from O(n²) to approximately O(n^1.6).',
      answer: true,
      explanation: 'By using 3 multiplications instead of 4, we get O(n^(log₂ 3)) ≈ O(n^1.6).'
    },
    {
      id: 'q7-6',
      question: 'A divide-and-conquer recurrence has the form f(n) = af(n/b) + g(n).',
      answer: true,
      explanation: 'This is the standard form for divide-and-conquer algorithms.'
    },
    {
      id: 'q7-7',
      question: 'The number of bit strings of length n without consecutive 0s follows the Fibonacci sequence.',
      answer: true,
      explanation: 'The recurrence aₙ = aₙ₋₁ + aₙ₋₂ is the same as Fibonacci.'
    },
    {
      id: 'q7-8',
      question: 'If f(n) = 4f(n/2) + n, then by Master Theorem f(n) = O(n log n).',
      answer: false,
      explanation: 'Here a=4, b=2, d=1, so a > bᵈ. Therefore f(n) = O(n²).'
    },
    {
      id: 'q7-9',
      question: 'Compound interest with rate r follows the recurrence Pₙ = (1+r)Pₙ₋₁.',
      answer: true,
      explanation: 'Each year the amount is multiplied by (1+r).'
    },
    {
      id: 'q7-10',
      question: 'The Master Theorem can be applied to any recurrence relation.',
      answer: false,
      explanation: 'Master Theorem only applies to divide-and-conquer recurrences of the form f(n) = af(n/b) + cnᵈ.'
    }
  ]
};
