import { Sky  } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import { Physics } from "@react-three/cannon";

// Components
import Walter from './Components/Walter';
import Map from './Map/Map';
import Player from './Components/PlayerControls';
import End from './Components/End';
//need to add start menu

export default function Home() {
    //let Backroom = useState(false)
    const button = document.querySelector('#startButton');
    button.addEventListener('click', function () {
        const overlay = document.getElementById('overlay');
        overlay.remove();

    })
    return(
        <>
        <Backroom/>
        </>
    )
}

function Backroom() {
    return(
        <div className='Main'>
            <Canvas>
                <Suspense fallback={null}>
                    
                    {/* Skybox */}
                    <Sky azimuth={0.5} inclination={0.49} turbidity={100} rayleigh={0.8}/>
                    
                    {/* Cannon js physics */}
                    <Physics>

                    <Player/>
                    <Walter/>
                    <End/>
                    <Map/>

                    </Physics>
                </Suspense>
            </Canvas>
        </div>
    )
}