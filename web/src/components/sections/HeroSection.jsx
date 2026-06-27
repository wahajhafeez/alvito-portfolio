import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MousePointer } from 'lucide-react';
import { Link } from 'react-router';
import CanvasWrapper from '@/components/three/CanvasWrapper';
import FloatingObjects from '@/components/three/FloatingObjects';
import TypingAnimation from '@/components/common/TypingAnimation';
import StarRating from '@/components/common/StarRating';
import {
  HERO_HEADLINE,
  HERO_SUB,
  NICHE_CHIPS,
  PRIMARY_CTA,
  SECONDARY_CTA,
  TRUST,
} from '@/constants/site';

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <CanvasWrapper cameraPosition={[0, 0, 8]}>
          <FloatingObjects />
        </CanvasWrapper>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-30" />

      {/* Radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="container-custom relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Now booking new projects
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {HERO_HEADLINE.pre}{' '}
            <span className="gradient-text">{HERO_HEADLINE.highlight}</span>
          </motion.h1>

          {/* Typing value props */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-6 text-xl font-medium text-muted-foreground sm:text-2xl lg:text-3xl"
          >
            <span className="text-foreground">We deliver </span>
            <TypingAnimation className="text-accent" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mb-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {HERO_SUB}
          </motion.p>

          {/* Niche chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mb-8 flex flex-wrap gap-2"
          >
            {NICHE_CHIPS.map((chip) => (
              <span
                key={chip}
                className="glass rounded-full px-3.5 py-1.5 text-xs font-medium text-foreground sm:text-sm"
              >
                {chip}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href={PRIMARY_CTA.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              <Calendar size={16} />
              {PRIMARY_CTA.label}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              to={SECONDARY_CTA.href}
              className="glass flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-foreground transition-all hover:border-primary/30 hover:text-primary hover:-translate-y-0.5"
            >
              {SECONDARY_CTA.label}
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-8 flex items-center gap-3 text-sm text-muted-foreground"
          >
            <StarRating rating={TRUST.rating} size={15} />
            <span>{TRUST.line}</span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <MousePointer size={16} className="animate-bounce" />
            <span className="text-xs tracking-widest uppercase">Scroll</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
