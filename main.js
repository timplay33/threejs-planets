import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

//init
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
const controls = new OrbitControls(camera, renderer.domElement);

//set renderer size to screen size
renderer.setSize(window.innerWidth, window.innerHeight);

//init helper
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper)

//create Ambient light
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight)

//create earth
const earthTexture = new THREE.TextureLoader().load("earth.jpg")
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(5),
  new THREE.MeshStandardMaterial({ map: earthTexture })
);
scene.add(earth);

//create mars
const marsTexture = new THREE.TextureLoader().load("mars.jpg")
const mars = new THREE.Mesh(
  new THREE.SphereGeometry(4),
  new THREE.MeshStandardMaterial({ map: marsTexture })
);
scene.add(mars);
//postion mars
mars.position.x = 15;

//create jupiter
const jupiterTexture = new THREE.TextureLoader().load("jupiter.jpg")
const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(10),
  new THREE.MeshStandardMaterial({ map: jupiterTexture })
);
scene.add(jupiter);
//postion jupiter
jupiter.position.x = -20;


camera.position.z = 30;

function animate() {
  requestAnimationFrame(animate);
  earth.rotation.y += 0.005;
  mars.rotation.y +=0.003;
  jupiter.rotation.y +=0.003;
  controls.update();
  


  renderer.render(scene, camera);
}
animate();