'use client'

import React from 'react';
import { motion } from 'framer-motion';

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
  const text = background.overview.description.split(" ");

  return (
    <div>
      
         <motion.div
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
          >

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

      <div className="bg-gray-100 p-2 dark:bg-white/10">
        <div className="rounded-xl bg-white p-10 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
          <div className="space-y-6">
            <div className="w-max h-24 md:w-auto md:h-auto lg:text-7xl mb:text-5xl sm:text-5xl text-center">

            {text.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {word}{" "}
              </motion.span>
            ))}

{/*               
              {background.overview.description}
               */}
              <p className="svg-element">{background.overview.passion}</p>
            </div>
          </div>
        </div>
      </div>

      &nbsp;

      <Board items={items} />

      <div className="bg-gray-100 p-2 dark:bg-white/10">
        <div className="rounded-xl bg-white p-10 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
          <div className="flex flex-wrap features-start justify-start mt-16 mb-16 md:mb-12">
            {Object.values(background.objectives).map((objective, index) => (
              <div key={index} className="w-full">
              <Card 
                name={objective.title} 
                summary={""} 
                description={objective.description} 
              />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;