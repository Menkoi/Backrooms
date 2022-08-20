import React from 'react';
import {  useBox} from "@react-three/cannon";


  export default function Box1() {
    const [ref] = useBox(() => ({
      mass: 10,
      position: [0, 5, 0],
      rotation: [0.4, 0.2, 0.5],
      args: [2, 2, 2]
    }));
  
    return (
      <mesh ref={ref} castShadow>
        <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
        <meshStandardMaterial color="grey" />
      </mesh>
    );
  }

