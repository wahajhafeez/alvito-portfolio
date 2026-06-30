import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import ProjectCard from '@/components/common/ProjectCard';
import ProjectModal from '@/components/common/ProjectModal';
import { PROJECTS } from '@/constants/projects';
import useUiStore from '@/store/uiStore';

const FILTERS = ['all', 'fullstack', 'frontend', 'backend'];

const ProjectsSection = ({ limit, showFilters = false, showViewAll = true, title, subtitle }) => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const activeFilter = useUiStore((s) => s.activeFilter);
  const setActiveFilter = useUiStore((s) => s.setActiveFilter);

  // Merge translated copy onto the structural project data
  const projects = PROJECTS.map((p) => ({
    ...p,
    description: t(`projectsSection.items.${p._id}.description`),
    longDescription: t(`projectsSection.items.${p._id}.longDescription`),
  }));

  const filtered =
    showFilters && activeFilter !== 'all'
      ? projects.filter((p) => p.category === activeFilter)
      : projects;

  const displayed = limit ? filtered.filter((p) => p.featured).slice(0, limit) : filtered;

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title={title ?? t('projectsSection.heading')}
          subtitle={subtitle ?? t('projectsSection.subtitle')}
        />

        {/* Filter Tabs */}
        {showFilters && (
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {FILTERS.map((filter) => (
              <motion.button
                key={filter}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-all ${
                  activeFilter === filter
                    ? 'bg-primary text-white shadow-md shadow-primary/30'
                    : 'glass text-muted-foreground hover:text-foreground'
                }`}
              >
                {t(`projectsSection.filters.${filter}`)}
              </motion.button>
            ))}
          </div>
        )}

        {displayed.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-muted-foreground">{t('projectsSection.empty')}</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayed.map((project, i) => (
              <ProjectCard
                key={project._id}
                project={project}
                index={i}
                onClick={setSelectedProject}
              />
            ))}
          </div>
        )}

        {showViewAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 rounded-xl border border-primary/30 px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/10"
            >
              {t('common.viewAllWork')}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default ProjectsSection;
