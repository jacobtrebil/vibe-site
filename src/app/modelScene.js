"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("/neck.glb");

  return <primitive scale={30} object={scene} />;
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
        camera={{ position: [0, 1, 2] }}
        style={{ width: "80vw", height: "40vh" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 5]} intensity={1} />
        <OrbitControls autoRotate enableZoom={false} enablePan={false} />
        <Environment files="/Footprint_Court_2k.hdr" />
        <Model />
      </Canvas>
    </div>
  );
};

export default ModelScene;
