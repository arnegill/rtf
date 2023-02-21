import React, { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import './style.css'
import {OrbitControls,
        Environment,
        Lightformer,
        AccumulativeShadows,
        RandomizedLight,
        Float,
        MeshReflectorMaterial,
        useTexture
 } from '@react-three/drei'
import LinkedIn from './LinkedIn'
import GitHub from './GitHub'
import Floor from './Floor'


function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // Return view, these are regular three.js elements expressed in JSX
  
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <MeshReflectorMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}



function App() {
  return (
    <Canvas shadows>
      <fog attach="fog" args={['#050505', 0, 20]} />
      <Suspense>
        <group position={[0,-1,0]}>
          <AccumulativeShadows temporal frames={100} scale={12} alphaTest={0.85} position={[0, 0.04, 0]}>
            <RandomizedLight amount={8} radius={10} ambient={0.5} position={[2.5, 5, -5]} bias={0.001} />
          </AccumulativeShadows>
          <LinkedIn  receiveShadow position={[-2, 1, 0]}/>
          <Box  receiveShadow position={[0, 1, 0]} />
          <GitHub  receiveShadow position={[3, 1, 0]} />
        </group>
        <Environment preset='forest' resolution={256} background blur={0.8}> 
          <Lightformer intensity={5} form="ring" color="black" rotation-y={Math.PI / 2} position={[-5, 2, -1]} scale={[10, 10, 1]} />
        </Environment>
      </Suspense>
      <Floor/>
      <ambientLight intensity={0.5} />
      <spotLight castShadow position={[0, 10, 0]} intensity={0.3} />
      <directionalLight castShadow position={[-50, 0, -40]} intensity={0.7} />
      <OrbitControls />
    </Canvas>
  );
}


export default App;
