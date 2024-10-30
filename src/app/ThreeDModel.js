import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function NecklaceViewer() {
    const containerRef = useRef(null);
    const sceneRef = useRef(null);
    const rendererRef = useRef(null);
    const modelRef = useRef(null);
    const frameIdRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Basic scene setup
        sceneRef.current = new THREE.Scene();
        
        // Camera setup
        const camera = new THREE.PerspectiveCamera(
            80,
            containerRef.current.clientWidth / containerRef.current.clientHeight,
            0.1,
            1000
        );
        // Position camera to look at top of viewport
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
        rendererRef.current.setClearColor(0x000000, 0);
        containerRef.current.appendChild(rendererRef.current.domElement);

        // Basic lighting
        const light = new THREE.AmbientLight(0xffffff, 1);
        sceneRef.current.add(light);

        // Load model
        const loader = new GLTFLoader();
        loader.load(
            '/model.gltf', // Path to your GLTF model
            (gltf) => {
                // If the model is already added, don't add it again
                if (modelRef.current) {
                    sceneRef.current.remove(modelRef.current);
                }

                modelRef.current = gltf.scene;

                // Adjust orientation and position only once, when loading the model
                modelRef.current.rotation.x = Math.PI / 2;   // Rotate 90 degrees on the X-axis
                modelRef.current.rotation.y = Math.PI;       // Flip 180 degrees on the Y-axis

                // Center the model
                const box = new THREE.Box3().setFromObject(modelRef.current);
                const center = box.getCenter(new THREE.Vector3());
                modelRef.current.position.sub(center);

                // Scale the model to fit the viewport
                const size = box.getSize(new THREE.Vector3());
                const maxDim = Math.max(size.x, size.y, size.z);
                const scale = 30 / maxDim;
                modelRef.current.scale.multiplyScalar(scale);

                // Move model to top of viewport
                modelRef.current.position.y = -10;

                // Add model to the scene
                sceneRef.current.add(modelRef.current);
            },
            undefined,
            (error) => {
                console.error('Error loading model:', error);
            }
        );

        // Animation
        const animate = () => {
            frameIdRef.current = requestAnimationFrame(animate);
            
            if (modelRef.current) {
                modelRef.current.rotation.z += 0.002; // Rotate model around Z-axis
            }

            rendererRef.current.render(sceneRef.current, camera);
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
    }, []);

    return (
        <div 
            ref={containerRef} 
            style={{ 
                width: '100%',
                height: '600px',
                maxWidth: '800px',
                margin: '0 auto',
                position: 'relative',
                // Remove top margin to allow model to be at very top
                marginTop: '0' // Pull the container up
            }} 
        />
    );
}