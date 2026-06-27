import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProjectCard = ({ project, onClick, index = 0 }) => {
  const { title, description, techStack, liveUrl, githubUrl, featured, category } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      onClick={() => onClick?.(project)}
      className={cn(
        'glass group relative cursor-pointer overflow-hidden rounded-xl p-6 transition-all duration-300',
        'hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10',
        featured && 'gradient-border'
      )}
    >
      {featured && (
        <span className="absolute right-4 top-4 rounded-full bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary">
          Featured
        </span>
      )}

      <div className="mb-4 flex items-start justify-between">
        <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
          <Layers size={20} />
        </div>
        <div className="flex gap-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:text-primary"
              aria-label="Live demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
        {description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {techStack?.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground"
          >
            {tech}
          </span>
        ))}
        {techStack?.length > 5 && (
          <span className="rounded-md bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground">
            +{techStack.length - 5}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
