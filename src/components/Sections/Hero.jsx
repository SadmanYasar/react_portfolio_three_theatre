import { motion } from "framer-motion";
import { slideIn } from "../../../utils/motion";
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
    return (
        <section
            className="w-screen max-w-5xl min-h-screen mx-auto px-4 flex flex-col justify-center items-center flex-wrap">
            <h1 className="font-normal text-3xl md:text-4xl inline-block font-fira">I am <span className="animate-text font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-purple-500 to-orange-500">
                <TypeAnimation
                    sequence={[
                        'Sadman Yasar Sayem',
                        1000, // Waits 1s
                        'a Full Stack Developer',
                        2000, // Waits 2s
                        'building scalable systems 🚀',
                        2000,
                        () => {
                            console.log('Sequence completed');
                        },
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                />
            </span></h1>
        </section>
    );
}