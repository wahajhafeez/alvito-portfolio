import SectionHeading from '@/components/common/SectionHeading';
import ServiceCard from '@/components/common/ServiceCard';
import { SERVICES } from '@/constants/services';

const ServicesSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="What We Do"
          subtitle="One studio for everything your brand needs to attract, convince and convert clients."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
