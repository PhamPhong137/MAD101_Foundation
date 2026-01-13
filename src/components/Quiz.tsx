import { useState } from 'react';
import type { TrueFalseQuestion } from '../types';
import { CheckCircle2, XCircle, RotateCw, Trophy, AlertCircle } from 'lucide-react';

interface QuizProps {
    questions: TrueFalseQuestion[];
    chapterNumber: number;
}

interface AnswerState {
    [key: string]: {
        selected: boolean | null;
        isCorrect: boolean | null;
        showExplanation: boolean;
    };
}

const Quiz = ({ questions, chapterNumber }: QuizProps) => {
    const [answers, setAnswers] = useState<AnswerState>({});

    const handleAnswer = (questionId: string, selectedAnswer: boolean) => {
        const question = questions.find(q => q.id === questionId);
        if (!question) return;

        const isCorrect = selectedAnswer === question.answer;

        setAnswers(prev => ({
            ...prev,
            [questionId]: {
                selected: selectedAnswer,
                isCorrect,
                showExplanation: true
            }
        }));
    };

    const calculateScore = () => {
        let correct = 0;
        Object.values(answers).forEach(answer => {
            if (answer.isCorrect) correct++;
        });
        return correct;
    };

    const resetQuiz = () => {
        setAnswers({});
    };

    const allAnswered = Object.keys(answers).length === questions.length;
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);

    const getScoreColor = () => {
        if (percentage >= 80) return 'text-green-500';
        if (percentage >= 60) return 'text-yellow-500';
        return 'text-red-500';
    };

    const getScoreMessage = () => {
        if (percentage >= 90) return 'Xuất sắc! 🎉';
        if (percentage >= 80) return 'Giỏi lắm! 👏';
        if (percentage >= 60) return 'Khá tốt! 💪';
        if (percentage >= 40) return 'Cần cố gắng thêm 📚';
        return 'Hãy ôn lại kiến thức nhé 📖';
    };

    return (
        <div className="glass-card p-6 mt-8">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                        <AlertCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            Bài kiểm tra Chapter {chapterNumber}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {questions.length} câu hỏi Đúng/Sai
                        </p>
                    </div>
                </div>

                {allAnswered && (
                    <button
                        onClick={resetQuiz}
                        className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
                    >
                        <RotateCw className="w-4 h-4" />
                        <span>Làm lại</span>
                    </button>
                )}
            </div>

            {/* Score Summary */}
            {allAnswered && (
                <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Trophy className={`w-8 h-8 ${getScoreColor()}`} />
                            <div>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {score}/{questions.length} <span className={`${getScoreColor()}`}>({percentage}%)</span>
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{getScoreMessage()}</p>
                            </div>
                        </div>
                        <div className="w-24 h-24 relative">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle
                                    cx="48"
                                    cy="48"
                                    r="40"
                                    stroke="currentColor"
                                    strokeWidth="8"
                                    fill="none"
                                    className="text-gray-200 dark:text-white/10"
                                />
                                <circle
                                    cx="48"
                                    cy="48"
                                    r="40"
                                    stroke="currentColor"
                                    strokeWidth="8"
                                    fill="none"
                                    strokeDasharray={`${(percentage / 100) * 251.2} 251.2`}
                                    className={getScoreColor()}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <span className={`absolute inset-0 flex items-center justify-center text-lg font-bold ${getScoreColor()}`}>
                                {percentage}%
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* Questions */}
            <div className="space-y-4">
                {questions.map((question, index) => {
                    const answerState = answers[question.id];
                    const isAnswered = answerState?.selected !== undefined && answerState?.selected !== null;

                    return (
                        <div
                            key={question.id}
                            className={`p-4 rounded-xl border transition-all duration-300 ${isAnswered
                                ? answerState.isCorrect
                                    ? 'border-green-500/50 bg-green-500/5'
                                    : 'border-red-500/50 bg-red-500/5'
                                : 'border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5'
                                }`}
                        >
                            <div className="flex items-start space-x-3">
                                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center text-sm font-mono text-primary-700 dark:text-primary-400">
                                    {index + 1}
                                </span>
                                <div className="flex-1">
                                    <p className="text-gray-900 dark:text-white font-medium mb-3">
                                        {question.question}
                                    </p>

                                    <div className="flex space-x-3">
                                        <button
                                            onClick={() => handleAnswer(question.id, true)}
                                            disabled={isAnswered}
                                            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${isAnswered
                                                ? answerState.selected === true
                                                    ? answerState.isCorrect
                                                        ? 'bg-green-500 text-white'
                                                        : 'bg-red-500 text-white'
                                                    : question.answer === true
                                                        ? 'bg-green-500/20 text-green-700 dark:text-green-400 border-2 border-green-500'
                                                        : 'bg-gray-100 dark:bg-white/10 text-gray-400'
                                                : 'bg-green-500/10 hover:bg-green-500/20 text-green-700 dark:text-green-400 border border-green-500/30 hover:border-green-500'
                                                }`}
                                        >
                                            <span className="flex items-center justify-center space-x-2">
                                                <CheckCircle2 className="w-4 h-4" />
                                                <span>Đúng</span>
                                            </span>
                                        </button>

                                        <button
                                            onClick={() => handleAnswer(question.id, false)}
                                            disabled={isAnswered}
                                            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${isAnswered
                                                ? answerState.selected === false
                                                    ? answerState.isCorrect
                                                        ? 'bg-green-500 text-white'
                                                        : 'bg-red-500 text-white'
                                                    : question.answer === false
                                                        ? 'bg-green-500/20 text-green-700 dark:text-green-400 border-2 border-green-500'
                                                        : 'bg-gray-100 dark:bg-white/10 text-gray-400'
                                                : 'bg-red-500/10 hover:bg-red-500/20 text-red-700 dark:text-red-400 border border-red-500/30 hover:border-red-500'
                                                }`}
                                        >
                                            <span className="flex items-center justify-center space-x-2">
                                                <XCircle className="w-4 h-4" />
                                                <span>Sai</span>
                                            </span>
                                        </button>
                                    </div>

                                    {/* Explanation */}
                                    {isAnswered && answerState.showExplanation && (
                                        <div className={`mt-3 p-3 rounded-lg text-sm ${answerState.isCorrect
                                            ? 'bg-green-500/10 text-green-700 dark:text-green-400'
                                            : 'bg-red-500/10 text-red-700 dark:text-red-400'
                                            }`}>
                                            <div className="flex items-start space-x-2">
                                                {answerState.isCorrect ? (
                                                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                                ) : (
                                                    <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                                )}
                                                <div>
                                                    <span className="font-medium">
                                                        {answerState.isCorrect ? 'Chính xác!' : 'Chưa đúng!'}
                                                    </span>
                                                    <p className="mt-1 opacity-90">{question.explanation}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Progress indicator */}
            {!allAnswered && (
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-white/10">
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        <span>Tiến độ: {Object.keys(answers).length}/{questions.length} câu</span>
                        <div className="w-32 h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300"
                                style={{ width: `${(Object.keys(answers).length / questions.length) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;
