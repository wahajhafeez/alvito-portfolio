// Trust stats for the animated counters in StatsBar.
// `value` is numeric so it can count up; `decimals` controls float display.
// `key` maps to a translated label in locales: stats.<key>
export const STATS = [
  { key: 'clientsServed', value: 50, suffix: '+' },
  { key: 'projectsDelivered', value: 100, suffix: '+' },
  { key: 'averageRating', value: 4.9, suffix: '/5', decimals: 1 },
  { key: 'industriesServed', value: 3, suffix: '' },
];
