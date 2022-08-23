import React from 'react';
//import { useLoader, useFrame } from '@react-three/fiber';
//import { Box } from '@react-three/drei';
//mport { usePlane, Debug, useBox } from "@react-three/cannon";

// Map
import BackroomMap1 from './BackroomMap1';
import BackroomMap2 from './BackroomMap2';

export default function Map() {
  return(
    <group>

        <BackroomMap1/>
        <BackroomMap2/>  
    </group>
  )
}




