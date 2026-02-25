import type { Chapter } from '../../types';

export const chapter4: Chapter = {
  id: 'chapter-4',
  number: 4,
  title: 'Induction and Recursion',
  titleVi: 'Quy nạp và Đệ quy',
  description: 'Phương pháp chứng minh quy nạp và định nghĩa đệ quy',
  icon: '🔄',
  color: 'from-green-500 to-teal-500',
  topics: [
    {
      id: 'mathematical-induction',
      title: 'Mathematical Induction (Quy nạp Toán học)',
      content: [
        {
          type: 'text',
          content: 'Mathematical Induction is a proof technique used to prove statements about all positive integers.'
        },
        {
          type: 'theorem',
          title: 'Principle of Mathematical Induction',
          content: 'To prove that P(n) is true for all positive integers n ≥ 1:'
        },
        {
          type: 'list',
          content: [
            '1. Base Step: Prove that P(1) is true',
            '2. Inductive Hypothesis: Assume that P(k) is true for some positive integer k',
            '3. Inductive Step: Prove that P(k+1) is true',
            '4. Conclusion: By mathematical induction, P(n) is true for all positive integers n'
          ]
        },
        {
          type: 'note',
          title: '💡 Key Insight',
          content: 'Think of induction like dominoes: If the first domino falls (base case) and each domino knocks down the next (inductive step), then all dominoes fall.'
        },
        {
          type: 'example',
          title: 'Example 1: Prove that 1² + 2² + 3² + ... + n² = n(n+1)(2n+1)/6',
          content: 'Base Step (n=1): LHS = 1² = 1, RHS = 1(2)(3)/6 = 1 ✓ | Inductive Hypothesis: Assume true for n = k: 1² + 2² + ... + k² = k(k+1)(2k+1)/6 | Inductive Step: Prove for n = k+1: | 1² + 2² + ... + k² + (k+1)² = k(k+1)(2k+1)/6 + (k+1)² | = (k+1)[k(2k+1)/6 + (k+1)] | = (k+1)[k(2k+1) + 6(k+1)]/6 | = (k+1)[2k² + k + 6k + 6]/6 | = (k+1)[2k² + 7k + 6]/6 | = (k+1)(k+2)(2k+3)/6 | = (k+1)((k+1)+1)(2(k+1)+1)/6 ✓'
        },
        {
          type: 'example',
          title: 'Example 2: Prove that n³ - n is divisible by 6 for all n ≥ 1',
          content: 'Base Step (n=1): 1³ - 1 = 0, divisible by 6 ✓ | Inductive Hypothesis: Assume k³ - k is divisible by 6 | Inductive Step: (k+1)³ - (k+1) = k³ + 3k² + 3k + 1 - k - 1 | = (k³ - k) + 3k² + 3k | = (k³ - k) + 3k(k + 1) | Since k³ - k is divisible by 6 (by hypothesis) and k(k+1) is always even (consecutive integers), 3k(k+1) is divisible by 6. Therefore (k+1)³ - (k+1) is divisible by 6 ✓'
        },
        {
          type: 'example',
          title: 'Example 3: Prove that 2ⁿ > n² for all integers n > 4',
          content: 'Base Step (n=5): 2⁵ = 32 > 25 = 5² ✓ | Inductive Hypothesis: Assume 2ᵏ > k² for some k > 4 | Inductive Step: Need to show 2^(k+1) > (k+1)² | 2^(k+1) = 2·2ᵏ > 2k² (by hypothesis) | Need: 2k² > (k+1)² = k² + 2k + 1 | ⟺ k² > 2k + 1 | ⟺ k² - 2k - 1 > 0 | This is true for k > 4 (check: k=5 gives 25-10-1=14>0) ✓'
        },
        {
          type: 'example',
          title: 'Example 4: Checkerboard Tiling Problem',
          content: 'Prove that every 2ⁿ × 2ⁿ checkerboard with one square removed can be tiled by L-shaped triominoes (3-square L-shapes). | Base Step (n=1): 2×2 board with 1 square removed = 3 squares = 1 triomino ✓ | Inductive Hypothesis: Assume true for 2ᵏ × 2ᵏ board | Inductive Step: For 2^(k+1) × 2^(k+1) board: | • Divide into 4 quadrants of size 2ᵏ × 2ᵏ | • One quadrant has the removed square | • Place 1 triomino at center covering 1 square from each of the other 3 quadrants | • Now each quadrant is a 2ᵏ × 2ᵏ board with 1 square removed | • By hypothesis, each can be tiled ✓'
        }
      ]
    },
    {
      id: 'strong-induction',
      title: 'Strong Induction and Well-Ordering',
      content: [
        {
          type: 'theorem',
          title: 'Principle of Strong Induction',
          content: 'To prove that P(n) is true for all positive integers n ≥ 1:'
        },
        {
          type: 'list',
          content: [
            '1. Base Step: Prove that P(1) is true',
            '2. Inductive Hypothesis: Assume that P(1), P(2), ..., P(k) are ALL true for some k ≥ 1',
            '3. Inductive Step: Prove that P(k+1) is true',
            '4. Conclusion: By strong induction, P(n) is true for all positive integers n'
          ]
        },
        {
          type: 'note',
          title: '🔍 Strong vs Regular Induction',
          content: 'Regular Induction: Assume P(k) is true | Strong Induction: Assume P(1), P(2), ..., P(k) are ALL true | Strong induction is useful when proving P(k+1) requires multiple previous cases.'
        },
        {
          type: 'example',
          title: 'Example 1: Fundamental Theorem of Arithmetic',
          content: 'Prove that every integer greater than 1 can be written as a product of primes. | Base Step (n=2): 2 is prime ✓ | Inductive Hypothesis: Assume every integer from 2 to k can be written as a product of primes | Inductive Step: Consider k+1: | • If k+1 is prime, done ✓ | • If k+1 is composite, then k+1 = a·b where 1 < a, b < k+1 | • By hypothesis, both a and b can be written as products of primes | • Therefore k+1 = (product of primes)·(product of primes) is a product of primes ✓'
        },
        {
          type: 'example',
          title: 'Example 2: Postage Stamp Problem',
          content: 'Prove that every postage of 12 cents or more can be formed using only 4-cent and 5-cent stamps. | Base Cases: | • 12¢ = 3×4¢ ✓ | • 13¢ = 2×4¢ + 1×5¢ ✓ | • 14¢ = 1×4¢ + 2×5¢ ✓ | • 15¢ = 3×5¢ ✓ | Inductive Hypothesis: Assume all amounts from 12¢ to k¢ can be formed (k ≥ 15) | Inductive Step: For (k+1)¢: | Since k+1 ≥ 16, we have (k+1)-4 ≥ 12 | By hypothesis, (k+1-4)¢ can be formed | Add one 4¢ stamp to get (k+1)¢ ✓'
        },
        {
          type: 'theorem',
          title: 'Well-Ordering Property',
          content: 'Every nonempty set of non-negative integers has a least element.'
        },
        {
          type: 'note',
          title: '📘 Connection',
          content: 'The validity of Mathematical Induction follows from the Well-Ordering Property. These principles are equivalent and fundamental to number theory.'
        }
      ]
    },
    {
      id: 'recursive-definitions',
      title: 'Recursive Definitions and Structural Induction',
      content: [
        {
          type: 'text',
          content: 'A recursive definition defines an object in terms of smaller instances of itself.'
        },
        {
          type: 'example',
          title: 'Fibonacci Sequence',
          content: 'The Fibonacci sequence {Fₙ} is defined recursively: | • F₀ = 0, F₁ = 1 (Base cases) | • Fₙ = Fₙ₋₁ + Fₙ₋₂ for n ≥ 2 (Recursive step) | Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...'
        },
        {
          type: 'example',
          title: 'Example 1: Find the nth term',
          content: '(a) x₁ = 5, xₙ = 3xₙ₋₁ for n ≥ 2 | Solution: x₁ = 5, x₂ = 15, x₃ = 45, ... → xₙ = 5·3^(n-1) | (b) x₀ = 2, xₙ = xₙ₋₁ + 1 for n ≥ 1 | Solution: x₀ = 2, x₁ = 3, x₂ = 4, ... → xₙ = n + 2'
        },
        {
          type: 'example',
          title: 'Example 2: Give recursive definitions',
          content: '(a) xₙ = 7·5^(n+1) | Solution: x₁ = 7·5² = 175, xₙ = 5xₙ₋₁ | (b) xₙ = n! | Solution: x₁ = 1, xₙ = n·xₙ₋₁ | (c) xₙ = (-1)ⁿ | Solution: x₁ = -1, xₙ = -xₙ₋₁ | (d) xₙ = 2n - 6 | Solution: x₁ = -4, xₙ = xₙ₋₁ + 2'
        },
        {
          type: 'theorem',
          title: 'Recursively Defined Sets',
          content: 'A set can be defined recursively with: | • Base step: Specify initial elements | • Recursive step: Rules for constructing new elements from existing ones'
        },
        {
          type: 'example',
          title: 'Example: Set S defined by',
          content: 'Base step: 3 ∈ S | Recursive step: If x, y ∈ S then x + y ∈ S | Solution: S = {3, 6, 9, 12, 15, ...} = {3k | k ≥ 1} (positive multiples of 3)'
        },
        {
          type: 'example',
          title: 'Example: Positive integers not divisible by 3',
          content: 'Base step: 1, 2 ∈ S | Recursive step: If n ∈ S then n + 3 ∈ S | Result: S = {1, 2, 4, 5, 7, 8, 10, 11, ...}'
        },
        {
          type: 'example',
          title: 'Example: Full Binary Trees',
          content: 'Base step: A single vertex is a full binary tree | Recursive step: If T₁ and T₂ are full binary trees, then T₁·T₂ is a full binary tree with: | • A new root r | • T₁ as left subtree | • T₂ as right subtree'
        },
        {
          type: 'example',
          title: 'Recursive Definitions for Binary Trees',
          content: '(a) Leaves of full binary trees: | • Base: Single vertex is a leaf | • Recursive: Leaves of T₁·T₂ = leaves of T₁ ∪ leaves of T₂ | (b) Height of full binary trees: | • Base: h(single vertex) = 0 | • Recursive: h(T₁·T₂) = 1 + max(h(T₁), h(T₂))'
        },
        {
          type: 'theorem',
          title: 'Structural Induction',
          content: 'To prove property P for all elements of a recursively defined set S:'
        },
        {
          type: 'list',
          content: [
            '1. Base Step: Prove P is true for elements in the base step',
            '2. Recursive Step: Show that if P is true for elements used to construct new elements, then P is true for the new elements'
          ]
        },
        {
          type: 'example',
          title: 'Example: Prove n(T) = 2l(T) - 1',
          content: 'For full binary tree T, prove that n(T) = 2l(T) - 1, where n(T) = number of vertices, l(T) = number of leaves. | Base Step: Single vertex → n = 1, l = 1, so 1 = 2(1) - 1 ✓ | Recursive Step: Assume true for T₁ and T₂ | For T = T₁·T₂: | • n(T) = n(T₁) + n(T₂) + 1 | • l(T) = l(T₁) + l(T₂) | • n(T) = [2l(T₁)-1] + [2l(T₂)-1] + 1 = 2[l(T₁)+l(T₂)] - 1 = 2l(T) - 1 ✓'
        },
        {
          type: 'example',
          title: 'Example: Prove n(T) ≤ 2^(h(T)+1) - 1',
          content: 'For full binary tree T, prove n(T) ≤ 2^(h(T)+1) - 1. | Base Step: Single vertex → n = 1, h = 0, so 1 ≤ 2¹ - 1 = 1 ✓ | Recursive Step: Assume true for T₁ and T₂ | For T = T₁·T₂ with h(T) = 1 + max(h(T₁), h(T₂)): | n(T) = n(T₁) + n(T₂) + 1 | ≤ [2^(h(T₁)+1)-1] + [2^(h(T₂)+1)-1] + 1 | ≤ 2·2^(max(h(T₁),h(T₂))+1) - 1 | = 2^(h(T)+1) - 1 ✓'
        }
      ]
    },
    {
      id: 'recursive-algorithms',
      title: 'Recursive Algorithms (Thuật toán Đệ quy)',
      content: [
        {
          type: 'text',
          content: 'A recursive algorithm solves a problem by reducing it to smaller instances of the same problem.'
        },
        {
          type: 'example',
          title: 'Example 1: Computing 5ⁿ',
          content: 'Procedure power(n: non-negative integer)\n  if n = 0 then\n    return 1\n  else\n    return power(n-1) × 5'
        },
        {
          type: 'example',
          title: 'Example 2: Computing n!',
          content: 'Procedure factorial(n: non-negative integer)\n  if n = 0 then\n    return 1\n  else\n    return n × factorial(n-1)'
        },
        {
          type: 'example',
          title: 'Example 3: GCD (Greatest Common Divisor)',
          content: 'Procedure gcd(a, b: non-negative integers)\n  if b = 0 then\n    return a\n  else\n    return gcd(b, a mod b)\n\nBased on Euclidean algorithm: gcd(a,b) = gcd(b, a mod b)'
        },
        {
          type: 'example',
          title: 'Example 4: Linear Search (Recursive)',
          content: 'Procedure linear_search(x, list, i, n)\n  if i > n then\n    return -1  // not found\n  else if list[i] = x then\n    return i   // found at position i\n  else\n    return linear_search(x, list, i+1, n)'
        },
        {
          type: 'example',
          title: 'Example 5: Binary Search (Recursive)',
          content: 'Procedure binary_search(x, list, left, right)\n  if left > right then\n    return -1  // not found\n  else\n    mid := ⌊(left + right)/2⌋\n    if x = list[mid] then\n      return mid\n    else if x < list[mid] then\n      return binary_search(x, list, left, mid-1)\n    else\n      return binary_search(x, list, mid+1, right)'
        },
        {
          type: 'theorem',
          title: 'Recursion vs Iteration',
          content: 'Recursive and iterative algorithms can often solve the same problem, but with different efficiency.'
        },
        {
          type: 'table',
          title: 'Fibonacci: Recursive vs Iterative',
          content: {
            headers: ['Approach', 'Algorithm', 'Complexity'],
            rows: [
              ['Recursive', 'Fib(n) = Fib(n-1) + Fib(n-2)', 'O(2ⁿ) - Exponential!'],
              ['Iterative', 'Loop from 1 to n-1', 'O(n) - Linear']
            ]
          }
        },
        {
          type: 'example',
          title: 'Iterative Fibonacci',
          content: 'Procedure iterative_fib(n)\n  if n = 0 then return 0\n  else\n    x := 0\n    y := 1\n    for i := 1 to n-1 do\n      z := x + y\n      x := y\n      y := z\n    return y\n\nComplexity: n-1 additions = O(n)'
        },
        {
          type: 'example',
          title: 'Recursive Fibonacci (Inefficient)',
          content: 'Procedure fib(n)\n  if n = 0 then return 0\n  else if n = 1 then return 1\n  else\n    return fib(n-1) + fib(n-2)\n\nComplexity: Exponential O(2ⁿ) due to repeated calculations'
        },
        {
          type: 'note',
          title: '⚠️ Warning',
          content: 'Recursive Fibonacci is elegant but extremely inefficient! It recalculates the same values many times. Use iteration or memoization for practical applications.'
        },
        {
          type: 'theorem',
          title: 'Merge Sort Algorithm',
          content: 'Merge sort is a divide-and-conquer recursive sorting algorithm.'
        },
        {
          type: 'example',
          title: 'Merge Sort Pseudocode',
          content: 'Procedure mergesort(L = a₁, a₂, ..., aₙ)\n  if n > 1 then\n    m := ⌊n/2⌋\n    L₁ := a₁, a₂, ..., aₘ\n    L₂ := aₘ₊₁, aₘ₊₂, ..., aₙ\n    L := merge(mergesort(L₁), mergesort(L₂))\n  return L'
        },
        {
          type: 'theorem',
          title: 'Merge Sort Complexity',
          content: 'The number of comparisons needed to merge sort a list of n elements is O(n log n).'
        },
        {
          type: 'note',
          title: '🚀 Efficiency',
          content: 'Merge sort is much more efficient than simple sorting algorithms like bubble sort O(n²). It\'s one of the most practical sorting algorithms.'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q4-1',
      question: 'Mathematical induction requires proving a base case and an inductive step.',
      answer: true,
      explanation: 'These are the two essential components of a proof by mathematical induction.'
    },
    {
      id: 'q4-2',
      question: 'In the inductive step, we assume P(k+1) is true and prove P(k) is true.',
      answer: false,
      explanation: 'Wrong direction! We assume P(k) is true and prove P(k+1) is true.'
    },
    {
      id: 'q4-3',
      question: 'Strong induction assumes only P(k) is true, just like regular induction.',
      answer: false,
      explanation: 'Strong induction assumes P(1), P(2), ..., P(k) are ALL true, not just P(k).'
    },
    {
      id: 'q4-4',
      question: 'The sum 1² + 2² + ... + n² equals n(n+1)(2n+1)/6.',
      answer: true,
      explanation: 'This is a standard summation formula that can be proven by induction.'
    },
    {
      id: 'q4-5',
      question: 'Every integer greater than 1 can be written as a product of primes.',
      answer: true,
      explanation: 'This is the Fundamental Theorem of Arithmetic, provable by strong induction.'
    },
    {
      id: 'q4-6',
      question: 'The Well-Ordering Property states that every set of integers has a least element.',
      answer: false,
      explanation: 'Only every NONEMPTY set of NON-NEGATIVE integers has a least element.'
    },
    {
      id: 'q4-7',
      question: 'The Fibonacci sequence is defined recursively as Fₙ = Fₙ₋₁ + Fₙ₋₂.',
      answer: true,
      explanation: 'Correct, with base cases F₀ = 0 and F₁ = 1.'
    },
    {
      id: 'q4-8',
      question: 'A recursive definition must have both a base case and a recursive step.',
      answer: true,
      explanation: 'Without a base case, recursion would never terminate. Without a recursive step, it wouldn\'t be recursive.'
    },
    {
      id: 'q4-9',
      question: 'Structural induction is used to prove properties of recursively defined structures.',
      answer: true,
      explanation: 'Structural induction follows the recursive definition of the structure.'
    },
    {
      id: 'q4-10',
      question: 'For a full binary tree T, n(T) = 2l(T) - 1, where n = vertices and l = leaves.',
      answer: true,
      explanation: 'This relationship can be proven by structural induction on binary trees.'
    },
    {
      id: 'q4-11',
      question: 'A recursive algorithm always has better time complexity than an iterative one.',
      answer: false,
      explanation: 'Not always! Recursive Fibonacci is O(2ⁿ) while iterative is O(n).'
    },
    {
      id: 'q4-12',
      question: 'The recursive Fibonacci algorithm is more efficient than the iterative version.',
      answer: false,
      explanation: 'Recursive Fibonacci is exponential O(2ⁿ), while iterative is linear O(n).'
    },
    {
      id: 'q4-13',
      question: 'Merge sort uses a divide-and-conquer recursive approach.',
      answer: true,
      explanation: 'Merge sort recursively divides the list in half, sorts each half, then merges.'
    },
    {
      id: 'q4-14',
      question: 'Merge sort has time complexity O(n log n).',
      answer: true,
      explanation: 'This makes merge sort much more efficient than O(n²) algorithms like bubble sort.'
    },
    {
      id: 'q4-15',
      question: 'Binary search can be implemented recursively.',
      answer: true,
      explanation: 'Binary search naturally lends itself to recursive implementation by dividing the search space.'
    },
    {
      id: 'q4-16',
      question: 'In strong induction, the base case is not necessary.',
      answer: false,
      explanation: 'The base case is still essential in strong induction to start the proof.'
    },
    {
      id: 'q4-17',
      question: 'The GCD algorithm gcd(a,b) = gcd(b, a mod b) is recursive.',
      answer: true,
      explanation: 'This is the Euclidean algorithm, which is naturally recursive.'
    },
    {
      id: 'q4-18',
      question: 'Every 2ⁿ × 2ⁿ checkerboard with one square removed can be tiled by triominoes.',
      answer: true,
      explanation: 'This can be proven by mathematical induction on n.'
    },
    {
      id: 'q4-19',
      question: 'For n > 4, we have 2ⁿ > n².',
      answer: true,
      explanation: 'This inequality can be proven by mathematical induction starting from n = 5.'
    },
    {
      id: 'q4-20',
      question: 'n³ - n is divisible by 6 for all positive integers n.',
      answer: true,
      explanation: 'This can be proven by mathematical induction.'
    }
  ]
};
