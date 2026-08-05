import React, { Suspense } from 'react';
import { useGLTF, Environment, ContactShadows, OrbitControls, Float, Center } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf');
  
  return (
    <primitive object={scene} scale={2} />
  );
};

const AboutThreeModel = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      
      {/* Sleek, controlled rim lighting */}
      <directionalLight position={[10, 5, 5]} intensity={2} color="#ccff00" />
      <directionalLight position={[-10, 0, 5]} intensity={1.5} color="#3a0ca3" />
      
      {/* Realistic reflections */}
      <Environment preset="city" environmentIntensity={0.4} />

      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2 - 0.2}
        maxPolarAngle={Math.PI / 2 + 0.2}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
      />

      <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
        <Suspense fallback={null}>
          <Center>
            <Model />
          </Center>
        </Suspense>
      </Float>

      {/* Natural, dark shadow to blend into the transparent background */}
      <ContactShadows position={[0, -1.2, 0]} opacity={0.6} scale={10} blur={2.5} far={4} color="#000000" />
    </>
  );
};

export default AboutThreeModel;
