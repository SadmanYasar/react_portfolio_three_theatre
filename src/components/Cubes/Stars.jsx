import * as THREE from 'three'
import React, {
    useMemo,
    useRef,
    useState,
    useEffect,
    useCallback
} from "react";
import { random } from "lodash";
import { useFrame, useLoader } from "@react-three/fiber";
// import img from '/star3.png'

export default () => {
    const mesh = useRef();
    const time = useRef(0);

    // const texture = useLoader(THREE.TextureLoader, img);

    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const isActiveRef = useRef(isActive);

    // position
    const position = useMemo(() => {
        return [random(-3.5, 3.5, true), random(-3.5, 3.5, true), random(-3.5, 3.5, true)];
    }, []);

    // random time mod factor
    const timeMod = useMemo(() => random(0.1, 4, true), []);

    const colors = ['#ffffff', '#00FFFF', '#e1affd', '#c175ff']

    // color
    const color = isHovered ? '#ffffff' : (isActive ? '#00FFFF' : colors[Math.floor(Math.random() * colors.length)]);

    //useEffect of the activeState
    useEffect(() => {
        isActiveRef.current = isActive;
    }, [isActive]);

    // ref loop
    useFrame(() => {
        mesh.current.rotation.y += 0.01 * timeMod;
        if (isActiveRef.current) {
            time.current += 0.03;
            mesh.current.position.y = position[1] + Math.sin(time.current) * 0.1;
            mesh.current.rotation.y += .05 * timeMod;
        }
    });

    // Events
    const onHover = useCallback(
        (e, value) => {
            e.stopPropagation();
            setIsHovered(value);
        },
        [setIsHovered]
    );

    const onClick = useCallback(
        e => {
            e.stopPropagation();
            setIsActive(v => !v);
        },
        [setIsActive]
    );

    return (
        <mesh
            ref={mesh}
            position={position}
        >
            <circleBufferGeometry attach="geometry" args={[0.005]} />
            <meshStandardMaterial
                attach="material"
                color={color}
                roughness={0.5}
                metalness={0.2}
            />
            {/* <planeBufferGeometry attach="geometry" args={[0.05, 0.05]} />
            <meshBasicMaterial attach="material" map={texture} /> */}
        </mesh>
    );
};