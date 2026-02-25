import type { Chapter } from '../../types';

export const chapter3: Chapter = {
  id: 'chapter-3',
  number: 3,
  title: 'Algorithms, the Integers',
  titleVi: 'Thuật toán và Số nguyên',
  description: 'Phân tích thuật toán, Big-O, và lý thuyết số',
  icon: '⚡',
  color: 'from-orange-500 to-red-500',
  topics: [
    {
      id: 'algorithms',
      title: 'Algorithms (Thuật toán)',
      content: [
        {
          type: 'text',
          content: 'An algorithm is a finite set of precise instructions for performing a computation or for solving a problem.'
        },
        {
          type: 'theorem',
          title: 'Properties of Algorithms',
          content: 'Input: Has input values from a specified set | Output: Produces output values (solutions) | Definiteness: Steps must be defined precisely | Correctness: Should produce correct output | Finiteness: Should produce output after finite steps | Effectiveness: Each step can be performed exactly in finite time | Generality: Applicable for all problems of desired form'
        },
        {
          type: 'example',
          title: 'Finding Maximum Element',
          content: 'Procedure Max(a₁, a₂, ..., aₙ: integers)\n  max := a₁\n  for i := 2 to n\n    if max < aᵢ then max := aᵢ\n  return max\n\nComplexity: 2(n-1) + 1 = 2n - 1 = O(n) comparisons'
        },
        {
          type: 'example',
          title: 'Linear Search',
          content: 'Procedure LinearSearch(a₁, ..., aₙ: distinct integers, x: integer)\n  i := 1\n  while (i ≤ n) and (x ≠ aᵢ)\n    i := i + 1\n  if i ≤ n then location := i\n  else location := 0\n\nComplexity: O(n) - worst case when x not found or at end'
        },
        {
          type: 'example',
          title: 'Binary Search',
          content: 'Procedure BinarySearch(a₁ < a₂ < ... < aₙ, x: integers)\n  i := 1, j := n\n  while (i < j)\n    m := ⌊(i + j)/2⌋\n    if x > aₘ then i := m + 1\n    else j := m\n  if x = aᵢ then location := i\n  else location := 0\n\nComplexity: O(log n) - much better than linear search!'
        },
        {
          type: 'example',
          title: 'Bubble Sort',
          content: 'Procedure BubbleSort(a₁, a₂, ..., aₙ: integers)\n  for i := 1 to n-1\n    for j := 1 to n-i\n      if aⱼ > aⱼ₊₁ then swap(aⱼ, aⱼ₊₁)\n\nComplexity: O(n²)'
        },
        {
          type: 'example',
          title: 'Insertion Sort',
          content: 'Procedure InsertionSort(a₁, a₂, ..., aₙ: integers)\n  for j := 2 to n\n    i := 1\n    while aⱼ > aᵢ\n      i := i + 1\n    m := aⱼ\n    k := j\n    while k > i\n      aₖ := aₖ₋₁\n      k := k - 1\n    aᵢ := m\n\nComplexity: O(n²)'
        }
      ]
    },
    {
      id: 'growth-of-functions',
      title: 'The Growth of Functions',
      content: [
        {
          type: 'text',
          content: 'Basic functions in increasing order of complexity: log n, nᵏ, aⁿ, n! where k > 0 and a > 1'
        },
        {
          type: 'formula',
          content: 'lim(n→∞) nᵏ/log n = ∞ | lim(n→∞) aⁿ/nᵏ = ∞ | lim(n→∞) n!/aⁿ = ∞'
        },
        {
          type: 'theorem',
          title: 'Big-O Definition',
          content: 'f(x) is O(g(x)) if there exists a constant C such that |f(x)| ≤ C|g(x)| for all x large enough (x > k for some k).'
        },
        {
          type: 'example',
          title: 'Example: Polynomial',
          content: '(a) Show that x⁵ - 2x² + 7 is O(x⁵): Choose C = 1, then for x > 2: x⁵ - 2x² + 7 ≤ x⁵ ✓ | (b) x⁵ - 2x² + 7 is NOT O(x⁴): The ratio grows without bound'
        },
        {
          type: 'theorem',
          title: 'Theorem 1',
          content: 'Let f(x) be a polynomial of degree n. Then f(x) is O(xⁿ). This estimate is the best possible.'
        },
        {
          type: 'theorem',
          title: 'Theorem 2',
          content: 'If f₁(x) is O(g₁(x)) and f₂(x) is O(g₂(x)), then: | • f₁(x) + f₂(x) is O(max(g₁(x), g₂(x))) | • f₁(x)·f₂(x) is O(g₁(x)·g₂(x))'
        },
        {
          type: 'example',
          title: 'Example: Big-O Estimates',
          content: '(a) n² log n + 3n² + 5 = O(n² log n) | (b) (n³ + 2n)(n! + n²5ⁿ) = O(n³·n!) = O(n·n!)'
        },
        {
          type: 'theorem',
          title: 'Big-Theta (Θ)',
          content: 'f(x) is Θ(g(x)) if f(x) is O(g(x)) AND g(x) is O(f(x)). | Equivalently: C₁|g(x)| ≤ |f(x)| ≤ C₂|g(x)| for all x large enough. | Note: If f(x) is Θ(g(x)) then g(x) is also Θ(f(x))'
        },
        {
          type: 'example',
          title: 'Example: Big-Theta',
          content: '(a) Show that 2x³ + x² + 3 is Θ(x³): Need C₁x³ ≤ 2x³ + x² + 3 ≤ C₂x³. Choose C₁ = 1, C₂ = 3 for x ≥ 2 ✓ | (b) Is x² log x + 3x + 1 big-theta of x³? NO, because x² log x grows slower than x³'
        }
      ]
    },
    {
      id: 'complexity',
      title: 'Complexity of Algorithms',
      content: [
        {
          type: 'text',
          content: 'Space complexity: Computer memory required | Time complexity: Time required (measured by number of operations)'
        },
        {
          type: 'table',
          title: 'Algorithm Complexity Analysis',
          content: {
            headers: ['Algorithm', 'Comparisons', 'Complexity'],
            rows: [
              ['Finding Maximum', '2n - 1', 'O(n)'],
              ['Linear Search (not found)', '2n + 2', 'O(n)'],
              ['Linear Search (at position i)', '2i + 1', 'O(n)'],
              ['Binary Search', '2⌈log n⌉ + 2', 'O(log n)'],
              ['Bubble Sort', 'O(n²)', 'O(n²)'],
              ['Insertion Sort', 'O(n²)', 'O(n²)'],
              ['Merge Sort', 'O(n log n)', 'O(n log n)']
            ]
          }
        },
        {
          type: 'table',
          title: 'Common Complexity Terminologies',
          content: {
            headers: ['Complexity', 'Terminology'],
            rows: [
              ['O(1)', 'Constant complexity'],
              ['O(log n)', 'Logarithmic complexity'],
              ['O(n)', 'Linear complexity'],
              ['O(n log n)', 'n log n complexity'],
              ['O(nᵏ)', 'Polynomial complexity'],
              ['O(bⁿ), b > 1', 'Exponential complexity'],
              ['O(n!)', 'Factorial complexity']
            ]
          }
        }
      ]
    },
    {
      id: 'integers-division',
      title: 'The Integers and Division',
      content: [
        {
          type: 'theorem',
          title: 'Division',
          content: 'Let a, b be integers with a ≠ 0. We say a divides b (notation: a | b) if there is an integer m such that b = am.'
        },
        {
          type: 'theorem',
          title: 'Properties of Divisibility',
          content: 'Let a, b, c be integers: | • If a | b and a | c then a | (b + c) | • If a | b then a | bc for all c | • If a | b and b | c then a | c'
        },
        {
          type: 'theorem',
          title: 'The Division Algorithm',
          content: 'Let a be an integer and d a positive integer. Then there are unique integers q and r with 0 ≤ r < d such that a = dq + r. | • a: dividend | • d: divisor | • q: quotient (q = a div d) | • r: remainder (r = a mod d)'
        },
        {
          type: 'example',
          title: 'Example: Division',
          content: '(a) -23 divided by 7: -23 = 7(-4) + 5, so q = -4, r = 5 | (b) -125 divided by 11: -125 = 11(-12) + 7, so q = -12, r = 7'
        },
        {
          type: 'theorem',
          title: 'Modular Arithmetic',
          content: 'a ≡ b (mod m) if they have the same remainders when divided by m. | Equivalently: a ≡ b (mod m) ⟺ a - b ≡ 0 (mod m) ⟺ a = b + km for some integer k'
        },
        {
          type: 'theorem',
          title: 'Properties of Congruences',
          content: 'If a ≡ b (mod m) and c ≡ d (mod m) then: | • a + c ≡ b + d (mod m) | • ac ≡ bd (mod m)'
        },
        {
          type: 'example',
          title: 'Application: Pseudorandom Numbers',
          content: 'Linear congruential method: xₙ = axₙ₋₁ + c (mod m) | • m: modulus | • a: multiplier | • c: increment | • x₀: seed'
        }
      ]
    },
    {
      id: 'primes-gcd',
      title: 'Primes and Greatest Common Divisors',
      content: [
        {
          type: 'theorem',
          title: 'Prime Numbers',
          content: 'A positive integer p > 1 is prime if its only positive factors are 1 and p. | An integer > 1 that is not prime is composite.'
        },
        {
          type: 'theorem',
          title: 'Fundamental Theorem of Arithmetic',
          content: 'Any integer greater than 1 can be written uniquely as a product of powers of distinct primes.'
        },
        {
          type: 'theorem',
          title: 'Infinitude of Primes',
          content: 'There are infinitely many primes.'
        },
        {
          type: 'theorem',
          title: 'GCD and LCM',
          content: 'Let a, b be integers (not both 0). | • gcd(a, b): greatest common divisor | • lcm(a, b): least common multiple | If a = p₁^a₁ p₂^a₂ ... pₙ^aₙ and b = p₁^b₁ p₂^b₂ ... pₙ^bₙ then: | • gcd(a, b) = p₁^min(a₁,b₁) p₂^min(a₂,b₂) ... pₙ^min(aₙ,bₙ) | • lcm(a, b) = p₁^max(a₁,b₁) p₂^max(a₂,b₂) ... pₙ^max(aₙ,bₙ)'
        },
        {
          type: 'theorem',
          title: 'GCD-LCM Relationship',
          content: 'For positive integers a, b: ab = gcd(a, b) · lcm(a, b)'
        },
        {
          type: 'theorem',
          title: 'Relatively Prime',
          content: 'Two integers a, b are relatively prime if gcd(a, b) = 1. | A set of integers is pairwise relatively prime if any two integers in the set are relatively prime.'
        }
      ]
    },
    {
      id: 'integers-algorithms',
      title: 'Integers and Algorithms',
      content: [
        {
          type: 'theorem',
          title: 'Base b Representation',
          content: 'Let b > 1 be an integer. Any positive integer n can be expressed uniquely as: | n = aₖbᵏ + aₖ₋₁bᵏ⁻¹ + ... + a₀ | where 0 ≤ aᵢ < b. Notation: n = (aₖaₖ₋₁...a₀)ᵦ'
        },
        {
          type: 'table',
          title: 'Common Number Systems',
          content: {
            headers: ['Base', 'Name', 'Digits'],
            rows: [
              ['2', 'Binary', '0, 1'],
              ['8', 'Octal', '0, 1, 2, ..., 7'],
              ['10', 'Decimal', '0, 1, 2, ..., 9'],
              ['16', 'Hexadecimal', '0, 1, 2, ..., 9, A, B, C, D, E, F']
            ]
          }
        },
        {
          type: 'example',
          title: 'Example: Base Conversion',
          content: '(a) Find binary expansion of 35: 35 = 32 + 2 + 1 = 2⁵ + 2¹ + 2⁰ = (100011)₂ | (b) Convert (132)₅ to hexadecimal: (132)₅ = 1·25 + 3·5 + 2 = 42₁₀ = (2A)₁₆'
        },
        {
          type: 'theorem',
          title: 'Euclidean Algorithm',
          content: 'Let a > b be positive integers. Put r = a mod b. Then gcd(a, b) = gcd(b, r). | Procedure GCD(a, b: positive integers)\n  x := a, y := b\n  while y ≠ 0\n    r := x mod y\n    x := y\n    y := r\n  return x'
        },
        {
          type: 'example',
          title: 'Modular Exponentiation',
          content: 'Problem: Compute bⁿ mod m efficiently. | Example: Compute 3⁷¹ mod 13 | Write 71 = (1000111)₂ | Use repeated squaring: 3¹ ≡ 3, 3² ≡ 9, 3⁴ ≡ 81 ≡ 3, 3⁸ ≡ 9, ... (mod 13)'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q3-1',
      question: 'An algorithm must produce output after a finite number of steps.',
      answer: true,
      explanation: 'Finiteness is one of the essential properties of algorithms.'
    },
    {
      id: 'q3-2',
      question: 'Binary search has complexity O(n).',
      answer: false,
      explanation: 'Binary search has complexity O(log n), which is much better than O(n).'
    },
    {
      id: 'q3-3',
      question: 'Bubble sort has complexity O(n²).',
      answer: true,
      explanation: 'Bubble sort uses nested loops, resulting in O(n²) complexity.'
    },
    {
      id: 'q3-4',
      question: 'If f(n) = 3n² + 5n + 2, then f(n) is O(n²).',
      answer: true,
      explanation: 'Polynomials are O of their highest degree term.'
    },
    {
      id: 'q3-5',
      question: 'log n grows faster than n.',
      answer: false,
      explanation: 'n grows much faster than log n. In fact, lim(n→∞) n/log n = ∞.'
    },
    {
      id: 'q3-6',
      question: 'If f(x) is Θ(g(x)), then g(x) is also Θ(f(x)).',
      answer: true,
      explanation: 'Big-Theta is a symmetric relation.'
    },
    {
      id: 'q3-7',
      question: 'The division algorithm states that for any integers a and d > 0, there exist unique q and r with a = dq + r where 0 ≤ r < d.',
      answer: true,
      explanation: 'This is the precise statement of the division algorithm.'
    },
    {
      id: 'q3-8',
      question: 'If a | b and a | c, then a | (b + c).',
      answer: true,
      explanation: 'This is a fundamental property of divisibility.'
    },
    {
      id: 'q3-9',
      question: 'There are finitely many prime numbers.',
      answer: false,
      explanation: 'Euclid proved there are infinitely many primes.'
    },
    {
      id: 'q3-10',
      question: 'For positive integers a and b: ab = gcd(a,b) · lcm(a,b).',
      answer: true,
      explanation: 'This is a fundamental relationship between GCD and LCM.'
    },
    {
      id: 'q3-11',
      question: 'The Euclidean algorithm finds gcd(a,b) by repeatedly applying: gcd(a,b) = gcd(b, a mod b).',
      answer: true,
      explanation: 'This is the basis of the Euclidean algorithm.'
    },
    {
      id: 'q3-12',
      question: 'Linear search is always faster than binary search.',
      answer: false,
      explanation: 'Binary search O(log n) is faster than linear search O(n) for sorted lists.'
    },
    {
      id: 'q3-13',
      question: 'Merge sort has complexity O(n log n).',
      answer: true,
      explanation: 'Merge sort is a divide-and-conquer algorithm with O(n log n) complexity.'
    },
    {
      id: 'q3-14',
      question: 'If a ≡ b (mod m) and c ≡ d (mod m), then ac ≡ bd (mod m).',
      answer: true,
      explanation: 'Congruences can be multiplied.'
    },
    {
      id: 'q3-15',
      question: 'The binary representation of 35 is (100011)₂.',
      answer: true,
      explanation: '35 = 32 + 2 + 1 = 2⁵ + 2¹ + 2⁰ = (100011)₂.'
    }
  ]
};
