import React, { useRef } from "react";
import { map } from "lodash";
import { useFrame } from "@react-three/fiber";

import Stars from "./Stars";

export default () => {
    const group = useRef();

    useFrame(() => {
        if (group.current) {
            group.current.rotation.y += 0.0001;
        }
    });

    const nodesCubes = map(new Array(1000), (el, i) => {
        return <Stars />;
    });

    return <group ref={group}> {nodesCubes} </group>;
};