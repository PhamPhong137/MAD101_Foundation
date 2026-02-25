import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Chapter } from '../types';

interface ChapterCardProps {
    chapter: Chapter;
    index: number;
}

const ChapterCard = ({ chapter, index }: ChapterCardProps) => {
    return (
        <Link
            to={`/chapter/${chapter.id}`}
            className="chapter-card group animate-fade-in flex flex-col h-full"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Icon & Number */}
            <div className="flex items-center justify-between mb-5">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${chapter.color} flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {chapter.icon}
                </div>
                <span className="text-gray-400 dark:text-gray-500 font-mono text-sm font-medium">
                    Chapter {chapter.number}
                </span>
            </div>

            {/* Content - flex-1 để chiếm hết không gian còn lại */}
            <div className="flex-1 flex flex-col">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-600 dark:group-hover:from-primary-400 group-hover:to-secondary-600 dark:group-hover:to-secondary-400 group-hover:bg-clip-text transition-all duration-300">
                    {chapter.title}
                </h3>

                {/* Vietnamese Title */}
                <p className="text-gray-500 dark:text-gray-400 text-base mb-3 leading-relaxed">
                    {chapter.titleVi}
                </p>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-500 text-sm mb-5 line-clamp-2 leading-relaxed flex-1">
                    {chapter.description}
                </p>
            </div>

            {/* Topics count & Arrow - luôn ở dưới cùng */}
            <div className="flex items-center justify-between pt-4 mt-auto border-t border-gray-200 dark:border-white/5">
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {chapter.topics.length} chủ đề
                </span>
                <div className="flex items-center text-primary-600 dark:text-primary-400 text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    <span className="mr-1.5">Xem chi tiết</span>
                    <ArrowRight className="w-4 h-4" />
                </div>
            </div>

            {/* Hover gradient border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-secondary-500/0 to-primary-500/0 group-hover:from-primary-500/10 dark:group-hover:from-primary-500/20 group-hover:via-secondary-500/10 dark:group-hover:via-secondary-500/20 group-hover:to-primary-500/10 dark:group-hover:to-primary-500/20 transition-all duration-500 -z-10" />
        </Link>
    );
};

export default ChapterCard;
