import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { Physics } from "@react-three/cannon";

// Components
import Walter from './Components/Walter';
import Map from './Map/Map';
import Player from './Components/PlayerControls';
import Loading from './Components/Loading';
import EndCube from './Components/EndCube';

export default function Home() {
    const button = document.querySelector('#startButton');
    button.addEventListener('click', function () {
    const overlay = document.getElementById('overlay');
    overlay.remove();
    })
    return <Backroom/>
}

function Backroom() {
    return (
      <div className="Main">
        <Canvas>
          <Suspense fallback={<Loading />}>
            {/* Cannon js physics */}
            <Physics>
              <Player />
              <Walter />
              <EndCube />
              <Map />
            </Physics>
          </Suspense>
        </Canvas>
      </div>
    );
}