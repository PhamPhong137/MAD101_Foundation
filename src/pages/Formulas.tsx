import { useState } from 'react';
import { FileText, Copy, Check, Search } from 'lucide-react';

interface Formula {
    id: string;
    category: string;
    name: string;
    formula: string;
    description: string;
}

const formulas: Formula[] = [
    // Chapter 1 - Logic
    {
        id: 'neg',
        category: 'Logic',
        name: 'Phủ định',
        formula: '¬p',
        description: 'Đảo ngược giá trị chân lý của p'
    },
    {
        id: 'conj',
        category: 'Logic',
        name: 'Hội (AND)',
        formula: 'p ∧ q',
        description: 'Đúng khi cả p và q đều đúng'
    },
    {
        id: 'disj',
        category: 'Logic',
        name: 'Tuyển (OR)',
        formula: 'p ∨ q',
        description: 'Đúng khi ít nhất một trong p, q đúng'
    },
    {
        id: 'impl',
        category: 'Logic',
        name: 'Kéo theo',
        formula: 'p → q ≡ ¬p ∨ q',
        description: 'Sai chỉ khi p đúng và q sai'
    },
    {
        id: 'biconditional',
        category: 'Logic',
        name: 'Tương đương',
        formula: 'p ↔ q ≡ (p → q) ∧ (q → p)',
        description: 'Đúng khi p và q có cùng giá trị'
    },
    {
        id: 'demorgan1',
        category: 'Logic',
        name: 'De Morgan 1',
        formula: '¬(p ∧ q) ≡ ¬p ∨ ¬q',
        description: 'Phủ định của hội bằng tuyển các phủ định'
    },
    {
        id: 'demorgan2',
        category: 'Logic',
        name: 'De Morgan 2',
        formula: '¬(p ∨ q) ≡ ¬p ∧ ¬q',
        description: 'Phủ định của tuyển bằng hội các phủ định'
    },
    {
        id: 'contrapositive',
        category: 'Logic',
        name: 'Đảo phủ',
        formula: 'p → q ≡ ¬q → ¬p',
        description: 'Mệnh đề kéo theo tương đương với đảo phủ'
    },

    // Chapter 2 - Sets
    {
        id: 'powerset',
        category: 'Tập hợp',
        name: 'Tập lũy thừa',
        formula: '|P(A)| = 2^|A|',
        description: 'Số tập con của A'
    },
    {
        id: 'cardinality',
        category: 'Tập hợp',
        name: 'Nguyên lý bù trừ',
        formula: '|A ∪ B| = |A| + |B| - |A ∩ B|',
        description: 'Số phần tử của hợp hai tập hợp'
    },
    {
        id: 'func-count',
        category: 'Hàm số',
        name: 'Số hàm f: A → B',
        formula: 'n^m (|A|=m, |B|=n)',
        description: 'Tổng số hàm từ A đến B'
    },
    {
        id: 'injective-count',
        category: 'Hàm số',
        name: 'Số hàm đơn ánh',
        formula: 'n!/(n-m)! nếu m ≤ n',
        description: 'Số hàm one-to-one từ A đến B'
    },
    {
        id: 'bijective-count',
        category: 'Hàm số',
        name: 'Số song ánh',
        formula: 'n! (khi m = n)',
        description: 'Số ánh xạ một-một và lên'
    },

    // Chapter 3 - Algorithms
    {
        id: 'bigo',
        category: 'Big-O',
        name: 'Định nghĩa Big-O',
        formula: 'f(n) = O(g(n)) ⟺ |f(n)| ≤ C|g(n)|',
        description: 'Tồn tại C > 0 và n₀ với mọi n ≥ n₀'
    },
    {
        id: 'bigo-order',
        category: 'Big-O',
        name: 'Thứ tự tăng trưởng',
        formula: '1 < log n < n < n log n < n² < 2ⁿ < n!',
        description: 'So sánh độ phức tạp các hàm'
    },
    {
        id: 'mod-mult',
        category: 'Số học',
        name: 'Modular nhân',
        formula: '(ab) mod m = ((a mod m)(b mod m)) mod m',
        description: 'Tính chất nhân trong modular'
    },
    {
        id: 'gcd-lcm',
        category: 'Số học',
        name: 'GCD × LCM',
        formula: 'gcd(a,b) × lcm(a,b) = a × b',
        description: 'Mối quan hệ GCD và LCM'
    },

    // Chapter 5 - Counting
    {
        id: 'permutation',
        category: 'Đếm',
        name: 'Hoán vị',
        formula: 'P(n,r) = n!/(n-r)!',
        description: 'Số cách sắp xếp r phần tử từ n'
    },
    {
        id: 'combination',
        category: 'Đếm',
        name: 'Tổ hợp',
        formula: 'C(n,r) = n!/(r!(n-r)!)',
        description: 'Số cách chọn r phần tử từ n'
    },
    {
        id: 'binomial',
        category: 'Đếm',
        name: 'Nhị thức Newton',
        formula: '(x+y)ⁿ = Σ C(n,k)xⁿ⁻ᵏyᵏ',
        description: 'Khai triển lũy thừa của tổng'
    },

    // Chapter 7 - Fibonacci
    {
        id: 'fibonacci',
        category: 'Đệ quy',
        name: 'Dãy Fibonacci',
        formula: 'f(n) = f(n-1) + f(n-2)',
        description: 'n ≥ 3, f(1) = f(2) = 1'
    },

    // Chapter 9 - Graphs
    {
        id: 'handshaking',
        category: 'Đồ thị',
        name: 'Handshaking Lemma',
        formula: 'Σdeg(v) = 2|E|',
        description: 'Tổng bậc = 2 × số cạnh'
    },
    {
        id: 'complete-graph',
        category: 'Đồ thị',
        name: 'Đồ thị đầy đủ Kₙ',
        formula: '|E| = n(n-1)/2',
        description: 'Số cạnh của đồ thị đầy đủ n đỉnh'
    },
    {
        id: 'bipartite',
        category: 'Đồ thị',
        name: 'Đồ thị hai phía Km,n',
        formula: '|E| = m × n',
        description: 'Số cạnh của đồ thị hai phía'
    },

    // Chapter 10 - Trees
    {
        id: 'tree-edges',
        category: 'Cây',
        name: 'Số cạnh của cây',
        formula: '|E| = n - 1',
        description: 'Cây n đỉnh có n-1 cạnh'
    },
    {
        id: 'mary-tree',
        category: 'Cây',
        name: 'Full m-ary tree',
        formula: 'n = mi + 1',
        description: 'i đỉnh trong → n đỉnh tổng cộng'
    },
    {
        id: 'tree-leaves',
        category: 'Cây',
        name: 'Số lá tối đa',
        formula: 'l ≤ mʰ',
        description: 'Cây m-ary height h có tối đa mʰ lá'
    },
    {
        id: 'bst-search',
        category: 'Cây',
        name: 'BST tìm kiếm',
        formula: '≥ ⌈log(n+1)⌉ so sánh',
        description: 'Số phép so sánh tối thiểu'
    },
    {
        id: 'sorting-lower',
        category: 'Cây',
        name: 'Sắp xếp so sánh',
        formula: '≥ ⌈log n!⌉ so sánh',
        description: 'Giới hạn dưới của thuật toán sắp xếp'
    }
];

const categories = [...new Set(formulas.map(f => f.category))];

const Formulas = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const filteredFormulas = formulas.filter(f => {
        const matchesSearch = f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            f.formula.toLowerCase().includes(searchTerm.toLowerCase()) ||
            f.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = !selectedCategory || f.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const copyFormula = (formula: Formula) => {
        navigator.clipboard.writeText(formula.formula);
        setCopiedId(formula.id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="min-h-screen py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary-100 dark:bg-secondary-500/10 border border-secondary-200 dark:border-secondary-500/20 mb-6">
                        <FileText className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
                        <span className="text-secondary-700 dark:text-secondary-400 font-medium">Tổng hợp công thức</span>
                    </div>
                    <h1 className="section-title">Công thức quan trọng</h1>
                    <p className="section-subtitle">
                        Tất cả công thức cần nhớ cho môn MAD101, được phân loại theo chủ đề
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Tìm kiếm công thức..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 dark:focus:border-primary-500/50 transition-all"
                        />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${!selectedCategory
                                    ? 'bg-primary-500 text-white'
                                    : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white'
                                }`}
                        >
                            Tất cả
                        </button>
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${selectedCategory === category
                                        ? 'bg-primary-500 text-white'
                                        : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Formulas Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredFormulas.map((formula, index) => (
                        <div
                            key={formula.id}
                            className="glass-card-hover p-6 group animate-fade-in"
                            style={{ animationDelay: `${index * 30}ms` }}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <span className="text-xs px-2 py-1 rounded-full bg-primary-100 dark:bg-primary-500/20 text-primary-700 dark:text-primary-400">
                                        {formula.category}
                                    </span>
                                </div>
                                <button
                                    onClick={() => copyFormula(formula)}
                                    className="p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100"
                                    title="Copy công thức"
                                >
                                    {copiedId === formula.id ? (
                                        <Check className="w-4 h-4 text-green-500" />
                                    ) : (
                                        <Copy className="w-4 h-4" />
                                    )}
                                </button>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{formula.name}</h3>

                            <div className="formula-box mb-3">
                                <code className="text-primary-700 dark:text-primary-300">{formula.formula}</code>
                            </div>

                            <p className="text-sm text-gray-600 dark:text-gray-400">{formula.description}</p>
                        </div>
                    ))}
                </div>

                {filteredFormulas.length === 0 && (
                    <div className="text-center py-12">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center">
                            <FileText className="w-10 h-10 text-gray-400 dark:text-gray-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Không tìm thấy công thức</h3>
                        <p className="text-gray-600 dark:text-gray-400">Thử tìm với từ khóa hoặc danh mục khác</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Formulas;
