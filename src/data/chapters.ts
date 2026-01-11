import type { Chapter } from '../types';

export const chapters: Chapter[] = [
  {
    id: 'chapter-1',
    number: 1,
    title: 'Logic and Proofs',
    titleVi: 'Logic và Chứng minh',
    description: 'Nền tảng về logic mệnh đề, lượng từ, và các phương pháp chứng minh',
    icon: '🧠',
    color: 'from-blue-500 to-cyan-500',
    topics: [
      {
        id: 'propositional-logic',
        title: 'Logic Mệnh đề (Propositional Logic)',
        content: [
          {
            type: 'text',
            content: 'Mệnh đề là một câu khẳng định đúng hoặc sai, không thể vừa đúng vừa sai.'
          },
          {
            type: 'theorem',
            title: 'Các phép toán logic cơ bản',
            content: '¬p (phủ định), p∧q (hội), p∨q (tuyển), p→q (kéo theo), p↔q (tương đương)'
          },
          {
            type: 'table',
            title: 'Bảng chân trị cơ bản',
            content: {
              headers: ['p', 'q', '¬p', 'p∧q', 'p∨q', 'p→q', 'p↔q'],
              rows: [
                ['T', 'T', 'F', 'T', 'T', 'T', 'T'],
                ['T', 'F', 'F', 'F', 'T', 'F', 'F'],
                ['F', 'T', 'T', 'F', 'T', 'T', 'F'],
                ['F', 'F', 'T', 'F', 'F', 'T', 'T']
              ]
            }
          }
        ]
      },
      {
        id: 'conditional-statements',
        title: 'Câu điều kiện (Conditional Statements)',
        content: [
          {
            type: 'text',
            content: 'Câu điều kiện p → q có nhiều cách diễn đạt tương đương trong ngôn ngữ tự nhiên.'
          },
          {
            type: 'note',
            title: 'Các cách nói "if p, then q"',
            content: '"if p, then q" = "p implies q" = "if p, q" = "p only if q" = "p is sufficient for q" = "a sufficient condition for q is p" = "q if p" = "q whenever p" = "q when p" = "q is necessary for p" = "a necessary condition for p is q" = "q follows from p" = "q unless ¬p"'
          },
          {
            type: 'theorem',
            title: 'Các dạng tương quan',
            content: 'Converse: q → p | Inverse: ¬p → ¬q | Contrapositive: ¬q → ¬p (tương đương với p → q)'
          }
        ]
      },
      {
        id: 'quantifiers',
        title: 'Lượng từ (Quantifiers)',
        content: [
          {
            type: 'text',
            content: 'Lượng từ cho phép diễn đạt các mệnh đề về tập hợp các đối tượng.'
          },
          {
            type: 'formula',
            content: '∀x P(x): "Với mọi x, P(x) đúng" - For all / Every / Each / Any'
          },
          {
            type: 'formula',
            content: '∃x P(x): "Tồn tại x sao cho P(x) đúng" - There is(are) / For some / Some'
          },
          {
            type: 'note',
            title: 'Phủ định lượng từ',
            content: '¬∀x P(x) ≡ ∃x ¬P(x) và ¬∃x P(x) ≡ ∀x ¬P(x)'
          }
        ]
      },
      {
        id: 'compound-propositions',
        title: 'Mệnh đề hợp (Compound Propositions)',
        content: [
          {
            type: 'theorem',
            title: 'Phân loại mệnh đề hợp',
            content: 'Tautology: luôn đúng | Contradiction: luôn sai | Contingency: không phải tautology hoặc contradiction'
          },
          {
            type: 'example',
            title: 'Ví dụ',
            content: 'p ∨ ¬p là Tautology | p ∧ ¬p là Contradiction | p ∨ q là Contingency'
          }
        ]
      },
      {
        id: 'fallacies',
        title: 'Ngụy biện (Fallacies)',
        content: [
          {
            type: 'text',
            content: 'Ngụy biện là những lập luận có vẻ đúng nhưng thực tế không hợp lệ về mặt logic.'
          },
          {
            type: 'note',
            title: 'Các loại ngụy biện phổ biến',
            content: 'Affirming the Consequent: [(p → q) ∧ q] → p (SAI) | Denying the Antecedent: [(p → q) ∧ ¬p] → ¬q (SAI)'
          }
        ]
      }
    ]
  },
  {
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
            content: 'Tập hợp là một bộ sưu tập các đối tượng không có thứ tự và không lặp lại.'
          },
          {
            type: 'theorem',
            title: 'Các phép toán tập hợp',
            content: 'A ∪ B (hợp) | A ∩ B (giao) | A - B hoặc A \\ B (hiệu) | Ā hoặc Aᶜ (phần bù) | A ⊆ B (tập con) | A ⊂ B (tập con thực sự)'
          },
          {
            type: 'formula',
            content: '|P(A)| = 2^|A| (số tập con của A, bao gồm tập rỗng và chính A)'
          }
        ]
      },
      {
        id: 'functions',
        title: 'Hàm số (Functions)',
        content: [
          {
            type: 'text',
            content: 'Hàm f: A → B là quy tắc gán mỗi phần tử của A với đúng một phần tử của B.'
          },
          {
            type: 'theorem',
            title: 'Các loại hàm',
            content: 'One-to-one (Injective): f(a) = f(b) → a = b | Onto (Surjective): ∀b∈B, ∃a∈A: f(a) = b | Bijection: vừa one-to-one vừa onto'
          },
          {
            type: 'note',
            title: '🎯 TRICK: Đếm số hàm',
            content: 'Cho f: A → B với |A| = m, |B| = n'
          },
          {
            type: 'list',
            content: [
              'Số hàm: n^m',
              'Số hàm one-to-one: n!/(n-m)! nếu m ≤ n, còn 0 nếu m > n',
              'Số hàm bijection: n! (khi m = n)'
            ]
          }
        ]
      },
      {
        id: 'special-functions',
        title: 'Các hàm đặc biệt',
        content: [
          {
            type: 'theorem',
            title: 'Floor và Ceiling',
            content: '⌊x⌋ (floor): số nguyên lớn nhất ≤ x | ⌈x⌉ (ceiling): số nguyên nhỏ nhất ≥ x'
          },
          {
            type: 'example',
            title: 'Ví dụ',
            content: '⌊3.7⌋ = 3, ⌈3.7⌉ = 4 | ⌊-2.3⌋ = -3, ⌈-2.3⌉ = -2'
          }
        ]
      }
    ]
  },
  {
    id: 'chapter-3',
    number: 3,
    title: 'Algorithms, the Integers',
    titleVi: 'Thuật toán và Số nguyên',
    description: 'Phân tích thuật toán, Big-O, và lý thuyết số',
    icon: '⚡',
    color: 'from-orange-500 to-red-500',
    topics: [
      {
        id: 'big-o',
        title: 'Big-O Notation',
        content: [
          {
            type: 'text',
            content: 'Big-O mô tả giới hạn trên của độ phức tạp thuật toán khi kích thước đầu vào tăng.'
          },
          {
            type: 'formula',
            content: 'f(n) = O(g(n)) ⇔ ∃C > 0, ∃n₀: |f(n)| ≤ C|g(n)| với mọi n ≥ n₀'
          },
          {
            type: 'note',
            title: 'Thứ tự tăng trưởng',
            content: '1 < log n < n < n log n < n² < 2ⁿ < n!'
          },
          {
            type: 'theorem',
            title: 'Quy tắc nhanh',
            content: 'f(n) = a·nˣ + ... ⇒ f(n) = O(nˣ) | log n is O(n) | n log n is O(n²) | n ≠ O(log n)'
          }
        ]
      },
      {
        id: 'division',
        title: 'Phép chia và Modulo',
        content: [
          {
            type: 'theorem',
            title: 'Định lý chia',
            content: 'Với a, d ∈ Z, d > 0: a = d·q + r với 0 ≤ r < d (q là thương, r là dư)'
          },
          {
            type: 'formula',
            content: 'a mod m = r ⇔ a = m·k + r với 0 ≤ r < m'
          },
          {
            type: 'note',
            title: '🎯 TRICK: Modular Arithmetic',
            content: 'b mod m = r ⇒ b² mod m = r² mod m | (ab) mod m = ((a mod m)(b mod m)) mod m'
          }
        ]
      },
      {
        id: 'gcd-lcm',
        title: 'GCD và LCM',
        content: [
          {
            type: 'theorem',
            title: 'Thuật toán Euclid',
            content: 'gcd(a, b) = gcd(b, a mod b) cho đến khi b = 0, khi đó gcd = a'
          },
          {
            type: 'formula',
            content: 'gcd(a, b) × lcm(a, b) = a × b'
          },
          {
            type: 'example',
            title: 'Ví dụ: gcd(252, 198)',
            content: '252 = 1·198 + 54 → 198 = 3·54 + 36 → 54 = 1·36 + 18 → 36 = 2·18 + 0 → gcd = 18'
          }
        ]
      }
    ]
  },
  {
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
        title: 'Quy nạp Toán học (Mathematical Induction)',
        content: [
          {
            type: 'text',
            content: 'Quy nạp toán học là phương pháp chứng minh mệnh đề đúng với mọi số tự nhiên.'
          },
          {
            type: 'theorem',
            title: 'Nguyên lý Quy nạp',
            content: 'Nếu P(1) đúng (Basis) và P(k) → P(k+1) đúng với mọi k ≥ 1 (Inductive Step), thì P(n) đúng với mọi n ≥ 1'
          },
          {
            type: 'note',
            title: 'Các bước chứng minh',
            content: '1. Basis Step: Chứng minh P(1) đúng | 2. Inductive Hypothesis: Giả sử P(k) đúng | 3. Inductive Step: Chứng minh P(k+1) đúng từ P(k)'
          }
        ]
      },
      {
        id: 'strong-induction',
        title: 'Quy nạp mạnh (Strong Induction)',
        content: [
          {
            type: 'theorem',
            title: 'Nguyên lý Quy nạp mạnh',
            content: 'Nếu P(1) đúng và [P(1) ∧ P(2) ∧ ... ∧ P(k)] → P(k+1), thì P(n) đúng với mọi n'
          },
          {
            type: 'text',
            content: 'Quy nạp mạnh cho phép sử dụng tất cả các trường hợp P(1), P(2), ..., P(k) để chứng minh P(k+1).'
          }
        ]
      },
      {
        id: 'recursion',
        title: 'Định nghĩa Đệ quy (Recursive Definitions)',
        content: [
          {
            type: 'text',
            content: 'Định nghĩa đệ quy gồm: điều kiện cơ sở và quy tắc đệ quy.'
          },
          {
            type: 'example',
            title: 'Ví dụ: Giai thừa',
            content: 'n! = 1 nếu n = 0 | n! = n × (n-1)! nếu n > 0'
          }
        ]
      }
    ]
  },
  {
    id: 'chapter-5',
    number: 5,
    title: 'Counting',
    titleVi: 'Đếm',
    description: 'Nguyên lý đếm, hoán vị, tổ hợp',
    icon: '🔢',
    color: 'from-yellow-500 to-orange-500',
    topics: [
      {
        id: 'counting-principles',
        title: 'Nguyên lý đếm',
        content: [
          {
            type: 'theorem',
            title: 'Nguyên lý cộng (Sum Rule)',
            content: 'Nếu công việc có thể thực hiện theo cách 1 hoặc cách 2, với n₁ cách cho cách 1 và n₂ cách cho cách 2, thì tổng số cách là n₁ + n₂'
          },
          {
            type: 'theorem',
            title: 'Nguyên lý nhân (Product Rule)',
            content: 'Nếu công việc gồm 2 bước, bước 1 có n₁ cách, bước 2 có n₂ cách, thì tổng số cách là n₁ × n₂'
          }
        ]
      },
      {
        id: 'permutations',
        title: 'Hoán vị (Permutations)',
        content: [
          {
            type: 'formula',
            content: 'P(n, r) = n!/(n-r)! - Số cách chọn r phần tử có thứ tự từ n phần tử'
          },
          {
            type: 'formula',
            content: 'P(n, n) = n! - Hoán vị của n phần tử'
          }
        ]
      },
      {
        id: 'combinations',
        title: 'Tổ hợp (Combinations)',
        content: [
          {
            type: 'formula',
            content: 'C(n, r) = n!/(r!(n-r)!) - Số cách chọn r phần tử không quan tâm thứ tự từ n phần tử'
          },
          {
            type: 'theorem',
            title: 'Tính chất',
            content: 'C(n, r) = C(n, n-r) | C(n, 0) = C(n, n) = 1 | C(n, 1) = n'
          }
        ]
      },
      {
        id: 'binomial',
        title: 'Định lý nhị thức (Binomial Theorem)',
        content: [
          {
            type: 'formula',
            content: '(x + y)ⁿ = Σ C(n, k) × xⁿ⁻ᵏ × yᵏ (k từ 0 đến n)'
          }
        ]
      }
    ]
  },
  {
    id: 'chapter-7',
    number: 7,
    title: 'Advanced Counting Techniques',
    titleVi: 'Kỹ thuật đếm nâng cao',
    description: 'Quan hệ đệ quy và dãy Fibonacci',
    icon: '🐰',
    color: 'from-pink-500 to-rose-500',
    topics: [
      {
        id: 'recurrence-relations',
        title: 'Quan hệ đệ quy (Recurrence Relations)',
        content: [
          {
            type: 'text',
            content: 'Quan hệ đệ quy định nghĩa một dãy dựa trên các số hạng trước đó.'
          },
          {
            type: 'formula',
            content: 'aₙ = c₁aₙ₋₁ + c₂aₙ₋₂ + ... + cₖaₙ₋ₖ'
          }
        ]
      },
      {
        id: 'fibonacci',
        title: 'Dãy Fibonacci & Bài toán Con Thỏ 🐰',
        content: [
          {
            type: 'text',
            content: 'Một đôi thỏ (gồm một thỏ đực và một thỏ cái) cứ mỗi tháng đẻ được một đôi thỏ con. Một đôi thỏ con, khi tròn 2 tháng tuổi, sau mỗi tháng cũng đẻ ra một đôi thỏ con. Hỏi sau n tháng có bao nhiêu đôi thỏ, nếu ban đầu có một đôi thỏ sơ sinh?'
          },
          {
            type: 'formula',
            content: 'f(n) = f(n-1) + f(n-2), với n ≥ 3 và f(1) = f(2) = 1'
          },
          {
            type: 'note',
            title: 'Mở rộng: Mỗi đôi đẻ k đôi',
            content: 'f(n) = f(n-1) + k × f(n-2), với n ≥ 3'
          },
          {
            type: 'example',
            title: 'Dãy Fibonacci',
            content: '1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...'
          }
        ]
      }
    ]
  },
  {
    id: 'chapter-9',
    number: 9,
    title: 'Graphs',
    titleVi: 'Đồ thị',
    description: 'Lý thuyết đồ thị, Euler, Hamilton, và isomorphism',
    icon: '🔗',
    color: 'from-indigo-500 to-purple-500',
    topics: [
      {
        id: 'graph-basics',
        title: 'Cơ bản về Đồ thị',
        content: [
          {
            type: 'text',
            content: 'Đồ thị G = (V, E) gồm tập đỉnh V và tập cạnh E nối các đỉnh.'
          },
          {
            type: 'theorem',
            title: 'Handshaking Lemma',
            content: 'Σdeg(v) = 2|E| - Tổng bậc của tất cả các đỉnh bằng 2 lần số cạnh'
          }
        ]
      },
      {
        id: 'special-graphs',
        title: 'Các đồ thị đặc biệt',
        content: [
          {
            type: 'theorem',
            title: 'Complete Graph Kₙ',
            content: 'n đỉnh | Degree sequence: n-1, n-1, ..., n-1 | Số cạnh: n(n-1)/2'
          },
          {
            type: 'theorem',
            title: 'Cycle Graph Cₙ',
            content: 'n đỉnh | Degree sequence: 2, 2, 2, ..., 2 | Số cạnh: n'
          },
          {
            type: 'theorem',
            title: 'Wheel Graph Wₙ',
            content: 'n+1 đỉnh | Degree sequence: 3, 3, ..., 3, n | Số cạnh: 2n'
          },
          {
            type: 'theorem',
            title: 'Hypercube Qₙ',
            content: '2ⁿ đỉnh | Degree sequence: n, n, ..., n | Số cạnh: n × 2ⁿ⁻¹'
          },
          {
            type: 'theorem',
            title: 'Complete Bipartite Graph Kₘ,ₙ',
            content: 'Đỉnh: m + n | Số cạnh: m × n'
          }
        ]
      },
      {
        id: 'connectivity',
        title: 'Tính liên thông (Connectivity)',
        content: [
          {
            type: 'text',
            content: 'Đồ thị vô hướng liên thông nếu có đường đi giữa mọi cặp đỉnh phân biệt.'
          },
          {
            type: 'note',
            title: 'Các khái niệm quan trọng',
            content: 'Connected component: thành phần liên thông cực đại | Cut vertex (Articulation point): đỉnh cắt | Cut edge (Bridge): cạnh cắt'
          },
          {
            type: 'theorem',
            title: 'Đồ thị có hướng',
            content: 'Strongly connected: có đường đi hai chiều giữa mọi cặp đỉnh | Weakly connected: đồ thị vô hướng tương ứng liên thông'
          }
        ]
      },
      {
        id: 'euler',
        title: 'Đường đi và Chu trình Euler',
        content: [
          {
            type: 'text',
            content: 'Đường đi/chu trình Euler đi qua mỗi cạnh đúng một lần.'
          },
          {
            type: 'theorem',
            title: 'Đồ thị vô hướng (multigraph)',
            content: 'Euler circuit: TẤT CẢ các đỉnh có bậc CHẴN | Euler path (không phải circuit): có CHÍNH XÁC 2 đỉnh bậc LẺ'
          },
          {
            type: 'theorem',
            title: 'Đồ thị có hướng',
            content: 'Euler circuit: deg⁺(v) = deg⁻(v) với mọi v | Euler path: có chính xác 2 đỉnh u, w với deg⁺(u) = deg⁻(u) + 1 và deg⁺(w) = deg⁻(w) - 1, còn lại deg⁺(v) = deg⁻(v)'
          }
        ]
      },
      {
        id: 'hamilton',
        title: 'Đường đi và Chu trình Hamilton',
        content: [
          {
            type: 'text',
            content: 'Đường đi/chu trình Hamilton đi qua mỗi ĐỈNH đúng một lần.'
          },
          {
            type: 'theorem',
            title: 'Định nghĩa',
            content: 'Hamilton circuit: đi qua hết các đỉnh, mỗi đỉnh 1 lần (trừ đỉnh bắt đầu) và trở lại điểm xuất phát | Hamilton path: đi qua hết các đỉnh, mỗi đỉnh 1 lần (không cần quay lại)'
          },
          {
            type: 'note',
            title: 'Lưu ý',
            content: 'Không có điều kiện cần và đủ đơn giản để kiểm tra Hamilton path/circuit như Euler!'
          }
        ]
      },
      {
        id: 'isomorphism',
        title: 'Đẳng cấu đồ thị (Graph Isomorphism)',
        content: [
          {
            type: 'text',
            content: 'Hai đồ thị G₁ và G₂ đẳng cấu nếu tồn tại song ánh f từ V₁ đến V₂ sao cho (u, v) ∈ E₁ ⟺ (f(u), f(v)) ∈ E₂.'
          },
          {
            type: 'note',
            title: 'Kiểm tra nhanh',
            content: 'Số đỉnh, số cạnh, dãy bậc phải giống nhau (điều kiện cần, không đủ)'
          }
        ]
      }
    ]
  },
  {
    id: 'chapter-10',
    number: 10,
    title: 'Trees',
    titleVi: 'Cây',
    description: 'Cấu trúc cây, cây khung, và ứng dụng',
    icon: '🌳',
    color: 'from-emerald-500 to-green-500',
    topics: [
      {
        id: 'tree-basics',
        title: 'Cơ bản về Cây',
        content: [
          {
            type: 'text',
            content: 'Cây là đồ thị liên thông không có chu trình.'
          },
          {
            type: 'theorem',
            title: 'Định lý quan trọng',
            content: 'Đồ thị vô hướng là cây ⟺ giữa hai đỉnh bất kỳ có đúng một đường đi đơn | Cây có n đỉnh có n-1 cạnh'
          }
        ]
      },
      {
        id: 'rooted-trees',
        title: 'Cây có gốc (Rooted Trees)',
        content: [
          {
            type: 'text',
            content: 'Cây có gốc là cây với một đỉnh được chọn làm gốc, mọi cạnh hướng ra xa gốc.'
          },
          {
            type: 'list',
            content: [
              'Parent: đỉnh cha (đỉnh nối trực tiếp gần gốc hơn)',
              'Child: đỉnh con',
              'Siblings: các đỉnh có cùng cha',
              'Ancestors: tổ tiên (trên đường từ gốc đến đỉnh đó)',
              'Descendants: hậu duệ (các đỉnh có tổ tiên là đỉnh đó)',
              'Leaf: lá (đỉnh không có con)',
              'Internal vertex: đỉnh trong (có con)',
              'Level: mức (độ dài đường đi từ gốc đến đỉnh)',
              'Height: chiều cao (mức lớn nhất trong cây)'
            ]
          }
        ]
      },
      {
        id: 'm-ary-trees',
        title: 'Cây m-phân (m-ary Trees)',
        content: [
          {
            type: 'text',
            content: 'm-ary tree: mỗi đỉnh có tối đa m con | Full m-ary tree: mỗi đỉnh trong có đúng m con | Binary tree: 2-ary tree'
          },
          {
            type: 'theorem',
            title: 'Công thức quan trọng',
            content: 'Full m-ary tree với i đỉnh trong có n = mi + 1 đỉnh | n đỉnh có i = (n-1)/m đỉnh trong, l = [(m-1)n + 1]/m lá | n = l + i'
          },
          {
            type: 'theorem',
            title: 'Giới hạn lá',
            content: 'Cây m-ary chiều cao h có tối đa mʰ lá'
          }
        ]
      },
      {
        id: 'binary-search-tree',
        title: 'Cây tìm kiếm nhị phân (Binary Search Tree)',
        content: [
          {
            type: 'text',
            content: 'BST là cây nhị phân với mỗi đỉnh v: các đỉnh trong cây con trái < v < các đỉnh trong cây con phải.'
          },
          {
            type: 'theorem',
            title: 'Số phép so sánh tối thiểu',
            content: 'Để tìm kiếm trong danh sách n phần tử cần ít nhất ⌈log(n+1)⌉ phép so sánh'
          }
        ]
      },
      {
        id: 'decision-trees',
        title: 'Cây quyết định (Decision Trees)',
        content: [
          {
            type: 'text',
            content: 'Cây quyết định biểu diễn các quyết định và kết quả có thể.'
          },
          {
            type: 'theorem',
            title: 'Thuật toán sắp xếp',
            content: 'Thuật toán sắp xếp dựa trên so sánh nhị phân cần ít nhất ⌈log n!⌉ phép so sánh'
          }
        ]
      },
      {
        id: 'spanning-trees',
        title: 'Cây khung (Spanning Trees)',
        content: [
          {
            type: 'text',
            content: 'Cây khung của G là cây con của G chứa tất cả các đỉnh của G.'
          },
          {
            type: 'theorem',
            title: 'Minimum Spanning Tree (MST)',
            content: 'Cây khung nhỏ nhất là cây khung có tổng trọng số cạnh nhỏ nhất'
          },
          {
            type: 'note',
            title: 'Thuật toán tìm MST',
            content: "Prim's Algorithm: Bắt đầu từ 1 đỉnh, mỗi bước thêm cạnh nhỏ nhất nối với cây hiện tại | Kruskal's Algorithm: Sắp xếp cạnh tăng dần, chọn cạnh nhỏ nhất không tạo chu trình"
          }
        ]
      }
    ]
  }
];

export default chapters;
