import * as THREE from 'three';
import textureImage from './texture.jpg';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// geometry kubus
const geometry = new THREE.BoxGeometry(2, 2, 2);

// Membuat tekstur
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load(textureImage);

// Penerapan Sisi
const materialArray = [
  new THREE.MeshBasicMaterial({ map: texture }), // Sisi depan - texture
  new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Sisi belakang - merah
  new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Sisi kiri - biru
  new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Sisi kanan - warna hijau
  new THREE.MeshBasicMaterial({ color: 0x808080 }), // Sisi atas - abu - abu
  new THREE.MeshBasicMaterial({ map: texture })     // Sisi bawah - diberi tekstur
];

//array material untuk setiap sisi
const cube = new THREE.Mesh(geometry, materialArray);
scene.add(cube);

// Menambahkan pencahayaan agar lebih terlihat jelas
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Ambient light untuk pencahayaan lembut
scene.add(ambientLight);


camera.position.z = 5;

function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
