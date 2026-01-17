import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import earthTexture from '../assets/earth-texture.png';

const Globe = () => {
    const globeRef = useRef();
    const texture = useTexture(earthTexture);

    // Auto-rotation
    useFrame(() => {
        if (globeRef.current) {
            globeRef.current.rotation.y += 0.001; // Slow rotation
        }
    });

    return (
        <group rotation={[0, 0, 0.2]}> {/* Tilt */}
            <mesh ref={globeRef} scale={2}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial
                    map={texture}
                    metalness={0.4}
                    roughness={0.7}
                />

                {/* Coimbatore Pin */}
                {/* Lat: 11.0168 N, Long: 76.9558 E */}
                <Pin lat={11.0168} lon={76.9558} label="Coimbatore" />
            </mesh>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 5]} intensity={1.5} />
        </group>
    );
};

// Helper: Convert Lat/Lon to Vector3
const latLonToVector3 = (lat, lon, radius) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = (radius * Math.sin(phi) * Math.sin(theta));
    const y = (radius * Math.cos(phi));

    return new THREE.Vector3(x, y, z);
};

const Pin = ({ lat, lon }) => {
    // Globe radius is 1, so pin sits on surface
    const position = useMemo(() => latLonToVector3(lat, lon, 1), [lat, lon]);
    const pinRef = useRef();

    // Look at center to orient correctly
    useFrame((state) => {
        if (pinRef.current) {
            pinRef.current.lookAt(0, 0, 0);
        }
    });

    return (
        <group position={position} ref={pinRef}>
            {/* The pin visual - pointing OUT from center, so we need to rotate it to point 'in' or just represent it up */}
            {/* Actually, lookAt(0,0,0) makes z-axis point to center. So cylinder along Z will point in. */}

            {/* Pin Stem */}
            <mesh position={[0, 0, -0.1]} rotation={[Math.PI / 2, 0, 0]}> {/* Adjust to stick out */}
                <cylinderGeometry args={[0.02, 0.005, 0.2, 8]} />
                <meshBasicMaterial color="#ff3333" />
            </mesh>

            {/* Pin Head */}
            <mesh position={[0, 0, -0.25]}>
                <sphereGeometry args={[0.04, 16, 16]} />
                <meshBasicMaterial color="#ff3333" />
            </mesh>

            {/* Pulse Ring */}
            <mesh position={[0, 0, -0.01]} rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[0.03, 0.05, 32]} />
                <meshBasicMaterial color="#ff3333" side={THREE.DoubleSide} transparent opacity={0.6} />
            </mesh>
        </group>
    );
}

const EarthGlobe = () => {
    return (
        <div style={{ width: '100%', height: '500px', cursor: 'grab' }}>
            <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
                <Globe />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    rotateSpeed={0.5}
                    autoRotate={false}
                />
            </Canvas>
        </div>
    );
};

export default EarthGlobe;
