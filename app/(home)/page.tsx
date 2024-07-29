'use client'
import { useEffect, useState } from "react";
import Banner from "../(components)/banner/Banner";
import { TransitionEffect } from "../(components)/TransitionEffect";
import {motion} from 'framer-motion'
export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (event:any) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);
  return (
    <main>
      <Banner />
      <TransitionEffect />
      <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-blue-500 rounded-full pointer-events-none p-2"
      style={{
        x: position.x - 12,
        y: position.y - 12,
      }}
      animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
      transition={{
        duration: 3,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
      }}
    />
    </main>
  );
}
