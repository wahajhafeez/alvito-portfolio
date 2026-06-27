import { useQuery } from '@tanstack/react-query';
import { projectService } from '@/services/projectService';

export const useProjects = (params = {}) => {
  return useQuery({
    queryKey: ['projects', params],
    queryFn: () => projectService.getProjects(params),
    staleTime: 10 * 60 * 1000,
  });
};
