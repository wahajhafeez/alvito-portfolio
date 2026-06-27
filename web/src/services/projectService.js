import axiosInstance from '@/lib/axios';

export const projectService = {
  getProjects: async (params = {}) => {
    const response = await axiosInstance.get('/projects', { params });
    return response.data;
  },

  createProject: async (data) => {
    const response = await axiosInstance.post('/projects', data, {
      headers: { 'x-admin-secret': import.meta.env.VITE_ADMIN_SECRET },
    });
    return response.data;
  },

  deleteProject: async (id) => {
    const response = await axiosInstance.delete(`/projects/${id}`, {
      headers: { 'x-admin-secret': import.meta.env.VITE_ADMIN_SECRET },
    });
    return response.data;
  },
};
