// src/pages/Home.jsx
import OrbityScene from './OrbityScane'

export default function Home() {
  return (
    <div>
      <OrbityScene />
      <section style={{ position: 'absolute', top: 20, left: 20, color: 'white' }}>
        <h1 style={{ fontSize: '3rem' }}>Bem-vindo à Orbity</h1>
        <p>Inovação em outro nível 🚀</p>
      </section>
    </div>
  )
}
