import SectionHeading from '@/components/common/SectionHeading';
import TestimonialCard from '@/components/common/TestimonialCard';
import { TESTIMONIALS } from '@/constants/testimonials';

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="What Clients Say"
          subtitle="Real results from solar installers, consultants and high-end local businesses we've worked with."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
