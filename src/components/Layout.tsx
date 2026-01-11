import type { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark-950 bg-mesh transition-colors duration-300">
            <Sidebar />

            {/* Main Content - adjusts for sidebar */}
            <div className="lg:pl-72 transition-all duration-300">
                {/* Mobile top padding */}
                <main className="pt-16 lg:pt-0 min-h-screen">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
