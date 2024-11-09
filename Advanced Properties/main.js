import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 3 );

const material = new THREE.MeshBasicMaterial({
    color: 0xffff00,    // Yellow color
    transparent: true,
    opacity: 1,
    // depthTest: false,    // Disable depth testing
  });


const cube = new THREE.Mesh( geometry, material );


const geometry2 = new THREE.SphereGeometry(1, 32, 32);

const colors = [];
for (let i = 0; i < geometry2.attributes.position.count; i++) {
    // Apply different colors to some vertices
    if (i % 2 === 0) {
        // Light blue for even-indexed vertices
        colors.push(0.5, 0.8, 1); // RGB
    } else {
        // Light pink for odd-indexed vertices
        colors.push(1, 0.5, 0.7); // RGB
    }
}

geometry2.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

const material2 = new THREE.MeshBasicMaterial({
    // color: 0x0000ff,
    vertexColors: true,

    transparent: true,
    opacity: 1,
    // depthTest: false,    // Disable depth testing

    });

const sphere2 = new THREE.Mesh(geometry2, material2);



scene.add(sphere2);
scene.add( cube );

camera.position.z = 5;

function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

    sphere2.rotation.x += 0.01;
    sphere2.rotation.y += 0.01; 

	renderer.render( scene, camera );

}