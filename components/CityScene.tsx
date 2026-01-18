"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

interface MeshWithRotationValue extends THREE.Mesh {
    rotationValue?: number;
}

export default function CityScene(): React.ReactNode {
    const containerRef = useRef<HTMLDivElement>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const cityRef = useRef<THREE.Object3D | null>(null);
    const smokeRef = useRef<THREE.Object3D | null>(null);
    const townRef = useRef<THREE.Object3D | null>(null);
    const animationIdRef = useRef<number | null>(null);
    const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const createCarPosRef = useRef<boolean>(true);

    useEffect(() => {
        if (!containerRef.current) return;

        const uSpeed = 0.001;
        const setcolor = 0xf02050;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        if (window.innerWidth > 800) {
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            renderer.shadowMap.needsUpdate = true;
        }

        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Camera - starts from top view
        const camera = new THREE.PerspectiveCamera(
            20,
            window.innerWidth / window.innerHeight,
            1,
            500
        );
        // Start from top view - close enough to see city through fog
        camera.position.set(0, 14, 0.1);
        cameraRef.current = camera;
        
        // Animate camera from top down to side view
        gsap.to(camera.position, {
            x: 0,
            y: 2,
            z: 14,
            duration: 3,
            ease: "power1.inOut",
            delay: 0.3
        });

        // Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(setcolor);
        scene.fog = new THREE.Fog(setcolor, 10, 16);
        sceneRef.current = scene;

        // Groups
        const city = new THREE.Object3D();
        const smoke = new THREE.Object3D();
        const town = new THREE.Object3D();
        cityRef.current = city;
        smokeRef.current = smoke;
        townRef.current = town;

        // Helper functions
        function mathRandom(num = 8): number {
            return -Math.random() * num + Math.random() * num;
        }

        let setTintNum = true;
        function setTintColor(): number {
            if (setTintNum) {
                setTintNum = false;
                return 0x000000;
            } else {
                setTintNum = true;
                return 0x000000;
            }
        }

        // Create City
        function init(): void {
            const segments = 2;
            for (let i = 1; i < 100; i++) {
                // BoxGeometry with base size 1x1x1 - scaling will determine final size
                const geometry = new THREE.BoxGeometry(1, 1, 1, segments, segments, segments);
                const material = new THREE.MeshStandardMaterial({
                    color: setTintColor(),
                    wireframe: false,
                    flatShading: false,
                    side: THREE.DoubleSide,
                });
                const wmaterial = new THREE.MeshLambertMaterial({
                    color: 0xffffff,
                    wireframe: true,
                    transparent: true,
                    opacity: 0.03,
                    side: THREE.DoubleSide,
                });

                const cube: MeshWithRotationValue = new THREE.Mesh(geometry, material);
                const wfloor = new THREE.Mesh(geometry, wmaterial);
                const floor = new THREE.Mesh(geometry, material);

                cube.add(wfloor);
                cube.castShadow = true;
                cube.receiveShadow = true;
                cube.rotationValue = 0.1 + Math.abs(mathRandom(8));

                floor.scale.y = 0.05;
                cube.scale.y = 0.1 + Math.abs(mathRandom(8));

                const cubeWidth = 0.9;
                cube.scale.x = cube.scale.z = cubeWidth + mathRandom(1 - cubeWidth);

                // Position buildings - y should be half of scale.y to sit on ground
                cube.position.x = Math.round(mathRandom());
                cube.position.z = Math.round(mathRandom());
                cube.position.y = cube.scale.y / 2;

                floor.position.set(cube.position.x, 0, cube.position.z);

                town.add(floor);
                town.add(cube);
            }

            // Smoke particles
            const gmaterial = new THREE.MeshToonMaterial({
                color: 0xffff00,
                side: THREE.DoubleSide,
            });
            const gparticular = new THREE.CircleGeometry(0.01, 3);
            const aparticular = 5;

            for (let h = 1; h < 300; h++) {
                const particular = new THREE.Mesh(gparticular, gmaterial);
                particular.position.set(
                    mathRandom(aparticular),
                    mathRandom(aparticular),
                    mathRandom(aparticular)
                );
                particular.rotation.set(mathRandom(), mathRandom(), mathRandom());
                smoke.add(particular);
            }

            // Ground plane
            const pmaterial = new THREE.MeshPhongMaterial({
                color: 0x000000,
                side: THREE.DoubleSide,
                opacity: 0.9,
                transparent: true,
            });
            const pgeometry = new THREE.PlaneGeometry(60, 60);
            const pelement = new THREE.Mesh(pgeometry, pmaterial);
            pelement.rotation.x = (-90 * Math.PI) / 180;
            pelement.position.y = -0.001;
            pelement.receiveShadow = true;

            city.add(pelement);
        }

        // Create cars (moving lines)
        function createCars(cScale = 2, cPos = 20, cColor = 0xffff00): void {
            const cMat = new THREE.MeshToonMaterial({
                color: cColor,
                side: THREE.DoubleSide,
            });
            const cGeo = new THREE.BoxGeometry(1, cScale / 40, cScale / 40);
            const cElem = new THREE.Mesh(cGeo, cMat);
            const cAmp = 3;

            if (createCarPosRef.current) {
                createCarPosRef.current = false;
                cElem.position.x = -cPos;
                cElem.position.z = mathRandom(cAmp);

                gsap.to(cElem.position, {
                    x: cPos,
                    repeat: -1,
                    yoyo: true,
                    delay: mathRandom(3),
                    duration: 3,
                });
            } else {
                createCarPosRef.current = true;
                cElem.position.x = mathRandom(cAmp);
                cElem.position.z = -cPos;
                cElem.rotation.y = (90 * Math.PI) / 180;

                gsap.to(cElem.position, {
                    z: cPos,
                    repeat: -1,
                    yoyo: true,
                    delay: mathRandom(3),
                    duration: 5,
                    ease: "power1.inOut",
                });
            }
            cElem.receiveShadow = true;
            cElem.castShadow = true;
            cElem.position.y = Math.abs(mathRandom(5));
            city.add(cElem);
        }

        function generateLines(): void {
            for (let i = 0; i < 60; i++) {
                createCars(0.1, 20);
            }
        }

        // Lights - exact original values
        const ambientLight = new THREE.AmbientLight(0xffffff, 4);
        const lightFront = new THREE.SpotLight(0xffffff, 20, 10);
        const lightBack = new THREE.PointLight(0xffffff, 0.5);

        lightFront.rotation.x = (45 * Math.PI) / 180;
        lightFront.rotation.z = (-45 * Math.PI) / 180;
        lightFront.position.set(5, 5, 5);
        lightFront.castShadow = true;
        lightFront.shadow.mapSize.width = 6000;
        lightFront.shadow.mapSize.height = lightFront.shadow.mapSize.width;
        lightFront.penumbra = 0.1;
        lightBack.position.set(0, 6, 0);

        smoke.position.y = 2;

        scene.add(ambientLight);
        city.add(lightFront);
        scene.add(lightBack);
        scene.add(city);
        city.add(smoke);
        city.add(town);

        // Grid Helper
        const gridHelper = new THREE.GridHelper(60, 120, 0xff0000, 0x000000);
        city.add(gridHelper);

        // Initialize
        generateLines();
        init();

        // Animation - rotates city, not camera
        function animate(): void {
            animationIdRef.current = requestAnimationFrame(animate);

            // City rotation based on mouse - exact original logic
            city.rotation.y -= (mouseRef.current.x * 8 - camera.rotation.y) * uSpeed;
            city.rotation.x -= (-mouseRef.current.y * 2 - camera.rotation.x) * uSpeed;

            // Clamp rotation exactly as original
            if (city.rotation.x < -0.05) city.rotation.x = -0.05;
            else if (city.rotation.x > 1) city.rotation.x = 1;

            smoke.rotation.y += 0.01;
            smoke.rotation.x += 0.01;

            camera.lookAt(city.position);
            renderer.render(scene, camera);
        }

        animate();

        // Event handlers
        function onMouseMove(event: MouseEvent): void {
            mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        }

        function onDocumentTouchStart(event: TouchEvent): void {
            if (event.touches.length === 1) {
                // Normalize touch coordinates same as mouse
                mouseRef.current.x = (event.touches[0].pageX / window.innerWidth) * 2 - 1;
                mouseRef.current.y = -(event.touches[0].pageY / window.innerHeight) * 2 + 1;
            }
        }

        function onDocumentTouchMove(event: TouchEvent): void {
            if (event.touches.length === 1) {
                // Normalize touch coordinates same as mouse
                mouseRef.current.x = (event.touches[0].pageX / window.innerWidth) * 2 - 1;
                mouseRef.current.y = -(event.touches[0].pageY / window.innerHeight) * 2 + 1;
            }
        }

        function onWindowResize(): void {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        window.addEventListener("mousemove", onMouseMove, false);
        window.addEventListener("touchstart", onDocumentTouchStart, { passive: true });
        window.addEventListener("touchmove", onDocumentTouchMove, { passive: true });
        window.addEventListener("resize", onWindowResize, false);

        // Cleanup
        return () => {
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("touchstart", onDocumentTouchStart);
            window.removeEventListener("touchmove", onDocumentTouchMove);
            window.removeEventListener("resize", onWindowResize);

            if (rendererRef.current && containerRef.current) {
                containerRef.current.removeChild(rendererRef.current.domElement);
                rendererRef.current.dispose();
            }
        };
    }, []);

    return <div ref={containerRef} className="city-canvas" />;
}
