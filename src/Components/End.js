import React, { useState} from 'react';
import { useBox } from "@react-three/cannon";
import { Float, Box, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function End() {
  const [hover, set] = useState(false);
  const [buttonText, setButtonText] = useState('Bring me Walter');
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
        const PlayerId = 439;
        const WalterId = 443;
        console.log(e)

        // Walter touch cube = <3
        if (e.body.id === WalterId) {
          setButtonText('<3')
          console.log("Walter touch cube")
        } 
        // Player touch cube = demand walter
        else if (e.body.id === PlayerId) {
          setButtonText('Your not Walter')
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
        <Text fontSize={0.3} position={[ 0,1,0]} rotation={[0,1,0]} >
          {buttonText}
        </Text>
        </Float>
      </mesh>
    );
  }