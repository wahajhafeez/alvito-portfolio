import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
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
        isLeft ? 'md:flex-row-reverse md:self-end md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
      }`}
    >
      {/* Icon bubble */}
      <div
        className={`relative z-10 flex-shrink-0 ${
          isLeft ? 'md:absolute md:-right-6' : 'md:absolute md:-left-6'
        }`}
      >
        <div className="from-primary to-accent shadow-primary/30 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br text-white shadow-lg">
          <Icon size={18} />
        </div>
      </div>

      {/* Card */}
      <div className="glass hover:border-primary/30 flex-1 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <span className="bg-primary/20 text-primary rounded-full px-2.5 py-0.5 text-xs font-medium capitalize">
            {item.type}
          </span>
          <span className="text-muted-foreground text-xs">{item.period}</span>
        </div>
        <h3 className="text-foreground mb-0.5 font-semibold">{item.title}</h3>
        <p className="text-accent mb-3 text-sm">
          {item.company} · {item.location}
        </p>
        <p className="text-muted-foreground mb-3 text-sm leading-relaxed">{item.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-primary/10 text-primary rounded-md px-2.5 py-0.5 text-xs font-semibold"
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
  const { t } = useTranslation();

  const items = EXPERIENCE_ITEMS.map((item) => ({
    ...item,
    type: t(`experience.type.${item.type}`),
    title: t(`experience.items.${item.id}.title`),
    company: t(`experience.items.${item.id}.company`),
    location: t(`experience.items.${item.id}.location`),
    period: t(`experience.items.${item.id}.period`),
    description: t(`experience.items.${item.id}.description`),
  }));

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading title={t('experience.heading')} subtitle={t('experience.subtitle')} />

        {/* Desktop: alternating timeline | Mobile: single column */}
        <div className="relative">
          {/* Center line (desktop) */}
          <div className="from-primary/50 via-accent/30 absolute top-0 left-1/2 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b to-transparent md:block" />

          <div className="flex flex-col gap-8">
            {items.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
