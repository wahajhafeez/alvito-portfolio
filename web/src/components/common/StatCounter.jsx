import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';

const StatCounter = ({ value, suffix = '', decimals = 0, duration = 1.6 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(latest),
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="gradient-text font-space text-4xl font-bold sm:text-5xl">
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default StatCounter;
