import { ExternalLink, Github, X, Calendar, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="glass relative w-full max-w-2xl overflow-y-auto rounded-2xl p-8 max-h-[85vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-5 top-5 rounded-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors"
          >
            <X size={18} />
          </button>

          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary capitalize">
              {project.category}
            </span>
            <span className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${
              project.status === 'completed'
                ? 'bg-green-500/10 text-green-400'
                : 'bg-amber-500/10 text-amber-400'
            }`}>
              {project.status}
            </span>
          </div>

          <h2 className="mb-3 text-2xl font-bold text-foreground">{project.title}</h2>

          <p className="mb-6 text-muted-foreground leading-relaxed">
            {project.longDescription || project.description}
          </p>

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

          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <ExternalLink size={15} /> Live Demo
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
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
