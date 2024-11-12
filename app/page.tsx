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

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
}