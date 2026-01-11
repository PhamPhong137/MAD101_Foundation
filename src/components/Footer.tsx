import { Link } from 'react-router-dom';
import { Github, Facebook, Mail, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative mt-20 border-t border-white/10">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                                <span className="text-white font-bold text-lg">M</span>
                            </div>
                            <div>
                                <span className="text-xl font-bold gradient-text font-display">MAD101</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Tổng hợp kiến thức cơ bản môn Discrete Mathematics (MAD101) tại FPT University.
                            Được thiết kế để giúp sinh viên học tập hiệu quả hơn.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold text-lg">Liên kết nhanh</h3>
                        <div className="grid grid-cols-2 gap-2">
                            <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                                Trang chủ
                            </Link>
                            <Link to="/chapters" className="text-gray-400 hover:text-white transition-colors text-sm">
                                Các chương
                            </Link>
                            <Link to="/formulas" className="text-gray-400 hover:text-white transition-colors text-sm">
                                Công thức
                            </Link>
                            <Link to="/quiz" className="text-gray-400 hover:text-white transition-colors text-sm">
                                Luyện tập
                            </Link>
                        </div>
                    </div>

                    {/* Contact & Resources */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold text-lg">Tài nguyên</h3>
                        <div className="space-y-2">
                            <a
                                href="https://www.facebook.com/profile.php?id=100092640345636"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors text-sm group"
                            >
                                <Facebook className="w-4 h-4" />
                                <span>Liên hệ thắc mắc kiến thức</span>
                                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                            <a
                                href="https://docs.google.com/document/d/1RQ3GGTMcQBfnWIyQoHhRjwwDlNApB1q7htZArJwLBRA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors text-sm group"
                            >
                                <ExternalLink className="w-4 h-4" />
                                <span>Final Exam Resources</span>
                            </a>
                        </div>

                        <div className="flex items-center space-x-3 pt-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=100092640345636"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:support@example.com"
                                className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm text-center sm:text-left">
                        © {currentYear} MAD101 Study Guide. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm flex items-center">
                        Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for FPT Students
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
