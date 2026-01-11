import { useParams, Link } from 'react-router-dom';
import { chapters } from '../data/chapters';
import ContentRenderer from '../components/ContentRenderer';
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp, BookMarked } from 'lucide-react';
import { useState } from 'react';

const ChapterDetail = () => {
    const { chapterId } = useParams<{ chapterId: string }>();
    const chapter = chapters.find((c) => c.id === chapterId);
    const [expandedTopics, setExpandedTopics] = useState<string[]>([]);

    if (!chapter) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">404</h1>
                    <p className="text-gray-400 mb-6">Không tìm thấy chương này</p>
                    <Link to="/chapters" className="btn-primary">
                        Quay lại danh sách
                    </Link>
                </div>
            </div>
        );
    }

    const currentIndex = chapters.findIndex((c) => c.id === chapterId);
    const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
    const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

    const toggleTopic = (topicId: string) => {
        setExpandedTopics((prev) =>
            prev.includes(topicId)
                ? prev.filter((id) => id !== topicId)
                : [...prev, topicId]
        );
    };

    const expandAll = () => {
        setExpandedTopics(chapter.topics.map((t) => t.id));
    };

    const collapseAll = () => {
        setExpandedTopics([]);
    };

    return (
        <div className="min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
                    <Link to="/" className="hover:text-white transition-colors">Trang chủ</Link>
                    <span>/</span>
                    <Link to="/chapters" className="hover:text-white transition-colors">Các chương</Link>
                    <span>/</span>
                    <span className="text-white">Chapter {chapter.number}</span>
                </div>

                {/* Chapter Header */}
                <div className="glass-card p-8 mb-8">
                    <div className="flex items-start space-x-6">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${chapter.color} flex items-center justify-center text-4xl shadow-lg flex-shrink-0`}>
                            {chapter.icon}
                        </div>
                        <div className="flex-1">
                            <span className="text-sm text-gray-400 font-mono">Chapter {chapter.number}</span>
                            <h1 className="text-3xl sm:text-4xl font-bold text-white mt-1 mb-2">{chapter.title}</h1>
                            <p className="text-xl text-gray-400 mb-4">{chapter.titleVi}</p>
                            <p className="text-gray-500">{chapter.description}</p>
                        </div>
                    </div>
                </div>

                {/* Topics Navigation */}
                <div className="glass-card p-4 mb-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <BookMarked className="w-5 h-5 text-primary-400" />
                            <span className="text-white font-medium">{chapter.topics.length} Chủ đề</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={expandAll}
                                className="px-3 py-1 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                            >
                                Mở tất cả
                            </button>
                            <button
                                onClick={collapseAll}
                                className="px-3 py-1 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                            >
                                Đóng tất cả
                            </button>
                        </div>
                    </div>
                </div>

                {/* Topics */}
                <div className="space-y-4">
                    {chapter.topics.map((topic, index) => (
                        <div
                            key={topic.id}
                            className="glass-card overflow-hidden animate-fade-in"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <button
                                onClick={() => toggleTopic(topic.id)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <div className="flex items-center space-x-4">
                                    <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center text-sm font-mono text-primary-400">
                                        {index + 1}
                                    </span>
                                    <h3 className="text-lg font-semibold text-white">{topic.title}</h3>
                                </div>
                                {expandedTopics.includes(topic.id) ? (
                                    <ChevronUp className="w-5 h-5 text-gray-400" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                )}
                            </button>

                            {expandedTopics.includes(topic.id) && (
                                <div className="px-6 pb-6 border-t border-white/5 pt-4">
                                    <ContentRenderer content={topic.content} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10">
                    {prevChapter ? (
                        <Link
                            to={`/chapter/${prevChapter.id}`}
                            className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <div>
                                <div className="text-xs text-gray-500">Chương trước</div>
                                <div className="font-medium">Chapter {prevChapter.number}: {prevChapter.title}</div>
                            </div>
                        </Link>
                    ) : (
                        <div />
                    )}

                    {nextChapter ? (
                        <Link
                            to={`/chapter/${nextChapter.id}`}
                            className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group text-right"
                        >
                            <div>
                                <div className="text-xs text-gray-500">Chương tiếp</div>
                                <div className="font-medium">Chapter {nextChapter.number}: {nextChapter.title}</div>
                            </div>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    ) : (
                        <div />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChapterDetail;
