document.addEventListener('DOMContentLoaded', () => {
    initThreeJS();
});

function initThreeJS() {
    const container = document.getElementById('webgl-canvas-container');

    // Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x02040F, 0.002); // Void Black fog

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Geometry - Crystal Shapes (Icosahedrons)
    const geometry = new THREE.IcosahedronGeometry(10, 1); // "Crystal" shape
    const material = new THREE.MeshPhysicalMaterial({
        color: 0x4361EE, // Royal Sapphire Blue
        metalness: 0.1,
        roughness: 0.1,
        transmission: 0.9,
        thickness: 1.0,
        envMapIntensity: 1.0,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1
    });

    const crystal = new THREE.Mesh(geometry, material);
    crystal.position.set(15, 0, -10); // Offset to right for Hero section
    scene.add(crystal);

    // Wireframe overlay for "structure"
    const wireframeGeometry = new THREE.WireframeGeometry(geometry);
    const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.3 });
    const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
    crystal.add(wireframe);

    // Particles (Dust Motes)
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        color: 0xffffff,
        transparent: true,
        opacity: 0.5
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2); // Soft white light
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x4361EE, 3, 100); // Royal Blue light
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const cursorLight = new THREE.PointLight(0xFFD700, 2, 50); // Luxury Gold cursor light
    scene.add(cursorLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

        // Move the cursor light
        const vector = new THREE.Vector3(mouseX, mouseY, 0.5);
        vector.unproject(camera);
        const dir = vector.sub(camera.position).normalize();
        const distance = -camera.position.z / dir.z;
        const pos = camera.position.clone().add(dir.multiplyScalar(distance));

        // Limit light movement to a reasonable range
        gsap.to(cursorLight.position, {
            x: pos.x * 0.5,
            y: pos.y * 0.5,
            z: 10,
            duration: 0.5
        });

        // Parallax effect on crystal
        gsap.to(crystal.rotation, {
            y: mouseX * 0.5,
            x: -mouseY * 0.5,
            duration: 1
        });
    });

    // Handle Resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);

        crystal.rotation.y += 0.002;
        crystal.rotation.z += 0.001;
        particlesMesh.rotation.y -= 0.0005;

        renderer.render(scene, camera);
    }
    animate();
}
