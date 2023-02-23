import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import {
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  Lightformer,
  Environment,
} from "@react-three/drei";
import Cord from "./Cord";
import Screenv4 from "./Screenv4";
import Keyboardv3 from "./Keyboardv3";

function App() {
  const [selectedVideo, changeSelectedVideo] = useState("/mordor.mp4");
  function ChangeToMine(vid) {
    changeSelectedVideo(vid);
  }
  return (
    <Canvas shadows camera={{ position: [15, 15, 30], fov: 15 }}>
      <color attach="background" args={["#f0f0f0"]} />
      <Suspense>
        <group position={[5, 0, 0]}>
          <Screenv4
            position={[2, 2.2, 2]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
            scale={1}
            vid={selectedVideo}
          />
          <Keyboardv3
            change={ChangeToMine}
            rotation={[0, -0.4, 0]}
            position={[-4, 0.1, 5]}
            mine={() => ChangeToMine()}
          />
          <Cord scale={1.5} position={[1, 0.1, 4]} rotation={[0, 0.5, 0]} />
        </group>
        <AccumulativeShadows
          frames={100}
          alphaTest={0.85}
          opacity={0.8}
          color="red"
          scale={100}
          position={[0, -0.005, 0]}
        >
          <RandomizedLight
            amount={8}
            radius={6}
            ambient={0.5}
            intensity={1}
            position={[-1.5, 2.5, -2.5]}
            bias={0.001}
          />
        </AccumulativeShadows>
      </Suspense>
      <Environment preset="city" resolution={256} background blur={0.8}>
        <Lightformer
          intensity={1}
          rotation-x={Math.PI / 2}
          position={[0, 5, -9]}
          scale={[10, 10, 1]}
        />
        <Lightformer
          intensity={1}
          rotation-x={Math.PI / 2}
          position={[0, 5, 9]}
          scale={[10, 10, 1]}
        />
        <group rotation={[Math.PI / 2, 1, 0]}>
          
          <Lightformer
            intensity={0.2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={[50, 2, 1]}
          />
          <Lightformer
            intensity={0.2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={[50, 2, 1]}
          />
          <Lightformer
            intensity={0.2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={[50, 2, 1]}
          />
        </group>
        <group>
          <Lightformer
            intensity={5}
            form="ring"
            color="red"
            rotation-y={Math.PI / 2}
            position={[-5, 2, -1]}
            scale={[10, 10, 1]}
          />
          <Lightformer
            intensity={5}
            form="ring"
            color="pink"
            rotation-y={Math.PI / 2}
            position={[5, -2, 1]}
            scale={[10, 10, 1]}
          />
        </group>
      </Environment>
      <OrbitControls
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={0}
        maxPolarAngle={Math.PI/2-0.1}
        minDistance={20}
        maxDistance={100}
      />
    </Canvas>
  );
}

export default App;
