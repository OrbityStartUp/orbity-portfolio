// Planet.jsx com degradê suave
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Planet() {
  const planetRef = useRef();

  // Rotação contínua
  useFrame(() => {
    if (planetRef.current) planetRef.current.rotation.y += 0.0015;
  });

  // Shader para degradê
  const vertexShader = `
    varying vec3 vPosition;
    void main() {
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec3 vPosition;
    void main() {
      // Normalizar posição para ficar entre 0 e 1
      float gradient = (vPosition.y + 1.0) / 2.0;

      // Cores do degradê
      vec3 color1 = vec3(0.996, 0.569, 0.212); // #fe9136
      vec3 color2 = vec3(0.757, 0.188, 0.600); // #c13099
      vec3 color3 = vec3(0.247, 0.063, 0.604); // #3f109a

      // Interpolar entre 3 cores
      vec3 mixedColor;
      if (gradient < 0.5) {
        mixedColor = mix(color1, color2, gradient * 2.0);
      } else {
        mixedColor = mix(color2, color3, (gradient - 0.5) * 2.0);
      }

      gl_FragColor = vec4(mixedColor, 1.0);
    }
  `;

  return (
    <group ref={planetRef} position={[2, 0, 0]}>
      {/* Planeta com degradê */}
      <mesh>
        <sphereGeometry args={[1, 128, 128]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* Atmosfera suave */}
      <mesh>
        <sphereGeometry args={[1.08, 64, 64]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}
