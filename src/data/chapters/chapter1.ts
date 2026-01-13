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
          type: 'theorem',
          title: 'De Morgan Laws ⭐',
          content: '¬(p ∧ q) ≡ ¬p ∨ ¬q | ¬(p ∨ q) ≡ ¬p ∧ ¬q'
        },
        {
          type: 'theorem',
          title: 'Implication Law ⭐',
          content: 'p → q ≡ ¬p ∨ q'
        },
        {
          type: 'theorem',
          title: 'Biconditional Law',
          content: 'p ↔ q ≡ (p → q) ∧ (q → p) ≡ (p ∧ q) ∨ (¬p ∧ ¬q)'
        },
        {
          type: 'list',
          content: [
            'Double Negation: ¬(¬p) ≡ p',
            'Commutative: p ∧ q ≡ q ∧ p | p ∨ q ≡ q ∨ p',
            'Associative: (p ∧ q) ∧ r ≡ p ∧ (q ∧ r)',
            'Distributive: p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)',
            'Identity: p ∧ T ≡ p | p ∨ F ≡ p',
            'Domination: p ∨ T ≡ T | p ∧ F ≡ F',
            'Idempotent: p ∧ p ≡ p | p ∨ p ≡ p',
            'Absorption: p ∨ (p ∧ q) ≡ p | p ∧ (p ∨ q) ≡ p'
          ]
        }
      ]
    },
    {
      id: '1.3-predicates-quantifiers',
      title: '1.3 Predicates and Quantifiers (Vị từ và Lượng từ)',
      content: [
        {
          type: 'text',
          content: 'Predicate (Vị từ): Là mệnh đề chứa biến. Khi gán giá trị cụ thể cho biến, vị từ trở thành mệnh đề.'
        },
        {
          type: 'example',
          title: 'Ví dụ Predicate',
          content: 'P(x): "x > 3" | P(1) = False | P(5) = True | Q(x,y): "x + y = 5" | Q(2,3) = True'
        },
        {
          type: 'table',
          title: 'Quantifiers (Lượng từ)',
          content: {
            headers: ['Ký hiệu', 'Tên', 'Ý nghĩa', 'True khi'],
            rows: [
              ['∀x P(x)', 'Universal', 'Với MỌI x, P(x) đúng', 'P(x) đúng với TẤT CẢ giá trị x'],
              ['∃x P(x)', 'Existential', 'TỒN TẠI x sao cho P(x) đúng', 'P(x) đúng với ÍT NHẤT MỘT giá trị x']
            ]
          }
        },
        {
          type: 'theorem',
          title: 'Phủ định lượng từ ⭐',
          content: '¬∀x P(x) ≡ ∃x ¬P(x) | ¬∃x P(x) ≡ ∀x ¬P(x)'
        },
        {
          type: 'note',
          title: 'Cách nhớ',
          content: 'Phủ định "với mọi" → "tồn tại ... không" | Phủ định "tồn tại" → "với mọi ... không"'
        }
      ]
    },
    {
      id: '1.4-nested-quantifiers',
      title: '1.4 Nested Quantifiers (Lượng từ lồng nhau)',
      content: [
        {
          type: 'text',
          content: 'Khi có nhiều biến, ta sử dụng nhiều lượng từ. Thứ tự các lượng từ RẤT QUAN TRỌNG!'
        },
        {
          type: 'example',
          title: 'Ví dụ',
          content: '∀x∀y P(x,y): Với mọi x, với mọi y, P(x,y) đúng | ∀x∃y P(x,y): Với mọi x, tồn tại y sao cho P(x,y) đúng | ∃x∀y P(x,y): Tồn tại x, với mọi y, P(x,y) đúng | ∃x∃y P(x,y): Tồn tại x và tồn tại y sao cho P(x,y) đúng'
        },
        {
          type: 'note',
          title: '⚠️ Thứ tự quan trọng!',
          content: '∀x∃y P(x,y) ≠ ∃y∀x P(x,y) | VD: ∀x∃y (x + y = 0) là TRUE (với mỗi x, chọn y = -x) | Nhưng ∃y∀x (x + y = 0) là FALSE (không tồn tại y cố định thỏa mọi x)'
        },
        {
          type: 'theorem',
          title: 'Phủ định lượng từ lồng nhau',
          content: '¬∀x∀y P(x,y) ≡ ∃x∃y ¬P(x,y) | ¬∀x∃y P(x,y) ≡ ∃x∀y ¬P(x,y) | ¬∃x∀y P(x,y) ≡ ∀x∃y ¬P(x,y) | ¬∃x∃y P(x,y) ≡ ∀x∀y ¬P(x,y)'
        }
      ]
    },
    {
      id: '1.5-rules-of-inference',
      title: '1.5 Rules of Inference (Quy tắc suy luận)',
      content: [
        {
          type: 'text',
          content: 'Các quy tắc suy luận cho phép ta rút ra kết luận từ các tiền đề.'
        },
        {
          type: 'theorem',
          title: 'Modus Ponens ⭐',
          content: 'Từ p và (p → q), suy ra q | [(p) ∧ (p → q)] → q'
        },
        {
          type: 'theorem',
          title: 'Modus Tollens ⭐',
          content: 'Từ ¬q và (p → q), suy ra ¬p | [(¬q) ∧ (p → q)] → ¬p'
        },
        {
          type: 'theorem',
          title: 'Hypothetical Syllogism',
          content: 'Từ (p → q) và (q → r), suy ra (p → r) | [(p → q) ∧ (q → r)] → (p → r)'
        },
        {
          type: 'theorem',
          title: 'Disjunctive Syllogism',
          content: 'Từ (p ∨ q) và ¬p, suy ra q | [(p ∨ q) ∧ ¬p] → q'
        },
        {
          type: 'theorem',
          title: 'Addition & Simplification',
          content: 'Addition: p → (p ∨ q) | Simplification: (p ∧ q) → p'
        },
        {
          type: 'theorem',
          title: 'Resolution',
          content: 'Từ (p ∨ q) và (¬p ∨ r), suy ra (q ∨ r) | [(p ∨ q) ∧ (¬p ∨ r)] → (q ∨ r)'
        },
        {
          type: 'note',
          title: '⚠️ Fallacies (Ngụy biện) - SAI!',
          content: '• Affirming the Consequent: [(p → q) ∧ q] → p ❌ | • Denying the Antecedent: [(p → q) ∧ ¬p] → ¬q ❌'
        }
      ]
    },
    {
      id: '1.6-introduction-to-proofs',
      title: '1.6 Introduction to Proofs (Giới thiệu chứng minh)',
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
      title: '1.7 Proof Methods and Strategy (Phương pháp chứng minh)',
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
    }
  ]
};
