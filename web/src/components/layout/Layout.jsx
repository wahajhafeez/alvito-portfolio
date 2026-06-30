import { Suspense, useEffect } from 'react';
import { useOutlet, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from '@/components/common/ScrollProgress';
import PageTransition from '@/components/common/PageTransition';

const Layout = () => {
  const { pathname } = useLocation();
  // Capture the current outlet element so AnimatePresence can hold the
  // previous page through its exit animation (a live <Outlet/> would not freeze).
  const outlet = useOutlet();

  // Reset scroll on navigation so on-mount `whileInView` reveals fire reliably
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Animate only the routed page; Navbar/Footer persist across navigations */}
        <AnimatePresence mode="wait">
          <PageTransition key={pathname}>
            <Suspense fallback={null}>{outlet}</Suspense>
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
