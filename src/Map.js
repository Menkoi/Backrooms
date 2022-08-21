import React from 'react';
import { useLoader} from '@react-three/fiber';
import { usePlane, Debug } from "@react-three/cannon";

// Default texture 
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import Default from './img/default.png'
//import DungeonMap from './Dungeon';


export default function Map() {
  return(
    <group>
      <Debug>
      <Ground/>
      </Debug>

    </group>
  )
}

function Ground() {
  const texture = useLoader(TextureLoader, Default)
    const [ref] = usePlane(() => ({
      mass: 1,
      position: [0, 0, -30],
      type: "Static",
      rotation: [-Math.PI / 2, 0, 3]
    }));
    
    return (
      <mesh scale={75} ref={ref} receiveShadow>
        <planeBufferGeometry />
        <meshStandardMaterial map={texture}  />
      </mesh>
    );
  };




