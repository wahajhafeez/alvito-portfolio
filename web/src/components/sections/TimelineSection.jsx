import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Palette, Target, Users } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import { EXPERIENCE_ITEMS } from '@/constants/experience';

const ICON_MAP = { Rocket, Palette, Target, Users };

const TimelineItem = ({ item, index }) => {
  const Icon = ICON_MAP[item.icon] || Rocket;
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex w-full items-start gap-4 md:w-1/2 ${
        isLeft ? 'md:pr-12 md:self-end md:flex-row-reverse md:text-right' : 'md:pl-12 md:ml-auto'
      }`}
    >
      {/* Icon bubble */}
      <div
        className={`relative z-10 flex-shrink-0 ${
          isLeft ? 'md:absolute md:-right-6' : 'md:absolute md:-left-6'
        }`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/30">
          <Icon size={18} />
        </div>
      </div>

      {/* Card */}
      <div className="glass flex-1 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-medium text-primary capitalize">
            {item.type}
          </span>
          <span className="text-xs text-muted-foreground">{item.period}</span>
        </div>
        <h3 className="mb-0.5 font-semibold text-foreground">{item.title}</h3>
        <p className="mb-3 text-sm text-accent">{item.company} · {item.location}</p>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const TimelineSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Our Journey"
          subtitle="From a one-person web studio to a full-service team trusted by 100+ clients."
        />

        {/* Desktop: alternating timeline | Mobile: single column */}
        <div className="relative">
          {/* Center line (desktop) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/50 via-accent/30 to-transparent md:block" />

          <div className="flex flex-col gap-8">
            {EXPERIENCE_ITEMS.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
