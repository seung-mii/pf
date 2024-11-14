import * as THREE from "three";

export default function skyBox(): THREE.Mesh {
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

  return sky;
}