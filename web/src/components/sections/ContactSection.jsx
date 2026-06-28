import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Clock } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import GlassCard from '@/components/common/GlassCard';
import { useContact } from '@/hooks/useContact';
import { SERVICES } from '@/constants/services';
import { CONTACT } from '@/constants/site';

const SERVICE_OPTIONS = [...SERVICES.map((s) => s.title), 'Not sure yet'];
const BUDGET_OPTIONS = ['< $1k', '$1k – $3k', '$3k – $7k', '$7k+', 'Let’s discuss'];

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Please tell us a bit more (10+ characters)'),
});

const INFO_ITEMS = [
  { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: MapPin, label: 'Location', value: CONTACT.location, href: null },
  { icon: Clock, label: 'Response Time', value: CONTACT.responseTime, href: null },
];

const ContactSection = () => {
  const { mutate: sendMessage, isPending } = useContact();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    // Fold service + budget into the existing subject/message fields (no API change).
    const payload = {
      name: data.name,
      email: data.email,
      subject: `New project inquiry — ${data.service}`,
      message: `Service: ${data.service}\nBudget: ${data.budget || 'Not specified'}\n\n${data.message}`,
    };
    sendMessage(payload, { onSuccess: () => reset() });
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Let's Grow Your Business"
          subtitle="Tell us about your project and goals. We'll get back to you within 24–48 hours with next steps."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Book a free discovery call</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Whether you need a new website, a brand refresh, an app or a marketing engine — we'd
                love to hear about it. No pressure, no jargon, just honest advice.
              </p>
            </div>

            <div className="space-y-4">
              {INFO_ITEMS.map((item) => (
                <GlassCard key={item.label} className="flex items-center gap-4 p-4">
                  <div className="rounded-lg bg-primary/10 p-2.5 text-primary flex-shrink-0">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Name</label>
                    <input
                      {...register('name')}
                      placeholder="Jane Doe"
                      className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary"
                    />
                    {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="jane@company.com"
                      className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary"
                    />
                    {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Service you need</label>
                    <select
                      {...register('service')}
                      defaultValue=""
                      className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary [&>option]:bg-background [&>option]:text-foreground"
                    >
                      <option value="" disabled className="bg-background text-foreground">
                        Select a service…
                      </option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-background text-foreground">
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service.message}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Budget <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <select
                      {...register('budget')}
                      defaultValue=""
                      className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary [&>option]:bg-background [&>option]:text-foreground"
                    >
                      <option value="" className="bg-background text-foreground">Select a range…</option>
                      {BUDGET_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-background text-foreground">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Project details</label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    placeholder="Tell us about your business, your goals and what you need…"
                    className="w-full resize-none rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary"
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  disabled={isPending}
                  whileTap={{ scale: 0.97 }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/25 transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isPending ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
