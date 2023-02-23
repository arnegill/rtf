/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
edited by /arnegill
*/

import React, { useState, useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/keyboardv2.glb");
  const [hovered, sethovered] = useState(false)

  const [spaceBarDown, spaceBarPress] = useState(false)

  return (
    <group {...props} dispose={null}>
      <mesh
        onPointerOver={()=>sethovered(true)}
        onPointerOut={() => sethovered(false)}
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={hovered? materials["Material.002"] : materials["Material.014"]}
        position={[0.13, 0.26, 0.52]}
        rotation={[0.09, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane011.geometry}
        material={materials["Material.002"]}
        position={[2.22, 0.26, 0.52]}
        rotation={[0.09, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane013.geometry}
        material={materials["Material.009"]}
        position={[0.23, 0.21, 1.04]}
        rotation={[0.09, 0, 0]}
      />
      <mesh
        //spacebar
        castShadow
        receiveShadow
        geometry={nodes.Plane014.geometry}
        material={materials["Material.007"]}
        position={spaceBarDown? [0.78, 0.11, 1.04] : [0.78, 0.21, 1.04]}
        rotation={[0.09, 0, 0]}
        onPointerDown={()=>spaceBarPress(true)}
        onPointerUp={()=>spaceBarPress(false)}
        onPointerOut={()=>spaceBarPress(false)}
      />
      <mesh
        //rightbottom
        castShadow
        receiveShadow
        geometry={nodes.Plane017.geometry}
        material={materials["Material.008"]}
        position={[2.35, 0.21, 1.04]}
        rotation={[0.09, 0, 0]}
      />
      <mesh
        //base
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.006"]}
        position={[1.17, 0, 0.51]}
        scale={[1.47, 0.82, 0.82]}
      />
      <mesh
        //esc
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials["Material.011"]}
        position={[0, 0.31, 0]}
        rotation={[0.09, 0, 0]}
      />
      <mesh
        //discord
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials["Material.004"]}
        position={[0.65, 0.26, 0.52]}
        rotation={[0.09, 0, 0]}
      />
      <mesh
        //github
        onClick={() => window.open('https://github.com/arnegill', "_blank" )}
        castShadow
        receiveShadow
        geometry={nodes.Plane009.geometry}
        material={materials["Material.003"]}
        position={[1.18, 0.26, 0.52]}
        rotation={[0.09, 0, 0]}
      />
      <mesh
        //f1
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.012"]}
        position={[0.52, 0.31, 0]}
        rotation={[0.09, 0, 0]}
      />
      <mesh
        //linkedin
        onClick={() => window.open('https://www.linkedin.com/in/arn%C3%BE%C3%B3r-egill-77875714b/', "_blank" )}
        castShadow
        receiveShadow
        geometry={nodes.Plane010.geometry}
        material={materials["Material.001"]}
        position={[1.7, 0.26, 0.52]}
        rotation={[0.09, 0, 0]}
      />
      <mesh
        //avengers
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials["Material.013"]}
        position={[1.04, 0.31, 0]}
        rotation={[0.09, 0, 0]}
      />
      <mesh
        //minecraft
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials["Material.014"]}
        position={[1.56, 0.31, 0]}
        rotation={[0.09, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/keyboardv2.glb");