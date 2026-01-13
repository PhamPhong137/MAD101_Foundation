import type { Chapter } from '../../types';

export const chapter1: Chapter = {
  id: 'chapter-1',
  number: 1,
  title: 'Logic and Proofs',
  titleVi: 'Logic và Chứng minh',
  description: 'Nền tảng về logic mệnh đề, lượng từ, và các phương pháp chứng minh',
  icon: '🧠',
  color: 'from-blue-500 to-cyan-500',
  topics: [
    {
      id: '1.1-propositional-logic',
      title: '1.1 Propositional Logic (Logic Mệnh đề)',
      content: [
        {
          type: 'text',
          content: 'A proposition is a declarative sentence that is either true or false (Mệnh đề là câu khẳng định có giá trị đúng hoặc sai).'
        },
        {
          type: 'example',
          title: 'Ví dụ: Đâu là mệnh đề?',
          content: '❌ "Great!" → Câu cảm thán, KHÔNG phải mệnh đề | ✅ "Tokyo is the capital of Japan" → Mệnh đề (True) | ❌ "What time is it?" → Câu hỏi, KHÔNG phải mệnh đề | ✅ "It is now 3pm" → Mệnh đề | ✅ "1 + 7 = 9" → Mệnh đề (False) | ❌ "x + 1 = 3" → Có biến, KHÔNG phải mệnh đề'
        },
        {
          type: 'theorem',
          title: 'Compound Propositions (Mệnh đề hợp)',
          content: 'Cho p, q là các mệnh đề. Ta có thể kết hợp chúng bằng các toán tử logic.'
        },
        {
          type: 'table',
          title: 'Bảng toán tử logic',
          content: {
            headers: ['Toán tử', 'Ký hiệu', 'Định nghĩa'],
            rows: [
              ['Negation (Phủ định)', '¬p', 'True nếu p False, False nếu p True'],
              ['Conjunction (Và)', 'p ∧ q', 'True khi cả p và q đều True'],
              ['Disjunction (Hoặc)', 'p ∨ q', 'False khi cả p và q đều False'],
              ['Exclusive OR', 'p ⊕ q', 'True khi chỉ MỘT trong p, q True'],
              ['Conditional (Điều kiện)', 'p → q', 'False khi p True và q False'],
              ['Biconditional', 'p ↔ q', 'True khi p và q cùng giá trị']
            ]
          }
        },
        {
          type: 'table',
          title: 'Bảng chân trị đầy đủ',
          content: {
            headers: ['p', 'q', '¬p', 'p∧q', 'p∨q', 'p⊕q', 'p→q', 'p↔q'],
            rows: [
              ['T', 'T', 'F', 'T', 'T', 'F', 'T', 'T'],
              ['T', 'F', 'F', 'F', 'T', 'T', 'F', 'F'],
              ['F', 'T', 'T', 'F', 'T', 'T', 'T', 'F'],
              ['F', 'F', 'T', 'F', 'F', 'F', 'T', 'T']
            ]
          }
        },
        {
          type: 'note',
          title: '⭐ Các cách diễn đạt p → q',
          content: '• If p then q | • q if p | • p is sufficient for q | • q is necessary for p | • p only if q | • q whenever p | • q follows from p | • q unless ¬p'
        },
        {
          type: 'theorem',
          title: 'Các dạng liên quan của p → q',
          content: '• Converse (Đảo): q → p | • Inverse (Phủ): ¬p → ¬q | • Contrapositive (Đối ngẫu): ¬q → ¬p (tương đương p → q)'
        }
      ]
    },
    {
      id: '1.2-propositional-equivalences',
      title: '1.2 Propositional Equivalences (Tương đương Logic)',
      content: [
        {
          type: 'theorem',
          title: 'Phân loại mệnh đề',
          content: '• Tautology: Mệnh đề luôn TRUE (VD: p ∨ ¬p) | • Contradiction: Mệnh đề luôn FALSE (VD: p ∧ ¬p) | • Contingency: Mệnh đề lúc True lúc False'
        },
        {
          type: 'formula',
          content: 'Logical Equivalence: p ≡ q khi và chỉ khi p ↔ q là tautology'
        },
        {
          type: 'table',
          title: 'Bảng các luật tương đương logic (Some Logical Equivalences)',
          content: {
            headers: ['Tên luật', 'Công thức'],
            rows: [
              ['Double negation law', '¬(¬p) ≡ p'],
              ['Identity laws', 'p ∧ T ≡ p\np ∨ F ≡ p'],
              ['Domination laws', 'p ∨ T ≡ T\np ∧ F ≡ F'],
              ['Negation laws', 'p ∨ ¬p ≡ T\np ∧ ¬p ≡ F'],
              ['Idempotent laws', 'p ∨ p ≡ p\np ∧ p ≡ p'],
              ['Commutative laws', 'p ∨ q ≡ q ∨ p\np ∧ q ≡ q ∧ p'],
              ['Associative laws', '(p ∨ q) ∨ r ≡ p ∨ (q ∨ r)\n(p ∧ q) ∧ r ≡ p ∧ (q ∧ r)'],
              ['Distributive laws', 'p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)\np ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)'],
              ['De Morgan\'s laws ⭐', '¬(p ∧ q) ≡ ¬p ∨ ¬q\n¬(p ∨ q) ≡ ¬p ∧ ¬q'],
              ['Absorption laws', 'p ∨ (p ∧ q) ≡ p\np ∧ (p ∨ q) ≡ p']
            ]
          }
        },
        {
          type: 'note',
          title: '📝 Note: Các công thức quan trọng',
          content: '• p → q ≡ ¬p ∨ q (Implication Law) | • p ↔ q ≡ (p → q) ∧ (q → p) (Biconditional) | • p ⊕ q ≡ ¬(p ↔ q) (XOR) | • p → q ≡ ¬q → ¬p (Contrapositive)'
        },
        {
          type: 'example',
          title: 'Example 1: Chứng minh ¬(p ∨ (¬p ∧ q)) ≡ ¬p ∧ ¬q',
          content: '¬(p ∨ (¬p ∧ q)) | ≡ ¬p ∧ ¬(¬p ∧ q)  [De Morgan] | ≡ ¬p ∧ (p ∨ ¬q)  [De Morgan] | ≡ (¬p ∧ p) ∨ (¬p ∧ ¬q)  [Distributive] | ≡ F ∨ (¬p ∧ ¬q)  [Negation] | ≡ ¬p ∧ ¬q  [Identity] ✓'
        },
        {
          type: 'example',
          title: 'Example 2: Chứng minh (p ∧ q) → (p ∨ q) là tautology',
          content: '(p ∧ q) → (p ∨ q) | ≡ ¬(p ∧ q) ∨ (p ∨ q)  [Implication Law] | ≡ (¬p ∨ ¬q) ∨ (p ∨ q)  [De Morgan] | ≡ (¬p ∨ p) ∨ (¬q ∨ q)  [Associative, Commutative] | ≡ T ∨ T  [Negation] | ≡ T  [Domination] ✓'
        }
      ]
    },
    {
      id: '1.3-predicates-quantifiers',
      title: '1.3 Predicates and Quantifiers (Vị từ và Lượng từ)',
      content: [
        {
          type: 'text',
          content: 'Câu "x > 3" không phải là mệnh đề. Nó sẽ trở thành mệnh đề khi gán giá trị cho x.'
        },
        {
          type: 'theorem',
          title: 'Propositional Function (Hàm mệnh đề)',
          content: 'Câu "x > 3" được gọi là propositional function, ký hiệu P(x). | • x gọi là variable (biến) | • "> 3" gọi là predicate (vị từ) | • P(0) = F, P(5) = T'
        },
        {
          type: 'note',
          title: 'Multi-variable predicate',
          content: 'Propositional function có thể có nhiều biến. VD: R(x, y, z) = "x + y < z" với variables x, y, z và R là predicate.'
        },
        {
          type: 'table',
          title: 'Quantifiers (Lượng từ)',
          content: {
            headers: ['Ký hiệu', 'Tên', 'Ý nghĩa', 'True khi'],
            rows: [
              ['∀x P(x)', 'Universal (Với mọi)', 'Với MỌI x, P(x) đúng', 'P(x) đúng với TẤT CẢ giá trị x trong domain'],
              ['∃x P(x)', 'Existential (Tồn tại)', 'TỒN TẠI x sao cho P(x) đúng', 'P(x) đúng với ÍT NHẤT MỘT giá trị x']
            ]
          }
        },
        {
          type: 'theorem',
          title: 'Phủ định lượng từ ⭐',
          content: '¬∀x P(x) ≡ ∃x ¬P(x) | ¬∃x P(x) ≡ ∀x ¬P(x)'
        },
        {
          type: 'theorem',
          title: 'Negating Quantified Expressions',
          content: 'Khi phủ định biểu thức với lượng từ: | 1. Đổi ∀ thành ∃ (và ngược lại) | 2. Phủ định predicate bên trong'
        },
        {
          type: 'example',
          title: 'Example: Viết lại ¬∀x(P(x) → Q(x)) sao cho ¬ đứng trước predicates',
          content: '¬∀x(P(x) → Q(x)) | ≡ ∃x ¬(P(x) → Q(x))  [Phủ định ∀ → ∃] | ≡ ∃x ¬(¬P(x) ∨ Q(x))  [p → q ≡ ¬p ∨ q] | ≡ ∃x (P(x) ∧ ¬Q(x))  [De Morgan] ✓'
        },
        {
          type: 'example',
          title: 'Example: Cho x là số thực. Xác định giá trị chân lý:',
          content: '✅ (a) ∀x((x > 0) → (x² ≥ x)) = TRUE (với mọi x > 0, x² ≥ x đúng khi x ≥ 1, sai khi 0 < x < 1, nhưng → vẫn đúng) | ❌ (b) ∀x((x > 0) ∧ (x² ≥ x)) = FALSE (x = -1 không thỏa) | ✅ (c) ∀x((x > 0) ∨ (x² ≥ x)) = TRUE (mọi x đều thỏa ít nhất 1 vế) | ✅ (d) ∃x((x > 0) → (x² ≥ x)) = TRUE (tồn tại x = 2 thỏa) | ✅ (e) ∃x((x > 0) ∧ (x² ≥ x)) = TRUE (x = 2: 2 > 0 và 4 ≥ 2) | ✅ (f) ∃x((x > 0) ∨ (x² ≥ x)) = TRUE (x = 1 thỏa)'
        }
      ]
    },
    {
      id: '1.4-nested-quantifiers',
      title: '1.4 Nested Quantifiers (Lượng từ lồng nhau)',
      content: [
        {
          type: 'table',
          title: '📚 Ý nghĩa các lượng từ lồng nhau',
          content: {
            headers: ['Biểu thức', 'Ý nghĩa (English)'],
            rows: [
              ['∀x∀y P(x,y)', 'For all x and for all y, P(x,y) is true'],
              ['∀x∃y P(x,y)', 'For all x, there exists y such that P(x,y) is true'],
              ['∃x∀y P(x,y)', 'There exists x such that for all y, P(x,y) is true'],
              ['∃x∃y P(x,y)', 'There exist x and y such that P(x,y) is true']
            ]
          }
        },
        {
          type: 'note',
          title: '⚠️ The order of quantifiers is IMPORTANT!',
          content: '∀x∃y P(x,y) ≠ ∃y∀x P(x,y)'
        },
        {
          type: 'table',
          title: 'Example: Giá trị chân lý với P(x,y) = "x + y = 1" trên ℝ',
          content: {
            headers: ['Biểu thức', 'Giá trị', 'Giải thích'],
            rows: [
              ['∀x∀y (x + y = 1)', 'FALSE', 'Không phải mọi cặp (x,y) có tổng = 1'],
              ['∀x∃y (x + y = 1)', 'TRUE', 'Với mỗi x, chọn y = 1 - x'],
              ['∃x∀y (x + y = 1)', 'FALSE', 'Không tồn tại x cố định thỏa mọi y'],
              ['∃x∃y (x + y = 1)', 'TRUE', 'VD: x = 0, y = 1']
            ]
          }
        },
        {
          type: 'table',
          title: 'Translate Sentences → Logic (Dịch câu sang logic)',
          content: {
            headers: ['Câu tiếng Anh', 'Biểu thức Logic'],
            rows: [
              ['Each student emails others (not self)', '∀x∀y ((x ≠ y) → E(x,y))\nE(x,y) = "x emails y"'],
              ['Each student has car OR roommate has car', '∀x (C(x) ∨ ∃y(R(x,y) ∧ C(y)))\nC(x)="has car", R(x,y)="roommates"'],
              ['Exactly ONE student born in Hanoi', '∃x (H(x) ∧ ∀y(H(y) → y=x))'],
              ['Exactly TWO students born in Hanoi', '∃x∃y (x≠y ∧ H(x) ∧ H(y) ∧ ∀z(H(z) → z=x ∨ z=y))']
            ]
          }
        },
        {
          type: 'table',
          title: 'Negating Nested Quantifiers (Phủ định)',
          content: {
            headers: ['Biểu thức gốc', 'Phủ định'],
            rows: [
              ['∀x∀y P(x,y)', '∃x∃y ¬P(x,y)'],
              ['∀x∃y P(x,y)', '∃x∀y ¬P(x,y)'],
              ['∃x∀y P(x,y)', '∀x∃y ¬P(x,y)'],
              ['∃x∃y P(x,y)', '∀x∀y ¬P(x,y)']
            ]
          }
        },
        {
          type: 'example',
          title: 'Example: Dịch và phủ định',
          content: 'Câu: "For all real x there is y such that x = y³" | Dịch: ∀x∃y (x = y³) | Phủ định: ∃x∀y (x ≠ y³) | Nghĩa: "Tồn tại x sao cho với mọi y, x ≠ y³"'
        }
      ]
    },
    {
      id: '1.5-rules-of-inference',
      title: '1.5 Rules of Inference (Quy tắc suy luận)',
      content: [
        {
          type: 'text',
          content: 'An argument is a sequence of statements that end with a conclusion. An argument is valid if it is based on a tautology. Arguments not based on tautology are called fallacies.'
        },
        {
          type: 'table',
          title: 'Bảng các quy tắc suy luận',
          content: {
            headers: ['Name', 'Rule of Inference', 'Tautology'],
            rows: [
              ['Addition', 'p\n∴ p ∨ q', 'p → (p ∨ q)'],
              ['Simplification', 'p ∧ q\n∴ p', '(p ∧ q) → p'],
              ['Modus Ponens ⭐', 'p\np → q\n∴ q', 'p ∧ (p → q) → q'],
              ['Modus Tollens ⭐', '¬q\np → q\n∴ ¬p', '(¬q) ∧ (p → q) → ¬p'],
              ['Hypothetical Syllogism', 'p → q\nq → r\n∴ p → r', '(p → q) ∧ (q → r) → (p → r)'],
              ['Disjunctive Syllogism', '¬p\np ∨ q\n∴ q', '(p ∨ q) ∧ (¬p) → q'],
              ['Resolution', 'p ∨ q\n¬p ∨ r\n∴ q ∨ r', '(p ∨ q) ∧ (¬p ∨ r) → (q ∨ r)']
            ]
          }
        },
        {
          type: 'table',
          title: '📚 Rules of Inference for Quantified Statements',
          content: {
            headers: ['Name', 'Rule of Inference'],
            rows: [
              ['Universal instantiation', '∀xP(x)\n∴ P(c), c is arbitrary'],
              ['Universal generalization', 'P(c), c is arbitrary\n∴ ∀xP(x)'],
              ['Existential instantiation', '∃xP(x)\n∴ P(c), for some c'],
              ['Existential generalization', 'P(c), for some c\n∴ ∃xP(x)']
            ]
          }
        },
        {
          type: 'note',
          title: '⚠️ Fallacies (Ngụy biện) - KHÔNG hợp lệ!',
          content: '• Affirming the Consequent: [(p → q) ∧ q] → p ❌ | • Denying the Antecedent: [(p → q) ∧ ¬p] → ¬q ❌'
        },
        {
          type: 'table',
          title: 'Example: Given the hypotheses:\n• "It is not sunny and is cold"\n• "We go swimming only if it is sunny"\n• "If we do not go swimming then we will play soccer"\n• "If we play soccer then we will go home by sunset"\n\nShow that these hypotheses lead to the conclusion: "We will go home by sunset".\n\nĐịnh nghĩa: s = "sunny", c = "cold", w = "go swimming", p = "play soccer", h = "go home by sunset"',
          content: {
            headers: ['Step', 'Statement', 'Reason'],
            rows: [
              ['1', '¬s ∧ c', 'Hypothesis'],
              ['2', '¬s', 'Simplification from (1)'],
              ['3', 'w → s', 'Hypothesis'],
              ['4', '¬w', 'Modus Tollens from (2), (3)'],
              ['5', '¬w → p', 'Hypothesis'],
              ['6', 'p', 'Modus Ponens from (4), (5)'],
              ['7', 'p → h', 'Hypothesis'],
              ['8', 'h ✓', 'Modus Ponens from (6), (7)']
            ]
          }
        }
      ]
    },
    {
      id: '1.6-introduction-to-proofs',
      title: '📖 1.6 Introduction to Proofs (Đọc thêm)',
      content: [
        {
          type: 'text',
          content: 'Proof (Chứng minh) là một chuỗi các bước logic dẫn từ các tiền đề đến kết luận.'
        },
        {
          type: 'theorem',
          title: 'Các thành phần của chứng minh',
          content: '• Axioms: Các tiên đề được chấp nhận là đúng | • Definitions: Định nghĩa các khái niệm | • Previously proven theorems: Các định lý đã chứng minh | • Rules of Inference: Quy tắc suy luận'
        },
        {
          type: 'note',
          title: 'Direct Proof (Chứng minh trực tiếp)',
          content: 'Để chứng minh p → q: Giả sử p đúng, sau đó dùng logic để chứng minh q đúng.'
        },
        {
          type: 'example',
          title: 'Ví dụ Direct Proof',
          content: 'CM: Nếu n lẻ thì n² lẻ | Giả sử n lẻ → n = 2k + 1 | n² = (2k+1)² = 4k² + 4k + 1 = 2(2k² + 2k) + 1 | Vậy n² có dạng 2m + 1 → n² lẻ ✓'
        }
      ]
    },
    {
      id: '1.7-proof-methods',
      title: '📖 1.7 Proof Methods and Strategy (Đọc thêm)',
      content: [
        {
          type: 'theorem',
          title: 'Proof by Contraposition (Chứng minh phản chứng)',
          content: 'Để CM p → q, ta CM ¬q → ¬p (vì p → q ≡ ¬q → ¬p)'
        },
        {
          type: 'theorem',
          title: 'Proof by Contradiction (Chứng minh bằng phản chứng)',
          content: 'Để CM p đúng, giả sử ¬p và chứng minh dẫn đến mâu thuẫn.'
        },
        {
          type: 'example',
          title: 'VD: √2 là số vô tỉ',
          content: 'Giả sử √2 hữu tỉ → √2 = a/b (tối giản) → 2 = a²/b² → a² = 2b² → a chẵn → a = 2c → 4c² = 2b² → b² = 2c² → b chẵn. Mâu thuẫn vì a, b không thể cùng chẵn (đã tối giản). Vậy √2 vô tỉ ✓'
        },
        {
          type: 'theorem',
          title: 'Proof by Cases (Chứng minh theo trường hợp)',
          content: 'Chia vấn đề thành các trường hợp riêng biệt và chứng minh từng trường hợp.'
        },
        {
          type: 'theorem',
          title: 'Existence Proofs',
          content: '• Constructive: Tìm ra VD cụ thể | • Non-constructive: Chứng minh tồn tại mà không cần chỉ ra cụ thể'
        },
        {
          type: 'note',
          title: 'Counterexample (Phản ví dụ)',
          content: 'Để bác bỏ ∀x P(x), chỉ cần tìm MỘT x mà P(x) sai.'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q1-1',
      question: '"What time is it?" là một mệnh đề.',
      answer: false,
      explanation: 'Câu hỏi không phải là mệnh đề vì không có giá trị đúng hoặc sai xác định.'
    },
    {
      id: 'q1-2',
      question: '"1 + 7 = 9" là một mệnh đề.',
      answer: true,
      explanation: 'Đây là một mệnh đề vì có giá trị chân lý xác định (False vì 1 + 7 = 8 ≠ 9).'
    },
    {
      id: 'q1-3',
      question: 'p → q sai khi p đúng và q sai.',
      answer: true,
      explanation: 'Implication p → q chỉ sai trong trường hợp duy nhất: p = True và q = False.'
    },
    {
      id: 'q1-4',
      question: 'p ↔ q đúng khi p và q có cùng giá trị chân lý.',
      answer: true,
      explanation: 'Biconditional p ↔ q đúng khi cả hai cùng True hoặc cùng False.'
    },
    {
      id: 'q1-5',
      question: '¬(p ∧ q) ≡ ¬p ∧ ¬q theo luật De Morgan.',
      answer: false,
      explanation: 'Sai! Theo De Morgan: ¬(p ∧ q) ≡ ¬p ∨ ¬q (dùng OR, không phải AND).'
    },
    {
      id: 'q1-6',
      question: 'p → q tương đương với ¬p ∨ q.',
      answer: true,
      explanation: 'Đây là Implication Law: p → q ≡ ¬p ∨ q.'
    },
    {
      id: 'q1-7',
      question: '∀x P(x) có nghĩa là "tồn tại x sao cho P(x) đúng".',
      answer: false,
      explanation: '∀x P(x) có nghĩa là "với MỌI x, P(x) đúng". "Tồn tại" là ∃x P(x).'
    },
    {
      id: 'q1-8',
      question: '¬∀x P(x) ≡ ∃x ¬P(x)',
      answer: true,
      explanation: 'Phủ định của "với mọi x" là "tồn tại x" với mệnh đề bị phủ định.'
    },
    {
      id: 'q1-9',
      question: 'Modus Ponens: Từ p và p → q, suy ra q.',
      answer: true,
      explanation: 'Modus Ponens là quy tắc suy luận: nếu p đúng và p → q đúng thì q phải đúng.'
    },
    {
      id: 'q1-10',
      question: '"x + 1 = 3" là một mệnh đề.',
      answer: false,
      explanation: 'Biểu thức có biến không phải là mệnh đề vì giá trị chân lý phụ thuộc vào giá trị của x.'
    },
    {
      id: 'q1-11',
      question: '∀x∃y P(x,y) và ∃y∀x P(x,y) luôn tương đương.',
      answer: false,
      explanation: 'Thứ tự lượng từ rất quan trọng! VD: ∀x∃y(x+y=0) đúng, nhưng ∃y∀x(x+y=0) sai.'
    },
    {
      id: 'q1-12',
      question: 'Contrapositive của p → q là ¬q → ¬p.',
      answer: true,
      explanation: 'Contrapositive ¬q → ¬p tương đương logic với p → q.'
    },
    {
      id: 'q1-13',
      question: 'p ∨ ¬p là một tautology.',
      answer: true,
      explanation: 'p ∨ ¬p luôn TRUE với mọi giá trị của p, nên đây là tautology.'
    },
    {
      id: 'q1-14',
      question: 'p ∧ ¬p là một contradiction.',
      answer: true,
      explanation: 'p ∧ ¬p luôn FALSE với mọi giá trị của p, nên đây là contradiction.'
    },
    {
      id: 'q1-15',
      question: 'Modus Tollens: Từ ¬q và p → q, suy ra ¬p.',
      answer: true,
      explanation: 'Modus Tollens: nếu kết luận sai (¬q) và p → q đúng, thì tiền đề phải sai (¬p).'
    },
    {
      id: 'q1-16',
      question: '∀x∃y (x + y = 1) là FALSE trên tập số thực.',
      answer: false,
      explanation: 'Đây là TRUE vì với mỗi x, ta có thể chọn y = 1 - x để x + y = 1.'
    },
    {
      id: 'q1-17',
      question: '∃x∀y (x + y = 1) là TRUE trên tập số thực.',
      answer: false,
      explanation: 'Đây là FALSE vì không tồn tại x cố định sao cho x + y = 1 với MỌI y.'
    },
    {
      id: 'q1-18',
      question: 'p ⊕ q tương đương với ¬(p ↔ q).',
      answer: true,
      explanation: 'XOR (p ⊕ q) đúng khi p và q khác giá trị, ngược với biconditional.'
    },
    {
      id: 'q1-19',
      question: 'Affirming the Consequent [(p → q) ∧ q] → p là một quy tắc suy luận hợp lệ.',
      answer: false,
      explanation: 'Đây là một fallacy (ngụy biện). VD: Nếu mưa thì đường ướt, đường ướt → mưa? Sai!'
    },
    {
      id: 'q1-20',
      question: 'Universal instantiation: Từ ∀xP(x), suy ra P(c) với c bất kỳ.',
      answer: true,
      explanation: 'Nếu P(x) đúng với mọi x, thì P(c) đúng với bất kỳ giá trị c nào.'
    }
  ]
};
