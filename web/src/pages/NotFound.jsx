import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="mb-2 text-8xl font-bold">
          <span className="gradient-text">404</span>
        </h1>
        <h2 className="mb-4 text-2xl font-semibold text-foreground">Page Not Found</h2>
        <p className="mb-8 text-muted-foreground">
          Looks like you&apos;ve ventured into uncharted territory.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
          >
            <Home size={16} />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="glass flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
