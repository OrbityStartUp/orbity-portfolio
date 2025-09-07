// Hero.jsx atualizado
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Planet } from '../Planet/Planet';
import styles from './Hero.module.css';
import ButtonScroll from '../Components-Uiverse/Scroll.jsx';

export function Hero() {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <>
            <section id="home" className={styles.hero}>
                <div className={styles.spaceBackground}></div>
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} intensity={1} />

                    {/* Estrelas fixas no fundo */}
                    <Stars
                        radius={300}
                        depth={100}
                        count={8000}
                        factor={6}
                        saturation={0}
                        fade
                        />

                    {/* Nebulosa de fundo */}
                    <mesh position={[0, 0, -10]}>
                        <sphereGeometry args={[20, 32, 32]} />
                        <meshBasicMaterial color="#3f109a" transparent opacity={0.15} />
                    </mesh>

                    {/* Planeta rotativo */}
                    <Planet />

                    {/* Anéis planetários melhorados */}
                    <mesh rotation={[Math.PI / 2, 10, 0]} position={[2, -0.1, 0]}>
                        <torusGeometry args={[1.6, 0.05, 16, 100]} />
                        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.2} />
                    </mesh>

                    {/* Partículas flutuantes */}
                    <points>
                        <sphereGeometry args={[10, 32, 32]} />
                        <pointsMaterial color="#ffffff" size={0.01} sizeAttenuation />
                    </points>

                    {/* Controle apenas do planeta */}
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
                
                <div className={styles.apresentation}>
                    <div className={styles.lineWrapper}>
                        <div className={styles.circle}></div>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.text}>
                        <h1 className={styles.orbity}>
                            Seja bem-vindo ao{" "}
                            <span className={styles.word}>
                                {"ORBITY".split("").map((char, i) => (
                                <span key={i} className={styles.letter}>
                                    {char}
                                </span>
                                ))}
                            </span>
                        </h1>
                        <p className={styles.slogan}>"Onde a inovação gira em torno das ideias!"</p>
                        
                    </div>
                </div>
                
            </section>
            <div className={styles.buttonScroll} onClick={scrollToAbout}>
                <ButtonScroll className={styles.scrollButton} />
            </div>
        </>
    );
}
