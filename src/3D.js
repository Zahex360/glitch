(() => {
  let screensaverActive = false;
  let interactionTimeout;
  let scene, camera, renderer, knot;

  const showScreensaver = () => {
    const screensaverContainer = document.getElementById('screensaver-container');
    screensaverContainer.style.display = 'block';

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    screensaverContainer.appendChild(renderer.domElement);

    const createGeometry = () => {
      const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      knot = new THREE.Mesh(geometry, material);
      scene.add(knot);
    };

    createGeometry();

    camera.position.z = 30;

    const animate = () => {
      requestAnimationFrame(animate);

      if (knot) {
        knot.rotation.x += 0.01;
        knot.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();
    screensaverActive = true;
  };

  const hideScreensaver = () => {
    const screensaverContainer = document.getElementById('screensaver-container');
    screensaverContainer.style.display = 'none';
    screensaverContainer.innerHTML = '';
    screensaverActive = false;
  };

  const resetInteractionTimer = () => {
    if (interactionTimeout) clearTimeout(interactionTimeout);
    interactionTimeout = setTimeout(showScreensaver, 60000);
  };

  const onUserInteraction = () => {
    if (screensaverActive) {
      hideScreensaver();
      resetInteractionTimer();
    } else resetInteractionTimer();
  };

  document.addEventListener('mousemove', onUserInteraction);
  document.addEventListener('keydown', onUserInteraction);

  resetInteractionTimer();
})();
