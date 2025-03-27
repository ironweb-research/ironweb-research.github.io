'use client'

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

import data_en from '@/lib/data_en.json';
import data_cn from '@/lib/data_cn.json';

import Card from '@/app/_components/main_frame/card';
import Board from '@/app/_components/main_frame/board';

interface BackgroundProps {
  language: string;
}

const Background: React.FC<BackgroundProps> = ({ language }) => {
  const { HomePage } = language === 'en' ? data_en: data_cn;
  const { background } = HomePage;
  const { items } = background;
  const ref = useRef<HTMLDivElement>(null);
  const ref_two = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  
  
  const isVisible_slideIn = useIntersectionObserver(ref1, { threshold: 0.1 });
  const isVisible_textTyping = useIntersectionObserver(ref2, { threshold: 0.1 });
  const isVisible_staggeredList = useIntersectionObserver(ref3, { threshold: 0.1 });
  
  const text = background.overview.description.split(" ");

  const animation = {
    initial: { opacity: 0, y: 100 },
    animate: isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 },
    transition: { duration: 1 }
  };

  const animation_two = {
    initial: { opacity: 0, y: 100 },
    animate: isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 },
    transition: { duration: 1 }
  };


  
  const slideIn = {
    initial: { opacity: 0, y: 100 },
    animate: isVisible_slideIn ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 },
    transition: { duration: 1 }
  };

  const textTyping = {
    initial: { opacity: 0 },
    animate: isVisible_textTyping ? { opacity: 1 } : { opacity: 0 },
    transition: { duration: 0.5, delay: isVisible_textTyping ? 0.1 : 0 }
  };

  const staggeredList = {
    initial: { opacity: 0, y: 20 },
    animate: isVisible_staggeredList ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.5, delay: isVisible_staggeredList ? 0.1 : 0 }
  };

  return (
    <div>
      
      <motion.div ref={ref1} {...slideIn}>
        <div className="bg-gray-100 p-2 dark:bg-white/10">
          <div className="rounded-xl bg-white p-10 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
            <div className="space-y-6">
              <div className="ml-10 mr-10 lg:text-7xl lg:ml-16 lg:mr-16 text-6xl text-center text-pretty">{background.title.prefix}
              <p className="svg-element">{background.title.suffix}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      &nbsp;
      
      <motion.div ref={ref2} {...textTyping}>

      <div className="bg-gray-100 p-2 dark:bg-white/10">
        <div className="rounded-xl bg-white p-10 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
          <div className="space-y-6">
            <div className="text-center text-dynamic-board">
              {text.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={isVisible_textTyping ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: isVisible_textTyping ? index * 0.05 : 0 }}
                >
                  {word}{" "}
                </motion.span>
              ))}              
              <p className="svg-element italic font-extrabold text-sky-400 dark:text-teal-300">
                {background.overview.passion}
              </p>
            </div>
          </div>
        </div>
      </div>
      </motion.div>

      &nbsp;

      <Board items={items} />

      <motion.div ref={ref3} {...staggeredList}>

      <div className="bg-gray-100 p-2 dark:bg-white/10">
        <div className="rounded-xl bg-white p-10 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
          <div className="flex flex-wrap justify-start mt-16 mb-16 md:mb-12">


            {Object.values(background.objectives).map((objective, index) => (
              <div key={index} className="w-full">
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible_staggeredList ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: isVisible_staggeredList ? index * 0.5 : 0 }}
                >
              <Card 
                name={objective.title} 
                summary={""} 
                description={objective.description} 
              />
              </motion.li>
              </div>
            ))}
          


          
          </div>
        </div>
      </div>

    </motion.div>

    </div>
  );
};

export default Background;