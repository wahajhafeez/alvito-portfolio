import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import Project from '../models/Project.js';

const projects = [
  {
    title: 'Q-IN Event Platform',
    description:
      'A real-time event management platform with live Q&A moderation, token-based voting, and Stripe payments.',
    longDescription:
      'Full-stack application built with React 19, Express.js, MongoDB, and Socket.io. Features include real-time WebSocket communication, PPV and segment-based event models, and Stripe Connected Accounts for host payouts. Includes a moderation dashboard, attendee management, and QR code-based check-ins.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Stripe', 'Cloudinary'],
    category: 'fullstack',
    featured: true,
    order: 1,
    status: 'completed',
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
  },
  {
    title: 'Prestige Copy Platform',
    description:
      'A subscription-based copywriting SaaS with Stripe billing, real-time messaging, and user management.',
    longDescription:
      'Built a multi-role SaaS platform for copywriting services with Stripe subscription billing, Twilio-powered SMS/voice, SendGrid email, and a real-time messaging system using REST polling. Features a complete subscriber lifecycle with onboarding, profile management, and payment history.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Tailwind CSS', 'Twilio'],
    category: 'fullstack',
    featured: true,
    order: 2,
    status: 'completed',
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal developer portfolio with 3D animations, glassmorphism UI, and MERN stack backend.',
    longDescription:
      'Built with React 19, Vite, Tailwind CSS v4, Framer Motion, GSAP, and React Three Fiber for 3D visuals. Backend is Express + MongoDB. Features a custom animated cursor, command palette, theme switcher, and contact form with NodeMailer.',
    techStack: ['React', 'Three.js', 'Framer Motion', 'GSAP', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    category: 'fullstack',
    featured: true,
    order: 3,
    status: 'completed',
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
  },
  {
    title: 'REST API Boilerplate',
    description:
      'Production-ready Express.js REST API boilerplate with JWT auth, rate limiting, and MongoDB integration.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Docker'],
    category: 'backend',
    featured: false,
    order: 4,
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
