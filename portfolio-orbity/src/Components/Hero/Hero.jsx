import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Planet } from '../Planet/Planet';
import styles from './Hero.module.css';

export function Hero() {
    return (
        <section className={styles.hero}>
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />

                {/* Estrelas fixas no fundo */}
                <Stars
                    radius={100}
                    depth={50}
                    count={5000}
                    factor={4}
                    saturation={0}
                    fade
                />

                {/* Planeta rotativo */}
                <Planet />

                {/* Anel fixo */}
                <mesh   rotation={[Math.PI / 2, 10, 0]} position={[0, -0.1, 0]}>
                    <torusGeometry args={[1.4, 0.05, 16, 100]} />
                    <meshStandardMaterial color="white" />
                </mesh>

                {/* Controle apenas do planeta */}
                <OrbitControls enableZoom={false} />
            </Canvas>
        </section>
    );
}
