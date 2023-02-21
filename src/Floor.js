import React from 'react'
import {MeshReflectorMaterial, useTexture } from '@react-three/drei'
export default function Floor(){
    const distort = useTexture('wood.jpg')
    const normal = useTexture('normal.jpg')
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0,-1,0]}>
        <planeGeometry args={[10, 10]} />
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
          distortion={1}
        />
        </mesh>
    )
}