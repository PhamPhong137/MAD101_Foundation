import { Link } from 'react-router-dom';
import { Info, ExternalLink, BookOpen, Users, Target, Heart, Github, Facebook } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-500/10 border border-primary-200 dark:border-primary-500/20 mb-6">
                        <Info className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                        <span className="text-primary-700 dark:text-primary-400 font-medium">Giới thiệu</span>
                    </div>
                    <h1 className="section-title">Về MAD101 Study Guide</h1>
                    <p className="section-subtitle">
                        Nền tảng học tập được xây dựng dành riêng cho sinh viên FPT University
                    </p>
                </div>

                {/* Main Content */}
                <div className="space-y-8">
                    {/* About Section */}
                    <div className="glass-card p-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <BookOpen className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400" />
                            Mục đích
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            <strong className="text-gray-900 dark:text-white">MAD101 Study Guide</strong> là một nền tảng học tập trực tuyến
                            được thiết kế để giúp sinh viên FPT University ôn tập và nắm vững kiến thức môn
                            <strong className="text-primary-600 dark:text-primary-400"> Discrete Mathematics (MAD101)</strong>.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Website tổng hợp đầy đủ các chương học, công thức quan trọng, và bài tập luyện tập
                            giúp bạn chuẩn bị tốt nhất cho kỳ thi Final Exam.
                        </p>
                    </div>

                    {/* Features */}
                    <div className="glass-card p-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                            <Target className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400" />
                            Tính năng chính
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-100 dark:bg-white/5 rounded-xl">
                                <h3 className="text-gray-900 dark:text-white font-semibold mb-2">📚 Tổng hợp kiến thức</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">8 chương học với đầy đủ lý thuyết, định lý và ví dụ minh họa</p>
                            </div>
                            <div className="p-4 bg-gray-100 dark:bg-white/5 rounded-xl">
                                <h3 className="text-gray-900 dark:text-white font-semibold mb-2">📝 Công thức quan trọng</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">Tất cả công thức cần nhớ, được phân loại theo chủ đề</p>
                            </div>
                            <div className="p-4 bg-gray-100 dark:bg-white/5 rounded-xl">
                                <h3 className="text-gray-900 dark:text-white font-semibold mb-2">🧠 Luyện tập trắc nghiệm</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">Quiz với giải thích chi tiết giúp ôn tập hiệu quả</p>
                            </div>
                            <div className="p-4 bg-gray-100 dark:bg-white/5 rounded-xl">
                                <h3 className="text-gray-900 dark:text-white font-semibold mb-2">🎨 Giao diện hiện đại</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">Thiết kế đẹp mắt, dễ sử dụng trên mọi thiết bị</p>
                            </div>
                        </div>
                    </div>

                    {/* Chapters Overview */}
                    <div className="glass-card p-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                            <Users className="w-6 h-6 mr-3 text-green-600 dark:text-green-400" />
                            Nội dung học tập
                        </h2>
                        <div className="space-y-3">
                            {[
                                { num: 1, title: 'Logic and Proofs', vi: 'Logic và Chứng minh' },
                                { num: 2, title: 'Sets, Functions, Sequences and Sums', vi: 'Tập hợp, Hàm số, Dãy số' },
                                { num: 3, title: 'Algorithms, the Integers', vi: 'Thuật toán và Số nguyên' },
                                { num: 4, title: 'Induction and Recursion', vi: 'Quy nạp và Đệ quy' },
                                { num: 5, title: 'Counting', vi: 'Đếm' },
                                { num: 7, title: 'Advanced Counting Techniques', vi: 'Kỹ thuật đếm nâng cao' },
                                { num: 9, title: 'Graphs', vi: 'Đồ thị' },
                                { num: 10, title: 'Trees', vi: 'Cây' },
                            ].map((chapter) => (
                                <Link
                                    key={chapter.num}
                                    to={`/chapter/chapter-${chapter.num}`}
                                    className="block p-4 bg-gray-100 dark:bg-white/5 rounded-xl hover:bg-gray-200 dark:hover:bg-white/10 transition-all group"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <span className="w-10 h-10 rounded-lg bg-primary-500/15 flex items-center justify-center text-primary-700 dark:text-primary-400 font-mono">
                                                {chapter.num}
                                            </span>
                                            <div>
                                                <h3 className="text-gray-900 dark:text-white font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                                    {chapter.title}
                                                </h3>
                                                <p className="text-gray-500 text-sm">{chapter.vi}</p>
                                            </div>
                                        </div>
                                        <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="glass-card p-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                            <ExternalLink className="w-6 h-6 mr-3 text-orange-600 dark:text-orange-400" />
                            Tài nguyên bổ sung
                        </h2>
                        <div className="space-y-4">
                            <a
                                href="https://www.facebook.com/profile.php?id=100092640345636"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-white/5 rounded-xl hover:bg-gray-200 dark:hover:bg-white/10 transition-all group"
                            >
                                <Facebook className="w-10 h-10 text-blue-500 dark:text-blue-400" />
                                <div className="flex-1">
                                    <h3 className="text-gray-900 dark:text-white font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400">Liên hệ thắc mắc kiến thức</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Facebook - Hỗ trợ giải đáp thắc mắc</p>
                                </div>
                                <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                            </a>

                            <a
                                href="https://docs.google.com/document/d/1RQ3GGTMcQBfnWIyQoHhRjwwDlNApB1q7htZArJwLBRA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-white/5 rounded-xl hover:bg-gray-200 dark:hover:bg-white/10 transition-all group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400">
                                    📄
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-gray-900 dark:text-white font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400">PT 1: Các câu khó</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Google Docs - Bộ đề khó phần 1</p>
                                </div>
                                <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                            </a>

                            <a
                                href="https://docs.google.com/document/d/1xMJi4j9Fh-y0U-vuQBomeP005G8WZY0uDCfEpljbK1g"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-white/5 rounded-xl hover:bg-gray-200 dark:hover:bg-white/10 transition-all group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                    📄
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-gray-900 dark:text-white font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400">PT 2: Các câu khó</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Google Docs - Bộ đề khó phần 2</p>
                                </div>
                                <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                            </a>

                            <a
                                href="https://docs.google.com/document/d/1wq_5-cCxi3TOWr3E81K-Q_Be6vjF-joQNu4t9bmOg14"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-white/5 rounded-xl hover:bg-gray-200 dark:hover:bg-white/10 transition-all group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-500/20 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                                    📄
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-gray-900 dark:text-white font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400">PT 3: Các câu khó</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Google Docs - Bộ đề khó phần 3</p>
                                </div>
                                <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                            </a>
                        </div>
                    </div>

                    {/* Credits */}
                    <div className="glass-card p-8 text-center">
                        <div className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-300 mb-4">
                            <span>Made with</span>
                            <Heart className="w-5 h-5 text-red-500" />
                            <span>for FPT Students</span>
                        </div>
                        <p className="text-gray-500 text-sm">
                            Website này được xây dựng với mục đích hỗ trợ học tập.
                            Nội dung được tổng hợp từ giáo trình và tài liệu chính thức của FPT University.
                        </p>
                        <div className="flex items-center justify-center space-x-4 mt-6">
                            <a
                                href="https://github.com/FPTAIEZ/fptaiez-mad101"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-all"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=100092640345636"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-all"
                            >
                                <Facebook className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
