import React from "react";
import { BackSide } from "three";

export default () => {
    return (
        <mesh>
            <sphereBufferGeometry args={[10, 100, 100]} attach="geometry" />
            <meshStandardMaterial
                color='#000000'
                attach="material"
                side={BackSide}
                metalness={0.58}
            />
        </mesh>
    );
};