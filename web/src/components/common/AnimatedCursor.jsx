import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    const moveCursor = (e) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.35, ease: 'power2.out' });
    };

    const onMouseEnterLink = () => {
      gsap.to(ring, { scale: 1.8, borderColor: '#6366f1', duration: 0.25 });
      gsap.to(dot, { scale: 0, duration: 0.25 });
    };

    const onMouseLeaveLink = () => {
      gsap.to(ring, { scale: 1, borderColor: 'rgba(99,102,241,0.6)', duration: 0.25 });
      gsap.to(dot, { scale: 1, duration: 0.25 });
    };

    window.addEventListener('mousemove', moveCursor);

    const links = document.querySelectorAll('a, button, [role="button"], input, textarea');
    links.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterLink);
      el.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      links.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterLink);
        el.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
        style={{ willChange: 'transform' }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/60"
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default AnimatedCursor;
