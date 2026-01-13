import type { Chapter } from '../../types';

export const chapter7: Chapter = {
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
};
