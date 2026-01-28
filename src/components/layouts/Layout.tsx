import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../common/header';
// import { Loader } from './ui/Loader.tsx';
// import { Button } from './ui/Button.tsx';
// import Header from './common/Header.tsx';

interface LayoutProps {
    children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    
   
    return (
        <div className="min-h-screen bg-gray-50   ">
            <Header/>
            <main className="flex-1 w-full  mx-auto ">
                {children || <Outlet />}
            </main>
        </div>
    );
};
