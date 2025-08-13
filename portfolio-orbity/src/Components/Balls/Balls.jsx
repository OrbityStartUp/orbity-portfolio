import { useEffect, useRef } from "react";
import * as THREE from "three";
import { DecalGeometry } from "three/examples/jsm/geometries/DecalGeometry";

// Ícones
import html from "../../assets/Icons/html.png";
import css from "../../assets/Icons/css.png";
import js from "../../assets/Icons/js.png";
import ts from "../../assets/Icons/ts.png";
import react from "../../assets/Icons/react.png";
import node from "../../assets/Icons/node.png";

const icons = [html, css, js, ts, react, node];

export function Balls() {
  const mountRef = useRef(null);

  useEffect(() => {
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

    scene.add(new THREE.AmbientLight(0xffffff, 1));

    const textureLoader = new THREE.TextureLoader();
    const meshes = [];

    icons.forEach((icon, i) => {
      const sphereGeo = new THREE.SphereGeometry(0.6, 32, 32);
      const sphereMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);

      // Posicionamento em 2 linhas de 3
      const row = Math.floor(i / 3);
      const col = i % 3;
      sphereMesh.position.x = (col - 1) * 2.2;
      sphereMesh.position.y = row === 0 ? 1.5 : -1.5;

      scene.add(sphereMesh);
      meshes.push(sphereMesh);

      // Aplicar decal (ícone)
      const decalTexture = textureLoader.load(icon);
      const decalMat = new THREE.MeshBasicMaterial({
        map: decalTexture,
        transparent: true,
        depthTest: true,
        depthWrite: false,
      });

      const decalGeo = new DecalGeometry(
        sphereMesh,
        new THREE.Vector3(0, 0, 0.6), // posição frontal
        new THREE.Euler(0, 0, 0),
        new THREE.Vector3(0.8, 0.8, 0.8) // tamanho do decal
      );

      const decalMesh = new THREE.Mesh(decalGeo, decalMat);
      sphereMesh.add(decalMesh);
    });

    // Interação
    let selectedMesh = null;
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseDown = (event) => {
      const bounds = mountRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      mouse.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;

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

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "300px" }} />;
}
