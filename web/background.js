    //Declare three.js variables
	var camera, scene, renderer, stars=[];
	 
	//assign three.js objects to each variable
	function init(){
		 
		//camera
		camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
		camera.position.z = 5;	 

		//scene
		scene = new THREE.Scene();
		 
		//renderer
		canvas =  document.querySelector('canvas');
		renderer = new THREE.WebGLRenderer({canvas: document.querySelector('canvas')});
		//set the size of the renderer
		renderer.setSize(window.innerWidth, window.innerHeight);
	}


	function addSphere(){

				// The loop will move from z position of -1000 to z position 1000, adding a random particle at each position. 
				for ( var z= -1000; z < 1000; z+=20 ) {
		
					// Make a sphere (exactly the same as before). 
					var geometry   = new THREE.SphereGeometry(0.5, 32, 32)
					var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
					var sphere = new THREE.Mesh(geometry, material)
		
					// This time we give the sphere random x and y positions between -500 and 500
					sphere.position.x = Math.random() * 1000 - 500;
					sphere.position.y = Math.random() * 1000 - 500;
		
					// Then set the z position to where it is in the loop (distance of camera)
					sphere.position.z = z;
		
					// scale it up a bit
					sphere.scale.x = sphere.scale.y = 2;
		
					//add the sphere to the scene
					scene.add( sphere );
		
					//finally push it to the stars array 
					stars.push(sphere); 
				}
	}

	function animateStars() { 
				
		// loop through each star
		for(var i=0; i<stars.length; i++) {
			
			star = stars[i]; 
				
			// and move it forward dependent on the mouseY position. 
			star.position.z +=  i/10;
				
			// if the particle is too close move it to the back
			if(star.position.z>1000) star.position.z-=2000; 
			
		}
	
	}

	function render() {
		//get the frame
		requestAnimationFrame( render );

		//render the scene
		renderer.render( scene, camera );
			animateStars();

	}

	function onWindowResize(){

		var width = window.innerWidth;
		var height = window.innerHeight;
	
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
	
		renderer.setSize(width, height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
	}
	window.addEventListener("resize",onWindowResize,false);
	
	init();
	addSphere();
	render();








// // Global variables/objects

// let scene, camera, renderer, cube, canvas, startGeo, stars;

// function init(){

//     // Scene

//     scene = new THREE.Scene();

//     // Camera

//     camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.setZ(5);

//     // Renderer
//     canvas =  document.querySelector('canvas');
//     renderer = new THREE.WebGLRenderer({canvas: document.querySelector('canvas')});
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     //document.querySelector('canvas').appendChild(renderer.domElement);

//     // Objects

//     //  Adding a Cube
//     const geometry = new THREE.BoxGeometry( 2, 2, 2 );
//     //const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
//     const texture = new THREE.TextureLoader().load('images/background.jpg');
//     const material = new THREE.MeshBasicMaterial( {map: texture} );
//     cube = new THREE.Mesh( geometry, material );
//     scene.add( cube );

//     // Particles
//     starGeo = new THREE.BufferGeometry();
//     for(let i=0;i<6000;i++){
//         star = new THREE.Vector3(
//             Math.random()*600 -300,
//             Math.random()*600 -300,
//             Math.random()*600 -300);

//         star.velocity = 0;
//         star.acceleration = 0.01;
//         starGeo.push(star );
//     }

//     starGeo.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

//     const starMaterial = new THREE.PointsMaterial( { color: 0x888888 } );
//     stars = new THREE.Points(starGeo,starMaterial);
//     scene.add(stars);


// }


// function animate(){
//     requestAnimationFrame(animate);

//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     renderer.render(scene, camera);
// }

// // To resize animation with the window size 

// function onWindowResize(){

//     var width = window.innerWidth;
//     var height = window.innerHeight;

//     camera.aspect = width / height;
//     camera.updateProjectionMatrix();

//     renderer.setSize(width, height, false);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
// }
// window.addEventListener('resize',onWindowResize,false);



// init();
// animate();
