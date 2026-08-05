import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';

const ThreeModel = () => {
  const meshRef = useRef();
  const { mouse, viewport } = useThree();

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Fast rotation for the dynamic feel
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.6;

      // Mouse follow interaction (parallax)
      const targetX = (mouse.x * viewport.width) / 5;
      const targetY = (mouse.y * viewport.height) / 5;
      
      meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.1;
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.1;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      
      {/* Floating background particles */}
      <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={2} />

      {/* Dynamic Morphing Wireframe Sphere */}
      <Sphere ref={meshRef} args={[1.8, 32, 32]}>
        <MeshDistortMaterial 
          color="#ccff00" 
          wireframe={true}
          distort={0.5} // Amount of distortion
          speed={3}     // Speed of the morphing animation
          roughness={0.2}
          transparent={true}
          opacity={0.8}
        />
      </Sphere>
    </group>
  );
};

export default ThreeModel;
