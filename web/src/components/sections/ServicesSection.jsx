import { useTranslation } from 'react-i18next';
import SectionHeading from '@/components/common/SectionHeading';
import ServiceCard from '@/components/common/ServiceCard';
import { SERVICES } from '@/constants/services';

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = SERVICES.map((s) => ({
    ...s,
    title: t(`services.items.${s.id}.title`),
    blurb: t(`services.items.${s.id}.blurb`),
    features: t(`services.items.${s.id}.features`, { returnObjects: true }),
  }));

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading title={t('services.heading')} subtitle={t('services.subtitle')} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
