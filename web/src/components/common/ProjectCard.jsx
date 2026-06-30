import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProjectCard = ({ project, onClick, index = 0 }) => {
  const { t } = useTranslation();
  const { title, description, techStack, liveUrl, githubUrl, featured, category, imageUrl } =
    project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      onClick={() => onClick?.(project)}
      className={cn(
        'glass group relative flex cursor-pointer flex-col overflow-hidden rounded-xl transition-all duration-300',
        'hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10',
        featured && 'gradient-border'
      )}
    >
      {/* Banner image */}
      <div className="relative h-48 w-full shrink-0 overflow-hidden bg-primary/5">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Layers size={40} className="text-primary/20" />
          </div>
        )}
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />

        {/* badges */}
        <div className="absolute left-3 top-3">
          <span className="rounded-full bg-background/70 px-2.5 py-0.5 text-xs font-medium capitalize text-foreground backdrop-blur-sm">
            {t(`projectsSection.categories.${category}`)}
          </span>
        </div>
        {featured && (
          <div className="absolute right-3 top-3">
            <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-white shadow-md shadow-primary/30">
              {t('common.featured')}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* title row */}
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="line-clamp-1 text-base font-semibold text-foreground transition-colors group-hover:text-primary">
            {title}
          </h3>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="shrink-0 rounded-lg p-1 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
          )}
        </div>

        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {/* tech pills */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {techStack?.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
            >
              {tech}
            </span>
          ))}
          {techStack?.length > 4 && (
            <span className="rounded-md bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground">
              +{techStack.length - 4}
            </span>
          )}
        </div>

        {/* Visit Website button */}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white hover:shadow-md hover:shadow-primary/25"
          >
            <ExternalLink size={14} />
            {t('common.visitWebsite')}
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
