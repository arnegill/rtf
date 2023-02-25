
import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";





export default function Model(props) {
  const { nodes, materials } = useGLTF("/keyboardv3.glb");
  const [enterdown, enterpress] = useState(false)
    const [tabdown, tabpress] = useState(false)
    const [gitdown, gitpress] = useState(false)
    const [linkeddown, linkedpress] = useState(false)
    const [discorddown, discordpress] = useState(false)
    const [bottomleftdown, bottomleftpress] = useState(false)
    const [spacedown, spacepress] = useState(false)
    const [avengersdown, avengerspress] = useState(false)
    const [minecraftdown, minecraftpress] = useState(false)
    const [f1down, f1press] = useState(false)
    const [escdown, escpress] = useState(false)
    const [bottomrightdown, bottomrightpress] = useState(false)
    const downMargin = 0.08
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.middleleft.geometry}
        material={materials["Material.010"]}
        position={tabdown? [0.13, 0.26-downMargin, 0.52] : [0.13, 0.26, 0.52]}
        rotation={[0.09, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.enter.geometry}
        material={materials["Material.002"]}
        position={enterdown? [2.22, 0.26-downMargin, 0.52] : [2.22, 0.26, 0.52]}
        rotation={[0.09, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottomleft.geometry}
        material={materials["Material.009"]}
        position={bottomleftdown? [0.23, 0.21-downMargin, 1.04] : [0.23, 0.21, 1.04]}
        rotation={[0.09, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.space.geometry}
        material={materials["Material.007"]}
        position={spacedown? [0.78, 0.21-downMargin, 1.04] : [0.78, 0.21, 1.04]}
        rotation={[0.09, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottomright.geometry}
        material={materials["Material.008"]}
        position={bottomrightdown? [2.35, 0.21-downMargin, 1.04] : [2.35, 0.21, 1.04]}
        rotation={[0.09, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.base.geometry}
        material={materials["Material.006"]}
        position={[1.17, 0, 0.51]}
        scale={[1.47, 0.82, 0.82]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.entertop.geometry}
        material={materials["Material.002"]}
        position={enterdown? [2.22, 0.18, 0.52] : [2.22, 0.26, 0.52]}
        rotation={[0.09, 0, 0]}
        onPointerDown={()=>enterpress(true)}
        onPointerUp={()=>enterpress(false)}
        onPointerOut={()=>enterpress(false)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tabtop.geometry}
        material={materials["Material.010"]}
        position={tabdown? [0.13, 0.18, 0.52] : [0.13, 0.26, 0.52]}
        rotation={[0.09, 0, 0]}
        onPointerDown={()=>tabpress(true)}
        onPointerUp={()=>tabpress(false)}
        onPointerOut={()=>tabpress(false)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottomlefttop.geometry}
        material={materials["Material.009"]}
        position={bottomleftdown? [0.23, 0.21-downMargin, 1.04] : [0.23, 0.21, 1.04]}
        rotation={[0.09, 0, 0]}
        onPointerDown={()=>bottomleftpress(true)}
        onPointerUp={()=>bottomleftpress(false)}
        onPointerOut={()=>bottomleftpress(false)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.spacetop.geometry}
        material={materials["Material.007"]}
        position={spacedown? [0.78, 0.21-downMargin, 1.04] : [0.78, 0.21, 1.04]}
        rotation={[0.09, 0, 0]}
        onPointerDown={()=>spacepress(true)}
        onPointerUp={()=>spacepress(false)}
        onPointerOut={()=>spacepress(false)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottomrighttop.geometry}
        material={materials["Material.008"]}
        position={bottomrightdown? [2.35, 0.21-downMargin, 1.04] : [2.35, 0.21, 1.04]}
        rotation={[0.09, 0, 0]}
        onPointerDown={()=>bottomrightpress(true)}
        onPointerUp={()=>bottomrightpress(false)}
        onPointerOut={()=>bottomrightpress(false)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.esc.geometry}
        material={materials["Material.011"]}
        position={escdown? [0, 0.31-downMargin, 0] : [0, 0.31, 0]}
        rotation={[0.09, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.esctop.geometry}
        material={materials["Material.011"]}
        position={escdown? [0, 0.31-downMargin, 0] : [0, 0.31, 0]}
        rotation={[0.09, 0, 0]}
        onPointerDown={()=>escpress(true)}
        onPointerUp={()=>escpress(false)}
        onPointerOut={()=>escpress(false)}
        onClick={()=>{props.change('/mordor.mp4')}}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.discord.geometry}
        material={materials["Material.004"]}
        position={discorddown? [0.65, 0.26-downMargin, 0.52] : [0.65, 0.26, 0.52]}
        rotation={[0.09, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.discordtop.geometry}
        material={materials["Material.004"]}
        position={discorddown? [0.65, 0.26-downMargin, 0.52] : [0.65, 0.26, 0.52]}
        rotation={[0.09, 0, 0]}
        onPointerDown={()=>discordpress(true)}
        onPointerUp={()=>discordpress(false)}
        onPointerOut={()=>discordpress(false)}
        onClick={()=>window.open('https://discordapp.com/users/155482078572445696','_blank')}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.github.geometry}
        material={materials["Material.003"]}
        position={gitdown? [1.18, 0.26-downMargin, 0.52] : [1.18, 0.26, 0.52]}
        rotation={[0.09, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.gittop.geometry}
        material={materials["Material.003"]}
        rotation={[0.09, 0, 0]}
        position={gitdown? [1.18, 0.26-downMargin, 0.52] : [1.18, 0.26, 0.52]}
        onPointerDown={()=>gitpress(true)}
        onPointerUp={()=>gitpress(false)}
        onPointerOut={()=>gitpress(false)}
        onClick={()=>window.open('https://github.com/arnegill','_blank')}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f1.geometry}
        material={materials["Material.012"]}
        position={f1down? [0.52, 0.31-downMargin, 0] : [0.52, 0.31, 0]}
        rotation={[0.09, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f1top.geometry}
        material={materials["Material.012"]}
        rotation={[0.09, 0, 0]}
        position={f1down? [0.52, 0.31-downMargin, 0] : [0.52, 0.31, 0]}
        onPointerDown={()=>f1press(true)}
        onPointerUp={()=>f1press(false)}
        onPointerOut={()=>f1press(false)}
        onClick={()=>{props.change('/f1.mp4')}}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.linked.geometry}
        material={materials["Material.001"]}
        position={linkeddown? [1.7, 0.26-downMargin, 0.52] : [1.7, 0.26, 0.52]}
        rotation={[0.09, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.linkedtop.geometry}
        material={materials["Material.001"]}
        position={linkeddown? [1.7, 0.26-downMargin, 0.52] : [1.7, 0.26, 0.52]}
        rotation={[0.09, 0, 0]}
        onPointerDown={()=>linkedpress(true)}
        onPointerUp={()=>linkedpress(false)}
        onPointerOut={()=>linkedpress(false)}
        onClick={()=>window.open('https://www.linkedin.com/in/arn%C3%BE%C3%B3r-egill-77875714b/', '_blank')}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.avengers.geometry}
        material={materials["Material.013"]}
        position={avengersdown? [1.04, 0.31-downMargin, 0] : [1.04, 0.31, 0]}
        rotation={[0.09, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.avangerstop.geometry}
        material={materials["Material.013"]}
        position={avengersdown? [1.04, 0.31-downMargin, 0] : [1.04, 0.31, 0]}
        rotation={[0.09, 0, 0]}
        onPointerDown={()=>avengerspress(true)}
        onPointerUp={()=>avengerspress(false)}
        onPointerOut={()=>avengerspress(false)}
        onClick={()=>{props.change('/avengers.mp4')}}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.minecraft.geometry}
        material={materials["Material.014"]}
        position={minecraftdown? [1.56, 0.31-downMargin, 0] : [1.56, 0.31, 0]}
        rotation={[0.09, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.minecrafttop.geometry}
        material={materials["Material.014"]}
        position={minecraftdown? [1.56, 0.31-downMargin, 0] : [1.56, 0.31, 0]}
        rotation={[0.09, 0, 0]}
        onPointerDown={()=>minecraftpress(true)}
        onPointerUp={()=>minecraftpress(false)}
        onPointerOut={()=>minecraftpress(false)}
        onClick={()=>{props.change('/mine.mp4')}}
      />
    </group>
  );
}

useGLTF.preload("/keyboardv3.glb");