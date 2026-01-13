import type { Chapter } from '../../types';

export const chapter10: Chapter = {
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
};
