import type { ContentBlock, TableData } from '../types';
import { Info, Lightbulb, BookOpen, CheckCircle, Check, X } from 'lucide-react';

interface ContentRendererProps {
    content: ContentBlock[];
}

// Helper function to parse content with | separators
const parseItems = (content: string): { text: string; isCorrect?: boolean }[] => {
    const items = content.split('|').map(item => item.trim()).filter(Boolean);
    return items.map(item => {
        if (item.startsWith('✅') || item.startsWith('✓')) {
            return { text: item.replace(/^[✅✓]\s*/, ''), isCorrect: true };
        } else if (item.startsWith('❌') || item.startsWith('✗')) {
            return { text: item.replace(/^[❌✗]\s*/, ''), isCorrect: false };
        } else if (item.includes('→ True') || item.includes('(True)')) {
            return { text: item, isCorrect: true };
        } else if (item.includes('→ False') || item.includes('(False)') || item.includes('KHÔNG phải')) {
            return { text: item, isCorrect: false };
        }
        return { text: item };
    });
};

const hasExampleMarkers = (content: string): boolean => {
    return content.includes('✅') || content.includes('❌') ||
        (content.includes('|') && (content.includes('KHÔNG phải') || content.includes('→ Mệnh đề')));
};

const ContentRenderer = ({ content }: ContentRendererProps) => {
    const renderSimpleList = (contentStr: string) => {
        const items = contentStr.split('|').map(s => s.trim()).filter(Boolean);
        return (
            <div className="space-y-1">
                {items.map((item, i) => (
                    <div key={i} className="flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{item.replace(/^•\s*/, '')}</span>
                    </div>
                ))}
            </div>
        );
    };

    const renderExampleItems = (contentStr: string) => {
        const items = parseItems(contentStr);
        return (
            <div className="space-y-1.5 mt-2">
                {items.map((item, i) => (
                    <div key={i} className="flex items-center text-sm">
                        {item.isCorrect === true && (
                            <Check className="w-4 h-4 text-green-600 dark:text-green-400 mr-2 flex-shrink-0" />
                        )}
                        {item.isCorrect === false && (
                            <X className="w-4 h-4 text-red-500 dark:text-red-400 mr-2 flex-shrink-0" />
                        )}
                        {item.isCorrect === undefined && (
                            <span className="w-4 h-4 mr-2 flex-shrink-0 flex items-center justify-center">
                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                            </span>
                        )}
                        <span className={
                            item.isCorrect === true
                                ? 'text-green-700 dark:text-green-400'
                                : item.isCorrect === false
                                    ? 'text-red-600 dark:text-red-400'
                                    : 'text-gray-700 dark:text-gray-300'
                        }>
                            {item.text}
                        </span>
                    </div>
                ))}
            </div>
        );
    };

    const renderBlock = (block: ContentBlock, index: number) => {
        switch (block.type) {
            case 'text':
                return (
                    <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        {block.content as string}
                    </p>
                );

            case 'formula':
                const formulaContent = block.content as string;
                const formulaItems = formulaContent.split('|').map(s => s.trim()).filter(Boolean);

                return (
                    <div key={index} className="formula-box mb-4">
                        {formulaItems.length > 1 ? (
                            <div className="space-y-1">
                                {formulaItems.map((item, i) => (
                                    <div key={i} className="text-primary-700 dark:text-primary-300 text-center font-mono text-sm">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-primary-700 dark:text-primary-300 text-center">
                                {formulaContent}
                            </div>
                        )}
                    </div>
                );

            case 'theorem':
                const theoremContent = block.content as string;
                const theoremItems = theoremContent.split('|').map(s => s.trim()).filter(Boolean);

                return (
                    <div key={index} className="theorem-box mb-4">
                        <div className="flex items-start space-x-3">
                            <BookOpen className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                                {block.title && (
                                    <h4 className="text-primary-700 dark:text-primary-300 font-semibold mb-2">{block.title}</h4>
                                )}
                                {theoremItems.length > 1 ? (
                                    <div className="space-y-1">
                                        {theoremItems.map((item, i) => (
                                            <div key={i} className="text-gray-700 dark:text-gray-300 text-sm">
                                                {item.startsWith('•') ? item : `• ${item}`}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-700 dark:text-gray-300">{theoremContent}</p>
                                )}
                            </div>
                        </div>
                    </div>
                );

            case 'note':
                const noteContent = block.content as string;
                const noteItems = noteContent.split('|').map(s => s.trim()).filter(Boolean);

                return (
                    <div key={index} className="note-box mb-4">
                        <div className="flex items-start space-x-3">
                            <Lightbulb className="w-5 h-5 text-secondary-600 dark:text-secondary-400 flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                                {block.title && (
                                    <h4 className="text-secondary-700 dark:text-secondary-300 font-semibold mb-2">{block.title}</h4>
                                )}
                                {noteItems.length > 1 ? (
                                    <div className="space-y-1">
                                        {noteItems.map((item, i) => (
                                            <div key={i} className="text-gray-700 dark:text-gray-300 text-sm">
                                                {item.startsWith('•') ? item : `• ${item}`}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-700 dark:text-gray-300">{noteContent}</p>
                                )}
                            </div>
                        </div>
                    </div>
                );

            case 'example':
                const exampleContent = block.content as string;

                return (
                    <div key={index} className="example-box mb-4">
                        <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                                {block.title && (
                                    <h4 className="text-green-700 dark:text-green-300 font-semibold mb-1">{block.title}</h4>
                                )}
                                {hasExampleMarkers(exampleContent) ? (
                                    renderExampleItems(exampleContent)
                                ) : exampleContent.includes('|') ? (
                                    renderSimpleList(exampleContent)
                                ) : (
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">{exampleContent}</p>
                                )}
                            </div>
                        </div>
                    </div>
                );

            case 'list':
                return (
                    <ul key={index} className="space-y-1.5 mb-4 pl-4">
                        {(block.content as string[]).map((item, i) => (
                            <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start text-sm">
                                <span className="w-1.5 h-1.5 bg-primary-500 dark:bg-primary-400 rounded-full mt-1.5 mr-3 flex-shrink-0" />
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
                            <div className="mb-3">
                                <div className="text-gray-700 dark:text-gray-300 font-semibold flex items-start text-sm">
                                    <Info className="w-4 h-4 mr-2 mt-0.5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                                    <div className="whitespace-pre-line">{block.title}</div>
                                </div>
                            </div>
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
                                                        ? 'text-green-600 dark:text-green-400 font-semibold'
                                                        : cell === 'F'
                                                            ? 'text-red-600 dark:text-red-400 font-semibold'
                                                            : 'text-gray-700 dark:text-gray-300'
                                                }
                                            >
                                                {cell.includes('\n') ? (
                                                    <div className="space-y-1">
                                                        {cell.split('\n').map((line, lineIndex) => (
                                                            <div key={lineIndex} className="font-mono text-sm">
                                                                {line}
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <span className={cellIndex === 1 ? 'font-mono text-sm' : ''}>
                                                        {cell}
                                                    </span>
                                                )}
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
