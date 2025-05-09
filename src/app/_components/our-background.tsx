// 'use client'

import { useRef } from 'react';
import { motion } from 'framer-motion';


import data_en from '@/lib/data_en.json';
import data_cn from '@/lib/data_cn.json';

import Card from '@/app/_components/main_frame/card';
import Board from '@/app/_components/main_frame/board';
import Overview from '@/app/_components/main_frame/overview';
import Opening from '@/app/_components/main_frame/opening';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

import { useLanguage } from "@/app/_components/language_handler/languageContent";

const Background = () => {
  const { language } = useLanguage();
  const { HomePage } = language === 'en' ? data_en: data_cn;
  const { background } = HomePage;
  const { opening } = background;
  const { overview } = background;
  const { allaboutus } = background;
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  
  
  const isVisible_slideIn = useIntersectionObserver(ref1, { threshold: 0.1 });
  const isVisible_textTyping = useIntersectionObserver(ref2, { threshold: 0.1 });
  const isVisible_staggeredList = useIntersectionObserver(ref3, { threshold: 0.1 });
  
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
      <Opening prefix={opening.prefix} suffix={opening.suffix} />
      &nbsp;

      <Overview founding={overview.founding} hashtag={overview.hashtag} />
      &nbsp;

      <Board allaboutus={allaboutus} />
      &nbsp;

      <motion.div ref={ref3} {...staggeredList}>

      <div className="bg-red-800 p-2 dark:bg-white/10">
        <div className="rounded-xl bg-white p-10 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
          <div className="flex flex-wrap justify-start mt-16 mb-16 md:mb-12">


            {Object.values(background.objectives).map((objective, index) => (
              <div key={index} className="w-full">
                <motion.div
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
                </motion.div>
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