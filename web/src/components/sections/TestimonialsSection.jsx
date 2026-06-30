import { useTranslation } from 'react-i18next';
import SectionHeading from '@/components/common/SectionHeading';
import TestimonialCard from '@/components/common/TestimonialCard';
import { TESTIMONIALS } from '@/constants/testimonials';

const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials = TESTIMONIALS.map((item) => ({
    ...item,
    role: t(`testimonials.items.${item.id}.role`),
    quote: t(`testimonials.items.${item.id}.quote`),
    niche: t(`testimonials.niche.${item.niche}`),
  }));

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading title={t('testimonials.heading')} subtitle={t('testimonials.subtitle')} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
