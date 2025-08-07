import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import gradient from '../../assets/Icons/gradient.png';

export function Planet() {
    const planetRef = useRef();
    const ringRef = useRef();

    // Gradiente carregado uma única vez
    const gradientTexture = useMemo(() => {
        const texture = new THREE.TextureLoader().load(gradient);
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        return texture;
    }, []);

    // Rotação contínua
    useFrame(() => {
        if (planetRef.current) planetRef.current.rotation.y += 0.003;
        if (ringRef.current) ringRef.current.rotation.z += 0.003;
    });

    return (
        <group>
            <mesh ref={planetRef}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial map={gradientTexture} />
            </mesh>

            <mesh ref={ringRef} rotation={[0, 0, Math.PI / 4]}>
                <torusGeometry args={[1.4, 0.05, 16, 100]} />
                <meshStandardMaterial color="white" />
            </mesh>
        </group>
    );
}
