import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import Project from '../models/Project.js';

const projects = [
  {
    title: 'SolarEdge Pro — Solar CRM & Lead Funnel',
    description:
      'A full-stack CRM and lead generation platform built for a solar installation company. Converts site visitors into booked appointments with automated follow-ups.',
    longDescription:
      'Built with React 19, Node.js, Express, and MongoDB. Features a lead capture funnel, automated email sequences via Nodemailer, a CRM dashboard with pipeline stages, appointment scheduling, and PDF quote generation. Integrated Google Maps API for service area visualisation and Stripe for deposit collection.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Tailwind CSS', 'Nodemailer'],
    category: 'fullstack',
    featured: true,
    order: 1,
    status: 'completed',
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
  },
  {
    title: 'ConsultPro — B2B Coaching Platform',
    description:
      'A subscription-based coaching and course platform for boutique B2B consultants. Includes live sessions, resource library, and client progress tracking.',
    longDescription:
      'Multi-role SaaS built with React, Express, and MongoDB. Features Stripe subscription billing (monthly & annual), a video resource library, live session scheduling via Calendly API, client onboarding flows, and a progress dashboard. Includes a private community feed and direct messaging between coach and client.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Framer Motion', 'Tailwind CSS'],
    category: 'fullstack',
    featured: true,
    order: 2,
    status: 'completed',
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
  },
  {
    title: 'LuxeLocal — High-End Local Business Website',
    description:
      'A premium marketing website for a high-end interior design firm. Drives enquiries through immersive visuals, testimonials, and a booking form.',
    longDescription:
      'Built with React 19, Vite, Tailwind CSS v4, Framer Motion, and GSAP. Features full-screen hero with parallax scroll, animated project gallery with lightbox, video background sections, Google Reviews integration, and a multi-step contact form. SEO-optimised with structured data and Open Graph tags.',
    techStack: ['React', 'Framer Motion', 'GSAP', 'Tailwind CSS', 'Vite', 'Nodemailer'],
    category: 'frontend',
    featured: true,
    order: 3,
    status: 'completed',
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
  },
  {
    title: 'CleanQuote — Cleaning Service Booking App',
    description:
      'An instant online booking and quoting system for a residential cleaning company. Customers get a live price and book a slot in under 2 minutes.',
    longDescription:
      'Full-stack app with React frontend and Node.js/Express backend. Features a multi-step booking wizard, dynamic pricing engine based on property size and extras, Stripe payment, automated SMS reminders via Twilio, and an admin dashboard with calendar view and job assignment.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Twilio', 'React Hook Form'],
    category: 'fullstack',
    featured: false,
    order: 4,
    status: 'completed',
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
  },
  {
    title: 'BrandForge — Brand Identity Landing Page',
    description:
      'A conversion-focused landing page for a branding agency. A/B tested headline variants, animated case study carousel, and a Calendly-integrated booking flow.',
    longDescription:
      'Pixel-perfect React + Vite build with Tailwind CSS v4 and Framer Motion. Includes animated SVG logo reveal, scrolling testimonial ticker, before/after slider for brand transformations, and an embedded Calendly popup for direct booking. Achieved 94/100 Lighthouse score on first load.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Calendly API'],
    category: 'frontend',
    featured: false,
    order: 5,
    status: 'completed',
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
  },
  {
    title: 'ReachAPI — Marketing Automation REST API',
    description:
      'A production-ready REST API powering email campaigns, contact segmentation, and webhook delivery for a marketing automation tool.',
    longDescription:
      'Node.js + Express API with MongoDB, JWT authentication, and role-based access control. Features contact list management, email sequence scheduling with Bull queues, webhook delivery with retry logic, campaign analytics aggregation, and a Swagger UI for documentation. Deployed on Render with Redis for queue management.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Bull', 'Redis', 'Swagger'],
    category: 'backend',
    featured: false,
    order: 6,
    status: 'completed',
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
  },
  {
    title: 'TradeFlow — Trades Business Management App',
    description:
      'A job management and invoicing app for tradespeople — plumbers, electricians, and builders. Replaces paper-based workflows with a clean mobile-first UI.',
    longDescription:
      'Full-stack React + Node.js app with a mobile-first Tailwind CSS UI. Features job card creation, photo upload via Cloudinary, GPS-tagged job site check-ins, PDF invoice generation, client portal for approvals and payments via Stripe, and a real-time notification system using Socket.io.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Cloudinary', 'Stripe', 'Tailwind CSS'],
    category: 'fullstack',
    featured: true,
    order: 7,
    status: 'completed',
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
  },
  {
    title: 'StatsPulse — Analytics Dashboard',
    description:
      'A white-label analytics dashboard for digital marketing agencies. Pulls data from Google Analytics, Meta Ads, and Google Ads into one clean view.',
    longDescription:
      'React frontend with a Node.js/Express backend. Integrates Google Analytics Data API, Meta Marketing API, and Google Ads API via OAuth2. Features customisable widget layouts, scheduled PDF report generation, multi-client account switching, and a role-based permission system for agency staff and clients.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Google APIs', 'Meta API', 'Recharts'],
    category: 'fullstack',
    featured: false,
    order: 8,
    status: 'completed',
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
  },
];

const seed = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI not set in .env');
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    await Project.deleteMany({});
    console.log('Cleared existing projects');

    const created = await Project.insertMany(projects);
    console.log(`Seeded ${created.length} projects successfully`);

    process.exit(0);
  } catch (err) {
    console.error('Seed failed:', err.message);
    process.exit(1);
  }
};

seed();
