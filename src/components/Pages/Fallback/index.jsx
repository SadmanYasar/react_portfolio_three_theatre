import React from "react";
import Lottie from 'react-lottie';
import animationData from '../../../lotties/rocket-loading.json';

export default function Fallback() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    return (
        <section className="w-screen min-h-screen flex justify-center items-center">
            <div>
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={400}
                />
            </div>
        </section>
    )
};