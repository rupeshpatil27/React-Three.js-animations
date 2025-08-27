import React, { Suspense, useEffect, useState } from "react";
import { motion } from "motion/react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, useProgress } from "@react-three/drei";

import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import Loader from "./Loader";
import { Spaceman } from "./Spaceman";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width:1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width:768px)' });

  const { progress } = useProgress();
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => setShowModel(true), 1500); // optional slight delay
      return () => clearTimeout(timeout);
    }
  }, [progress])

  return (
    <figure className="relative w-full h-full">

      <Canvas camera={{ position: [0, 1, 3] }}>
        <OrbitControls />
        <Suspense fallback={<Loader />}>
          <Lights />
          {showModel &&
            <Float>
              <Spaceman scale={isMobile && 0.16} position={isMobile && [0, -1.7, 0]}/>
            </Float>
          }
          <Rig />
        </Suspense>
      </Canvas>
    </figure>
  );
};

const Lights = () => (
  <>
    <directionalLight position={[1, 1, 1]} intensity={2} />
    <ambientLight intensity={0.5} />
    <pointLight position={[1, 1, 1]} intensity={2} />
    <spotLight position={[0, 50, 50]} angle={0.15} penumbra={1} intensity={2} />
    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
  </>
);

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    )
  })
}

export default HeroExperience;