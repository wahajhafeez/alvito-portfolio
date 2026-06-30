import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Search, PenTool, Hammer, Rocket } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import { PROCESS_STEPS } from '@/constants/process';

const ICON_MAP = { Search, PenTool, Hammer, Rocket };

const ProcessSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading title={t('process.heading')} subtitle={t('process.subtitle')} />

        <div className="relative grid gap-6 md:grid-cols-4">
          {/* Connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-primary/40 via-accent/30 to-transparent md:block" />

          {PROCESS_STEPS.map((step, i) => {
            const Icon = ICON_MAP[step.icon] || Search;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative text-center md:text-left"
              >
                <div className="relative z-10 mx-auto mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/30 md:mx-0">
                  <Icon size={26} />
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-background text-xs font-bold text-primary ring-1 ring-primary/30">
                    {step.step}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {t(`process.items.${step.step}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(`process.items.${step.step}.desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
