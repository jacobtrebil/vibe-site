"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Environment } from "@react-three/drei";

const ChromeText = () => {
  return (
    <Text
      position={[0, 0, 0]}
      fontSize={5}
      maxWidth={200}
      lineHeight={1}
      letterSpacing={-0.05}
      material-toneMapped={false} // Ensures accurate color and reflectivity
      material-metalness={1} // Maximum metalness for a true chrome effect
      material-roughness={0} // Low roughness for a shiny, reflective surface
    >
      VIBE
      <meshStandardMaterial
        color="#ffffff"
        metalness={1}
        roughness={0}
        side={2}
      />
    </Text>
  );
};

const ChromeText3D = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Canvas style={{ width: "80vw", height: "40vh" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 5]} intensity={1} />
        <OrbitControls enableZoom={false} />
        <Environment preset="sunset" />
        <ChromeText />
      </Canvas>
    </div>
  );
};

export default ChromeText3D;
