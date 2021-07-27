    // ------------------------------
	//Declare three.js global variables
	// ------------------------------

	var camera, scene, renderer, particleMesh,stars=[];
	 
	// ------------------------------
	// Initialize camera, scene and renderer
	// ------------------------------

	function init(){
		 
		//camera
		camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
		camera.position.z = 5;	 

		//scene
		scene = new THREE.Scene();
		 
		//renderer
		canvas =  document.querySelector('canvas');
		renderer = new THREE.WebGLRenderer({canvas: document.querySelector('canvas'), alpha:true});
		//set the size of the renderer
		renderer.setSize(window.innerWidth, window.innerHeight);
		// renderer.setClearColor(new THREE.Color('rgb(98,98,98)')); 
		// To set a backgound color for the scene (we have to remove alpha:true)
	}

	// ------------------------------
	// Adding the objects for the animated background
	// ------------------------------
	function addObjects(){
		particlesGeo = new THREE.BufferGeometry();
		const numParticles = 500; 

		// Provide x,y,z for each particle
		const positionArray = new Float32Array(numParticles*3);

		for(let i=0; i<numParticles*3; i++ ){
			positionArray[i] = (Math.random()-0.55)*4 +1;
		}

		particlesGeo.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));

		// Material of stars

		const circle = new THREE.TextureLoader().load( 'images/circle.png' );
		const material = new THREE.PointsMaterial({
			size: 0.1, 
			map: circle, 
			transparent: true,  
			alphaTest: 0.5
		});

		// Meshing material with geometry
		particleMesh = new THREE.Points(particlesGeo, material)

		// Adding object to scene
		scene.add(particleMesh)
	}

	// ------------------------------
	// Mouse movement
	// ------------------------------

	document.addEventListener('mousemove', updateMousePosition);
	let mouseX, mouseY;

	function updateMousePosition(event){
		mouseX = event.clientX;
		mouseY = event.clientY;

	}
	
	// ------------------------------
	// Animation
	// ------------------------------

	const clock = new THREE.Clock();

	function render() {

		const elapsedTime = clock.getElapsedTime();

		particleMesh.rotation.x = -mouseY * ( 0.00004);
		particleMesh.rotation.y = -mouseX * ( 0.00004);
		particleMesh.rotation.z = elapsedTime%1000 * 0.01;

		//render the scene
		renderer.render( scene, camera );
		//get the frame
		requestAnimationFrame(render);

	}

	// ------------------------------
	// Update as the window resizes
	// ------------------------------

	function onWindowResize(){

		var width = window.innerWidth;
		var height = window.innerHeight;
	
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
	
		renderer.setSize(width, height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
	}
	window.addEventListener("resize",onWindowResize,false);


	// ------------------------------
	// Run the animation
	// ------------------------------
	
	init();
	addObjects();
	render();

