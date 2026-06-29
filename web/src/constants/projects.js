export const PROJECTS = [
  {
    _id: 'leagues-gg',
    title: 'Leagues.gg — Esports Stats & Social Platform',
    description:
      'A social statistics platform for competitive gamers to follow friends and favourite players, track live performance metrics, and build community around League of Legends, VALORANT, and osu!',
    longDescription:
      'Alvito Tech built the full stack for Leagues.gg, an esports companion app that pulls live ranked data and match history for thousands of players. The React and MUI frontend renders leaderboards, match timelines, and player comparison cards with smooth, real-time updates. The Node.js/Express backend connects to game publisher APIs, aggregates stats into MongoDB, and serves fast paginated endpoints. Key features include friend-following feeds, per-champion performance breakdowns, and customisable player profile pages.',
    techStack: ['React', 'MUI', 'Node.js', 'Express', 'MongoDB'],
    category: 'fullstack',
    featured: true,
    order: 3,
    status: 'completed',
    liveUrl: 'https://leagues.gg/',
    githubUrl: null,
    imageUrl: 'https://s0.wp.com/mshots/v1/https://leagues.gg/?w=800&h=450',
  },
  {
    _id: 'procurement-league',
    title: 'Procurement League — B2B Learning Community',
    description:
      'A full-stack B2B platform accelerating innovation in procurement practice through courses, expert-led events, community discussion, and a rich resource library for procurement professionals worldwide.',
    longDescription:
      'Alvito Tech developed the full stack for Procurement League, a professional development hub serving procurement and supply-chain leaders globally. The platform features a course and content library, live and on-demand event management, member community forums, and expert contributor profiles. Built with React, MUI, and Tailwind CSS on the frontend and Node.js/Express with MongoDB on the backend, it handles membership gating, role-based access for contributors vs. members, and integrated payment flows for premium content subscriptions.',
    techStack: ['React', 'MUI', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    category: 'fullstack',
    featured: false,
    order: 4,
    status: 'completed',
    liveUrl: 'https://procurementleague.com/',
    githubUrl: null,
    imageUrl: 'https://s0.wp.com/mshots/v1/https://procurementleague.com/?w=800&h=450',
  },
  {
    _id: 'influencify',
    title: 'Influencify — Influencer Marketing Platform',
    description:
      'A full-stack influencer marketing platform giving brands and agencies access to 250M+ creator profiles across YouTube and TikTok, with advanced filtering, campaign management, and ROI tracking.',
    longDescription:
      'Alvito Tech built the complete full-stack application for Influencify, a data-driven influencer discovery and campaign management tool. The React frontend with MUI components powers a sophisticated search and filter UI across a database of 250 million creator profiles, with analytics dashboards for engagement rates, audience demographics, and campaign ROI. The Node.js/Express backend handles high-volume API ingestion from YouTube and TikTok, serves a white-label developer API, and manages multi-role access for brands, agencies, and administrators. MongoDB stores creator profiles, campaign records, and relationship management data.',
    techStack: ['React', 'MUI', 'Node.js', 'Express', 'MongoDB'],
    category: 'fullstack',
    featured: true,
    order: 5,
    status: 'completed',
    liveUrl: 'https://influencify.co/',
    githubUrl: null,
    imageUrl: 'https://s0.wp.com/mshots/v1/https://influencify.co/?w=800&h=450',
  },
  {
    _id: 'tugamemaster',
    title: 'TuGameMaster — Game Session Booking Platform',
    description:
      'A full-stack marketplace bridging casual gamers with professional game masters. Game masters list and manage sessions; players browse, book, and pay — all in one place.',
    longDescription:
      'Alvito Tech built the complete full-stack application for TuGameMaster, a niche marketplace for tabletop and online gaming sessions. Professional game masters can sign up, build a profile showcasing their skills and experience, schedule sessions with flexible pricing, and receive payouts via Stripe Connected Accounts. Players browse sessions by game title, duration, cost, and required experience level, then book and pay securely in-app. The platform also features a blog for gaming content, a real-time chat system between masters and players, a booking management dashboard, and a payout tracking panel. Built with React and Ant Design on the frontend, Redux for state, NestJS with PostgreSQL on the backend, and Stripe for end-to-end payment processing.',
    techStack: ['React', 'Ant Design', 'Redux', 'NestJS', 'PostgreSQL', 'Stripe'],
    category: 'fullstack',
    featured: true,
    order: 6,
    status: 'completed',
    liveUrl: null,
    githubUrl: null,
    imageUrl:
      'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_portfolio_project_grid_non_exp/v1/attachments/project_item/attachment/8819cb6cc63d7329a877a31e8ed6547e-1714287264049/Screenshot%202024-04-28%20114614.png',
  },
  {
    _id: 'yoogo',
    title: 'Yoogo — Social Marketplace Platform',
    description:
      'A unified social marketplace where creators, businesses, and shoppers connect to share content, discover products, and transact — all with 100% organic reach and zero algorithmic gatekeeping.',
    longDescription:
      'Alvito Tech built the complete frontend for Yoogo, a next-generation social commerce platform that merges content creation, community, and commerce in one place. We engineered a custom video player with adaptive streaming, integrated Braintree for seamless in-app payments, and wired real-time features via WebSockets so users see live updates across feeds and storefronts. The UI was built with Next.js, MUI, and Tailwind CSS, with Redux managing a complex global state across creator dashboards, marketplace listings, and buyer flows.',
    techStack: ['Next.js', 'MUI', 'Tailwind CSS', 'Redux', 'WebSockets', 'Braintree'],
    category: 'frontend',
    featured: true,
    order: 1,
    status: 'completed',
    liveUrl: 'https://www.yoogo.com/',
    githubUrl: null,
    imageUrl: 'https://s0.wp.com/mshots/v1/https://www.yoogo.com/?w=800&h=450',
  },
  {
    _id: 'canonizer',
    title: 'Canonizer — Consensus & Opinion Mapping',
    description:
      'A full-stack platform for structured debate and collaborative consensus-building. Users propose, refine, and rank competing ideas with real-time animated visualisations that show how opinion camps evolve over time.',
    longDescription:
      'Alvito Tech delivered a full-stack rebuild of Canonizer — a unique deliberative democracy tool where users form "camps" around ideas and track consensus in real time. We architected the backend with NestJS and a relational SQL database to handle complex hierarchical topic trees and camp membership logic. On the frontend, Next.js with Ant Design and Tailwind CSS powers a clean, information-dense UI, while D3.js drives animated tree and timeline visualisations that make shifting consensus immediately visible. Redux handles global state across deeply nested topic threads and live voting flows.',
    techStack: ['Next.js', 'Ant Design', 'Tailwind CSS', 'Redux', 'D3.js', 'NestJS', 'SQL'],
    category: 'fullstack',
    featured: true,
    order: 2,
    status: 'completed',
    liveUrl: 'https://canonizer.com/',
    githubUrl: null,
    imageUrl: 'https://s0.wp.com/mshots/v1/https://canonizer.com/?w=800&h=450',
  },
  {
    _id: 'voltora-solar',
    title: 'Voltora Solar — Solar Energy Platform',
    description:
      'A clean, conversion-focused frontend for a solar energy company. Showcases services, system packages, and drives lead generation with a modern UI built for solar installers.',
    longDescription:
      'Alvito Tech built the complete frontend for Voltora Solar, a solar energy company website designed to educate visitors and convert them into qualified leads. The React + MUI + Tailwind CSS build features a responsive layout, animated service sections, package comparison tables, a testimonials carousel, and an enquiry form. Redux manages UI state across multi-step user flows.',
    techStack: ['React', 'MUI', 'Tailwind CSS', 'Redux'],
    category: 'frontend',
    featured: false,
    order: 7,
    status: 'completed',
    liveUrl: 'https://voltora-solar-800168759398.asia-southeast1.run.app/',
    githubUrl: null,
    imageUrl: '/projects/solar-panel.webp',
  },
  {
    _id: 'nexus-grid',
    title: 'Nexus Grid — Solar Management System',
    description:
      'A smart solar monitoring platform with real-time energy tracking, performance analytics, instant alerts, and detailed reports — maximising output and system reliability.',
    longDescription:
      'Alvito Tech developed the full frontend for Nexus Grid, a solar management SaaS dashboard. Built with React, MUI, Tailwind CSS, and Redux, the application provides a real-time monitoring dashboard tracking total generation, current power output, and system efficiency. Key features include energy generation charts, CO₂ savings tracking, smart control panels, instant alert notifications, and scheduled performance reports — all presented in a clean, data-dense UI optimised for solar operators.',
    techStack: ['React', 'MUI', 'Tailwind CSS', 'Redux'],
    category: 'frontend',
    featured: true,
    order: 8,
    status: 'completed',
    liveUrl: 'https://nexus-grid-energy-c8drw2odr.vercel.app/',
    githubUrl: null,
    imageUrl: '/projects/solar-2.webp',
  },
  {
    _id: 'lumiere-aesthetics',
    title: 'Lumière Aesthetics — Beauty Clinic Website',
    description:
      'A premium website for a high-end aesthetic and beauty clinic. Designed to build trust, showcase treatments, and drive appointment bookings through an elegant, luxury UI.',
    longDescription:
      "Alvito Tech built the frontend for Lumière Aesthetics, a boutique beauty and wellness clinic. The React + MUI + Tailwind CSS site features a luxury design language with warm tones, smooth animations, a treatments catalogue, before/after galleries, practitioner profiles, client testimonials, and an online appointment booking form. The UI was crafted to reflect the clinic's premium brand and convert visitors into booked consultations.",
    techStack: ['React', 'MUI', 'Tailwind CSS', 'Redux'],
    category: 'frontend',
    featured: false,
    order: 9,
    status: 'completed',
    liveUrl: 'https://lumi-re-aesthetics-800168759398.asia-southeast1.run.app/',
    githubUrl: null,
    imageUrl: '/projects/lumi.webp',
  },
  {
    _id: 'oralence-smile',
    title: 'Oralence Smile Studio — Dental Clinic Website',
    description:
      'A modern dental clinic website covering general, cosmetic, and paediatric dentistry. Clean, trustworthy design with service listings, team profiles, and an appointment booking flow.',
    longDescription:
      'Alvito Tech designed and built the frontend for Oralence Smile Studio, a full-service dental practice. The React + MUI + Tailwind CSS site lists all treatment categories — general dentistry, cosmetic dentistry, orthodontics, implants, teeth whitening, and paediatric care — with dedicated service pages, a meet-the-team section, patient testimonials, and an online appointment request form. The teal and white colour scheme reinforces clinical trust while keeping the experience welcoming.',
    techStack: ['React', 'MUI', 'Tailwind CSS', 'Redux'],
    category: 'frontend',
    featured: false,
    order: 10,
    status: 'completed',
    liveUrl: 'https://oralence-smile-studio-9r8ez4wf2.vercel.app/',
    githubUrl: null,
    imageUrl: '/projects/oralence-smile.webp',
  },
  {
    _id: 'valancia-leisure',
    title: 'Valancia Leisure Club — Community & Lifestyle',
    description:
      'A lifestyle and community club website featuring sports, education, wellness, and family amenities — designed to attract memberships and showcase the full club experience.',
    longDescription:
      "Alvito Tech built the frontend for Valancia Leisure Club, a premium family lifestyle community. The React + MUI + Tailwind CSS site showcases the club's full range of amenities — library and learning spaces, children's play areas, sports courts, yoga and fitness classes, and landscaped family grounds. Animated image collages, a membership plans section, facilities explorer, and event calendar drive engagement and membership sign-ups. Redux handles UI state across interactive filters and booking flows.",
    techStack: ['React', 'MUI', 'Tailwind CSS', 'Redux'],
    category: 'frontend',
    featured: false,
    order: 11,
    status: 'completed',
    liveUrl: 'https://valancia-leisure-club-m3wcwpk47.vercel.app/',
    githubUrl: null,
    imageUrl: '/projects/valancia-leisure-club.webp',
  },
  {
    _id: 'finance-tracker',
    title: 'Finance Tracker — Personal Finance Dashboard',
    description:
      'A full-stack personal finance management app with income/expense tracking, budget planning, savings goals, investment monitoring, and detailed category reports.',
    longDescription:
      'Alvito Tech built the complete full-stack Finance Tracker application. The React + MUI + Tailwind CSS dashboard displays a real-time overview of total balance, income, expenses, and savings progress. Features include cash flow charts, expenses-by-category doughnut charts, transaction history, budget vs. actual spend tracking per category, savings goal progress bars, bill reminders, and an investments section. The Node.js/Express backend with MongoDB stores all user financial data, with a freemium model offering a premium upgrade for unlimited accounts and advanced reporting.',
    techStack: ['React', 'MUI', 'Tailwind CSS', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    category: 'fullstack',
    featured: true,
    order: 12,
    status: 'completed',
    liveUrl: 'https://personal-finance-tracker-1dynbw3we.vercel.app/',
    githubUrl: null,
    imageUrl: '/projects/personal-finance.webp',
  },
  {
    _id: 'solarops-pro',
    title: 'SolarOps Pro — Solar ERP Management System',
    description:
      'A comprehensive full-stack Solar ERP platform managing leads, projects, customers, inventory, procurement, finance, installation, and maintenance for solar businesses.',
    longDescription:
      'Alvito Tech built the full-stack SolarOps Pro ERP system for solar installation companies. The React + MUI + Tailwind dashboard provides an admin overview of total projects (128), installed capacity (2.45 MW), total sales ($1.24M), and outstanding invoices. Modules include lead management, project tracking with status pipelines (completed/in-progress/pending/on-hold), customer CRM, solar panel and inverter inventory, procurement, finance with revenue vs. expense charts, installation scheduling, and maintenance tracking. The Node.js/Express backend with MongoDB powers all modules with role-based access control.',
    techStack: ['React', 'MUI', 'Tailwind CSS', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    category: 'fullstack',
    featured: true,
    order: 13,
    status: 'completed',
    liveUrl: 'https://solarops-dl8fco5ia-ayeshaashrafsoftmindsolutions-5658s-projects.vercel.app/',
    githubUrl: null,
    imageUrl: '/projects/solar-erp.webp',
  },
];
