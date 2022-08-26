import { Sky, Billboard, Text, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { Physics, Debug } from "@react-three/cannon";

import Test from './Components/Walter';
import Map from './Map/Map';
import Player from './Components/PlayerControls';
import End from './Components/End';
//Bring orb to spacebox

//need to add object click to move
//need to add start menu


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
                <Suspense fallback={null}>
                    
                    {/* Skybox */}
                    <Sky azimuth={0.5} inclination={0.49} turbidity={100} rayleigh={0.8}/>
                    
                    {/* Cannon js physics */}
                    <Physics>

                    <Player/>
                    <Test/>
                    <End/>
                    <Map/>

                    </Physics>
                    
                    
                    {/* Text */}
                    <Display/>
                </Suspense>
            </Canvas>
        </div>
    )
}