import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import StarRating from '@/components/common/StarRating';
import { cn } from '@/lib/utils';

// Deterministic initials avatar from a name
const initials = (name = '') =>
  name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

const TestimonialCard = ({ testimonial, index = 0 }) => {
  const { name, role, company, niche, quote, rating } = testimonial;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className={cn(
        'glass relative flex h-full flex-col rounded-xl p-6 transition-all duration-300',
        'hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10'
      )}
    >
      <Quote size={28} className="mb-3 text-primary/30" />

      <p className="mb-5 flex-1 text-sm leading-relaxed text-foreground/90">“{quote}”</p>

      <StarRating rating={rating} className="mb-4" />

      <div className="flex items-center gap-3 border-t border-border pt-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
          {initials(name)}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">{name}</p>
          <p className="truncate text-xs text-muted-foreground">
            {role}, {company}
          </p>
        </div>
        {niche && (
          <span className="ml-auto hidden flex-shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary sm:inline">
            {niche}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
