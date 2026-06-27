import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight, Loader2 } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import ProjectCard from '@/components/common/ProjectCard';
import ProjectModal from '@/components/common/ProjectModal';
import { useProjects } from '@/hooks/useProjects';
import useUiStore from '@/store/uiStore';

const FILTERS = ['all', 'fullstack', 'frontend', 'backend'];

const ProjectsSection = ({
  limit,
  showFilters = false,
  showViewAll = true,
  title = 'Our Work',
  subtitle = "A selection of websites, apps and brands we've designed and built for clients.",
}) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const activeFilter = useUiStore((s) => s.activeFilter);
  const setActiveFilter = useUiStore((s) => s.setActiveFilter);

  const params = showFilters && activeFilter !== 'all' ? { category: activeFilter } : {};
  const { data, isLoading, isError } = useProjects(params);

  const projects = data?.data ?? [];
  const displayed = limit ? projects.filter((p) => p.featured).slice(0, limit) : projects;

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading title={title} subtitle={subtitle} />

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
                {filter}
              </motion.button>
            ))}
          </div>
        )}

        {/* States */}
        {isLoading && (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}

        {isError && (
          <div className="py-16 text-center">
            <p className="text-muted-foreground">Failed to load projects. Please try again later.</p>
          </div>
        )}

        {!isLoading && !isError && displayed.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-muted-foreground">No projects found.</p>
          </div>
        )}

        {!isLoading && !isError && displayed.length > 0 && (
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

        {showViewAll && !isLoading && (
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
              View All Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default ProjectsSection;
