/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/screenv4.glb");
  const video = Object.assign(document.createElement('video'), { src: props.vid, crossOrigin: 'Anonymous', loop: true, muted: true })
  video.play()
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[0, 1.68, 0]}
        scale={2.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.Material}
        position={[0, 1.68, 0]}
        scale={2.14}>
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]}  />
      </meshBasicMaterial>
      </mesh>
    </group>
  );
}

useGLTF.preload("/screenv4.glb");