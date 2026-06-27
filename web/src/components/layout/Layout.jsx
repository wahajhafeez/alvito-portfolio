import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from '@/components/common/ScrollProgress';

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
