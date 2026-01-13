import type { Chapter } from '../../types';

export const chapter5: Chapter = {
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
};
