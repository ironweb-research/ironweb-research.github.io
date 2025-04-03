'use client'

import React, { useRef } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import { IRONWEB_SOLO_SVG } from "@/lib/constants";
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

interface OpeningProps {
  prefix: string;
  suffix: string;
}

const Opening: React.FC<OpeningProps> = ({ prefix,  suffix}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  const slideIn = {
    initial: { opacity: 0, y: 100 },
    animate: isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 },
    transition: { duration: 1 }
  };

  return (
    <div>
      <motion.div ref={ref} {...slideIn}>
       <div className="bg-gray-100 p-2 dark:bg-white/10">
          <div className="rounded-xl bg-white p-10 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
            <div className="space-y-6">
              <div className="ml-10 mr-10 lg:text-7xl lg:ml-16 lg:mr-16 text-6xl text-center text-pretty">
                {prefix}
              <Image 
                src={IRONWEB_SOLO_SVG}
                alt="Logo"
                width={200}
                height={200}
                className="svg-element justify-self-center" // Add "logo-image" class, if need to toggle logo
              />
              <p className="svg-element">{suffix}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Opening;