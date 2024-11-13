"use client"

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three-stdlib";

export default function Home() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeeeeee);

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 4000);
    camera.position.set(0, 20, 100);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 20;
    controls.maxDistance = 800;
    controls.update();

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const textureLoader = new THREE.TextureLoader();
    const skyMaterialArray = [
      new THREE.MeshStandardMaterial({ map: textureLoader.load("/img/three/meadow_ft.jpg") }),
      new THREE.MeshStandardMaterial({ map: textureLoader.load("/img/three/meadow_bk.jpg") }),
      new THREE.MeshStandardMaterial({ map: textureLoader.load("/img/three/meadow_up.jpg") }),
      new THREE.MeshStandardMaterial({ map: textureLoader.load("/img/three/meadow_dn.jpg") }),
      new THREE.MeshStandardMaterial({ map: textureLoader.load("/img/three/meadow_rt.jpg") }),
      new THREE.MeshStandardMaterial({ map: textureLoader.load("/img/three/meadow_lf.jpg") }),
    ];

    skyMaterialArray.forEach((material) => {
      material.side = THREE.BackSide;
    });

    const skyGeometry = new THREE.BoxGeometry(2400, 2400, 2400);
    const sky = new THREE.Mesh(skyGeometry, skyMaterialArray);
    scene.add(sky);

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onWindowResize);

    type StarData = {
      position: [number, number, number];
      tooltip: string;
      path: string;
    };

    const stars: StarData[] = [
      { position: [0, 50, 200], tooltip: "about", path: "/about" },
      { position: [-100, 130, -30], tooltip: "projects", path: "/projects" },
      { position: [150, 110, 100], tooltip: "contact", path: "/contact" },
    ];

    const starObjects: { mesh: THREE.Points; tooltip: string; path: string }[] = [];
    const tooltip = document.createElement("div");
    tooltip.style.position = "absolute";
    tooltip.style.backgroundColor = "#000";
    tooltip.style.color = "#fff";
    tooltip.style.padding = "5px 10px";
    tooltip.style.borderRadius = "5px";
    tooltip.style.visibility = "hidden";
    tooltip.style.pointerEvents = "none";
    tooltip.style.fontSize = "12px";
    document.body.appendChild(tooltip);

    const starTexture = new THREE.TextureLoader().load("/img/star.png");

    stars.forEach((starData) => {
      const starGeometry = new THREE.BufferGeometry();
      const vertices = new Float32Array([
        0, 0, 0,
      ]);
      starGeometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

      const starMaterial = new THREE.PointsMaterial({
        size: 10,
        map: starTexture,
        transparent: true,
        depthWrite: false,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        color: 0xffff00, 
      });

      const star = new THREE.Points(starGeometry, starMaterial);
      star.position.set(...starData.position);
      scene.add(star);
      starObjects.push({ mesh: star, tooltip: starData.tooltip, path: starData.path });
    });

    const animateStars = () => {
      starObjects.forEach(({ mesh }) => {
        const material = mesh.material as THREE.PointsMaterial;
        material.opacity = 0.8 + 0.2 * Math.sin(Date.now() * 0.005);
      });
    };

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      animateStars();
      renderer.render(scene, camera);
    };
    animate();

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    
    const onMouseMove = (event: { clientX: number; clientY: number }) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(starObjects.map((s) => s.mesh));

      if (intersects.length > 0) {
        const intersectedStar = intersects[0].object;
        const starData = starObjects.find((s) => s.mesh === intersectedStar);

        if (starData) {
          tooltip.textContent = starData.tooltip;
          tooltip.style.left = `${event.clientX + 10}px`;
          tooltip.style.top = `${event.clientY + 10}px`;
          tooltip.style.visibility = "visible";
        }
      } else {
        tooltip.style.visibility = "hidden";
      }
    };
    
    const onClick = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(starObjects.map((s) => s.mesh));

      if (intersects.length > 0) {
        const intersectedStar = intersects[0].object;
        const starData = starObjects.find((s) => s.mesh === intersectedStar);

        if (starData) {
          window.location.href = starData.path; 
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onClick);
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
}