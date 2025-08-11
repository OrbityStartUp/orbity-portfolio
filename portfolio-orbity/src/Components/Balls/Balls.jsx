import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Balls() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Cena, câmera e renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      100
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    // Luz
    scene.add(new THREE.AmbientLight(0xffffff, 1));

    // Carregador de textura
    const loader = new THREE.TextureLoader();
    const icons = [
      "html.png", "css.png", "js.png", "ts.png",
      "react.png", "redux.png", "tailwind.png",
      "node.png", "mongo.png", "git.png"
    ];

    const meshes = [];

    // Criar bolinhas
    icons.forEach((icon, i) => {
      const texture = loader.load(`/icons/${icon}`);
      const geo = new THREE.DodecahedronGeometry(1, 0);
      const mat = new THREE.MeshStandardMaterial({ map: texture });
      const mesh = new THREE.Mesh(geo, mat);

      // Distribuir em 2 linhas
      const row = Math.floor(i / 5);
      const col = i % 5;
      mesh.position.x = (col - 2) * 2.5;
      mesh.position.y = row === 0 ? 1.5 : -1.5;

      scene.add(mesh);
      meshes.push(mesh);
    });

    // Variáveis de controle
    let selectedMesh = null;
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Eventos
    const onMouseDown = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(meshes);

      if (intersects.length > 0) {
        selectedMesh = intersects[0].object;
        isDragging = true;
        prevMouse.x = event.clientX;
        prevMouse.y = event.clientY;
      }
    };

    const onMouseMove = (event) => {
      if (!isDragging || !selectedMesh) return;

      const deltaX = event.clientX - prevMouse.x;
      const deltaY = event.clientY - prevMouse.y;

      selectedMesh.rotation.y += deltaX * 0.01;
      selectedMesh.rotation.x += deltaY * 0.01;

      prevMouse.x = event.clientX;
      prevMouse.y = event.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
      selectedMesh = null;
    };

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
        window.removeEventListener("mousedown", onMouseDown);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
        if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
            mountRef.current.removeChild(renderer.domElement);
        }
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "400px" }} />;
}
