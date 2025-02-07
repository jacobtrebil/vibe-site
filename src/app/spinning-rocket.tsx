"use client"

import { useState, useRef, useEffect, Suspense } from "react"
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import * as THREE from "three"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { OrbitControls as OrbitControlsImpl } from "three-stdlib"
import { ThreeElements } from '@react-three/fiber'

import { Object3DNode } from '@react-three/fiber'

/* import { 
  AmbientLightProps,  // Add these light imports
  DirectionalLightProps,
  PointLightProps,
} from "@react-three/fiber" */

function Model({ url, isGrabbed }: { url: string; isGrabbed: boolean }) {
  const { scene } = useLoader(GLTFLoader, url, (loader) => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath("/draco-gltf/")
    dracoLoader.setDecoderConfig({ type: "js" })
    loader.setDRACOLoader(dracoLoader)
  })

  const ref = useRef<THREE.Group>(null)
  const [isUserInteracting, setIsUserInteracting] = useState(false)
  const { camera, controls } = useThree()

  useEffect(() => {
    if (ref.current) {
      const box = new THREE.Box3().setFromObject(ref.current)
      const center = box.getCenter(new THREE.Vector3())
      const size = box.getSize(new THREE.Vector3())

      // Center the model
      ref.current.position.x += ref.current.position.x - center.x
      ref.current.position.y += ref.current.position.y - center.y
      ref.current.position.z += ref.current.position.z - center.z

      // Calculate camera position based on object size
      const maxDim = Math.max(size.x, size.y, size.z)

      if (camera instanceof THREE.PerspectiveCamera) {
        const fov = camera.fov * (Math.PI / 180)
        const cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.4
        const minDistance = cameraZ * 0.8
        const maxDistance = cameraZ * 1.5

        // Set new default camera position for a different viewing angle
        const cameraX = cameraZ * 0.8
        const cameraY = maxDim * 0.5
        camera.position.set(cameraX, cameraY, cameraZ)
        camera.lookAt(new THREE.Vector3(0, 0, 0))
        camera.near = maxDim / 100
        camera.far = maxDim * 100
        camera.updateProjectionMatrix()

        // Update OrbitControls
        if (controls instanceof OrbitControlsImpl) {
          controls.minDistance = minDistance
          controls.maxDistance = maxDistance
          controls.update()
        }
      } else if (camera instanceof THREE.OrthographicCamera) {
        const aspect = window.innerWidth / window.innerHeight
        const frustumSize = maxDim * 1.5
        camera.left = (frustumSize * aspect) / -2
        camera.right = (frustumSize * aspect) / 2
        camera.top = frustumSize / 2
        camera.bottom = frustumSize / -2
        camera.near = -1000
        camera.far = 1000
        camera.position.set(maxDim, maxDim, maxDim)
        camera.lookAt(new THREE.Vector3(0, 0, 0))
        camera.updateProjectionMatrix()
      }
    }
  }, [camera, controls])

  useFrame((state, delta) => {
    if (ref.current && !isUserInteracting && !isGrabbed) {
      ref.current.rotation.y += delta * 0.5 // Smooth rotation
    }
  })

  return <primitive object={scene} />;

  /* return (
    <>
      <primitive ref={ref} object={scene} />
      <OrbitControls
        makeDefault
        enableZoom={false}
        enablePan={true}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI * 0.75}
        onStart={() => setIsUserInteracting(true)}
        onEnd={() => setIsUserInteracting(false)}
      />
    </>
  )
} */

  export default function SpinningRocket() {
    const [isGrabbed, setIsGrabbed] = useState(false);
  
    return (
      <div
        style={{ width: '100%', height: '100vh' }}
        onMouseDown={() => setIsGrabbed(true)}
        onMouseUp={() => setIsGrabbed(false)}
        onMouseLeave={() => setIsGrabbed(false)}
        onTouchStart={() => setIsGrabbed(true)}
        onTouchEnd={() => setIsGrabbed(false)}
      >
        <Canvas shadows>
          <PerspectiveCamera makeDefault fov={50} />
          <ambientLight intensity={0.2} />
          <directionalLight intensity={1.5} position={[15, 5, 5]} castShadow />
          <Suspense fallback={null}>
            <Model url="/models/neck.glb" isGrabbed={isGrabbed} />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={true}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI * 0.75}
          />
        </Canvas>
      </div>
    );
  }




/* "use client"

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export function SpinningRocket() {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const modelRef = useRef<THREE.Group | null>(null);
    const frameIdRef = useRef<number | null>(null);
    const [isGrabbed, setIsGrabbed] = useState(false);

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene setup
        sceneRef.current = new THREE.Scene();
        
        // Camera setup
        const camera = new THREE.PerspectiveCamera(
            50,
            containerRef.current.clientWidth / containerRef.current.clientHeight,
            0.1,
            1000
        );
        camera.position.set(0, 0, 40);
        camera.lookAt(0, 0, 0);

        // Renderer setup
        rendererRef.current = new THREE.WebGLRenderer({ 
            antialias: true,
            alpha: true 
        });
        rendererRef.current.setSize(
            containerRef.current.clientWidth,
            containerRef.current.clientHeight
        );
        rendererRef.current.setClearColor(0x000000);
        containerRef.current.appendChild(rendererRef.current.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        sceneRef.current.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
        directionalLight.position.set(5, 5, 5);
        sceneRef.current.add(directionalLight);

        const pointLight = new THREE.PointLight(0xffffff, 2);
        pointLight.position.set(10, 10, 10);
        sceneRef.current.add(pointLight);

        // Load model
        const loader = new GLTFLoader();
        loader.load(
            '/models/neck.glb',
            (gltf) => {
                if (modelRef.current) {
                    sceneRef.current?.remove(modelRef.current);
                }
                
                modelRef.current = gltf.scene;

                // Center the model
                const box = new THREE.Box3().setFromObject(modelRef.current);
                const center = box.getCenter(new THREE.Vector3());
                modelRef.current.position.sub(center);

                // Add model to scene
                sceneRef.current?.add(modelRef.current);

                // Add OrbitControls
                const controls = new OrbitControls(camera, rendererRef.current!.domElement);
                controls.enableZoom = false;
                controls.enablePan = true;
                controls.minPolarAngle = Math.PI / 6;
                controls.maxPolarAngle = Math.PI * 0.75;
            }
        );

        // Animation
        const animate = () => {
            frameIdRef.current = requestAnimationFrame(animate);
            
            if (modelRef.current && !isGrabbed) {
                modelRef.current.rotation.y += 0.005;
            }

            rendererRef.current?.render(sceneRef.current!, camera);
        };
        animate();

        // Resize handler
        const handleResize = () => {
            if (!containerRef.current || !rendererRef.current) return;
            
            const width = containerRef.current.clientWidth;
            const height = containerRef.current.clientHeight;
            
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            rendererRef.current.setSize(width, height);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
            if (rendererRef.current && containerRef.current) {
                containerRef.current.removeChild(rendererRef.current.domElement);
                rendererRef.current.dispose();
            }
        };
    }, [isGrabbed]);

    return (
      <div
          className="w-full h-full bg-black rounded-lg relative overflow-hidden cursor-grab hover:shadow-lg transition-shadow duration-300"
          onMouseDown={() => setIsGrabbed(true)}
          onMouseUp={() => setIsGrabbed(false)}
          onMouseLeave={() => setIsGrabbed(false)}
          onTouchStart={() => setIsGrabbed(true)}
          onTouchEnd={() => setIsGrabbed(false)}
      >
          <div className="corner-light" />
          <div ref={containerRef} className="w-full h-full absolute inset-0" />
      </div>
  );
}*/


