import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Home, Info, FileText, Brain } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { path: '/', label: 'Trang chủ', icon: Home },
        { path: '/chapters', label: 'Các chương', icon: BookOpen },
        { path: '/formulas', label: 'Công thức', icon: FileText },
        { path: '/quiz', label: 'Luyện tập', icon: Brain },
        { path: '/about', label: 'Giới thiệu', icon: Info },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-dark-900/80 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center space-x-3 group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white font-bold text-lg">M</span>
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-xl font-bold gradient-text font-display">MAD101</span>
                            <span className="text-gray-400 text-sm ml-2 hidden md:inline">Discrete Mathematics</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${location.pathname === item.path
                                        ? 'bg-white/10 text-white'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <item.icon className="w-4 h-4" />
                                <span className="font-medium">{item.label}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'
                        }`}
                >
                    <div className="glass-card p-4 mt-2 space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${location.pathname === item.path
                                        ? 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-white'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <item.icon className="w-5 h-5" />
                                <span className="font-medium">{item.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
