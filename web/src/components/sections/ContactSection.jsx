import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Send, Mail, MapPin, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import SectionHeading from '@/components/common/SectionHeading';
import GlassCard from '@/components/common/GlassCard';
import { SERVICES } from '@/constants/services';
import { CONTACT } from '@/constants/site';

const ContactSection = () => {
  const { t } = useTranslation();
  const [isPending, setIsPending] = useState(false);

  // Rebuilt when language changes so validation messages stay localised
  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t('contact.validation.nameMin')),
        email: z.string().email(t('contact.validation.emailInvalid')),
        service: z.string().min(1, t('contact.validation.serviceRequired')),
        budget: z.string().optional(),
        message: z.string().min(10, t('contact.validation.messageMin')),
      }),
    [t]
  );

  const serviceOptions = [
    ...SERVICES.map((s) => t(`services.items.${s.id}.title`)),
    t('contact.form.serviceNotSure'),
  ];
  const budgetOptions = ['< $1k', '$1k – $3k', '$3k – $7k', '$7k+', t('contact.form.budgetDiscuss')];

  const infoItems = [
    { icon: Mail, label: t('contact.info.email'), value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: MapPin, label: t('contact.info.location'), value: t('contact.locationValue'), href: null },
    { icon: Clock, label: t('contact.info.responseTime'), value: t('contact.responseTimeValue'), href: null },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    setIsPending(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          title: data.service,
          service: data.service,
          budget: data.budget || t('contact.form.budgetNotSpecified'),
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success(t('contact.toast.success'));
      reset();
    } catch {
      toast.error(t('contact.toast.error', { email: CONTACT.email }));
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading title={t('contact.heading')} subtitle={t('contact.subtitle')} />

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
              <h3 className="mb-2 text-xl font-semibold text-foreground">{t('contact.infoHeading')}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{t('contact.infoBody')}</p>
            </div>

            <div className="space-y-4">
              {infoItems.map((item) => (
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
                    <label className="mb-1.5 block text-sm font-medium text-foreground">{t('contact.form.name')}</label>
                    <input
                      {...register('name')}
                      placeholder={t('contact.form.namePlaceholder')}
                      className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary"
                    />
                    {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">{t('contact.form.email')}</label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder={t('contact.form.emailPlaceholder')}
                      className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary"
                    />
                    {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">{t('contact.form.service')}</label>
                    <select
                      {...register('service')}
                      defaultValue=""
                      className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary [&>option]:bg-background [&>option]:text-foreground"
                    >
                      <option value="" disabled className="bg-background text-foreground">
                        {t('contact.form.servicePlaceholder')}
                      </option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-background text-foreground">
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service.message}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      {t('contact.form.budget')} <span className="text-muted-foreground">{t('contact.form.budgetOptional')}</span>
                    </label>
                    <select
                      {...register('budget')}
                      defaultValue=""
                      className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary [&>option]:bg-background [&>option]:text-foreground"
                    >
                      <option value="" className="bg-background text-foreground">{t('contact.form.budgetPlaceholder')}</option>
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-background text-foreground">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">{t('contact.form.message')}</label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    placeholder={t('contact.form.messagePlaceholder')}
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
                    <>{t('contact.form.sending')}</>
                  ) : (
                    <>
                      <Send size={16} />
                      {t('contact.form.submit')}
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
