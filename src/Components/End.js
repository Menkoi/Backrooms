import React, { useState} from 'react';
import { useBox } from "@react-three/cannon";
import { Float, Box, Text } from '@react-three/drei';


export default function End() {
  // Default text
  const [buttonText, setButtonText] = useState('Bring me Walter');
    const [ref] = useBox(() => ({
      mass: 1,
      position: [-4, 0.26, -62.2],
      rotation: [0, -0.14, 0],
      args: [0.5, 2, 0.5],
      type: "Static",
      name: "End Cube",
      onCollide: (e) => {
        // player id = 185, 385, 430
        // walter id = 188, 388, 433
        const PlayerId =  430;
        const WalterId = 433;
        console.log(e)

        // Walter touch cube = endgame
        if (e.body.id === WalterId ) {
          setButtonText('You Win! Refresh browser to play again')
          console.log("Walter touch cube")
        } 
        // Player touch cube = demand walter
        else if (e.body.id === PlayerId ) {
          setButtonText('Your not Walter')
          console.log("Player touch cube")
        }
      }
    }));

    return (
      <mesh ref={ref} castShadow>
        <Float scale={0.75} position={[0, 0.65, 0]} rotation={[0, 0.6, 0]} speed={5}>
        <Box/>
        <Text fontSize={0.3} position={[ 0,1,0]} rotation={[0,1,0]} >
          {buttonText}
        </Text>
        </Float>
      </mesh>
    );
  }
