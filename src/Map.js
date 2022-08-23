import React from 'react';
//import { useLoader, useFrame } from '@react-three/fiber';
//import { Box } from '@react-three/drei';
import { usePlane, Debug, useBox } from "@react-three/cannon";

// Default texture 
//import { TextureLoader } from 'three/src/loaders/TextureLoader';
//import Default from './img/default.png';

// Map
import BackroomMap1 from './BackroomMap1';
import BackroomMap2 from './BackroomMap2';

export default function Map() {
  return(
    <group>

        <BackroomMap1/>
        <BackroomMap2/>
      <Floor/>
    </group>
  )
}

function Floor() {
  //const texture = useLoader(TextureLoader, Default)
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




