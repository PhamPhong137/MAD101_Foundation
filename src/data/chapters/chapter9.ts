import type { Chapter } from '../../types';

export const chapter9: Chapter = {
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
};
