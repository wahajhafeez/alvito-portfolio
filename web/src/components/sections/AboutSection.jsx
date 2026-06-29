import { motion } from 'framer-motion';
import { Target, Palette, Layers, Handshake } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import GlassCard from '@/components/common/GlassCard';
import { BRAND } from '@/constants/site';

const VALUES = [
  {
    icon: Target,
    title: 'Results-Driven',
    description:
      'We design for outcomes — more leads, more bookings, more revenue. Pretty that performs.',
  },
  {
    icon: Palette,
    title: 'Design-Led',
    description: 'Every project starts in Figma. Brand, UX and detail are never an afterthought.',
  },
  {
    icon: Layers,
    title: 'Full-Service',
    description:
      'Design, development, marketing and support — one team, one point of contact, zero handoffs.',
  },
  {
    icon: Handshake,
    title: 'True Partners',
    description:
      'We treat your business like our own. Clear communication, honest advice, long-term thinking.',
  },
];

const STATS = [
  { value: '50+', label: 'Clients Served' },
  { value: '100+', label: 'Projects Delivered' },
  { value: '3', label: 'Industries' },
  { value: '5★', label: 'Avg Rating' },
];

const AboutSection = () => {
  return (
    <section className="section-padding from-background to-muted/10 bg-gradient-to-b">
      <div className="container-custom">
        <SectionHeading
          title="About the Studio"
          subtitle="A design & development studio helping ambitious businesses look — and convert — better online."
        />

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
                <span className="text-foreground font-semibold">{BRAND.name}</span> is a
                full-service <span className="text-primary">design &amp; development studio</span>.
                We build the websites, apps, brands and marketing that turn visitors into clients.
              </p>
              <p className="text-base leading-relaxed">
                We started as a small web studio and grew by obsessing over one thing: results.
                Today we work end-to-end — strategy, Figma design, full-stack development and social
                media marketing — so our clients get everything they need under one roof.
              </p>
              <p className="text-base leading-relaxed">
                We focus on three industries we know deeply — solar installers, boutique B2B
                consultants &amp; coaches, and high-end local services — so every project speaks
                directly to the people you want to win.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="gradient-text text-3xl font-bold">{stat.value}</div>
                  <div className="text-muted-foreground mt-1 text-xs">{stat.label}</div>
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
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <GlassCard className="hover:border-primary/30 h-full transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-primary/10 text-primary mb-3 inline-flex rounded-lg p-2.5">
                    <value.icon size={20} />
                  </div>
                  <h3 className="text-foreground mb-2 font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
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
