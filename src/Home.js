import { Sky, Billboard, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { Physics } from "@react-three/cannon";


import PlayerControls from './PlayerControls';
import Box1 from './Enemy';
import Ground from './Map'


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

                    <Physics>
                    <Box1/>
                    <Ground/>
                    </Physics>
                    
                    {/* Text */}
                    <Display/>

                </Suspense>
            </Canvas>
        </div>
    )
}