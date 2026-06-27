import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import LoadingScreen from '@/components/common/LoadingScreen';
import PageTransition from '@/components/common/PageTransition';
import CommandPalette from '@/components/common/CommandPalette';
import useUiStore from '@/store/uiStore';

const Home = lazy(() => import('@/pages/Home'));
const Services = lazy(() => import('@/pages/Services'));
const About = lazy(() => import('@/pages/About'));
const Projects = lazy(() => import('@/pages/Projects'));
const Experience = lazy(() => import('@/pages/Experience'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/work" element={<PageTransition><Projects /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
          <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const AppRoutes = () => {
  const isLoading = useUiStore((s) => s.isLoading);

  return (
    <BrowserRouter>
      {isLoading && <LoadingScreen />}
      <CommandPalette />
      <Suspense fallback={null}>
        <AnimatedRoutes />
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
