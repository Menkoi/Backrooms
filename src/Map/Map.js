import React from 'react';
import { usePlane } from "@react-three/cannon";

// Bloom Effect
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// Maps
import BackroomMap1 from './BackroomMap1';
import BackroomMap2 from './BackroomMap2';

export default function Map() {
  return(
    <group>
      <Light/>
      <BackroomMap1/>
      <BackroomMap2/>
      <Floor/>
    </group>
  )
}

function Light() {
  return(
    <group>
      <pointLight position={[-23, 10, -30]} intensity={0.3}/>
      <pointLight position={[10, 10, -30]} intensity={0.3}/>
      <EffectComposer>
            <Bloom intensity={0.8} kernelSize={1} luminanceThreshold={0} luminanceSmoothing={0.8} />
      </EffectComposer>
    </group>
  )
}

function Floor() {
    const [ref] = usePlane(() => ({
      mass: 1,
      position: [0, 0, -30],
      type: "Static",
      rotation: [-Math.PI / 2, 0, 3]
    }));
    
    return (
      <mesh scale={75} ref={ref} receiveShadow>
      </mesh>
    );
  };




