import { OrbitControls, Sky, Billboard, Text } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react';

import { TextureLoader } from 'three/src/loaders/TextureLoader';

// Test img
import Default from './img/default.png';

function Player() {
    const ref = useRef();
    
    document.onkeydown = function (e) {
        if (e.keyCode === 65) {
           ref.current.position.x -= 1;
        }
        else if (e.keyCode === 68) {
            ref.current.position.x += 1;
        }
        // W
        else if (e.keyCode === 87) {
            ref.current.position.z -= 1;
        }
        // S
        else if (e.keyCode === 83) {
            ref.current.position.z += 1;
        }
        //console.log(e);
    }
    useFrame(() => {
       // ref.current.rotation.y += 0.01;
    })
    return(
        <group ref={ref}>
            <mesh>
                <boxBufferGeometry/>
            </mesh>
        </group>
    )
}

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
            <h1>Lorem Ipsum</h1>
            <Canvas>
              <ambientLight intensity={0.25} />
                <Suspense fallback={null}>
                    <perspectiveCamera/>
                    <OrbitControls/>


                    {/* Skybox */}
                    <Sky azimuth={0.5} inclination={0.49} turbidity={100} rayleigh={0.8}/>

                    {/* Test box */}
                    <Player/>

                    {/* Ground */}
                    <Ground/>

                    {/* Camera instructions */}
                    <Display/>

                </Suspense>
            </Canvas>
        </div>
    )
}