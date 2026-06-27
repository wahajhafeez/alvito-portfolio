import SectionHeading from '@/components/common/SectionHeading';
import IndustryCard from '@/components/common/IndustryCard';
import { INDUSTRIES } from '@/constants/industries';

const IndustriesSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/10">
      <div className="container-custom">
        <SectionHeading
          title="Who We Help"
          subtitle="We specialise in three industries — so we already understand your customers, your market and what makes them buy."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {INDUSTRIES.map((industry, i) => (
            <IndustryCard key={industry.id} industry={industry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
