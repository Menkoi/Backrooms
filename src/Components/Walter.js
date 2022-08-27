import React from 'react';
import { useSphere } from "@react-three/cannon";
import { useFrame, useLoader } from '@react-three/fiber';
import { Sphere, Html } from "@react-three/drei";

// Default texture 
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import Default from '../img/default.png';

  export default function Walter() {
    const texture = useLoader(TextureLoader,Default)
    const [ref,api] = useSphere(() => ({
      mass: 10,
      // Start position -2, 1, -21
      // end position -3.9, 0.26, -62.2
      position: [-2, 1, -21],
      rotation: [0.4, 0.2, 0.5],
      args: [0.5, 0.5, 0.5],
      name: "Walter"
    }));
    
    useFrame(() => {
      ref.current.scale.set(0.5,0.5,0.5);
    })
  
    return (
      <mesh ref={ref} castShadow>
        <Sphere onClick={() => api.applyImpulse([0, 0, -10], [0, 0, 0])}/>
        <sphereBufferGeometry
        attach="geometry"
        args={[1, 32, 32]}
      />
        <meshStandardMaterial map={texture} />
        <Html style={{color: "white", fontWeight: 'Bold'}}>
          <p>Walter</p>
        </Html>
      </mesh>
    );
  }
  