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
};
