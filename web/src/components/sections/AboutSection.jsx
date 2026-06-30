import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Target, Palette, Layers, Handshake } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import GlassCard from '@/components/common/GlassCard';
import { BRAND } from '@/constants/site';

// Structure only — icon + translation key (about.values.<key>.{title,description})
const VALUES = [
  { key: 'results', icon: Target },
  { key: 'design', icon: Palette },
  { key: 'fullService', icon: Layers },
  { key: 'partners', icon: Handshake },
];

// Structure only — display value + translation key (about.stats.<key>)
const STATS = [
  { key: 'clients', value: '50+' },
  { key: 'projects', value: '100+' },
  { key: 'industries', value: '3' },
  { key: 'rating', value: '5★' },
];

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding from-background to-muted/10 bg-gradient-to-b">
      <div className="container-custom">
        <SectionHeading title={t('about.heading')} subtitle={t('about.subtitle')} />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Brand mark */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="gradient-border h-48 w-48 overflow-hidden rounded-2xl">
                  <div className="bg-muted/30 flex h-full w-full items-center justify-center p-5">
                    <img
                      src="/alvito-logo.png"
                      alt={`${BRAND.name} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                {/* Decorative ring */}
                <div className="from-primary/20 to-accent/20 absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-r blur-xl" />
              </div>
            </div>

            <div className="text-muted-foreground space-y-4">
              <p className="text-base leading-relaxed">
                <span className="text-foreground font-semibold">{BRAND.name}</span>{' '}
                {t('about.paragraphs.lead')}
              </p>
              <p className="text-base leading-relaxed">{t('about.paragraphs.second')}</p>
              <p className="text-base leading-relaxed">{t('about.paragraphs.third')}</p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((stat) => (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="gradient-text text-3xl font-bold">{stat.value}</div>
                  <div className="text-muted-foreground mt-1 text-xs">
                    {t(`about.stats.${stat.key}`)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {VALUES.map((value, i) => (
              <motion.div
                key={value.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <GlassCard className="hover:border-primary/30 h-full transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-primary/10 text-primary mb-3 inline-flex rounded-lg p-2.5">
                    <value.icon size={20} />
                  </div>
                  <h3 className="text-foreground mb-2 font-semibold">
                    {t(`about.values.${value.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(`about.values.${value.key}.description`)}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
