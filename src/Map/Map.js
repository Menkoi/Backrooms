import React from 'react';
import { usePlane } from "@react-three/cannon";
import { SpotLight } from '@react-three/drei';

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

      <pointLight position={[-21, 4.5, -2.5]} intensity={0.5} power={7} distance={20}/>
      <pointLight position={[-23, 4.5, -30]} intensity={0.5} power={7} distance={20}/>

      <pointLight position={[0, 4.5, 2]} intensity={0.5} power={5} distance={20}/>
      <pointLight position={[3, 4.5, -18]} intensity={0.5} power={5} distance={20}/>
      <pointLight position={[6, 4.5, -43]} intensity={0.5} power={5} distance={20}/>

      <pointLight position={[20, 4.5, 3.5]} intensity={0.5} power={7} distance={20}/>
      <pointLight position={[20, 4.5, -30]} intensity={0.5} power={7} distance={20}/>

      <pointLight position={[6, 4.5, -61]} intensity={0.5} power={20} distance={6}/>
      <pointLight position={[-2, 4.5, -62]} intensity={0.5} power={20} distance={6}/>

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




