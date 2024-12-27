import * as THREE from "three";

type StarInfo = {
  position: [number, number, number];
  tooltip: string;
  path: string;
};

interface StarObject {
  mesh: THREE.Points;
  tooltip: string;
  path: string;
}

export default function stars(scene: THREE.Scene) {
  const stars: StarInfo[] = [
    { position: [0, 80, 80], tooltip: "about", path: "/about" },
    { position: [-70, 90, -30], tooltip: "projects", path: "/projects" },
    { position: [80, 130, 100], tooltip: "contact", path: "/contact" },
  ];

  const starTexture = new THREE.TextureLoader().load("/img/star.png");

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

  const starObjects: StarObject[] = [];

  const isSmallScreen = window.innerWidth <= 640;
  const starSize = isSmallScreen ? 20 : 13;

  stars.forEach((starData) => {
    const starGeometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([0, 0, 0]);
    starGeometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: starSize,
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

  return { starObjects, tooltip };
}