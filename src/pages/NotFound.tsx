import { Link } from 'react-router-dom';
import { Compass, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary-500/15 flex items-center justify-center">
                    <Compass className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                </div>
                <h1 className="text-5xl font-bold font-display text-gray-900 dark:text-white mb-3">404</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Không tìm thấy trang này. Có thể đường dẫn đã bị thay đổi hoặc không tồn tại.
                </p>
                <Link to="/" className="btn-primary inline-flex items-center space-x-2">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Về trang chủ</span>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
