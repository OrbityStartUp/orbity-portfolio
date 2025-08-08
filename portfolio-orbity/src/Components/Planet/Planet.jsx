import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import gradient from '../../assets/Icons/gradient3.png';

export function Planet() {
    const planetRef = useRef();

    const gradientTexture = useMemo(() => {
        const texture = new THREE.TextureLoader().load(gradient);
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        return texture;
    }, []);

    // Rotação contínua apenas do planeta
    useFrame(() => {
        if (planetRef.current) planetRef.current.rotation.z += 0.003;
    });

    return (
        <group ref={planetRef} position={[2, 0, 0]}>
            <mesh>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial map={gradientTexture} />
            </mesh>
        </group>
    );
}
