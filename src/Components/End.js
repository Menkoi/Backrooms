import React, {useRef, useState} from 'react';
import { useBox } from "@react-three/cannon";
import { Float, Box, Text, Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function End() {
  const [hover, set] = useState(false);
    const [ref] = useBox(() => ({
      mass: 1,
      position: [-4, 0.26, -62.2],
      rotation: [0, -0.14, 0],
      args: [0.5, 2, 0.5],
      type: "Static",
      name: "End Cube",
      onCollide: (e) => {
        // Player body id = 445
        // walter body id = 449
        const WalterId = 449;
        const PlayerId = 445;
        console.log(e)
        if (e.body.id === WalterId) {
          console.log("Walter touch cube")
        } else if (e.body.id === PlayerId) {
          console.log("Player touch cube")
        }
      }
    }));

    useFrame(() => {
      let scale = (ref.current.scale.x +=
        ((hover ? 1.4 : 1.2) - ref.current.scale.x) * 0.1);
      ref.current.scale.set(scale, scale, scale);
    })
    return (
      <mesh ref={ref} castShadow>
        <Float scale={0.75} position={[0, 0.65, 0]} rotation={[0, 0.6, 0]} speed={5}>
        <Box onClick={() => {console.log('Click End Box')}}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}/>
        <boxBufferGeometry attach="geometry" args={[5, 5, 5]}/>
        <meshBasicMaterial color={'black'}/>
        
        </Float>
      </mesh>
    );
  }