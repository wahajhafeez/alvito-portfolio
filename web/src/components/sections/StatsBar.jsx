import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import StatCounter from '@/components/common/StatCounter';
// import LogoMarquee from '@/components/common/LogoMarquee';
import { STATS } from '@/constants/stats';

const StatsBar = () => {
  const { t } = useTranslation();

  return (
    <section className="border-y border-border bg-muted/5 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <StatCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              <div className="mt-2 text-sm text-muted-foreground">{t(`stats.${stat.key}`)}</div>
            </motion.div>
          ))}
        </div>

        {/* Client wordmark marquee */}
        {/* <div className="mt-14">
          <p className="mb-6 text-center text-xs uppercase tracking-widest text-muted-foreground">
            Trusted by businesses worldwide
          </p>
          <LogoMarquee />
        </div> */}
      </div>
    </section>
  );
};

export default StatsBar;
