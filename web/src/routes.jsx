import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from '@/components/layout/Layout';
import LoadingScreen from '@/components/common/LoadingScreen';
import CommandPalette from '@/components/common/CommandPalette';
import useUiStore from '@/store/uiStore';

const Home = lazy(() => import('@/pages/Home'));
const Services = lazy(() => import('@/pages/Services'));
const About = lazy(() => import('@/pages/About'));
const Projects = lazy(() => import('@/pages/Projects'));
const Experience = lazy(() => import('@/pages/Experience'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const AppRoutes = () => {
  const isLoading = useUiStore((s) => s.isLoading);

  return (
    <BrowserRouter>
      {isLoading && <LoadingScreen />}
      <CommandPalette />
      <Suspense fallback={null}>
        <Routes>
          {/* Layout (navbar/footer) stays mounted; only the page content animates */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
