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
};
