import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import Marquee from "react-fast-marquee";

function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
    return (
        <div className="parallax">
            <motion.div className="scroller animate-text font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-purple-500 to-orange-500" style={{ x }}>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
            </motion.div>
        </div>
    );
}

const logoUrls = [
    '/react-native.svg',
    '/graphql.svg',
    '/aws.svg',
    '/mongodb.svg',
    '/nodejs.svg',
    '/svelte.svg',
    '/tailwind.svg',
    '/prisma.svg',
    '/docker.svg',
    '/postgres.svg',
]

export default function TechStacks() {
    return (
        <>
            <div className="w-screen pt-12">
                <Marquee autoFill gradient gradientColor={[0, 0, 0]} speed={60}>
                    {logoUrls.map((logoUrl) => <img src={logoUrl} className="w-32 h-32 px-4 filter grayscale hover:filter-none" />)}
                </Marquee>
                <Marquee autoFill direction="right" gradient gradientColor={[0, 0, 0]}>
                    {logoUrls.map((logoUrl) => <img src={logoUrl} className="w-24 h-24 px-4 filter grayscale hover:filter-none" />)}
                </Marquee>
            </div>
        </>
    );
}

/* <section className="w-screen flex flex-col space-y-4 text-6xl uppercase font-bold">
            <ParallaxText baseVelocity={-1}>React Express GraphQL AWS AliCloud MongoDB Nodejs Selenium Cypress Docker Strapi</ParallaxText>
            <ParallaxText baseVelocity={1}>Next.js Three.js Astro Framer Motion Tailwind Linux SQL NoSQL Git React Native Ionic</ParallaxText>
        </section> */