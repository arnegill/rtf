import React from 'react'
import {MeshReflectorMaterial, useTexture } from '@react-three/drei'
export default function Floor(){
    const distort = useTexture('floor.jpg')
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0,-1,0]}>
        <circleGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={50}
          roughness={4}
          depthScale={6}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          mirror={1}
          metalness={1}
          distortionMap={distort}
          distortion={1}
        />
        </mesh>
    )
}