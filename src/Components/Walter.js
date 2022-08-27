import React from 'react';
import { useSphere } from "@react-three/cannon";
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshWobbleMaterial } from "@react-three/drei";

  export default function Walter() {
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
        <MeshWobbleMaterial factor={1} speed={1} color={'white'} />
      </mesh>
    );
  }
  