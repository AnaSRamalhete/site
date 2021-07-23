
// Global variables/objects

let scene, camera, renderer, cube, canvas;

function init(){

    // Scene

    scene = new THREE.Scene();

    // Camera

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.setZ(5);

    // Renderer
    canvas =  document.querySelector('canvas');
    renderer = new THREE.WebGLRenderer({canvas: document.querySelector('canvas')});
    renderer.setSize(window.innerWidth, window.innerHeight);
    //document.querySelector('canvas').appendChild(renderer.domElement);

    // Objects

    //  Adding a Cube
    const geometry = new THREE.BoxGeometry( 2, 2, 2 );
    //const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    const texture = new THREE.TextureLoader().load('images/background.jpg');
    const material = new THREE.MeshBasicMaterial( {map: texture} );
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
}


function animate(){
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

// To resize animation with the window size 

function onWindowResize(){

    var width = canvas.clientWidth;
    var height = canvas.clientHeight;
    if (width != canvas.width || height != canvas.height) {
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }
}
window.addEventListener('resize',onWindowResize,false);



init();
animate();
