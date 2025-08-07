import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Planet } from '../Planet/Planet';
import styles from './Hero.module.css';

export function Hero() {
    return (
        <section className={styles.hero}>
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <Planet />
                <OrbitControls enableZoom={false} />
            </Canvas>
        </section>
    );
}
