import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import useUiStore from '@/store/uiStore';

const LoadingScreen = () => {
  const setLoading = useUiStore((s) => s.setLoading);
  const containerRef = useRef(null);
  const counterRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    // Guard: refs may be null in React StrictMode's second effect invocation
    if (!counterRef.current || !barRef.current || !containerRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        if (!containerRef.current) return;
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => setLoading(false),
        });
      },
    });

    tl.to(counterRef.current, {
      innerHTML: 100,
      duration: 1.8,
      ease: 'power2.inOut',
      snap: { innerHTML: 1 },
    })
      .to(barRef.current, {
        width: '100%',
        duration: 1.8,
        ease: 'power2.inOut',
      }, '<')
      .to({}, { duration: 0.3 });

    // Kill animation on cleanup (handles React StrictMode double-invoke)
    return () => {
      tl.kill();
    };
  }, [setLoading]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
    >
      <div className="mb-8 text-center">
        <span className="gradient-text font-space text-5xl font-bold">WH</span>
        <p className="mt-2 text-sm tracking-[0.4em] text-muted-foreground uppercase">
          Portfolio
        </p>
      </div>

      <div className="w-64 overflow-hidden rounded-full bg-muted/30">
        <div
          ref={barRef}
          className="h-0.5 w-0 rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>

      <div className="mt-4 font-mono text-xs text-muted-foreground">
        <span ref={counterRef}>0</span>%
      </div>
    </div>
  );
};

export default LoadingScreen;
