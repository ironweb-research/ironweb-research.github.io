'use client'

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

interface OverviewProps {
  founding: string;
  hashtag: string;
}

const Overview: React.FC<OverviewProps> = ({ founding,  hashtag}) => {
  const text = founding.split(" ");
  const ref = useRef<HTMLDivElement>(null);
  const isVisible_textTyping = useIntersectionObserver(ref, { threshold: 0.1 });
  
  const textTyping = {
    initial: { opacity: 0 },
    animate: isVisible_textTyping ? { opacity: 1 } : { opacity: 0 },
    transition: { duration: 0.5, delay: isVisible_textTyping ? 0.1 : 0 }
  };

  return (
    <div>
      <motion.div ref={ref} {...textTyping}>

      <div className="rounded-xl bg-gray-100 p-2 dark:bg-white/10">
        <div className="rounded-xl bg-white p-10 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
          <div className="space-y-6">
            <div className="text-center text-dynamic-fontsize-1">
              {text.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={isVisible_textTyping ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: isVisible_textTyping ? index * 0.1 : 0 }}
                >
                  {word}{" "}
                </motion.span>
              ))}
              <br></br>
              <a className="svg-element bg-green-300/30 rounded-full italic font-extrabold text-sky-400 dark:text-teal-300">
              {hashtag}
              </a>
            </div>
          </div>
        </div>
      </div>
      </motion.div>


    </div>

  );
};

export default Overview;