"use client";

import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("/neck.glb");
  const [timer, setTimer] = useState();
  useFrame(({ clock }) => {
    if (scene) setTimer(clock.elapsedTime);
  });
  return (
    <group rotation={[0, 0, Math.PI - timer]}>
      <primitive rotation={[0, -Math.PI / 2, 0]} scale={35} object={scene} />
    </group>
  );
};

const ModelScene = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Canvas
        camera={{ position: [0, 3, 0] }}
        style={{ width: "80vw", height: "40vh" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 5]} intensity={1} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <Environment files="/Footprint_Court_2k.hdr" />
        <Model />
      </Canvas>
    </div>
  );
};

export default ModelScene;
