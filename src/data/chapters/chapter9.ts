import type { Chapter } from '../../types';

export const chapter9: Chapter = {
  id: 'chapter-9',
  number: 9,
  title: 'Graphs',
  titleVi: 'Đồ thị',
  description: 'Lý thuyết đồ thị, Euler, Hamilton paths, và thuật toán đường đi ngắn nhất',
  icon: '🔗',
  color: 'from-indigo-500 to-purple-500',
  topics: [
    {
      id: 'graphs-models',
      title: 'Graphs and Graph Models',
      content: [
        {
          type: 'theorem',
          title: 'Definition',
          content: 'A graph G = (V, E) consists of V, a non-empty set of vertices (or nodes), and E, a set of edges. Each edge has one or two vertices associated with it, called endpoints.'
        },
        {
          type: 'theorem',
          title: 'Graph Classification',
          content: 'Undirected graphs: Simple graphs, Multigraphs, Pseudographs | Directed graphs: Simple directed graphs, Directed multigraphs'
        },
        {
          type: 'theorem',
          title: 'Simple Graph',
          content: 'For any two vertices there is at most one edge connecting them, and there are no loops.'
        },
        {
          type: 'theorem',
          title: 'Multigraph',
          content: 'There are possibly multiple edges between vertices, but no loops.'
        },
        {
          type: 'theorem',
          title: 'Pseudograph',
          content: 'There are possibly multiple edges and loops.'
        }
      ]
    },
    {
      id: 'terminology',
      title: 'Graph Terminology and Special Types',
      content: [
        {
          type: 'theorem',
          title: 'Basic Terminology (Undirected)',
          content: 'Adjacent vertices: Two vertices connected by an edge | Incident: An edge is incident with its endpoints | Degree of vertex v: deg(v) = number of edges incident with v (loop counts twice)'
        },
        {
          type: 'theorem',
          title: 'Handshaking Theorem (Undirected)',
          content: 'In an undirected graph G with e edges: Σ deg(v) = 2e | Therefore, the number of vertices of odd degree is even.'
        },
        {
          type: 'example',
          title: 'Example: Degree Sequences',
          content: 'Do there exist simple graphs with 5 vertices of degrees: | (a) 1, 2, 3, 3, 4 → Sum = 13 (odd) → NO ✗ | (b) 1, 2, 3, 3, 3 → Sum = 12 (even) → Possible, need to check if realizable | (c) 1, 2, 3, 4, 4 → Sum = 14 (even) → Possible'
        },
        {
          type: 'theorem',
          title: 'Directed Graph Terminology',
          content: 'In-degree deg⁻(v): number of edges with v as terminal vertex | Out-degree deg⁺(v): number of edges with v as initial vertex | Handshaking: Σ deg⁺(v) = Σ deg⁻(v) = |E|'
        },
        {
          type: 'theorem',
          title: 'Complete Graph Kₙ',
          content: 'n vertices, every pair of distinct vertices connected by exactly one edge. | Number of edges: n(n-1)/2 | Each vertex has degree n-1'
        },
        {
          type: 'theorem',
          title: 'Cycle Cₙ (n ≥ 3)',
          content: 'n vertices v₁, v₂, ..., vₙ and edges v₁v₂, v₂v₃, ..., vₙ₋₁vₙ, vₙv₁ | Number of edges: n | Each vertex has degree 2'
        },
        {
          type: 'theorem',
          title: 'Wheel Wₙ (n ≥ 3)',
          content: 'Add one vertex to Cₙ and connect it to all other vertices. | Number of vertices: n + 1 | Number of edges: 2n | Center vertex has degree n, others have degree 3'
        },
        {
          type: 'theorem',
          title: 'n-Cube Qₙ (n ≥ 1)',
          content: '2ⁿ vertices represented by bit strings of length n. Two vertices connected if their bit strings differ in exactly one position. | Number of edges: n·2ⁿ⁻¹ | Each vertex has degree n'
        },
        {
          type: 'theorem',
          title: 'Bipartite Graph',
          content: 'A simple graph G is bipartite if vertex set can be divided into two disjoint subsets V₁ and V₂ such that each edge connects a vertex from V₁ to a vertex from V₂.'
        },
        {
          type: 'theorem',
          title: 'Complete Bipartite Graph Kₘ,ₙ',
          content: 'Vertex set divided into subsets of m and n vertices. Two vertices connected if and only if they are in different subsets. | Number of edges: m × n'
        },
        {
          type: 'note',
          title: 'Which special graphs are bipartite?',
          content: 'Kₙ: Only K₁ and K₂ | Cₙ: Yes if n is even | Wₙ: No (contains odd cycles) | Qₙ: Yes (always bipartite)'
        }
      ]
    },
    {
      id: 'representation',
      title: 'Representing Graphs and Isomorphism',
      content: [
        {
          type: 'theorem',
          title: 'Adjacency Matrix (Undirected)',
          content: 'For graph G with vertices v₁, v₂, ..., vₙ, adjacency matrix A = [aᵢⱼ] where: | aᵢⱼ = number of edges connecting vᵢ and vⱼ | For simple graphs: aᵢⱼ ∈ {0, 1} | Matrix is symmetric: aᵢⱼ = aⱼᵢ'
        },
        {
          type: 'theorem',
          title: 'Adjacency Matrix (Directed)',
          content: 'For directed graph G with vertices v₁, v₂, ..., vₙ: | aᵢⱼ = number of edges from vᵢ to vⱼ | Matrix may not be symmetric'
        },
        {
          type: 'theorem',
          title: 'Incidence Matrix',
          content: 'For graph G with n vertices and m edges, incidence matrix M = [mᵢⱼ] of size n × m where: | mᵢⱼ = 1 if edge eⱼ is incident with vertex vᵢ | mᵢⱼ = 0 otherwise'
        },
        {
          type: 'theorem',
          title: 'Graph Isomorphism',
          content: 'Two graphs G and H are isomorphic if there exists a bijection f: V(G) → V(H) such that: | u and v are adjacent in G ⟺ f(u) and f(v) are adjacent in H'
        },
        {
          type: 'theorem',
          title: 'Graph Invariants',
          content: 'Properties preserved under isomorphism: | • Number of vertices | • Number of edges | • Degree sequence | • Existence of circuits/paths of certain lengths | • Connectivity properties'
        },
        {
          type: 'note',
          title: '⚠️ Important',
          content: 'Having the same invariants is necessary but NOT sufficient for isomorphism! Two graphs can have same invariants but not be isomorphic.'
        }
      ]
    },
    {
      id: 'connectivity',
      title: 'Connectivity',
      content: [
        {
          type: 'theorem',
          title: 'Path and Circuit',
          content: 'Path of length n from u to v: sequence of edges x₀x₁, x₁x₂, ..., xₙ₋₁xₙ where x₀ = u, xₙ = v | Circuit: path that starts and ends at same vertex (length > 0) | Simple path/circuit: does not contain same edge more than once'
        },
        {
          type: 'theorem',
          title: 'Connected Graph (Undirected)',
          content: 'An undirected graph is connected if there is a path between every pair of distinct vertices.'
        },
        {
          type: 'theorem',
          title: 'Connected Component',
          content: 'A connected component is a maximal connected subgraph.'
        },
        {
          type: 'theorem',
          title: 'Cut Vertex and Cut Edge',
          content: 'Cut vertex (articulation point): Removing it (and incident edges) increases number of connected components | Cut edge (bridge): Removing it increases number of connected components'
        },
        {
          type: 'theorem',
          title: 'Strongly Connected (Directed)',
          content: 'A directed graph is strongly connected if for all pairs of vertices u and v, there is a path from u to v AND from v to u.'
        },
        {
          type: 'theorem',
          title: 'Weakly Connected (Directed)',
          content: 'A directed graph is weakly connected if the underlying undirected graph is connected.'
        },
        {
          type: 'theorem',
          title: 'Counting Paths',
          content: 'Let A be the adjacency matrix of graph G with vertices v₁, ..., vₙ. The number of paths of length r from vᵢ to vⱼ is the (i,j)-entry of Aʳ.'
        }
      ]
    },
    {
      id: 'euler-hamilton',
      title: 'Euler and Hamilton Paths',
      content: [
        {
          type: 'text',
          content: 'The Seven Bridges of Königsberg: Is it possible to walk through the city crossing each bridge exactly once and return to starting point?'
        },
        {
          type: 'theorem',
          title: 'Euler Circuit and Path',
          content: 'Euler circuit: A simple circuit containing all edges | Euler path: A simple path containing all edges'
        },
        {
          type: 'theorem',
          title: 'Euler Circuit Existence (Undirected)',
          content: 'A connected multigraph has an Euler circuit if and only if every vertex has even degree.'
        },
        {
          type: 'theorem',
          title: 'Euler Path Existence (Undirected)',
          content: 'A connected multigraph has an Euler path (but not circuit) if and only if it has exactly two vertices of odd degree.'
        },
        {
          type: 'example',
          title: 'Seven Bridges Problem',
          content: 'The graph has 4 vertices with degrees 3, 3, 3, 5 (all odd). Since more than 2 vertices have odd degree, there is NO Euler path or circuit. Answer: NO ✗'
        },
        {
          type: 'note',
          title: 'Special Graphs with Euler Circuits',
          content: 'Kₙ: Yes if n is odd | Cₙ: Yes (all vertices degree 2) | Wₙ: No (center has degree n, others degree 3) | Qₙ: Yes (all vertices degree n, n even for n≥2) | Kₘ,ₙ: Yes if both m and n are even'
        },
        {
          type: 'theorem',
          title: 'Hamilton Circuit and Path',
          content: 'Hamilton path: A simple path that passes through every vertex exactly once | Hamilton circuit: A simple circuit that passes through every vertex exactly once'
        },
        {
          type: 'note',
          title: '⚠️ Important Difference',
          content: 'Euler: passes through every EDGE exactly once | Hamilton: passes through every VERTEX exactly once | No simple necessary and sufficient conditions for Hamilton paths/circuits!'
        },
        {
          type: 'note',
          title: 'Special Graphs with Hamilton Circuits',
          content: 'Kₙ: Yes for n ≥ 3 | Cₙ: Yes (the cycle itself) | Wₙ: Yes for n ≥ 3 | Qₙ: Yes for n ≥ 2 | Kₘ,ₙ: Yes if and only if m = n ≥ 2'
        }
      ]
    },
    {
      id: 'shortest-path',
      title: 'Shortest-Path Problem',
      content: [
        {
          type: 'theorem',
          title: 'Weighted Graph',
          content: 'A weighted graph has a number (weight) assigned to each edge. | Length of a path: sum of weights of all edges in the path'
        },
        {
          type: 'theorem',
          title: 'Dijkstra\'s Algorithm',
          content: 'Finds shortest path from vertex A to vertex Z in a weighted graph. | Algorithm finds shortest paths incrementally: | 1. Find shortest path to first vertex | 2. Find shortest path to second vertex | 3. Continue until Z is reached'
        },
        {
          type: 'example',
          title: 'Dijkstra\'s Algorithm Steps',
          content: 'Procedure Dijkstra(G: weighted connected simple graph)\n  for i := 1 to n\n    L(vᵢ) := ∞\n  L(A) := 0\n  S := ∅\n  while Z ∉ S\n    u := vertex not in S with minimum label\n    S := S ∪ {u}\n    for all vertices v not in S\n      L(v) := min{L(v), L(u) + distance(u,v)}\n\nComplexity: O(n²) with adjacency matrix'
        },
        {
          type: 'note',
          title: '💡 Key Idea',
          content: 'Dijkstra\'s algorithm is a greedy algorithm: at each step, choose the vertex with minimum distance that hasn\'t been processed yet.'
        }
      ]
    }
  ],
  quiz: [
    {
      id: 'q9-1',
      question: 'In the Handshaking Theorem, the sum of all vertex degrees equals twice the number of edges.',
      answer: true,
      explanation: 'Each edge contributes 2 to the total degree sum (once for each endpoint).'
    },
    {
      id: 'q9-2',
      question: 'A simple graph can have an odd number of vertices with odd degree.',
      answer: false,
      explanation: 'By the Handshaking Theorem, the number of odd-degree vertices must be even.'
    },
    {
      id: 'q9-3',
      question: 'The complete graph Kₙ has n(n-1)/2 edges.',
      answer: true,
      explanation: 'Each of n vertices connects to n-1 others, giving n(n-1)/2 edges.'
    },
    {
      id: 'q9-4',
      question: 'All cycles Cₙ are bipartite.',
      answer: false,
      explanation: 'Only cycles with even length are bipartite. Odd cycles are not bipartite.'
    },
    {
      id: 'q9-5',
      question: 'A graph has an Euler circuit if and only if all vertices have even degree.',
      answer: true,
      explanation: 'This is the necessary and sufficient condition for Euler circuits in connected graphs.'
    },
    {
      id: 'q9-6',
      question: 'The Seven Bridges of Königsberg problem has a solution.',
      answer: false,
      explanation: 'The graph has more than 2 vertices of odd degree, so no Euler path exists.'
    },
    {
      id: 'q9-7',
      question: 'If a graph has exactly 2 vertices of odd degree, it has an Euler path.',
      answer: true,
      explanation: 'This is the condition for Euler path (but not circuit) in connected graphs.'
    },
    {
      id: 'q9-8',
      question: 'There is a simple test to determine if a graph has a Hamilton circuit.',
      answer: false,
      explanation: 'Unlike Euler circuits, there is no simple necessary and sufficient condition for Hamilton circuits.'
    },
    {
      id: 'q9-9',
      question: 'Two graphs are isomorphic if they have the same number of vertices and edges.',
      answer: false,
      explanation: 'Same number of vertices and edges is necessary but not sufficient for isomorphism.'
    },
    {
      id: 'q9-10',
      question: 'Dijkstra\'s algorithm finds the shortest path in a weighted graph.',
      answer: true,
      explanation: 'Dijkstra\'s algorithm is a greedy algorithm for finding shortest paths.'
    },
    {
      id: 'q9-11',
      question: 'The n-cube Qₙ has 2ⁿ vertices and each vertex has degree n.',
      answer: true,
      explanation: 'Vertices are bit strings of length n, connected if they differ in one position.'
    },
    {
      id: 'q9-12',
      question: 'A strongly connected directed graph is also weakly connected.',
      answer: true,
      explanation: 'Strong connectivity implies weak connectivity, but not vice versa.'
    },
    {
      id: 'q9-13',
      question: 'The complete bipartite graph Kₘ,ₙ has m + n vertices and mn edges.',
      answer: true,
      explanation: 'Every vertex in one set connects to every vertex in the other set.'
    },
    {
      id: 'q9-14',
      question: 'A cut edge (bridge) is always incident to a cut vertex.',
      answer: false,
      explanation: 'A bridge may connect two vertices neither of which is a cut vertex.'
    },
    {
      id: 'q9-15',
      question: 'The number of paths of length r from vertex i to vertex j equals the (i,j)-entry of Aʳ.',
      answer: true,
      explanation: 'This is a fundamental property of adjacency matrices.'
    }
  ]
};
