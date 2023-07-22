import React, {
    useMemo,
    useRef,
    useState,
    useEffect,
    useCallback
} from "react";
import { random } from "lodash";
import { useFrame } from "@react-three/fiber";

export default () => {
    const mesh = useRef();
    const time = useRef(0);

    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const isActiveRef = useRef(isActive);

    // position
    const position = useMemo(() => {
        return [random(-3.5, 3.5, true), random(-3.5, 3.5, true), random(-3.5, 3.5, true)];
    }, []);

    // random time mod factor
    const timeMod = useMemo(() => random(0.1, 4, true), []);

    const colors = ['#ffa11a', '#ffae21', '#ffbe40', '#f4442c', '#ff523a', '#00b35d', '#767574']

    // color
    const color = isHovered ? '#ffa11a' : (isActive ? '#f4442c' : colors[Math.floor(Math.random() * colors.length)]);

    //useEffect of the activeState
    useEffect(() => {
        isActiveRef.current = isActive;
    }, [isActive]);

    // raf loop
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
            onClick={e => onClick(e)}
            onPointerOver={e => onHover(e, true)}
            onPointerOut={e => onHover(e, false)}
        >
            <icosahedronBufferGeometry attach="geometry" args={[0.005]} />
            <meshStandardMaterial
                attach="material"
                color={color}
                roughness={0.5}
                metalness={0.2}
            />
        </mesh>
    );
};