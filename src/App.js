import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import './style.css'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment, Lightformer, Float } from '@react-three/drei'

const Model = () => {
  const ref = useRef()
  const gltf = useLoader(GLTFLoader, "./gitlogo.glb");
  useFrame((state, delta) => (ref.current.rotation.y += delta))
  const [hovered, hover] = useState(false)

  return (
      <>
        <primitive
          ref={ref}
          object={gltf.scene}
          scale={hovered ? 0.4: 0.3}  
          rotation={[0,0,-1.5708]}
          onPointerOver={() => hover(true)}
          onPointerOut={() => hover(false)}
          onClick={() => window.open('https://github.com/arnegill', '_blank', 'noreferrer')}
        />
      </>
  );
};

export default function App() {
  return (
    <Canvas camera={{ position: [5, 0, 0], fov: 45 }}>
      <Suspense fallback={null}>
        <Float
          speed={10} // Animation speed, defaults to 1
          rotationIntensity={1} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[0, 0.5]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Model/>
        </Float>
      </Suspense>
      <Env/>
    </Canvas>
  );
}

function Env() {
  return (
    <Environment preset="sunset" resolution={256} background blur={0.8}>
      <group rotation={[Math.PI / 2, 1, 0]}>
        {[2, -2, 2, -4, 2, -5, 2, -9].map((x, i) => (
          <Lightformer key={i} intensity={1} rotation={[Math.PI / 4, 0, 0]} position={[x, 4, i * 4]} scale={[4, 1, 1]} />
        ))}
        <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
        <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[50, 2, 1]} />
        <Lightformer intensity={0.5} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} />
      </group>
      <Lightformer intensity={7} form="ring" color="red" rotation-y={Math.PI / 2} position={[-5, 2, -1]} scale={[10, 10, 1]} />
    </Environment>
  )
}