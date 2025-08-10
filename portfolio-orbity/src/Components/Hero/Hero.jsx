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
                    <mesh   rotation={[Math.PI / 2, 10, 0]} position={[2, -0.1, 0]}>
                        <torusGeometry args={[1.4, 0.05, 16, 100]} />
                        <meshStandardMaterial color="white" />
                    </mesh>

                    {/* Controle apenas do planeta */}
                    <OrbitControls enableZoom={false} />
                </Canvas>
            </section>
            <div className={styles.apresentation}>
                <div className={styles.lineWrapper}>
                    <div className={styles.circle}></div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.text}>
                    <h2 className={styles.orbity}>
                        Seja bem-vindo ao{" "}
                        <span className={styles.word}>
                            {"ORBITY".split("").map((char, i) => (
                            <span key={i} className={styles.letter}>
                                {char}
                            </span>
                            ))}
                        </span>
                    </h2>
                    <p className={styles.slogan}>"Onde a inovação gira em torno das ideias!"</p>
                </div>
            </div>
            <div className={styles.buttonScroll} onClick={scrollToAbout}>
                <ButtonScroll className={styles.scrollButton} />
            </div>
        </>
    );
}
