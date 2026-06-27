import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { contactService } from '@/services/contactService';

export const useContact = () => {
  return useMutation({
    mutationFn: contactService.submitContact,
    onSuccess: (data) => {
      toast.success(data.message || 'Message sent successfully!');
    },
    onError: (error) => {
      const message =
        error.response?.data?.message || 'Failed to send message. Please try again.';
      toast.error(message);
    },
  });
};
