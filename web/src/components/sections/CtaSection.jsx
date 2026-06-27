import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import StarRating from '@/components/common/StarRating';
import { PRIMARY_CTA, TRUST } from '@/constants/site';

const CtaSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="gradient-border relative overflow-hidden rounded-3xl p-10 text-center sm:p-16"
        >
          {/* glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

          <h2 className="mx-auto mb-4 max-w-2xl text-3xl font-bold sm:text-4xl lg:text-5xl">
            Ready to turn visitors into <span className="gradient-text">paying clients?</span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base text-muted-foreground sm:text-lg">
            Book a free, no-pressure call. We'll review your current presence and show you exactly how to grow.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={PRIMARY_CTA.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-primary/50 hover:-translate-y-0.5"
            >
              <Calendar size={18} />
              {PRIMARY_CTA.label}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <StarRating rating={TRUST.rating} size={14} />
              <span>{TRUST.line}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
