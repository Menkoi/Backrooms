import React, { useState} from 'react';
import { useBox } from "@react-three/cannon";
import { Float, Box, Text } from '@react-three/drei';

export default function EndCube() {
  // Default text
  const [buttonText, setButtonText] = useState('Bring me Walter');
    const [ref] = useBox(() => ({
      mass: 1,
      position: [-4, 0.26, -62.2],
      rotation: [0, -0.14, 0],
      args: [0.5, 2, 0.5],
      type: "Static",
      id: 4,
      onCollide: (e) => {
        const PlayerId = [188, 388, 433, 719, 677, 474];
        const WalterId = [191, 391, 436, 722, 385, 427];
        console.log(e);
        console.log(PlayerId)

        // Walter touch cube = endgame
        for (let k = 0; k < WalterId.length; k++) {
          if (e.body.id === WalterId[k]) {
            setButtonText("You Win! Refresh browser to play again");
            console.log("Walter touch cube");
          }
        }

        // Player touch cube = demand walter
        for (let i = 0; i < PlayerId.length; i++) {
          if (e.body.id === PlayerId[i]) {
            setButtonText("Your not Walter");
            console.log("Player touch cube");
          }
        }
      },
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
