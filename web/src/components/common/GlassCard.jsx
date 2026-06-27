import { cn } from '@/lib/utils';

const GlassCard = ({ children, className, ...props }) => {
  return (
    <div className={cn('glass rounded-xl p-6', className)} {...props}>
      {children}
    </div>
  );
};

export default GlassCard;
