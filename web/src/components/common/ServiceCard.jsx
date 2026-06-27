import { motion } from 'framer-motion';
import { Figma, Megaphone, MousePointerClick, Code2, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const ICON_MAP = { Figma, Megaphone, MousePointerClick, Code2 };

const ServiceCard = ({ service, index = 0 }) => {
  const Icon = ICON_MAP[service.icon] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className={cn(
        'glass group relative flex h-full flex-col overflow-hidden rounded-xl p-6 transition-all duration-300',
        'hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10'
      )}
    >
      <div className="mb-5 inline-flex w-fit rounded-xl bg-gradient-to-br from-primary to-accent p-3 text-white shadow-lg shadow-primary/30">
        <Icon size={22} />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
        {service.title}
      </h3>
      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{service.blurb}</p>

      <ul className="mt-auto space-y-2">
        {service.features?.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check size={15} className="flex-shrink-0 text-accent" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;
