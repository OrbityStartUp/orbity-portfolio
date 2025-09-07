import { useEffect, useRef } from "react";
import * as THREE from "three";
import { DecalGeometry } from "three/examples/jsm/geometries/DecalGeometry";

export function Balls({ skills }) {
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

    const backLight = new THREE.DirectionalLight(0xffffff, 1.5);
    backLight.position.set(0, 0, 1.5);
    scene.add(backLight);

    const textureLoader = new THREE.TextureLoader();
    const meshes = [];

    skills.forEach((skill, i) => {
      const name = typeof skill === "string" ? skill : skill.name;
      const icon = typeof skill === "string" ? null : skill.icon;
      
      const sphereGeo = new THREE.SphereGeometry(1, 20, 6);
      const sphereMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);

      // --- Adiciona o nome para tooltip ---
      sphereMesh.name = name;  
      sphereMesh.userData.label = name;

      // Guarda o nome
      sphereMesh.userData.label = name;

      // Posicionamento em 2 linhas de 3
      const row = Math.floor(i / 3);
      const col = i % 3;
      sphereMesh.position.x = (col - 1) * 3;
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
        new THREE.Vector3(1.3, 1.3, 1.3) // tamanho do decal
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
    const tooltip = document.getElementById("tooltip");

    const onMouseDown = (event) => {
      const bounds = mountRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      mouse.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(meshes, true);

      if (intersects.length > 0) {
        selectedMesh = intersects[0].object;
        isDragging = true;
        prevMouse.x = event.clientX;
        prevMouse.y = event.clientY;
      }
    };

    const onMouseMove = (event) => {
      const bounds = mountRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      mouse.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(meshes);

      if (intersects.length > 0) {
        const obj = intersects[0].object;
        tooltip.style.display = "block";
        tooltip.innerText = intersects[0].object.name;
        tooltip.style.left = event.clientX - bounds.left + 10 + "px";
        tooltip.style.top = event.clientY - bounds.top + 10 + "px";
        tooltip.innerText = obj.userData.label;
      } else {
        tooltip.style.display = "none";
      }

      // caso esteja arrastando
      if (isDragging && selectedMesh) {
        const deltaX = event.clientX - prevMouse.x;
        const deltaY = event.clientY - prevMouse.y;
        selectedMesh.rotation.y += deltaX * 0.01;
        selectedMesh.rotation.x += deltaY * 0.01;
        prevMouse.x = event.clientX;
        prevMouse.y = event.clientY;
      }
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

  return (
    <div ref={mountRef} style={{ width: "100%", height: "230px", position: "relative", paddingBottom: "20px"}}>
      <div
        id="tooltip"
        style={{
          position: "absolute",
          padding: "4px 8px",
          background: "rgba(0,0,0,0.75)",
          color: "white",
          borderRadius: "6px",
          fontSize: "12px",
          pointerEvents: "none",
          display: "none",
          zIndex: 10,
        }}
      />
    </div>
  );
}
