import React from 'react';
import { useSphere } from "@react-three/cannon";
import { useFrame, useLoader } from '@react-three/fiber';
import { Sphere, Html } from "@react-three/drei";

// Default texture 
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import Default from '../img/default.png';

import End from './End';
import { Pathfinding } from 'three-pathfinding';
import Map from '../Map/Map';

export default function Test() {
  useFrame(() => {
    
  })
  return(
    <>
    <Walter />

    
    </>
  )
}
 //console.log(Walter)

  function Walter() {
    const texture = useLoader(TextureLoader,Default)
    const state = ({
      api: {
        End(position) {
          if (position > 1) ++state.count
        }
      }
    })
    const [ref,api] = useSphere(() => ({
      mass: 10,
      // Start position 3, 1, 0
      position: [-3.9, 0.26, -62.2],
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
  