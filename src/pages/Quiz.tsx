import { useState } from 'react';
import { Brain, CheckCircle, XCircle, RotateCcw, Trophy, ArrowRight, Lightbulb } from 'lucide-react';

interface Question {
    id: number;
    question: string;
    options: string[];
    correct: number;
    explanation: string;
    chapter: string;
}

const questions: Question[] = [
    {
        id: 1,
        question: 'Mệnh đề p → q sai khi nào?',
        options: ['p đúng, q đúng', 'p đúng, q sai', 'p sai, q đúng', 'p sai, q sai'],
        correct: 1,
        explanation: 'p → q chỉ sai khi giả thiết p đúng nhưng kết luận q sai.',
        chapter: 'Chapter 1'
    },
    {
        id: 2,
        question: '¬(p ∧ q) tương đương với biểu thức nào theo De Morgan?',
        options: ['¬p ∧ ¬q', '¬p ∨ ¬q', 'p ∨ q', 'p ∧ q'],
        correct: 1,
        explanation: 'Theo định luật De Morgan: ¬(p ∧ q) ≡ ¬p ∨ ¬q',
        chapter: 'Chapter 1'
    },
    {
        id: 3,
        question: 'Nếu |A| = 4, số phần tử của P(A) (tập lũy thừa) là bao nhiêu?',
        options: ['4', '8', '16', '32'],
        correct: 2,
        explanation: '|P(A)| = 2^|A| = 2^4 = 16',
        chapter: 'Chapter 2'
    },
    {
        id: 4,
        question: 'Cho f: A → B với |A| = 3, |B| = 5. Có bao nhiêu hàm từ A vào B?',
        options: ['15', '60', '125', '243'],
        correct: 2,
        explanation: 'Số hàm = n^m = 5^3 = 125',
        chapter: 'Chapter 2'
    },
    {
        id: 5,
        question: 'Cho f: A → B với |A| = 4, |B| = 6. Có bao nhiêu hàm one-to-one?',
        options: ['24', '360', '720', '1296'],
        correct: 1,
        explanation: 'Số hàm one-to-one = n!/(n-m)! = 6!/2! = 720/2 = 360',
        chapter: 'Chapter 2'
    },
    {
        id: 6,
        question: 'f(n) = 5n³ + 2n² + 7 thuộc Big-O nào?',
        options: ['O(n)', 'O(n²)', 'O(n³)', 'O(n⁴)'],
        correct: 2,
        explanation: 'f(n) = a·n^x + ... thì f(n) = O(n^x). Ở đây x = 3 nên O(n³)',
        chapter: 'Chapter 3'
    },
    {
        id: 7,
        question: '17 mod 5 = ?',
        options: ['2', '3', '4', '5'],
        correct: 0,
        explanation: '17 = 5 × 3 + 2, nên 17 mod 5 = 2',
        chapter: 'Chapter 3'
    },
    {
        id: 8,
        question: 'Tìm gcd(48, 18)?',
        options: ['2', '3', '6', '9'],
        correct: 2,
        explanation: 'Dùng thuật toán Euclid: gcd(48, 18) = gcd(18, 12) = gcd(12, 6) = gcd(6, 0) = 6',
        chapter: 'Chapter 3'
    },
    {
        id: 9,
        question: 'Số Fibonacci thứ 7 là bao nhiêu? (F₁ = F₂ = 1)',
        options: ['8', '13', '21', '34'],
        correct: 1,
        explanation: 'F₁=1, F₂=1, F₃=2, F₄=3, F₅=5, F₆=8, F₇=13',
        chapter: 'Chapter 7'
    },
    {
        id: 10,
        question: 'C(5, 2) = ?',
        options: ['5', '10', '20', '25'],
        correct: 1,
        explanation: 'C(5,2) = 5!/(2!×3!) = 120/(2×6) = 10',
        chapter: 'Chapter 5'
    },
    {
        id: 11,
        question: 'Đồ thị đầy đủ K₅ có bao nhiêu cạnh?',
        options: ['5', '8', '10', '15'],
        correct: 2,
        explanation: 'Số cạnh của Kₙ = n(n-1)/2 = 5×4/2 = 10',
        chapter: 'Chapter 9'
    },
    {
        id: 12,
        question: 'Đồ thị G có 6 đỉnh và tổng bậc các đỉnh là 14. Số cạnh của G là?',
        options: ['6', '7', '8', '14'],
        correct: 1,
        explanation: 'Theo Handshaking Lemma: Σdeg(v) = 2|E| → 14 = 2|E| → |E| = 7',
        chapter: 'Chapter 9'
    },
    {
        id: 13,
        question: 'Điều kiện để đồ thị vô hướng có Euler circuit là gì?',
        options: [
            'Có chính xác 2 đỉnh bậc lẻ',
            'Tất cả các đỉnh có bậc chẵn',
            'Có ít nhất 1 đỉnh bậc lẻ',
            'Mọi đỉnh có bậc bằng nhau'
        ],
        correct: 1,
        explanation: 'Euler circuit tồn tại khi tất cả các đỉnh có bậc chẵn.',
        chapter: 'Chapter 9'
    },
    {
        id: 14,
        question: 'Cây có 10 đỉnh có bao nhiêu cạnh?',
        options: ['8', '9', '10', '11'],
        correct: 1,
        explanation: 'Cây n đỉnh có n-1 cạnh. Với n = 10, số cạnh = 9',
        chapter: 'Chapter 10'
    },
    {
        id: 15,
        question: 'Full binary tree có 15 đỉnh thì có bao nhiêu lá?',
        options: ['7', '8', '9', '10'],
        correct: 1,
        explanation: 'Với full m-ary tree: n = mi + 1 → 15 = 2i + 1 → i = 7 đỉnh trong. Số lá = n - i = 15 - 7 = 8',
        chapter: 'Chapter 10'
    }
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState<boolean[]>(new Array(questions.length).fill(false));
    const [showExplanation, setShowExplanation] = useState(false);

    const question = questions[currentQuestion];

    const handleAnswer = (index: number) => {
        if (answered[currentQuestion]) return;

        setSelectedAnswer(index);
        setShowExplanation(true);

        const newAnswered = [...answered];
        newAnswered[currentQuestion] = true;
        setAnswered(newAnswered);

        if (index === question.correct) {
            setScore(score + 1);
        }
    };

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        } else {
            setShowResult(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setScore(0);
        setAnswered(new Array(questions.length).fill(false));
        setShowExplanation(false);
    };

    if (showResult) {
        const percentage = Math.round((score / questions.length) * 100);

        return (
            <div className="min-h-screen py-12">
                <div className="max-w-2xl mx-auto px-4">
                    <div className="glass-card p-8 text-center">
                        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                            <Trophy className="w-12 h-12 text-white" />
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Hoàn thành!</h2>

                        <div className="text-6xl font-bold gradient-text mb-4">
                            {score}/{questions.length}
                        </div>

                        <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-4 mb-6">
                            <div
                                className={`h-4 rounded-full transition-all duration-1000 ${percentage >= 70 ? 'bg-green-500' : percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                                    }`}
                                style={{ width: `${percentage}%` }}
                            />
                        </div>

                        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                            {percentage >= 80
                                ? '🎉 Xuất sắc! Bạn nắm vững kiến thức MAD101!'
                                : percentage >= 60
                                    ? '👍 Khá tốt! Tiếp tục ôn tập thêm nhé!'
                                    : '📚 Cần ôn tập thêm. Đừng nản lòng!'}
                        </p>

                        <button onClick={resetQuiz} className="btn-primary inline-flex items-center space-x-2">
                            <RotateCcw className="w-5 h-5" />
                            <span>Làm lại</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 mb-6">
                        <Brain className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <span className="text-green-700 dark:text-green-400 font-medium">Luyện tập</span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Kiểm tra kiến thức</h1>
                    <p className="text-gray-600 dark:text-gray-400">Trả lời các câu hỏi để ôn tập MAD101</p>
                </div>

                {/* Progress */}
                <div className="mb-8">
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <span>Câu {currentQuestion + 1}/{questions.length}</span>
                        <span>Điểm: {score}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2">
                        <div
                            className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300"
                            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Question Card */}
                <div className="glass-card p-8">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary-100 dark:bg-primary-500/20 text-primary-700 dark:text-primary-400 mb-4 inline-block">
                        {question.chapter}
                    </span>

                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">{question.question}</h2>

                    <div className="space-y-3">
                        {question.options.map((option, index) => {
                            const isSelected = selectedAnswer === index;
                            const isCorrect = index === question.correct;
                            const showFeedback = answered[currentQuestion];

                            let buttonClass = 'w-full p-4 rounded-xl border text-left transition-all duration-300 ';

                            if (showFeedback) {
                                if (isCorrect) {
                                    buttonClass += 'bg-green-100 dark:bg-green-500/20 border-green-500 text-green-800 dark:text-green-300';
                                } else if (isSelected && !isCorrect) {
                                    buttonClass += 'bg-red-100 dark:bg-red-500/20 border-red-500 text-red-800 dark:text-red-300';
                                } else {
                                    buttonClass += 'bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-400 dark:text-gray-500';
                                }
                            } else {
                                buttonClass += isSelected
                                    ? 'bg-primary-100 dark:bg-primary-500/20 border-primary-500 text-gray-900 dark:text-white'
                                    : 'bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/20';
                            }

                            return (
                                <button
                                    key={index}
                                    onClick={() => handleAnswer(index)}
                                    className={buttonClass}
                                    disabled={answered[currentQuestion]}
                                >
                                    <div className="flex items-center space-x-3">
                                        <span className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-white/10 flex items-center justify-center text-sm font-medium">
                                            {String.fromCharCode(65 + index)}
                                        </span>
                                        <span className="flex-1">{option}</span>
                                        {showFeedback && isCorrect && (
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                        )}
                                        {showFeedback && isSelected && !isCorrect && (
                                            <XCircle className="w-5 h-5 text-red-500" />
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Explanation */}
                    {showExplanation && (
                        <div className="mt-6 p-4 rounded-xl bg-primary-50 dark:bg-primary-500/10 border border-primary-200 dark:border-primary-500/20">
                            <div className="flex items-start space-x-3">
                                <Lightbulb className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-primary-800 dark:text-primary-300 font-semibold mb-1">Giải thích</h4>
                                    <p className="text-gray-700 dark:text-gray-300">{question.explanation}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Next Button */}
                    {answered[currentQuestion] && (
                        <button
                            onClick={nextQuestion}
                            className="btn-primary w-full mt-6 flex items-center justify-center space-x-2"
                        >
                            <span>{currentQuestion < questions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    )}
                </div>

                {/* Question dots */}
                <div className="flex items-center justify-center flex-wrap gap-2 mt-8">
                    {questions.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentQuestion
                                    ? 'bg-primary-500 scale-125'
                                    : answered[index]
                                        ? 'bg-green-500'
                                        : 'bg-gray-300 dark:bg-white/20'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Quiz;
