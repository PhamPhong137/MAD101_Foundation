import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Menu,
    X,
    BookOpen,
    Home,
    Info,
    FileText,
    Brain,
    ChevronLeft,
    ChevronRight,
    Sparkles
} from 'lucide-react';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Trang chủ', icon: Home },
        { path: '/chapters', label: 'Các chương', icon: BookOpen },
        { path: '/formulas', label: 'Công thức', icon: FileText },
        { path: '/quiz', label: 'Luyện tập', icon: Brain },
        { path: '/about', label: 'Giới thiệu', icon: Info },
    ];

    return (
        <>
            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 h-16 bg-dark-900/90 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-4">
                <Link to="/" className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">M</span>
                    </div>
                    <span className="text-xl font-bold gradient-text font-display">MAD101</span>
                </Link>
                <button
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                    {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
          fixed top-0 left-0 z-50 h-screen bg-dark-900/95 backdrop-blur-xl border-r border-white/5
          transition-all duration-300 ease-in-out
          lg:translate-x-0
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${isCollapsed ? 'w-20' : 'w-72'}
        `}
            >
                {/* Sidebar Header */}
                <div className={`h-20 flex items-center border-b border-white/5 ${isCollapsed ? 'justify-center px-2' : 'justify-between px-6'}`}>
                    <Link to="/" className="flex items-center space-x-3" onClick={() => setIsMobileOpen(false)}>
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <span className="text-white font-bold text-lg">M</span>
                        </div>
                        {!isCollapsed && (
                            <div className="overflow-hidden">
                                <span className="text-xl font-bold gradient-text font-display whitespace-nowrap">MAD101</span>
                                <p className="text-xs text-gray-500 whitespace-nowrap">Discrete Mathematics</p>
                            </div>
                        )}
                    </Link>
                </div>

                {/* Collapse Button - Desktop only */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="hidden lg:flex absolute -right-3 top-24 w-6 h-6 rounded-full bg-dark-800 border border-white/10 items-center justify-center text-gray-400 hover:text-white hover:bg-dark-700 transition-all"
                >
                    {isCollapsed ? (
                        <ChevronRight className="w-4 h-4" />
                    ) : (
                        <ChevronLeft className="w-4 h-4" />
                    )}
                </button>

                {/* Navigation */}
                <nav className="p-4 space-y-2">
                    {!isCollapsed && (
                        <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Menu
                        </div>
                    )}

                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsMobileOpen(false)}
                                className={`
                  flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group
                  ${isActive
                                        ? 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-white border border-primary-500/30'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }
                  ${isCollapsed ? 'justify-center' : ''}
                `}
                                title={isCollapsed ? item.label : undefined}
                            >
                                <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-primary-400' : 'group-hover:text-primary-400'} transition-colors`} />
                                {!isCollapsed && (
                                    <span className="font-medium">{item.label}</span>
                                )}
                                {isActive && !isCollapsed && (
                                    <Sparkles className="w-4 h-4 ml-auto text-primary-400" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Bottom Section */}
                {!isCollapsed && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/5">
                        <div className="glass-card p-4 text-center">
                            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                                <Brain className="w-6 h-6 text-primary-400" />
                            </div>
                            <h4 className="text-sm font-semibold text-white mb-1">Luyện tập ngay!</h4>
                            <p className="text-xs text-gray-500 mb-3">Kiểm tra kiến thức của bạn</p>
                            <Link
                                to="/quiz"
                                onClick={() => setIsMobileOpen(false)}
                                className="block w-full py-2 text-sm font-medium bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:from-primary-500 hover:to-secondary-500 transition-all"
                            >
                                Bắt đầu Quiz
                            </Link>
                        </div>
                    </div>
                )}
            </aside>
        </>
    );
};

export default Sidebar;
