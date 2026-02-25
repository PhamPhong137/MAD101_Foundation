import type { Chapter } from '../../types';

export const chapter10: Chapter = {
  id: 'chapter-10',
  number: 10,
  title: 'Trees',
  titleVi: 'Cây',
  description: 'Cấu trúc cây, duyệt cây, Huffman coding, và cây khung',
  icon: '🌳',
  color: 'from-emerald-500 to-green-500',
  topics: [
    {
      id: 'introduction-trees',
      title: 'Introduction to Trees',
      content: [
        {
          type: 'theorem',
          title: 'Definition',
          content: 'A tree is a connected undirected simple graph with no simple circuits.'
        },
        {
          type: 'theorem',
          title: 'Fundamental Theorem',
          content: 'An undirected graph is a tree if and only if between any two vertices there is a unique simple path. | A tree with n vertices has n - 1 edges.'
        },
        {
          type: 'theorem',
          title: 'Rooted Tree',
          content: 'A rooted tree is a tree in which one vertex is designated as the root and every edge is directed away from the root.'
        },
        {
          type: 'theorem',
          title: 'Tree Terminology',
          content: 'Parent: vertex u is parent of v if there is edge from u to v | Child: v is child of u | Siblings: vertices with same parent | Ancestors: vertices on path from root to vertex (excluding vertex itself) | Descendants: vertices that have v as ancestor | Leaf: vertex with no children | Internal vertex: vertex with children | Subtree: subgraph consisting of vertex and all its descendants'
        },
        {
          type: 'theorem',
          title: 'm-ary Tree',
          content: 'A rooted tree is an m-ary tree if each vertex has at most m children. | Full m-ary tree: each internal vertex has exactly m children | Binary tree: 2-ary tree'
        },
        {
          type: 'theorem',
          title: 'Full m-ary Tree Properties',
          content: 'If n = number of vertices and i = number of internal vertices in a full m-ary tree, then: | n = mi + 1 | i = (n - 1)/m | l = [(m - 1)n + 1]/m (number of leaves)'
        },
        {
          type: 'example',
          title: 'Example 1: Full 4-ary Tree',
          content: 'Does there exist a full 4-ary tree with 80 leaves? | l = 80, m = 4 | Need: 80 = [(4-1)n + 1]/4 = (3n + 1)/4 | 320 = 3n + 1 → n = 319/3 (not integer) | Answer: NO ✗'
        },
        {
          type: 'example',
          title: 'Example 2: Chain Letter',
          content: 'Chain letter: each person sends to exactly 4 others or to no one. Game ends when 100 persons receive but don\'t send. | This is a full 4-ary tree with l = 100 leaves | n = mi + 1 → 100 = 4i + 1 → i = 99/4 (not integer) | Actually: n = 4i + 1 where i = internal vertices | l = 100, so i = (l-1)/(m-1) = 99/3 = 33 | Total persons: n = 100 + 33 = 133 | Persons who sent: i = 33'
        },
        {
          type: 'theorem',
          title: 'Level and Height',
          content: 'Level of vertex: length of unique path from root to that vertex | Height of tree: maximum level of vertices | Balanced tree: each leaf has level h or h-1'
        },
        {
          type: 'theorem',
          title: 'Bounds on Leaves',
          content: 'In an m-ary tree with height h and l leaves: l ≤ mʰ | Therefore: h ≥ ⌈log_m l⌉ | In a balanced m-ary tree: h = ⌈log_m l⌉'
        },
        {
          type: 'example',
          title: 'Example: Height Bounds',
          content: 'Does there exist a full m-ary tree with height 4 and 100 leaves? | Need: 100 ≤ m⁴ → m ≥ ⁴√100 ≈ 3.16 | So m ≥ 4. Yes, possible for m ≥ 4 ✓'
        }
      ]
    },
    {
      id: 'applications',
      title: 'Applications of Trees',
      content: [
        {
          type: 'theorem',
          title: 'Binary Search Trees',
          content: 'A binary search tree stores data in a binary tree where for each vertex v: | • All values in left subtree < value at v | • All values in right subtree > value at v | Allows efficient searching, insertion, and deletion'
        },
        {
          type: 'example',
          title: 'Example: Building BST',
          content: 'Form BST for words: mathematics, physics, geography, zoology, meteorology, geology, psychology, chemistry | Insert in order given, placing smaller words left, larger words right | To find "meteorology": compare with root, go left/right accordingly | Number of comparisons ≤ height of tree'
        },
        {
          type: 'theorem',
          title: 'Minimum Comparisons',
          content: 'The least number of comparisons to locate an element in a list of length n is ⌈log(n + 1)⌉.'
        },
        {
          type: 'theorem',
          title: 'Decision Trees',
          content: 'Decision trees model decisions and their possible consequences. | Example: Finding counterfeit coin among 8 coins using balance scale | Each weighing is a decision node, outcomes are branches | Minimum weighings needed = height of decision tree'
        },
        {
          type: 'theorem',
          title: 'Sorting Complexity',
          content: 'A sorting algorithm based on binary comparisons requires at least ⌈log(n!)⌉ comparisons. | Note: log(n!) = Θ(n log n)'
        },
        {
          type: 'theorem',
          title: 'Prefix Codes',
          content: 'Prefix codes: bit strings where no string is prefix of another | Used to encode messages efficiently | Binary trees can create prefix codes: | • Left edge = 0, right edge = 1 | • Each leaf represents a character | • Path from root to leaf gives code for that character'
        },
        {
          type: 'example',
          title: 'Example: Encoding "good morning"',
          content: 'Message has 11 characters. Using 3 bits per character: 33 bits total. | Can we do better with variable-length codes? | Use more frequent characters → shorter codes | Less frequent characters → longer codes'
        },
        {
          type: 'theorem',
          title: 'Huffman Coding Algorithm',
          content: '1. List all distinct characters with their frequencies | 2. Consider each as a tree with one vertex (weight = frequency) | 3. Repeatedly combine two trees with minimum total weight | 4. Add new root, assign sum as weight | 5. Continue until single tree remains | 6. Assign 0 to left edges, 1 to right edges'
        },
        {
          type: 'example',
          title: 'Example: Huffman for "good morning"',
          content: 'Characters: g(2), o(3), d(1), m(1), r(1), n(1), i(1), space(1) | Build Huffman tree by combining minimum weights | Result: More frequent letters get shorter codes | Total bits used < 33 (better than fixed 3-bit encoding) | Average bits per character = (Σ frequency × code_length) / total_characters'
        },
        {
          type: 'example',
          title: 'Example 2: Huffman Coding',
          content: 'Letters with frequencies: A:0.08, B:0.1, C:0.12, D:0.15, E:0.2, F:0.35 | Combine A+B (0.18), then with C (0.30), etc. | Calculate average bits: Σ (frequency × code_length) | Compare with fixed-length encoding (3 bits for 6 symbols)'
        }
      ]
    },
    {
      id: 'tree-traversal',
      title: 'Tree Traversal',
      content: [
        {
          type: 'text',
          content: 'Tree traversal: systematic way to visit all vertices of a tree.'
        },
        {
          type: 'theorem',
          title: 'Preorder Traversal',
          content: '1. Visit the root | 2. Traverse each subtree T₁, T₂, ..., Tₙ in preorder | Used for: prefix notation, copying tree structure'
        },
        {
          type: 'theorem',
          title: 'Inorder Traversal (Binary Trees)',
          content: '1. Traverse left subtree T₁ in inorder | 2. Visit the root | 3. Traverse right subtree T₂ in inorder | Used for: infix notation, getting sorted order from BST'
        },
        {
          type: 'theorem',
          title: 'Postorder Traversal',
          content: '1. Traverse each subtree T₁, T₂, ..., Tₙ in postorder | 2. Visit the root | Used for: postfix notation, deleting tree, evaluating expressions'
        },
        {
          type: 'theorem',
          title: 'Infix, Prefix, and Postfix Notation',
          content: 'Consider expression: (x + y)² + (x - 4)/3 | Infix (normal): x + y ↑ 2 + x - 4 / 3 | Prefix (Polish): + ↑ + x y 2 / - x 4 3 | Postfix (Reverse Polish): x y + 2 ↑ x 4 - 3 / +'
        },
        {
          type: 'example',
          title: 'Evaluating Postfix',
          content: 'Evaluate: 7 2 3 * - 4 ↑ 9 3 / + | Work left to right: | 7 2 3 * → 7 6 | 7 6 - → 1 | 1 4 ↑ → 1 | 9 3 / → 3 | 1 3 + → 4 | Result: 4'
        },
        {
          type: 'example',
          title: 'Evaluating Prefix',
          content: 'Evaluate: + - * 2 3 5 / ↑ 2 3 4 | Work right to left: | ↑ 2 3 → 8 | / 8 4 → 2 | * 2 3 → 6 | - 6 5 → 1 | + 1 2 → 3 | Result: 3'
        },
        {
          type: 'note',
          title: '💡 Advantages of Prefix/Postfix',
          content: 'No parentheses needed! | No ambiguity about order of operations | Easy to evaluate using a stack | Used in calculators and compilers'
        }
      ]
    },
    {
      id: 'spanning-trees',
      title: 'Spanning Trees',
      content: [
        {
          type: 'theorem',
          title: 'Definition',
          content: 'A spanning tree of a connected graph G is a subgraph that: | • Is a tree | • Contains all vertices of G | Every connected graph has a spanning tree'
        },
        {
          type: 'theorem',
          title: 'Finding Spanning Trees',
          content: 'Depth-First Search (DFS): Explore as far as possible along each branch before backtracking | Breadth-First Search (BFS): Explore all neighbors at current depth before moving to next depth'
        },
        {
          type: 'note',
          title: 'Applications',
          content: 'Network design: minimum cable to connect all nodes | Circuit design: connecting components | Clustering algorithms | Maze generation'
        }
      ]
    },
    {
      id: 'minimum-spanning-trees',
      title: 'Minimum Spanning Trees',
      content: [
        {
          type: 'theorem',
          title: 'Definition',
          content: 'In a weighted graph, a minimum spanning tree (MST) is a spanning tree with minimum total edge weight.'
        },
        {
          type: 'theorem',
          title: 'Prim\'s Algorithm',
          content: '1. Start with any vertex | 2. Repeatedly add the minimum-weight edge that connects a vertex in the tree to a vertex outside | 3. Continue until all vertices are included | Greedy algorithm: makes locally optimal choice at each step'
        },
        {
          type: 'theorem',
          title: 'Kruskal\'s Algorithm',
          content: '1. Sort all edges by weight (ascending) | 2. Add edges one by one to spanning tree | 3. Skip edge if it creates a cycle | 4. Stop when n-1 edges added (n = number of vertices) | Also greedy: always picks minimum weight edge that doesn\'t create cycle'
        },
        {
          type: 'note',
          title: '💡 Comparison',
          content: 'Prim\'s: Good for dense graphs, grows tree from one vertex | Kruskal\'s: Good for sparse graphs, builds forest that merges into tree | Both produce MST (may be different if multiple MSTs exist) | Both have complexity O(E log V) with good data structures'
        },
        {
          type: 'example',
          title: 'Applications of MST',
          content: 'Network design: minimize cable length | Road networks: minimize construction cost | Clustering: group similar data points | Approximation algorithms: traveling salesman problem | Image segmentation | Circuit design'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q10-1',
      question: 'A tree with n vertices has exactly n-1 edges.',
      answer: true,
      explanation: 'This is a fundamental property of trees.'
    },
    {
      id: 'q10-2',
      question: 'Between any two vertices in a tree, there are multiple simple paths.',
      answer: false,
      explanation: 'There is exactly ONE unique simple path between any two vertices in a tree.'
    },
    {
      id: 'q10-3',
      question: 'In a full m-ary tree with i internal vertices, the total number of vertices is n = mi + 1.',
      answer: true,
      explanation: 'Each internal vertex has exactly m children, plus the root.'
    },
    {
      id: 'q10-4',
      question: 'A binary search tree allows searching in O(log n) time in the worst case.',
      answer: false,
      explanation: 'BST worst case is O(n) if tree is unbalanced. Balanced BST gives O(log n).'
    },
    {
      id: 'q10-5',
      question: 'Huffman coding assigns shorter codes to more frequent characters.',
      answer: true,
      explanation: 'This is the key principle of Huffman coding for optimal compression.'
    },
    {
      id: 'q10-6',
      question: 'Preorder traversal visits the root before its children.',
      answer: true,
      explanation: 'Preorder: root first, then subtrees.'
    },
    {
      id: 'q10-7',
      question: 'Inorder traversal of a binary search tree gives elements in sorted order.',
      answer: true,
      explanation: 'This is a key property of BST inorder traversal.'
    },
    {
      id: 'q10-8',
      question: 'Postfix notation requires parentheses to avoid ambiguity.',
      answer: false,
      explanation: 'Postfix (and prefix) notation never needs parentheses!'
    },
    {
      id: 'q10-9',
      question: 'Every connected graph has at least one spanning tree.',
      answer: true,
      explanation: 'Every connected graph has a spanning tree (possibly multiple).'
    },
    {
      id: 'q10-10',
      question: 'Prim\'s and Kruskal\'s algorithms always produce the same minimum spanning tree.',
      answer: false,
      explanation: 'They both produce an MST, but it may be different if multiple MSTs exist.'
    },
    {
      id: 'q10-11',
      question: 'A sorting algorithm based on binary comparisons requires at least Θ(n log n) comparisons.',
      answer: true,
      explanation: 'This is the lower bound for comparison-based sorting: ⌈log(n!)⌉ = Θ(n log n).'
    },
    {
      id: 'q10-12',
      question: 'In a balanced m-ary tree with l leaves, the height is exactly ⌈log_m l⌉.',
      answer: true,
      explanation: 'This is the definition of a balanced tree.'
    },
    {
      id: 'q10-13',
      question: 'Prefix codes ensure that no code is a prefix of another code.',
      answer: true,
      explanation: 'This property allows unambiguous decoding.'
    },
    {
      id: 'q10-14',
      question: 'A full 4-ary tree can have 80 leaves.',
      answer: false,
      explanation: 'For full m-ary tree: l = [(m-1)n+1]/m. With m=4, l=80 gives non-integer n.'
    },
    {
      id: 'q10-15',
      question: 'Kruskal\'s algorithm sorts edges by weight before building the MST.',
      answer: true,
      explanation: 'Kruskal\'s algorithm starts by sorting all edges in ascending order of weight.'
    }
  ]
};
