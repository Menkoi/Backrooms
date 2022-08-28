import { Sky  } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { Physics } from "@react-three/cannon";

// Components
import Walter from './Components/Walter';
import Map from './Map/Map';
import Player from './Components/PlayerControls';
import End from './Components/End';
import Loading from './Components/Loading';

export default function Home() {
    const button = document.querySelector('#startButton');
    button.addEventListener('click', function () {
    const overlay = document.getElementById('overlay');
    overlay.remove();
    })
    return <Backroom/>
}

function Backroom() {
    return(
        <div className='Main'>
            <Canvas>
                <Suspense fallback={<Loading/>}>
                    
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