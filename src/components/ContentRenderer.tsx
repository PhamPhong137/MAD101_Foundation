import type { ContentBlock, TableData } from '../types';
import { Info, Lightbulb, BookOpen, CheckCircle } from 'lucide-react';

interface ContentRendererProps {
    content: ContentBlock[];
}

const ContentRenderer = ({ content }: ContentRendererProps) => {
    const renderBlock = (block: ContentBlock, index: number) => {
        switch (block.type) {
            case 'text':
                return (
                    <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        {block.content as string}
                    </p>
                );

            case 'formula':
                return (
                    <div key={index} className="formula-box mb-4">
                        <div className="text-primary-700 dark:text-primary-300 text-center whitespace-pre-wrap">
                            {block.content as string}
                        </div>
                    </div>
                );

            case 'theorem':
                return (
                    <div key={index} className="theorem-box mb-4">
                        <div className="flex items-start space-x-3">
                            <BookOpen className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                            <div>
                                {block.title && (
                                    <h4 className="text-primary-700 dark:text-primary-300 font-semibold mb-2">{block.title}</h4>
                                )}
                                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{block.content as string}</p>
                            </div>
                        </div>
                    </div>
                );

            case 'note':
                return (
                    <div key={index} className="note-box mb-4">
                        <div className="flex items-start space-x-3">
                            <Lightbulb className="w-5 h-5 text-secondary-600 dark:text-secondary-400 flex-shrink-0 mt-0.5" />
                            <div>
                                {block.title && (
                                    <h4 className="text-secondary-700 dark:text-secondary-300 font-semibold mb-2">{block.title}</h4>
                                )}
                                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{block.content as string}</p>
                            </div>
                        </div>
                    </div>
                );

            case 'example':
                return (
                    <div key={index} className="example-box mb-4">
                        <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                            <div>
                                {block.title && (
                                    <h4 className="text-green-700 dark:text-green-300 font-semibold mb-2">{block.title}</h4>
                                )}
                                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{block.content as string}</p>
                            </div>
                        </div>
                    </div>
                );

            case 'list':
                return (
                    <ul key={index} className="space-y-2 mb-4 pl-4">
                        {(block.content as string[]).map((item, i) => (
                            <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start">
                                <span className="w-1.5 h-1.5 bg-primary-500 dark:bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                );

            case 'table':
                const tableData = block.content as TableData;
                return (
                    <div key={index} className="mb-4 overflow-x-auto">
                        {block.title && (
                            <h4 className="text-gray-700 dark:text-gray-300 font-semibold mb-3 flex items-center">
                                <Info className="w-4 h-4 mr-2 text-primary-600 dark:text-primary-400" />
                                {block.title}
                            </h4>
                        )}
                        <table className="truth-table">
                            <thead>
                                <tr>
                                    {tableData.headers.map((header, i) => (
                                        <th key={i}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.rows.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((cell, cellIndex) => (
                                            <td
                                                key={cellIndex}
                                                className={
                                                    cell === 'T'
                                                        ? 'text-green-600 dark:text-green-400'
                                                        : cell === 'F'
                                                            ? 'text-red-600 dark:text-red-400'
                                                            : 'text-gray-700 dark:text-gray-300'
                                                }
                                            >
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="space-y-2">
            {content.map((block, index) => renderBlock(block, index))}
        </div>
    );
};

export default ContentRenderer;
