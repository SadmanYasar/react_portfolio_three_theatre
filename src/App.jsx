import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, ScrollControls, Scroll, useScroll } from "@react-three/drei";
import { getProject, val } from "@theatre/core";
import theatreState from "./scrollState2.json";
import { SheetProvider, PerspectiveCamera, useCurrentSheet, editable as e } from "@theatre/r3f";

import { Vector3, BufferGeometry, Float32BufferAttribute, PointsMaterial, Points, TextureLoader } from "three";
import Cubes from "./components/Cubes";
import Lights from "./components/Lights";
import Environment from "./components/Environment";
import Stars from "./components/Cubes/Stars"
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import TechStacks from "./components/Sections/TechStacks";

function Scene() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();
  const { gl, scene } = useThree();

  useEffect(() => {
    console.clear();
    console.log('%cMade with Theatre.js, Framer Motion and React Three Fiber by Sadman Yasar Sayem', 'color: yellow;');
    console.log('%cHire Me on Upwork https://www.upwork.com/freelancers/~01cfd344d945d1f282', 'color: yellow;');
  }, []);

  // our callback will run on every animation frame
  useFrame(() => {
    // the length of our sequence
    const sequenceLength = val(sheet.sequence.pointer.length);
    // update the "position" of the playhead in the sequence, as a fraction of its whole length
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  // const bgColor = "#FF0000";

  // Create star positions using the helper function
  // const starPositions = generateStarPositions(6000); // Change the number of stars to 6000

  return (
    <>
      {/* <color theatreKey="BG" attach="background" args={[bgColor]} /> */}
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
      <Cubes />
      <Environment />

      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 0, 0.05]}
        fov={90}
        near={0.01}
        far={10000}
      />
    </>
  );
}

export default function App() {
  const sheet = getProject("Fly Through", { state: theatreState }).sheet("Scene");

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
            <TechStacks />
            <section className="w-screen min-h-screen opacity-50">
              Projects
            </section>
            <section className="w-screen opacity-50">
              Contact
            </section>
            <section className="w-screen text-center">
              @ 2023 Copyright Sadman Yasar Sayem
            </section>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}
