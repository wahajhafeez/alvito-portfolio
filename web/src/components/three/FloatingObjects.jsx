import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, geometry, color, speed = 1, rotationFactor = 0.01 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += rotationFactor * speed;
    meshRef.current.rotation.y += rotationFactor * 0.7 * speed;
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        {geometry}
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.25}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
};

const FloatingObjects = () => {
  const shapes = useMemo(
    () => [
      { position: [-4, 2, -3], geometry: <torusGeometry args={[0.8, 0.25, 16, 40]} />, color: '#6366f1', speed: 0.8 },
      { position: [4, -1, -4], geometry: <octahedronGeometry args={[1]} />, color: '#06b6d4', speed: 1.2 },
      { position: [-3, -2, -2], geometry: <icosahedronGeometry args={[0.7, 0]} />, color: '#8b5cf6', speed: 0.6 },
      { position: [3, 3, -5], geometry: <torusKnotGeometry args={[0.5, 0.18, 80, 16]} />, color: '#6366f1', speed: 1.0 },
      { position: [0, -3, -3], geometry: <dodecahedronGeometry args={[0.6, 0]} />, color: '#06b6d4', speed: 0.9 },
      { position: [-5, 0, -6], geometry: <tetrahedronGeometry args={[0.8, 0]} />, color: '#8b5cf6', speed: 0.7 },
      { position: [5, 1, -3], geometry: <boxGeometry args={[0.7, 0.7, 0.7]} />, color: '#6366f1', speed: 1.1 },
    ],
    []
  );

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#6366f1" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#06b6d4" />

      <Stars radius={80} depth={50} count={1500} factor={3} saturation={0} fade speed={0.5} />

      {shapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} />
      ))}
    </>
  );
};

export default FloatingObjects;
