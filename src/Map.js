import React from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { usePlane, Debug, useBox } from "@react-three/cannon";

// Default texture 
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import Default from './img/default.png';

// Map
import BackroomMap from './BackroomMap';

export default function Map() {
  return(
    <group>
      <Debug>
        <BackroomMap/>
        {/* Outer Boundry Wall */}
        <OutBoundWall position={[-5.5,1.5,7.4]} rotation={[0, -0.14, 0]}/>
        <OutBoundWall position={[5.5,1.5,-67]} rotation={[0, -0.14, 0]}/>
        <OutBoundWall position={[37.4,1.5,-24.4]} rotation={[0, 1.43, 0]}/>
        <OutBoundWall position={[-37.4,1.5,-35.5]} rotation={[0, 1.43, 0]}/>
      <Floor/>
      </Debug>
    </group>
  )
}

function OutBoundWall(props) {
  const texture = useLoader(TextureLoader,Default)
  const [ref] = useBox(() => ({
    mass: 10,
    args: [75, 3, 1],
    type: 'Static',
    ...props
  }));
  useFrame(() => {
    ref.current.scale.set(75,3,1)
  })

  return (
    <mesh ref={ref} castShadow>
      <Box/>
      <boxBufferGeometry attach="geometry"/>
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function Floor() {
  const texture = useLoader(TextureLoader, Default)
    const [ref] = usePlane(() => ({
      mass: 1,
      position: [0, 0, -30],
      type: "Static",
      rotation: [-Math.PI / 2, 0, 3]
    }));
    
    return (
      <mesh scale={75} ref={ref} receiveShadow>
        <planeBufferGeometry/>
        <meshStandardMaterial map={texture}  />
      </mesh>
    );
  };




