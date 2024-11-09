import * as THREE from 'three';
import textureImage from './texture.jpg';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(2, 2, 2);

// Membuat tekstur
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load(textureImage);

// Membuat material dengan tekstur
const material = new THREE.MeshBasicMaterial({
    color: 0x0000ff, // visibilitas
    transparent: true, // transparansi
    opacity: 0.5, 

    side: THREE.FrontSide
  //  map: texture // Menambahkan tekstur pada material
  
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;
function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
