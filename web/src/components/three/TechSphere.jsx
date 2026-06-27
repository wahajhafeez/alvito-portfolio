import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { ALL_SKILLS } from '@/constants/skills';

const COLORS = ['#6366f1', '#06b6d4', '#8b5cf6', '#ec4899', '#f59e0b'];

const SphereWord = ({ word, position, color }) => {
  const ref = useRef();

  return (
    <Text
      ref={ref}
      position={position}
      fontSize={0.22}
      color={color}
      anchorX="center"
      anchorY="middle"
      font={undefined}
    >
      {word}
    </Text>
  );
};

const TechSphere = () => {
  const groupRef = useRef();
  const radius = 2.8;

  const wordPositions = useMemo(() => {
    const skills = ALL_SKILLS.slice(0, 28);
    return skills.map((skill, i) => {
      const phi = Math.acos(-1 + (2 * i) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;
      return {
        word: skill,
        color: COLORS[i % COLORS.length],
        position: [
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi),
        ],
      };
    });
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.18;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.15;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#6366f1" />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#06b6d4" />

      <group ref={groupRef}>
        {/* Core sphere (wireframe) */}
        <Sphere args={[radius * 0.95, 32, 32]}>
          <meshStandardMaterial
            color="#6366f1"
            wireframe
            transparent
            opacity={0.06}
          />
        </Sphere>

        {wordPositions.map(({ word, position, color }) => (
          <SphereWord key={word} word={word} position={position} color={color} />
        ))}
      </group>
    </>
  );
};

export default TechSphere;
