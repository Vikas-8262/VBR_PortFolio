import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const FloatingShapes = () => {
  const shapes = [
    { position: [-6, 3, -5], color: '#ccff00', type: 'torus', scale: 0.8 },
    { position: [6, -2, -2], color: '#3a0ca3', type: 'icosahedron', scale: 1.2 },
    { position: [-5, -4, -4], color: '#3a0ca3', type: 'box', scale: 0.9 },
    { position: [7, 4, -6], color: '#ccff00', type: 'torus', scale: 0.6 },
    { position: [0, 5, -8], color: '#ffffff', type: 'sphere', scale: 0.5 },
    { position: [2, -5, -6], color: '#ccff00', type: 'icosahedron', scale: 0.7 },
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={2} color="#ccff00" />
      <directionalLight position={[-10, -10, -10]} intensity={2} color="#3a0ca3" />
      
      {shapes.map((shape, i) => (
        <Float key={i} speed={2} rotationIntensity={1.5} floatIntensity={2} position={shape.position}>
          <mesh scale={shape.scale}>
            {shape.type === 'torus' && <torusGeometry args={[1, 0.2, 16, 32]} />}
            {shape.type === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
            {shape.type === 'box' && <boxGeometry args={[1, 1, 1]} />}
            {shape.type === 'sphere' && <sphereGeometry args={[1, 32, 32]} />}
            <meshStandardMaterial 
              color="#0d0d12" 
              emissive={shape.color} 
              emissiveIntensity={1} 
              wireframe={true} 
            />
          </mesh>
        </Float>
      ))}
    </>
  );
};

const SkillsThreeBackground = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', opacity: 0.3 }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <FloatingShapes />
      </Canvas>
    </div>
  );
};

export default SkillsThreeBackground;
