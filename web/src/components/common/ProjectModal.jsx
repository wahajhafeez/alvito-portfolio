import { ExternalLink, Github, X, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 overflow-y-auto"
        onClick={onClose}
      >
        {/* backdrop */}
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

        {/* centering wrapper */}
        <div className="flex min-h-full items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="glass relative w-full max-w-2xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-lg bg-background/60 p-1.5 text-foreground backdrop-blur-sm transition-colors hover:bg-background/80"
            >
              <X size={17} />
            </button>

            {/* banner image */}
            {project.imageUrl && (
              <div className="relative h-56 w-full overflow-hidden sm:h-64">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/20 to-transparent" />
              </div>
            )}

            {/* content */}
            <div className="p-6 sm:p-8">
              {/* badges */}
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium capitalize text-primary">
                  {project.category}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${
                    project.status === 'completed'
                      ? 'bg-green-500/10 text-green-400'
                      : 'bg-amber-500/10 text-amber-400'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <h2 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">
                {project.title}
              </h2>

              <p className="mb-6 leading-relaxed text-muted-foreground">
                {project.longDescription || project.description}
              </p>

              {/* tech stack */}
              <div className="mb-6">
                <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Tag size={14} className="text-primary" /> Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack?.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* action buttons */}
              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-all hover:bg-primary/90 hover:-translate-y-0.5"
                  >
                    <ExternalLink size={15} /> Visit Website
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    <Github size={15} /> Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
