import { useLoader } from '@react-three/fiber';
import React from 'react';
import { usePlane } from "@react-three/cannon";

// Default texture 
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import Default from './img/default.png';


export default function Ground() {
  const texture = useLoader(TextureLoader, Default)
    const [ref] = usePlane(() => ({
      mass: 1,
      position: [0, 0, 0],
      type: "Static",
      rotation: [-Math.PI / 2, 0, 0]
    }));
    
    return (
      <mesh scale={20} ref={ref} receiveShadow>
        <planeBufferGeometry />
        <meshStandardMaterial map={texture}  />
      </mesh>
    );
  };

