// src/components/OrbityScene.jsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'

function OrbityLogo() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <meshStandardMaterial color="#6C63FF" />
    </mesh>
  )
}

export default function OrbityScene() {
  return (
    <Canvas style={{ height: '100vh' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Stars />
      <OrbityLogo />
      <OrbitControls />
    </Canvas>
  )
}
