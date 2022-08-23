/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Huuxloc (https://sketchfab.com/rjh41)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/backrooms-1da6a7f2e0294ba9a4123f61244811a8
title: BackRooms
*/

import React from 'react';
import { useGLTF } from '@react-three/drei';
import Backroom from './Models/Backroom.glb';
import { useConvexPolyhedron, useBox } from "@react-three/cannon";

function Wall(props) {
  //const texture = useLoader(TextureLoader, Default)
  const [ref] = useBox(() => ({
    mass: 10,
    type: 'Static',
    ...props
  }));
  
}


export default function BackroomMap1({ ...props }) {
  //const group = useRef()
  const { nodes, materials } = useGLTF(Backroom)
  const [ref] = useConvexPolyhedron(() => ({ mass: 100, ...props, type:'Static', 
  position: [-11,0,-32.4], rotation: [0,-3.28,0]
}));
  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.67}>
        <group rotation={[Math.PI / 2, 0, 0]}>

          {/* Floor Carpet Texture */}
         {/* <group position={[-9,0.001,-9.5]} scale={[2,1,1.9]}>
          <mesh geometry={nodes.Object_4.geometry} material={materials.Carpet} /> 
          </group>
        */}

        {/* Roof */}
        {/*  <group position={[0, 1.92, 0.42]}>
            <mesh geometry={nodes.Object_51.geometry} material={materials.CeilingFrame} />  
          </group>
          <group position={[-0.01, 1.94, 0.46]}>
            <mesh geometry={nodes.Object_53.geometry} material={materials.Tiles} />
            <mesh geometry={nodes.Object_54.geometry} material={materials.Light} />
          </group> */}
          
          {/* Back Wall */}
          <group position={[-14, 0.51, 9.43]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_21.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_22.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,32]} position={[2.5,1.6,-46.4]} rotation={[-0.001,1.43,0]}/>
          </group>

          {/* Right Side Wall */}
          

          {/* Left Side Wall */}
          <group position={[-8.9, 0.51, -0.68]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh geometry={nodes.Object_33.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_34.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,19]} position={[3.4,1.6,-27.9]} rotation={[-0.001,-0.14,0]}/> 
          </group>


          
          {/* Box Divider*/}
          <group position={[-2.97, 0.51, -0.08]} rotation={[0, Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_15.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_16.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,8]} position={[-6,1.6,-31.6]} rotation={[-0.001,1.43,0]}/>
          </group>
          <group position={[-2.96, 0.51, -1.81]} rotation={[0, Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_36.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_37.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,8]} position={[-6.5,1.6,-28.7]} rotation={[-0.001,1.43,0]}/>
          </group>
          <group position={[-0.59, 0.51, -0.95]}>
            <mesh geometry={nodes.Object_39.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_40.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,3]} position={[-10.2,1.6,-30.7]} rotation={[-0.001,-0.14,0]}/>
          </group>
          

          {/* Support Beams */}
          <group position={[-5.9, 0.98, 7]}>
            <mesh geometry={nodes.Object_59.geometry} material={materials.Wall} />
            <mesh geometry={nodes.Object_60.geometry} material={materials.Skirting}/>
            <Wall args={[1,3.1,1]} position={[0.30,1.6,-42.6]} rotation={[-0.001,1.43,0]}/>
          </group>
          <group position={[-0.04, 0.98, 7]}>
            <mesh geometry={nodes.Object_62.geometry} material={materials.Wall} />
            <mesh geometry={nodes.Object_63.geometry} material={materials.Skirting} />
            <Wall args={[1,3.1,1]} position={[-9.3,1.6,-44]} rotation={[-0.001,1.43,0]}/>
          </group>
          <group position={[5.3, 0.98, 6.8]}>
            <mesh geometry={nodes.Object_65.geometry} material={materials.Wall} />
            <mesh geometry={nodes.Object_66.geometry} material={materials.Skirting} />
            <Wall args={[1,3.1,1]} position={[-18.2,1.6,-44.9]} rotation={[-0.001,1.43,0]}/>
          </group>
          <group position={[2.5, 0.98, -1.2]}>
            <mesh geometry={nodes.Object_68.geometry} material={materials.Wall} />
            <mesh geometry={nodes.Object_69.geometry} material={materials.Skirting} />
            <Wall args={[1,3.1,1]} position={[-15.4,1.6,-31]} rotation={[-0.001,1.43,0]}/>
          </group>

          <group position={[-25, 0.98, -1.2]}>
            <mesh geometry={nodes.Object_68.geometry} material={materials.Wall} />
            <mesh geometry={nodes.Object_69.geometry} material={materials.Skirting} />
            <Wall args={[1,3.1,1]} position={[30.1,1.6,-24.7]} rotation={[-0.001,1.43,0]}/>
          </group>
          <group position={[-25, 0.98, 6]}>
            <mesh geometry={nodes.Object_68.geometry} material={materials.Wall} />
            <mesh geometry={nodes.Object_69.geometry} material={materials.Skirting} />
            <Wall args={[1,3.1,1]} position={[31.7,1.6,-36.5]} rotation={[-0.001,1.43,0]}/>
          </group>
          <group position={[-21.2, 0.98, -1.2]}>
            <mesh geometry={nodes.Object_68.geometry} material={materials.Wall} />
            <mesh geometry={nodes.Object_69.geometry} material={materials.Skirting} />
            <Wall args={[1,3.1,1]} position={[23.85,1.6,-25.5]} rotation={[-0.001,1.43,0]}/>
          </group>
          <group position={[-13.6, 0.98, -2]}>
            <mesh geometry={nodes.Object_68.geometry} material={materials.Wall} />
            <mesh geometry={nodes.Object_69.geometry} material={materials.Skirting} />
            <Wall args={[1,3.1,1]} position={[11,1.6,-26]} rotation={[-0.001,1.43,0]}/>
          </group>
          <group position={[-21.2, 0.98, 6]}>
            <mesh geometry={nodes.Object_68.geometry} material={materials.Wall} />
            <mesh geometry={nodes.Object_69.geometry} material={materials.Skirting} />
            <Wall args={[1,3.1,1]} position={[25.47,1.6,-37.4]} rotation={[-0.001,1.43,0]}/>
          </group>
          <group position={[-21.2, 0.98, 13]}>
            <mesh geometry={nodes.Object_68.geometry} material={materials.Wall} />
            <mesh geometry={nodes.Object_69.geometry} material={materials.Skirting} />
            <Wall args={[1,3.1,1]} position={[27.1,1.6,-49]} rotation={[-0.001,1.43,0]}/>
          </group>
          <group position={[-25, 0.98, 13]}>
            <mesh geometry={nodes.Object_68.geometry} material={materials.Wall} />
            <mesh geometry={nodes.Object_69.geometry} material={materials.Skirting} />
            <Wall args={[1,3.1,1]} position={[33.4,1.6,-48.1]} rotation={[-0.001,1.43,0]}/>
          </group>
          

          {/* Rows Back Wall */}
          <group position={[-16.5, 0.51, 5]}>
            <mesh geometry={nodes.Object_39.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_40.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,3]} position={[12.9,1.6,-37.5]} rotation={[-0.001,-0.14,0]}/>
          </group>
          <group position={[-13.73, 0.51, 5]}>
            <mesh geometry={nodes.Object_39.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_40.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,3]} position={[17.5,1.6,-36.9]} rotation={[-0.001,-0.14,0]}/>
          </group>
          
          
          {/* Random Walls */}
          <group position={[-8.9, 0.51, -6.3]}>
            <mesh geometry={nodes.Object_39.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_40.geometry} material={materials.Wall} />
          </group>
          <group position={[-6.55, 0.51, -4.87]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_30.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_31.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,23.9]} position={[-9.2,1.6,-23.9]} rotation={[-0.001,1.43,0]}/>
          </group>
          <group position={[5.31, 0.51, -0.16]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh geometry={nodes.Object_33.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_34.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,15.5]} position={[-19.8,1.6,-33.4]} rotation={[-0.001,-0.14,0]}/>
          </group>
          <group position={[-6.57, 0.51, 4.11]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_45.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_46.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,15.8]} position={[-3.2,1.6,-38.2]} rotation={[-0.001,1.43,0]}/>
           
          </group>
          <group position={[-4.45, 0.51, 1.91]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_48.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_49.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,15.8]} position={[-7.1,1.6,-35.1]} rotation={[-0.001,1.43,0]}/>
          </group>
          <group position={[2.64, 0.51, 7.1]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh geometry={nodes.Object_12.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_13.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,7.8]} position={[-13.7,1.6,-44.8]} rotation={[-0.001,-0.14,0]}/>
          </group>
          <group position={[-18.5, 0.51, -0.6]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh geometry={nodes.Object_33.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_34.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,16]} position={[19.4,1.6,-27.2]} rotation={[-0.001,-0.14,0]}/>
          </group>
          <group position={[-11.5, 0.51, 3.5]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh geometry={nodes.Object_12.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_13.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,7.8]} position={[8.8,1.6,-35.5]} rotation={[-0.001,-0.14,0]}/>
          </group>
          <group position={[-16.1, 0.51, 4.1]} rotation={[0, Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_15.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_16.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,8]} position={[16.5,1.6,-35.5]} rotation={[-0.001,1.43,0]}/>
          </group>
          <group position={[-13.88, 0.51, 1.1]} rotation={[0, Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_15.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_16.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,8]} position={[12.2,1.6,-31]} rotation={[-0.001,1.43,0]}/>
          </group>

          <group position={[-28, 0.51, -5.4]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_6.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_7.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,27]} position={[20.1,1.6,-19]} rotation={[-0.001,1.43,0]}/>
          </group>

          {/* Glitch Back */}
          <group position={[-8.2, 0.51, 20.45]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_48.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_49.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,15.8]} position={[3.4,1.6,-64.9]} rotation={[-0.001,1.43,0]}/>
          </group>
          
          <group position={[-10.55, 0.51, 18.1]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh geometry={nodes.Object_12.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_13.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,7.8]} position={[-5,1.6,-62.2]} rotation={[-0.001,-0.14,0]}/>
          </group>
          <group position={[-1.1, 0.51, 18.1]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh geometry={nodes.Object_12.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_13.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,7.8]} position={[10.6,1.6,-60]} rotation={[-0.001,-0.14,0]}/>
          </group>

        </group>
      </group>
    </group>
  )
}

useGLTF.preload(Backroom)
