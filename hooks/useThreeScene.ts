"use client";

import { RefObject, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three-stdlib";
import skyBox from "@/data/sky";
import stars from "@/data/stars";

export function useThreeScene(mountRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeeeeee);

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 4000);
    camera.position.set(0, 20, 100);

    const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 20;
    controls.maxDistance = 800;
    controls.update();
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const skyBoxMesh = skyBox();
    scene.add(skyBoxMesh);

    const { starObjects, tooltip } = stars(scene);

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onWindowResize);

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

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(
        starObjects.map((s) => s.mesh)
      );

      if (intersects.length > 0) {
        const intersectedStar = intersects[0].object;
        const starData = starObjects.find((s) => s.mesh === intersectedStar);

        if (starData) {
          tooltip.textContent = starData.tooltip;
          tooltip.style.left = `${event.clientX + 10}px`;
          tooltip.style.top = `${event.clientY + 10}px`;
          tooltip.style.visibility = "visible";
          tooltip.style.fontSize = "0.75rem";
          tooltip.style.padding = "0.5rem";
        }
      } else {
        tooltip.style.visibility = "hidden";
      }
    };

    const onClick = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(
        starObjects.map((s) => s.mesh)
      );

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

    return () => {
      window.removeEventListener("resize", onWindowResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
      document.body.removeChild(tooltip);
      renderer.dispose();
    };
  }, [mountRef]);
}