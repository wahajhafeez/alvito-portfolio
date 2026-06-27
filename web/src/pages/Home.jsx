import HeroSection from '@/components/sections/HeroSection';
import StatsBar from '@/components/sections/StatsBar';
import ServicesSection from '@/components/sections/ServicesSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CtaSection from '@/components/sections/CtaSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <IndustriesSection />
      {/* Featured work preview */}
      <ProjectsSection limit={3} showFilters={false} showViewAll={true} />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default Home;
