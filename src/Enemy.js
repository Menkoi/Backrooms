import React from 'react';
import { useBox } from "@react-three/cannon";
import { useFrame } from '@react-three/fiber';

  export default function Box1() {
    const [ref] = useBox(() => ({
      mass: 10,
      position: [3, 5, 0],
      rotation: [0.4, 0.2, 0.5],
      args: [1, 1, 1],
      size: 5
    }));
    useFrame(() => {
      ref.current.scale.set(0.5,0.5,0.5)
    })
  
    return (
      <mesh ref={ref} castShadow>
        <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
        <meshStandardMaterial color="pink" />
      </mesh>
    );
  }

