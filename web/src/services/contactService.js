import axiosInstance from '@/lib/axios';

export const contactService = {
  submitContact: async (data) => {
    const response = await axiosInstance.post('/contact', data);
    return response.data;
  },
};
