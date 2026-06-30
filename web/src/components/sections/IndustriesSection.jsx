import { useTranslation } from 'react-i18next';
import SectionHeading from '@/components/common/SectionHeading';
import IndustryCard from '@/components/common/IndustryCard';
import { INDUSTRIES } from '@/constants/industries';

const IndustriesSection = () => {
  const { t } = useTranslation();

  const industries = INDUSTRIES.map((ind) => ({
    ...ind,
    name: t(`industries.items.${ind.id}.name`),
    tagline: t(`industries.items.${ind.id}.tagline`),
    promise: t(`industries.items.${ind.id}.promise`),
    outcomes: t(`industries.items.${ind.id}.outcomes`, { returnObjects: true }),
  }));

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/10">
      <div className="container-custom">
        <SectionHeading title={t('industries.heading')} subtitle={t('industries.subtitle')} />

        <div className="grid gap-6 md:grid-cols-3">
          {industries.map((industry, i) => (
            <IndustryCard key={industry.id} industry={industry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
