import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Brain, Sparkles, Zap, Target, Users } from 'lucide-react';
import { chapters } from '../data/chapters';
import ChapterCard from '../components/ChapterCard';

const Home = () => {
    // Show first 4 chapters on home
    const featuredChapters = chapters.slice(0, 4);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 dark:bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 dark:bg-secondary-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-500/5 dark:from-primary-500/10 to-secondary-500/5 dark:to-secondary-500/10 rounded-full blur-3xl animate-float" />
                </div>

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 mb-8 animate-slide-down shadow-sm">
                        <Sparkles className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">FPT University - Discrete Mathematics</span>
                    </div>

                    {/* Main heading */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display mb-6 animate-slide-up">
                        <span className="text-gray-900 dark:text-white">Khám phá </span>
                        <span className="gradient-text">MAD101</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '100ms' }}>
                        Tổng hợp kiến thức <span className="text-primary-600 dark:text-primary-400">Toán Rời Rạc</span> một cách
                        <span className="text-secondary-600 dark:text-secondary-400"> trực quan</span> và
                        <span className="text-green-600 dark:text-green-400"> dễ hiểu</span>
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
                        <Link to="/chapters" className="btn-primary flex items-center space-x-2">
                            <BookOpen className="w-5 h-5" />
                            <span>Bắt đầu học</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link to="/quiz" className="btn-secondary flex items-center space-x-2">
                            <Brain className="w-5 h-5" />
                            <span>Luyện tập ngay</span>
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mt-16 animate-fade-in" style={{ animationDelay: '400ms' }}>
                        <div className="glass-card p-4 sm:p-6">
                            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{chapters.length}</div>
                            <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Chương học</div>
                        </div>
                        <div className="glass-card p-4 sm:p-6">
                            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                                {chapters.reduce((acc, ch) => acc + ch.topics.length, 0)}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Chủ đề</div>
                        </div>
                        <div className="glass-card p-4 sm:p-6">
                            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">∞</div>
                            <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Kiến thức</div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
                    <div className="w-6 h-10 rounded-full border-2 border-gray-300 dark:border-white/20 flex items-start justify-center p-2">
                        <div className="w-1.5 h-3 bg-gray-400 dark:bg-white/50 rounded-full animate-pulse" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Tại sao chọn chúng tôi?</h2>
                        <p className="section-subtitle">
                            Nền tảng học tập được thiết kế đặc biệt cho sinh viên FPT
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="glass-card-hover p-8 text-center">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Trực quan & Dễ hiểu</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Kiến thức được trình bày một cách rõ ràng với công thức, ví dụ và bảng chân trị.
                            </p>
                        </div>

                        <div className="glass-card-hover p-8 text-center">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                <Target className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Tập trung vào FE</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Nội dung được tổng hợp từ các đề thi và bài tập thường gặp trong Final Exam.
                            </p>
                        </div>

                        <div className="glass-card-hover p-8 text-center">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Cộng đồng hỗ trợ</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Kết nối với cộng đồng sinh viên FPT để trao đổi và giải đáp thắc mắc.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Chapters */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">Các chương nổi bật</h2>
                            <p className="text-gray-600 dark:text-gray-400">Bắt đầu với những kiến thức cơ bản nhất</p>
                        </div>
                        <Link
                            to="/chapters"
                            className="btn-secondary flex items-center space-x-2"
                        >
                            <span>Xem tất cả</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredChapters.map((chapter, index) => (
                            <ChapterCard key={chapter.id} chapter={chapter} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-0 left-0 w-40 h-40 bg-primary-500/10 dark:bg-primary-500/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary-500/10 dark:bg-secondary-500/20 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Sẵn sàng chinh phục <span className="gradient-text">MAD101</span>?
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                                Bắt đầu hành trình học Toán Rời Rạc ngay hôm nay. Với kiến thức được tổng hợp
                                có hệ thống, bạn sẽ tự tin hơn trong kỳ thi Final Exam!
                            </p>
                            <Link to="/chapters" className="btn-primary inline-flex items-center space-x-2">
                                <span>Khám phá ngay</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
