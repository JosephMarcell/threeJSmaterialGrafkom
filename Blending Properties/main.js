import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 3 );

const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,     // Green color
    transparent: true,
    opacity: 1,
    blending: THREE.AdditiveBlending
});

const cube = new THREE.Mesh( geometry, material );


const geometry2 = new THREE.SphereGeometry(2, 32, 32);

const material2 = new THREE.MeshBasicMaterial({
    color: 0x0000ff,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
    });

const sphere2 = new THREE.Mesh(geometry2, material2);


scene.add( cube );
scene.add(sphere2);


camera.position.z = 5;

function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );

}