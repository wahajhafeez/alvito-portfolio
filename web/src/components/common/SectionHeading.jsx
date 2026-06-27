import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const SectionHeading = ({ title, subtitle, className, align = 'center' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={cn(
        'mb-16',
        align === 'center' && 'text-center',
        align === 'left' && 'text-left',
        className
      )}
    >
      <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          'mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent',
          align === 'center' && 'mx-auto'
        )}
      />
    </motion.div>
  );
};

export default SectionHeading;
