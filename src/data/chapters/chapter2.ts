import type { Chapter } from '../../types';

export const chapter2: Chapter = {
  id: 'chapter-2',
  number: 2,
  title: 'Sets, Functions, Sequences and Sums',
  titleVi: 'Tập hợp, Hàm số, Dãy số và Tổng',
  description: 'Cấu trúc cơ bản trong toán học rời rạc',
  icon: '📐',
  color: 'from-purple-500 to-pink-500',
  topics: [
    {
      id: 'sets',
      title: 'Tập hợp (Sets)',
      content: [
        {
          type: 'text',
          title: 'Definition',
          content: 'A set is an unordered collection of objects. An object of a set is called an element, or a member, of that set.'
        },
        {
          type: 'text',
          title: 'Cardinality',
          content: 'The cardinality of the set A is the number of distinct elements of A, denoted by |A|. The empty set, denoted by Ø, is the set whose cardinality is 0.'
        },
        {
          type: 'example',
          title: 'Cardinality Examples',
          content: [
            'The set {a, cat, catches, a, mouse} has 4 elements.',
            'The set {a, b, {a, b}, c, {a, b, c}, Ø} has 6 elements',
            'A = {1, 1, 3, 3, 5, 5, 6} → |A| = 4 (distinct elements: {1, 3, 5, 6})'
          ]
        },
        {
          type: 'text',
          title: 'Finite & Infinite Sets',
          content: [
            'Finite Set: A set with a specific number of distinct elements (non-negative integer).',
            'Infinite Set: A set that is not finite.'
          ]
        },
        {
          type: 'example',
          title: 'Empty Set Cardinality',
          content: [
            'If A = Ø (empty set), then |A| = 0.',
            'If A = {Ø} (set containing empty set), then |A| = 1.'
          ]
        },
        {
          type: 'theorem',
          title: 'Notation and Subsets',
          content: [
            'If x is an element of A we write x ∈ A. If x is not an element of A we write x ∉ A.',
            'If all elements of A are also elements of B we write A ⊆ B, and A is called a subset of B.',
            'If A is a proper subset of B, meaning A ⊆ B and A ≠ B, we write A ⊂ B.',
            'The empty set Ø is a subset of any set.'
          ]
        },
        {
          type: 'example',
          title: 'True/False Exercises',
          content: [
            'x ∈ {x} (True)',
            'x ⊆ {x} (False)',
            '{a, b} ⊆ {a, b, {a, b}, c} (True)',
            '{a, b} ∈ {a, b, {a, b}, c} (True)',
            'Ø ⊆ {Ø} (True)',
            'Ø ∈ {Ø} (True)',
            '{a, b, c} ⊆ {a, b, c} (True)'
          ]
        },
        {
          type: 'text',
          title: 'Cartesian Product & Power Set',
          content: [
            'The Cartesian product of two sets A and B, denoted by A × B, is the set of all ordered pairs (a, b) where a ∈ A and b ∈ B.',
            'The power set of the set A, denoted by P(A), is the set of all subsets of A.'
          ]
        },
        {
          type: 'note',
          title: 'Cardinality Notes',
          content: [
            'If |A| = m and |B| = n then |A × B| = mn.',
            'If |A| = n then |P(A)| = 2^n.'
          ]
        },
        {
          type: 'example',
          title: 'Cartesian Product Example',
          content: [
            'Let A = {a, b} and B = {1, 2, 3}',
            'A × B = {(a, 1), (a, 2), (a, 3), (b, 1), (b, 2), (b, 3)}',
            'B × A = {(1, a), (1, b), (2, a), (2, b), (3, a), (3, b)}',
            'Conclusion: A × B ≠ B × A'
          ]
        },
        {
          type: 'example',
          title: 'Power Set Examples',
          content: [
            'Let A = {a, b}. P(A) = {Ø, {a}, {b}, {a, b}}. |P(A)| = 2² = 4.',
            'Let A = Ø. P(A) = {Ø}. |P(A)| = 2⁰ = 1.',
            'Let A = {Ø}. P(A) = {Ø, {Ø}}. |P(A)| = 2¹ = 2.'
          ]
        }
      ]
    },
    {
      id: 'set-operations',
      title: 'Các phép toán tập hợp (Set Operations)',
      content: [
        {
          type: 'theorem',
          title: 'Definitions',
          content: [
            'Union: A ∪ B = {x | (x ∈ A) ∨ (x ∈ B)}',
            'Intersection: A ∩ B = {x | (x ∈ A) ∧ (x ∈ B)}',
            'Difference: A - B = {x | (x ∈ A) ∧ (x ∉ B)}',
            'Symmetric Difference: A ⊕ B = {x | (x ∈ A) ⊕ (x ∈ B)}',
            'Complement: Ā = U - A'
          ]
        },
        {
          type: 'formula',
          title: 'Logical Equivalences',
          content: [
            'x ∈ (A ∪ B) ⇔ (x ∈ A) ∨ (x ∈ B)',
            'x ∈ (A ∩ B) ⇔ (x ∈ A) ∧ (x ∈ B)',
            'x ∈ (A - B) ⇔ (x ∈ A) ∧ (x ∉ B)',
            'x ∈ Ā ⇔ x ∉ A'
          ]
        },
        {
          type: 'example',
          title: 'Set Operations Examples',
          content: [
            'Let U = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9} (Universal Set)',
            'Let A = {1, 2, 3, 4, 5} and B = {4, 5, 6, 7, 8}',
            'A ∪ B = {1, 2, 3, 4, 5, 6, 7, 8} (lấy hết)',
            'A ∩ B = {4, 5} (phần chung)',
            'A - B = {1, 2, 3} (mất đi phần chung với B)',
            'A ⊕ B = {1, 2, 3, 6, 7, 8} (lấy tất cả trừ phần chung)',
            'Ā = {0, 6, 7, 8, 9} (phần thuộc U nhưng không thuộc A)'
          ]
        },
        {
          type: 'theorem',
          title: 'Set Equality',
          content: [
            'Two methods to show the quality of two sets:',
            '1. Show that each set is a subset of the other (A ⊆ B and B ⊆ A ⇔ A = B).',
            '2. Use Membership table (similar to truth table in logic).'
          ]
        },
        {
          type: 'text',
          title: 'Computer Representation of Sets',
          content: [
            'Let U be a universal set with ordering a₁, a₂, ..., aₙ.',
            'A subset A is represented by a bit string of length n, where the i-th bit is 1 if aᵢ ∈ A, and 0 otherwise.'
          ]
        },
        {
          type: 'example',
          title: 'Bit String Representation Example',
          content: [
            'Let U = {1, 2, 3, 4, 5, 6, 7, 8}',
            'Subset A = {1, 3, 4, 6}',
            'Bit string = 10110100 (1st, 3rd, 4th, 6th positions are 1)'
          ]
        },
        {
          type: 'table',
          title: 'Set Identities',
          content: {
            headers: ['Name', 'Identity'],
            rows: [
              ['Complementation law', 'Ā̄ = A'],
              ['Identity laws', 'A ∪ Ø = A\nA ∩ U = A'],
              ['Domination laws', 'A ∪ U = U\nA ∩ Ø = Ø'],
              ['Complement laws', 'A ∪ Ā = U\nA ∩ Ā = Ø'],
              ['Idempotent laws', 'A ∪ A = A\nA ∩ A = A'],
              ['Commutative laws', 'A ∪ B = B ∪ A\nA ∩ B = B ∩ A'],
              ['Associative laws', '(A ∪ B) ∪ C = A ∪ (B ∪ C)\n(A ∩ B) ∩ C = A ∩ (B ∩ C)'],
              ['Distributive laws', 'A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)\nA ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)'],
              ["De Morgan's laws", 'overline(A ∪ B) = Ā ∩ B̄\noverline(A ∩ B) = Ā ∪ B̄']
            ]
          }
        }
      ]
    },
    {
      id: 'functions',
      title: 'Hàm số (Functions)',
      content: [
        {
          type: 'text',
          title: 'Definitions',
          content: [
            'Let f: A → B be a function.',
            '• A is called the domain of f.',
            '• B is called the codomain of f.',
            '• If f(a) = b, then b is the image of a, and a is a preimage of b.',
            '• Range of f: The set of all images f(A) = {f(a) | a ∈ A}.'
          ]
        },
        {
          type: 'theorem',
          title: 'Image and Preimage of Subsets',
          content: [
            'Let S be a subset of A. The image of S is:',
            'f(S) = {b ∈ B | ∃a ∈ S (f(a) = b)}',
            'Let T be a subset of B. The preimage of T is:',
            'f⁻¹(T) = {a ∈ A | f(a) ∈ T}'
          ]
        },
        {
          type: 'image',
          title: 'Function Diagram',
          imageSrc: '/images/chapter2/function_basic.png',
          content: 'A function f: A → B maps each element a in A to exactly one element b in B.'
        },
        {
          type: 'theorem',
          title: 'Types of Functions',
          content: [
            'One-to-one (Injective): f(a) = f(b) → a = b (Distinct elements map to distinct images)',
            'Onto (Surjective): ∀b ∈ B, ∃a ∈ A : f(a) = b (Range = Codomain)',
            'Bijection: Both one-to-one and onto (Invertible)'
          ]
        },
        {
          type: 'image',
          title: 'One-to-One Function Diagram',
          imageSrc: '/images/chapter2/one_to_one.png',
          content: 'f: A → B is one-to-one if f(a₁) ≠ f(a₂) for all a₁ ≠ a₂ in A.'
        },
        {
          type: 'image',
          title: 'Onto Function Diagram',
          imageSrc: '/images/chapter2/onto.png',
          content: 'f: A → B is onto if for each b in B there is a in A such that f(a) = b.'
        },
        {
          type: 'image',
          title: 'Bijection Diagram',
          imageSrc: '/images/chapter2/bijection.png',
          content: 'f: A → B is a bijection if it is both one-to-one and onto.'
        },
        {
          type: 'table',
          title: 'Counting Functions (f: A → B, |A| = m, |B| = n)',
          content: {
            headers: ['Type', 'Formula', 'Condition'],
            rows: [
              ['Total functions', 'nᵐ', 'Always'],
              ['One-to-one (Injective)', 'P(n,m) = n! / (n-m)!', 'm ≤ n'],
              ['Onto (Surjective)', 'nᵐ - C(n,1)(n-1)ᵐ + C(n,2)(n-2)ᵐ - ...', 'm ≥ n'],
              ['Bijection', 'n!', 'm = n']
            ]
          }
        },
        {
          type: 'example',
          title: 'Examples: One-to-one (Injective)',
          content: [
            '(a) f: R → R; f(x) = x² → Not one-to-one (since f(1) = f(-1) = 1)',
            '(b) f: R⁺ → R; f(x) = x² → One-to-one (strictly increasing on positive reals)',
            '(c) f: Z → Z; f(n) = ⌊(n + 1)/2⌋ → Not one-to-one (f(1)=1, f(2)=1)',
            '(d) f: Z × Z → Z; f(m, n) = m + n → Not one-to-one (f(1,2) = 3, f(2,1) = 3)'
          ]
        },
        {
          type: 'example',
          title: 'Examples: Onto (Surjective)',
          content: [
            '(a) f: R → R; f(x) = x² → Not onto (range is [0, ∞), misses negatives)',
            '(b) f: R → R; f(x) = x³ → Onto (range is all R)',
            '(c) f: R → Z; f(x) = 2⌊x⌋ → Not onto (range is even integers, misses odds)',
            '(d) f: R → Z; f(x) = ⌊2x⌋ → Onto (can produce any integer)',
            '(e) f: Z × Z → Z; f(m, n) = m + n → Onto (for any k, f(k, 0) = k)'
          ]
        },
        {
          type: 'example',
          title: 'Examples: Bijection',
          content: [
            '(a) f: R → R; f(x) = x² → Neither (not 1-1, not onto)',
            '(b) f: R → R; f(x) = x³ → Bijection',
            '(c) f: R → Z; f(x) = ⌊2x⌋ → Onto but not 1-1',
            '(d) f: Z × Z → Z; f(m, n) = m + n → Onto but not 1-1',
            '(e) f: Z × Z → Z × Z; f(m, n) = (m, m + n) → Bijection (Inverse exists)'
          ]
        },
        {
          type: 'example',
          title: 'Existence Questions',
          content: [
            '(a) 7 elements → 5 elements: No 1-1 (Pidergon hole), Yes Onto. 5 elements → 7 elements: Yes 1-1, No Onto.',
            '(b) Even integers → Odd integers: Yes (f(n) = n + 1) is a bijection.',
            '(c) Odd integers → All integers: Yes (Infinite sets can have bijections with proper subsets).',
            '(d) Real numbers → Positive real numbers: Yes (f(x) = eˣ) is a bijection.'
          ]
        },
        {
          type: 'theorem',
          title: 'Compositions and Inverses',
          content: [
            'Composition: (f ∘ g)(a) = f(g(a))',
            'Inverse: f⁻¹(y) = x ⇔ f(x) = y',
            'Note: f has an inverse if and only if f is a bijection.'
          ]
        },
        {
          type: 'image',
          title: 'Composition Diagram',
          imageSrc: '/images/chapter2/composition.png',
          content: '(f ∘ g)(a) = f(g(a)) - Apply g first, then f.'
        },
        {
          type: 'image',
          title: 'Inverse Function Diagram',
          imageSrc: '/images/chapter2/inverse.png',
          content: 'f⁻¹ exists only when f is a bijection.'
        }
      ]
    },
    {
      id: 'special-functions',
      title: 'Các hàm đặc biệt',
      content: [
        {
          type: 'theorem',
          title: 'Floor and Ceiling Functions',
          content: [
            'Floor: ⌊x⌋ = greatest integer ≤ x',
            'Ceiling: ⌈x⌉ = smallest integer ≥ x'
          ]
        },
        {
          type: 'note',
          title: 'Fundamental Inequality',
          content: 'x - 1 < ⌊x⌋ ≤ x ≤ ⌈x⌉ < x + 1'
        },
        {
          type: 'example',
          title: 'Properties (x, y ∈ ℝ; n ∈ ℤ)',
          content: [
            '⌊x + n⌋ = ⌊x⌋ + n (True)',
            '⌈x + n⌉ = ⌈x⌉ + n (True)',
            '⌊x + y⌋ = ⌊x⌋ + ⌊y⌋ (False generally)',
            '⌈x + y⌉ = ⌈x⌉ + ⌈y⌉ (False generally)'
          ]
        },
        {
          type: 'example',
          title: 'Counter-examples',
          content: [
            'Given x = 0.5, y = 0.5:',
            '⌊x + y⌋ = ⌊1⌋ = 1, but ⌊x⌋ + ⌊y⌋ = 0 + 0 = 0 (1 ≠ 0)',
            '⌈x + y⌉ = ⌈1⌉ = 1, but ⌈x⌉ + ⌈y⌉ = 1 + 1 = 2 (1 ≠ 2)'
          ]
        },
        {
          type: 'example',
          title: 'Basic Examples',
          content: '⌊3.7⌋ = 3, ⌈3.7⌉ = 4 | ⌊-2.3⌋ = -3, ⌈-2.3⌉ = -2'
        }
      ]
    },
    {
      id: 'sequences-summations',
      title: 'Dãy số và Tổng (Sequences and Summations)',
      content: [
        {
          type: 'text',
          title: 'Sequences (Dãy số)',
          content: 'Sequence is a discrete structure used to represent an ordered list. It is usually denoted as {a₁, a₂, ...} = {aₙ, n = 1, 2, ...}.'
        },
        {
          type: 'example',
          title: 'Sequence Examples',
          content: [
            '(a) 1/2, -1/3, 1/4, -1/5, ... → aₙ = (-1)ⁿ⁻¹ / (n + 1)',
            '(b) -2, 1, 4, 7, 10, ... (Arithmetic progression) → aₙ = -2 + (n - 1)3 = 3n - 5',
            '(c) 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, ... → aₙ = ⌊√2n + 1/2⌋',
            '(d) 1, 1, 2, 3, 5, 8, ... (Fibonacci) → aₙ = aₙ₋₁ + aₙ₋₂'
          ]
        },
        {
          type: 'theorem',
          title: 'Summations (Tổng)',
          content: [
            'Notation: ∑ (from i=m to n) aᵢ = aₘ + aₘ₊₁ + ... + aₙ',
            'Properties:',
            '• ∑ (aᵢ + bᵢ) = ∑ aᵢ + ∑ bᵢ',
            '• ∑ kaᵢ = k ∑ aᵢ'
          ]
        },
        {
          type: 'formula',
          title: 'Important Sums',
          content: [
            '∑ i = n(n + 1)/2',
            '∑ i² = n(n + 1)(2n + 1)/6',
            '∑ i³ = [n(n + 1)/2]²',
            '∑ arⁱ (Geometric) = a(rⁿ⁺¹ - 1)/(r - 1) (from i=0 to n)'
          ]
        },
        {
          type: 'example',
          title: 'Summation Examples',
          content: [
            '1. Find ∑(i=1 to 100) 3ⁱ/4ⁱ⁺¹:',
            '   = (1/4) ∑ (3/4)ⁱ = Geometric series with a=1/4, r=3/4',
            '2. Find ∑ 1/(i(i+1)) (Telescoping sum):',
            '   = ∑ (1/i - 1/(i+1)) = 1 - 1/101 = 100/101',
            '3. Double Sum ∑(i=1 to 2) ∑(j=0 to 2) (i + 2j):',
            '   Expand inner: (i+0) + (i+2) + (i+4) = 3i + 6',
            '   Outer sum: (3(1)+6) + (3(2)+6) = 9 + 12 = 21'
          ]
        },
        {
          type: 'note',
          title: '📘 Bài tập: Dãy số lặp (k xuất hiện k lần)',
          content: [
            'Dãy: 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, ...',
            'Công thức: Tìm k sao cho k(k-1)/2 < n ≤ k(k+1)/2',
            'Ước lượng nhanh: k ≈ √(2n)'
          ]
        },
        {
          type: 'table',
          title: 'Giải bài toán tìm aₙ',
          content: {
            headers: ['Tìm', 'Tính √(2n)', 'Kiểm tra k', 'Tổng tích lũy', 'Kết quả'],
            rows: [
              ['a₅₀₀', '√1000 ≈ 31.6', 'k=31, k=32', '31→496, 32→528', 'a₅₀₀ = 32'],
              ['a₃₁₅', '√630 ≈ 25.1', 'k=24, k=25', '24→300, 25→325', 'a₃₁₅ = 25']
            ]
          }
        },
        {
          type: 'note',
          title: '📘 Bài tập: Dãy 0-1 luân phiên',
          content: [
            'Dãy: 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, ...',
            'Quy tắc: Block k chứa k phần tử',
            'Giá trị: 0 nếu k lẻ, 1 nếu k chẵn'
          ]
        },
        {
          type: 'table',
          title: 'Giải bài toán tìm a₁₁₀, a₁₁₁',
          content: {
            headers: ['Bước', 'Chi tiết'],
            rows: [
              ['1. Ước lượng k', '√(2×110) ≈ 14.8 → Kiểm tra k=14, k=15'],
              ['2. Tổng block 14', '1+2+...+14 = 14×15/2 = 105'],
              ['3. Tổng block 15', '105 + 15 = 120'],
              ['4. Xác định vị trí', '105 < 110,111 ≤ 120 → Block 15'],
              ['5. Kết luận', 'k=15 (lẻ) → a₁₁₀ = a₁₁₁ = 0']
            ]
          }
        },
        {
          type: 'note',
          title: '📘 Bài tập: Dãy nhị phân',
          content: [
            'Dãy: 1, 10, 11, 100, 101, 110, 111, 1000, ...',
            'Quy tắc: aₙ = biểu diễn nhị phân của n'
          ]
        },
        {
          type: 'example',
          title: 'Tìm a₅₀',
          content: [
            '50 = 32 + 16 + 2 = 2⁵ + 2⁴ + 2¹',
            '50₁₀ = 110010₂',
            '→ a₅₀ = 110010'
          ]
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q2-1',
      question: 'The set {1, 1, 2, 3} has 4 distinct elements.',
      answer: false,
      explanation: 'Sets do not contain duplicate elements. {1, 1, 2, 3} is equal to {1, 2, 3}, which has cardinality 3.'
    },
    {
      id: 'q2-2',
      question: 'The empty set (Ø) is a subset of every set.',
      answer: true,
      explanation: 'By definition, the empty set is a subset of any set, including itself.'
    },
    {
      id: 'q2-3',
      question: 'If Set A has 3 elements, its Power Set P(A) has 6 elements.',
      answer: false,
      explanation: '|P(A)| = 2^|A|. If |A|=3, then |P(A)| = 2^3 = 8.'
    },
    {
      id: 'q2-4',
      question: 'For any two sets A and B, A × B = B × A.',
      answer: false,
      explanation: 'Cartesian product is not commutative unless A = B or one is empty. (1, 2) ≠ (2, 1).'
    },
    {
      id: 'q2-5',
      question: 'A ∩ B is the set of elements that are in A OR in B.',
      answer: false,
      explanation: 'Intersection (A ∩ B) contains elements in BOTH A and B. Union (A ∪ B) is for OR.'
    },
    {
      id: 'q2-6',
      question: 'If A ⊆ B, then A ∪ B = B.',
      answer: true,
      explanation: 'Since all elements of A are already in B, adding them to B implies the union is just B.'
    },
    {
      id: 'q2-7',
      question: 'The difference A - B contains elements found in B but not in A.',
      answer: false,
      explanation: 'A - B = {x | x ∈ A ∧ x ∉ B}. It contains elements in A that are NOT in B.'
    },
    {
      id: 'q2-8',
      question: 'Double negation law states that the complement of the complement of A is A itself.',
      answer: true,
      explanation: 'True. Ā̄ = A.'
    },
    {
      id: 'q2-9',
      question: 'For sets, |A ∪ B| = |A| + |B| is always true.',
      answer: false,
      explanation: 'False. |A ∪ B| = |A| + |B| - |A ∩ B|. Only true if sets are disjoint.'
    },
    {
      id: 'q2-10',
      question: 'A function f: A→B is a relation where every element in A is assigned to exactly one element in B.',
      answer: true,
      explanation: 'This is the definition of a function.'
    },
    {
      id: 'q2-11',
      question: 'f(x) = x² is a one-to-one function from integers to integers.',
      answer: false,
      explanation: 'f(1) = 1 and f(-1) = 1, so distinct inputs map to the same output.'
    },
    {
      id: 'q2-12',
      question: 'A bijection must be both one-to-one and onto.',
      answer: true,
      explanation: 'A bijection (one-to-one correspondence) requires both properties.'
    },
    {
      id: 'q2-13',
      question: 'The floor function ⌊-2.1⌋ equals -2.',
      answer: false,
      explanation: 'Floor rounds down to the nearest integer. ⌊-2.1⌋ = -3.'
    },
    {
      id: 'q2-14',
      question: 'The ceiling function ⌈0.5⌉ equals 1.',
      answer: true,
      explanation: 'Ceiling rounds up to the nearest integer. ⌈0.5⌉ = 1.'
    },
    {
      id: 'q2-15',
      question: 'A sequence is an unordered list of elements.',
      answer: false,
      explanation: 'A sequence is an ORDERED list.'
    },
    {
      id: 'q2-16',
      question: 'In a geometric progression, the ratio between consecutive terms is constant.',
      answer: true,
      explanation: 'This ratio is called the common ratio (r).'
    },
    {
      id: 'q2-17',
      question: 'The sum of the first n integers, ∑ i, equals n(n+1)/2.',
      answer: true,
      explanation: 'This is a standard summation formula.'
    },
    {
      id: 'q2-18',
      question: '∑(aᵢ + bᵢ) = ∑aᵢ × ∑bᵢ.',
      answer: false,
      explanation: 'False. The summation of a sum is the sum of summations: ∑(aᵢ + bᵢ) = ∑aᵢ + ∑bᵢ.'
    },
    {
      id: 'q2-19',
      question: 'Is f(x) = x³ an onto function for real numbers?',
      answer: true,
      explanation: 'Yes, because for every real number y, there exists an x = ∛y such that f(x) = y.'
    },
    {
      id: 'q2-20',
      question: 'The cardinality of the integers (ℤ) is Infinite.',
      answer: true,
      explanation: 'The set of integers is countably infinite.'
    },
    {
      id: 'q2-21',
      question: 'f: ℝ → ℝ, f(x) = x² is one-to-one (injective).',
      answer: false,
      explanation: 'Not one-to-one: f(1) = f(-1) = 1, two different inputs give the same output.'
    },
    {
      id: 'q2-22',
      question: 'f: ℝ⁺ → ℝ⁺, f(x) = x² is one-to-one (injective).',
      answer: true,
      explanation: 'On positive reals, f is strictly increasing, so different inputs always give different outputs.'
    },
    {
      id: 'q2-23',
      question: 'f: ℝ → ℝ, f(x) = x³ is a bijection.',
      answer: true,
      explanation: 'f(x) = x³ is both one-to-one (strictly increasing) and onto (range = ℝ).'
    },
    {
      id: 'q2-24',
      question: 'f: ℝ → ℤ, f(x) = ⌊2x⌋ is onto (surjective).',
      answer: true,
      explanation: 'For any integer n, f(n/2) = n. Every integer is covered.'
    },
    {
      id: 'q2-25',
      question: 'f: ℝ → ℤ, f(x) = 2⌊x⌋ is onto (surjective).',
      answer: false,
      explanation: 'Range is only even integers {..,-4,-2,0,2,4,..}. Odd integers are not in the range.'
    },
    {
      id: 'q2-26',
      question: 'There exists a bijection from a set of 5 elements to a set of 7 elements.',
      answer: false,
      explanation: 'Bijection requires |A| = |B|. A 5-element set cannot biject to a 7-element set.'
    },
    {
      id: 'q2-27',
      question: 'f: ℤ×ℤ → ℤ, f(m,n) = m + n is onto (surjective).',
      answer: true,
      explanation: 'For any integer k, f(k, 0) = k. Every integer is in the range.'
    },
    {
      id: 'q2-28',
      question: 'f: ℤ×ℤ → ℤ, f(m,n) = m + n is one-to-one (injective).',
      answer: false,
      explanation: 'Not one-to-one: f(1,2) = f(0,3) = 3. Different inputs give the same output.'
    },
    {
      id: 'q2-29',
      question: 'There exists a bijection from the set of even integers to the set of odd integers.',
      answer: true,
      explanation: 'f(n) = n + 1 maps each even to a unique odd, and covers all odds.'
    },
    {
      id: 'q2-30',
      question: 'If f: A → B is a bijection, then f has an inverse function f⁻¹: B → A.',
      answer: true,
      explanation: 'Bijections are invertible by definition. f⁻¹(y) = x ⟺ f(x) = y.'
    }
  ]
};
