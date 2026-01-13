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
};
