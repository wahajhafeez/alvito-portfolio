import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

const CanvasWrapper = ({ children, className = '', cameraPosition = [0, 0, 5], ...props }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: cameraPosition, fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        {...props}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  );
};

export default CanvasWrapper;
