// ─── Studio brand & non-translatable config (single source of truth) ───
// Rename the studio in ONE place by editing BRAND below.
// All translatable copy now lives in src/locales/{en,de}.json.

export const BRAND = {
  name: 'Alvito Tech',
  short: 'Alvito',
  logoSuffix: '.tech',
};

// CTA targets — labels are translated via i18n (cta.bookCall / cta.seeWork)
export const PRIMARY_CTA = {
  href: 'https://calendly.com/alvitotech/1-hour-meeting',
};
export const SECONDARY_CTA = { href: '/work' };

// Non-translatable trust figures
export const TRUST = {
  rating: 5,
};

// Contact details — labels/values like location & response time are translated
export const CONTACT = {
  email: 'alvitotech@gmail.com',
};
