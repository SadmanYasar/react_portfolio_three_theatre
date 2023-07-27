import { useEffect, useRef, useState } from "react";
import { motion, useScroll, wrap, useSpring, useVelocity, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

const techIcons = ['🚀', '🚗', '⚛', '🏀', '🥎', '🚀', '🚗', '⚛', '🏀', '🥎'];

function ParallaxText({ children, baseVelocity = 100 }) {
    const [numOfChildren, setNumOfChildren] = useState(4); // Default number of children
    const scrollerRef = useRef(null);

    useEffect(() => {
        // Calculate the number of times to repeat the child text dynamically
        const scrollerWidth = scrollerRef.current.offsetWidth;
        const textWidth = scrollerWidth / techIcons.length;
        const newNumOfChildren = Math.ceil(textWidth / children.length);
        setNumOfChildren(newNumOfChildren);

        // Initialize ScrollSmoother with the provided options
        const smoother = ScrollSmoother.create({
            content: scrollerRef.current,
            wrapper: scrollerRef.current.parentNode,
            smooth: 1,
            effects: true,
            normalizeScroll: true,
            ignoreMobileResize: true,
        });

        return () => {
            smoother.kill(); // Cleanup ScrollSmoother when the component unmounts
        };
    }, [children.length]);

    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    const totalWidth = (-100 / techIcons.length) * numOfChildren;

    const x = useTransform(baseX, (v) => `${wrap(0, totalWidth, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax">
            <motion.div className="scroller" ref={scrollerRef} style={{ x }}>
                {Array.from({ length: numOfChildren }).map((_, index) => (
                    <span key={index}>{children}</span>
                ))}
            </motion.div>
        </div>
    );
}

export default function TechStacks() {
    return (
        <section className="w-screen min-h-screen font-fira">
            <ParallaxText baseVelocity={20}>R</ParallaxText>
        </section>
    );
}