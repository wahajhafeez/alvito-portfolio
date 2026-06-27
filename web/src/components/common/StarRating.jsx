import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const StarRating = ({ rating = 5, size = 16, className }) => {
  return (
    <div className={cn('flex items-center gap-0.5', className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground/40'}
        />
      ))}
    </div>
  );
};

export default StarRating;
