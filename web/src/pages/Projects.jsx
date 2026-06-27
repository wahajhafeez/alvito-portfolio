import ProjectsSection from '@/components/sections/ProjectsSection';

const Projects = () => {
  return (
    <div className="min-h-screen pt-8">
      <ProjectsSection showFilters={true} showViewAll={false} />
    </div>
  );
};

export default Projects;
