
import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/lowpoly_old_tv.glb");
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/drei.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
  useEffect(() => void video.play(), [video])
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
          >
          <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]}  />
      </meshBasicMaterial>
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_6.geometry}
            material={materials.initialShadingGroup}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/lowpoly_old_tv.glb");