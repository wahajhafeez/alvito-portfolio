import { motion } from 'framer-motion';
import { Sun, Presentation, Gem, Monitor, Code2, Smartphone, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const ICON_MAP = { Sun, Presentation, Gem, Monitor, Code2, Smartphone };

const IndustryCard = ({ industry, index = 0 }) => {
  const Icon = ICON_MAP[industry.icon] || Sun;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -6 }}
      className={cn(
        'glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-7 transition-all duration-300',
        'hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10'
      )}
    >
      {/* Glow accent on hover */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="mb-5 inline-flex w-fit rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon size={24} />
      </div>

      <h3 className="text-xl font-semibold text-foreground">{industry.name}</h3>
      <p className="mb-4 mt-1 text-sm font-medium text-accent">{industry.tagline}</p>

      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{industry.promise}</p>

      <div className="mt-auto flex flex-wrap gap-1.5">
        {industry.outcomes?.map((outcome) => (
          <span
            key={outcome}
            className="inline-flex items-center gap-1 rounded-full bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground"
          >
            <ArrowUpRight size={12} className="text-accent" />
            {outcome}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default IndustryCard;
