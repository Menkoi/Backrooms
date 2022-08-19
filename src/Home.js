import { Sky, Billboard, Text } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import React, { Suspense } from 'react';

//pathfinding
//import { Pathfinding } from 'three-pathfinding';

// Default texture Loader
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import Default from './img/default.png';

import PlayerControls from './PlayerControls';

function Ground() {
    const texture = useLoader(TextureLoader, Default)
    return (
        <group>
            <mesh rotation={[4.71 , 0, 0]} position={[0, -0.5,0]}>
            <planeBufferGeometry args={[50, 50, 50]}/>
            <meshStandardMaterial map={texture}/>
            </mesh>
        </group>
    )
}

function Display() {
    return (
        <group>
            <Billboard>
                <Text fontSize={0.8} position={[ 0,1,0]}>
                    Move: W A S D
                </Text>
            </Billboard>
        </group>
    )
}

export default function Home() {
    return(
        <div className='Main'>
            <Canvas>
              <ambientLight intensity={0.25} />
                <Suspense fallback={null}>
                    
                    {/* Skybox */}
                    <Sky azimuth={0.5} inclination={0.49} turbidity={100} rayleigh={0.8}/>

                    {/* Controls */}
                    <PlayerControls/>

                    {/* Ground */}
                    <Ground/>

                    {/* Camera instructions */}
                    <Display/>

                </Suspense>
            </Canvas>
        </div>
    )
}