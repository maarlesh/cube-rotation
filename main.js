import * as THREE from 'three';


//1. Creating a scene
const scene = new THREE.Scene();

//console.log(window.innerHeight); //838
//console.log(window.innerWidth);  //1104

//2. Creating a Perspective Camera takes 4 arguement 1. FOV (Field of view) 2. Aspect ration 3. Nearest clipping point 4. farthest clipping window point 
const aspectRatio = window.innerWidth/window.innerHeight;
const camera = new THREE.PerspectiveCamera(90, aspectRatio, 0.1,1000);

//3. Creating a Renderer to render
const renderer = new THREE.WebGL1Renderer();
//setting size of the renderer
renderer.setSize(window.innerWidth,window.innerHeight);
//appending the render to the dom of the body
document.body.appendChild(renderer.domElement);


//4. Creating a Cube
//4.1 Create a BoxGeometry to store the dimension of the cube
const geometry = new THREE.BoxGeometry(1,1,1);
//4.2 Creating a material (MeshMaterial) to add to the cube it takes a argument to pass the properties (eg. color takes a hexadecimal value)
const material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
//4.3 Create a Mesh with the geometry and the material
const cube = new THREE.Mesh(geometry,material);
//4.4 add the cube to the scene
scene.add(cube);
//By default, when we call scene.add(), the thing we add will be added to the coordinates (0,0,0). This would cause both the camera and the cube to be inside each other. To avoid this, we simply move the camera out a bit.
camera.position.z = 5;

//5. Render the scene
function animate(){
    requestAnimationFrame(animate);
    //rotating the cube
    cube.rotation.x = cube.rotation.x + 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene,camera);
}
animate();

