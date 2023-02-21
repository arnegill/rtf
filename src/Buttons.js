/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/buttons.glb");
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
        position={[0.52, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/buttons.glb");