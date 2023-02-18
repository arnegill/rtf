import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import './style.css'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from '@react-three/drei'

const Model = () => {
  const ref = useRef()
  const gltf = useLoader(GLTFLoader, "./gitlogo.glb");
  useFrame((state, delta) => (ref.current.rotation.y += delta))
  const [hovered, hover] = useState(false)

  return (
      <primitive
        ref={ref}
        object={gltf.scene}
        scale={hovered ? 0.4: 0.3}  
        rotation={[0,0,-1.5708]}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        onClick={() => window.open('https://github.com/arnegill', '_blank', 'noreferrer')}
      />
  );
};

export default function App() {
  return (
    <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
          <Model/>
          <OrbitControls />
        </Suspense>
      </Canvas>
  );
}

