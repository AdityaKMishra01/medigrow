import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import '../../public/style.css'

const Model = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    // bg color
    renderer.setClearColor(0xcacaca,1)

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    scene.add(directionalLight);

    // GLTF Model Loader
    const loader = new GLTFLoader();
    loader.load(
      '/model/scene.gltf', // Path to the .gltf file in your public folder
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(2,2,2); // Adjust the scale of the model if necessary
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error('An error occurred while loading the model', error);
      }
    );

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      controls.dispose();
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div className='models'>
    <div className="modl3d" ref={mountRef}></div>
    <div className="info">
        <ul>
            <li><strong>2 Fingur</strong>,for zoom in or zoom out.</li>
            <li><strong>Double Tap</strong>,for rotation.</li>
        </ul>
    </div>
  </div>;
};

export default Model;
