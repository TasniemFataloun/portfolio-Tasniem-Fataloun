import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeCanvas = () => {
  const canvasRef = useRef();

  useEffect(() => {
    if (!canvasRef.current) return; // Ensure the canvas is available

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(4, 5, 4);
    scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Load HDR texture
    const textureLoader = new THREE.TextureLoader();
    const environmentMap = textureLoader.load(
      "static/environmentMaps/blockadesLabsSkybox/anime_art_style_japan_streets_with_cherry_blossom_.jpg"
    );
    environmentMap.colorSpace = THREE.SRGBColorSpace;
    environmentMap.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = environmentMap;
    scene.environment = environmentMap;

    // Controls
    const controls = new OrbitControls(camera, canvasRef.current);
    controls.target.y = 3.5;
    controls.enableDamping = true;
    controls.listenToKeyEvents(window); // Ensure controls respond to key events globally

    canvasRef.current.style.pointerEvents = "auto"; // Enable pointer events on canvas

    // Resize function
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </>
  );
};

export default ThreeCanvas;
