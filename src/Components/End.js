import React from 'react';
import { useBox } from "@react-three/cannon";
import { Float, Box } from '@react-three/drei';

export default function End() {
    const [ref] = useBox(() => ({
      mass: 1,
      position: [-4, 0.26, -62.2],
      rotation: [0, -0.14, 0],
      args: [0.5, 2, 0.5],
      type: "Static"
    }));
    return (
      <mesh ref={ref} castShadow>
        <Float scale={0.75} position={[0, 0.65, 0]} rotation={[0, 0.6, 0]} speed={5}>
        <Box/>
        <boxBufferGeometry attach="geometry" args={[5, 5, 5]}/>
        <meshBasicMaterial color={'black'}/>
        </Float>
      </mesh>
    );
  }