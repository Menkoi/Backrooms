import { Sky, Billboard, Text, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { Physics } from "@react-three/cannon";

import Walter from './Walter';
import Map from './Map';
import Player from './PlayerControls';


function Display() {
    return (
        <group>
            <Billboard>
                <Text fontSize={0.3} position={[ 0,1,3]}>
                    Click screen to use mouse
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
                    
                    {/* Cannon js physics */}
                    <Physics >

                    <Player/>
                    <Walter/>
                    
                    <Map/>

                    </Physics>
                    
                    {/* Text */}
                    <Display/>

                </Suspense>
            </Canvas>
        </div>
    )
}