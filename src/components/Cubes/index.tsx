import React, { useRef } from "react";
import { map } from "lodash";
import { useFrame } from "@react-three/fiber";

import Stars from "./Stars";
import { Object3D } from "three";

export default () => {
  const group = useRef<Object3D>(null);

  // useFrame(() => {
  //   if (group.current) {
  //     group.current.rotation.x += 0.001;
  //   }
  // });

  const nodesCubes = map(new Array(800), (el, i) => {
    return <Stars />;
  });

  return <group ref={group}> {nodesCubes} </group>;
};
