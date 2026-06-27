import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import CtaSection from '@/components/sections/CtaSection';

const Services = () => {
  return (
    <div className="min-h-screen pt-8">
      <ServicesSection />
      <ProcessSection />
      <IndustriesSection />
      <CtaSection />
    </div>
  );
};

export default Services;
