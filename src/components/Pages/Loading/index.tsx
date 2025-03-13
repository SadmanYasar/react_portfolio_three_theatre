import React, { useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../../../lotties/rocket-loading.json";
import { useProgress } from "@react-three/drei";
import { motion, useAnimation } from "framer-motion";

interface LoadingScreenProps {
  started?: boolean;
  onStarted?: () => void;
}

export default function LoadingScreen({
  started,
  onStarted,
}: LoadingScreenProps) {
  const { progress } = useProgress();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <section
      className={`w-screen min-h-screen flex justify-center items-center fixed top-0 left-0 bottom-0 right-0 transition-opacity z-[1] `}
    >
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </section>
  );
}
