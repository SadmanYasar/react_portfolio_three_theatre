import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { Bloom } from '@react-three/postprocessing';
import {
  Html,
  ScrollControls,
  Scroll,
  useScroll,
  Loader,
  Stats,
  Center,
  Fisheye,
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  CameraControls,
} from "@react-three/drei";
import { getProject, val } from "@theatre/core";
// import theatreState from "./scrollState2.json";
import theatreState from "./scrollState3.json";
import {
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
  editable as e,
} from "@theatre/r3f";

import {
  Vector3,
  BufferGeometry,
  Float32BufferAttribute,
  PointsMaterial,
  Points,
  TextureLoader,
  SphereGeometry,
} from "three";
import Cubes from "./components/Cubes";
import Lights from "./components/Lights";
import Environment from "./components/Environment";
import Stars from "./components/Cubes/Stars";
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import TechStacks from "./components/Sections/TechStacks";
import Projects from "./components/Sections/Projects";
import { TypeAnimation } from "react-type-animation";
import LoadingScreen from "./components/Pages/Loading";
import { useDebounce } from "@uidotdev/usehooks";

extend({ SphereGeometry });

const vec = new Vector3();

function Rig() {
  return useFrame(({ camera, pointer }) => {
    vec.set(
      pointer.x * 0.005, // X: Slight left/right movement
      pointer.y * 0.005, // Y: Slight up/down movement
      0.05 // Z: Fixed
    );

    //rotate camera on z axis using sin and cos
    camera.position.lerp(vec, 0.01);
    camera.lookAt(0, 0, 0);
  });
}

function Scene() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();
  const { gl, scene } = useThree();

  useEffect(() => {
    console.clear();
    console.log(
      "%cMade with Theatre.js, Framer Motion and React Three Fiber by Sadman Yasar Sayem",
      "color: yellow;"
    );
    console.log(
      "%cHire Me on Upwork https://www.upwork.com/freelancers/~01cfd344d945d1f282",
      "color: yellow;"
    );
  }, []);

  // our callback will run on every animation frame
  useFrame(() => {
    // the length of our sequence
    const sequenceLength = val(sheet.sequence.pointer.length);
    // update the "position" of the playhead in the sequence, as a fraction of its whole length
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  const bgColor = "#000000";

  // Create star positions using the helper function
  // const starPositions = generateStarPositions(6000); // Change the number of stars to 6000

  return (
    <>
      <color attach="background" args={[bgColor]} />
      {/* <fog theatreKey="Fog" attach="fog" color={bgColor} near={-4} far={40} /> */}
      {/* <ambientLight intensity={0.5} /> */}
      {/* <directionalLight theatreKey="Sun" position={[-5, 5, -5]} intensity={1.5} /> */}

      {/* Render 6000 stars as points */}
      {/* <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
        attachObject={['attributes', 'position']}
        count={starPositions.length / 3}
        array={new Float32Array(starPositions)}
        itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={4}
        color={0xaaaaaa}
        map={new TextureLoader().load('/star3.png')} // Replace with the actual path to your star image
        alphaTest={0.5}
      />
      </points> */}
      <Lights />
      {/* <ambientLight intensity={0.85} /> */}
      <directionalLight position={[150, 150, 150]} intensity={2} />
      <Cubes />
      <Environment />
      <Bloom mipmapBlur luminanceThreshold={1} />
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        fov={90}
        near={0.01}
        far={10000}
        position={[0, 0, 5]} // Set initial position to face the Z axis
        rotation={[0, Math.PI, 0]} // Rotate the camera to face the Z axis
      />
    </>
  );
}

export default function App() {
  const sheet = getProject("Fly Through", { state: theatreState }).sheet(
    "Scene"
  );

  return (
    <>
      <Canvas>
        <ScrollControls pages={4}>
          <SheetProvider sheet={sheet}>
            <Scene />
          </SheetProvider>
          <Scroll html>
            <Hero />
            <About />
            <Projects />
            <TechStacks />
            <section className="flex flex-col flex-wrap items-center justify-center w-screen max-w-5xl min-h-screen px-4 mx-auto">
              <h1 className="inline-block text-3xl font-normal md:text-4xl">
                <span className="font-bold text-transparent animate-text bg-clip-text bg-linear-to-r from-teal-300 via-purple-500 to-orange-500">
                  <TypeAnimation
                    sequence={[
                      "© Sadman Yasar Sayem 2025",
                      1000, // Waits 1s
                      "Made with Theatre.js, Framer Motion and React Three Fiber",
                      2000, // Waits 2s
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                  />
                </span>
              </h1>
            </section>
          </Scroll>
        </ScrollControls>
        {/* <Rig /> */}
        {process.env.NODE_ENV === "dev" && (
          <>
            <axesHelper />
            <Stats />
            <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
              <GizmoViewport labelColor="white" axisHeadScale={1} />
            </GizmoHelper>
          </>
        )}
      </Canvas>
    </>
  );
}
