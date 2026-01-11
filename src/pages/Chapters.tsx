import { chapters } from '../data/chapters';
import ChapterCard from '../components/ChapterCard';
import { BookOpen, Search } from 'lucide-react';
import { useState } from 'react';

const Chapters = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredChapters = chapters.filter(
        (chapter) =>
            chapter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            chapter.titleVi.toLowerCase().includes(searchTerm.toLowerCase()) ||
            chapter.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-500/10 border border-primary-200 dark:border-primary-500/20 mb-6">
                        <BookOpen className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                        <span className="text-primary-700 dark:text-primary-400 font-medium">Tất cả các chương</span>
                    </div>
                    <h1 className="section-title">Khám phá kiến thức MAD101</h1>
                    <p className="section-subtitle">
                        Chọn một chương để bắt đầu học. Mỗi chương chứa các chủ đề quan trọng và công thức cần nhớ.
                    </p>
                </div>

                {/* Search */}
                <div className="max-w-md mx-auto mb-12">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Tìm kiếm chương..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 dark:focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all"
                        />
                    </div>
                </div>

                {/* Chapters Grid */}
                {filteredChapters.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredChapters.map((chapter, index) => (
                            <ChapterCard key={chapter.id} chapter={chapter} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center">
                            <Search className="w-10 h-10 text-gray-400 dark:text-gray-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Không tìm thấy kết quả</h3>
                        <p className="text-gray-600 dark:text-gray-400">Thử tìm với từ khóa khác</p>
                    </div>
                )}

                {/* Quick Stats */}
                <div className="mt-16 glass-card p-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Tổng quan nội dung</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-4 bg-gray-100 dark:bg-white/5 rounded-xl">
                            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">{chapters.length}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Chương học</div>
                        </div>
                        <div className="text-center p-4 bg-gray-100 dark:bg-white/5 rounded-xl">
                            <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400 mb-1">
                                {chapters.reduce((acc, ch) => acc + ch.topics.length, 0)}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Chủ đề</div>
                        </div>
                        <div className="text-center p-4 bg-gray-100 dark:bg-white/5 rounded-xl">
                            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">100+</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Công thức</div>
                        </div>
                        <div className="text-center p-4 bg-gray-100 dark:bg-white/5 rounded-xl">
                            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">50+</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Ví dụ</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chapters;
