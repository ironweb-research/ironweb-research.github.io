'use client'

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { TickCircle, ResearchIcon, CommitmentIcon, HelpyouIcon, OnboardIcon } from "@/app/_components/main_frame/svg_icon";

interface FocusArea {
  focus_one?: { writeup: string };
  focus_two?: { writeup: string };
  focus_three?: { writeup: string };
}

interface Item {
  focus: string;
  focusArea: FocusArea;
}

interface BoardProps {
  allaboutus: { [key: string]: Item };
}

const Board: React.FC<BoardProps> = ({ allaboutus }) => {
  const svgs = [<ResearchIcon />, <CommitmentIcon />, <HelpyouIcon />, <OnboardIcon />];

  return (
    <div>

      {Object.entries(allaboutus).map(([boardkey, item], boardIndex) => {
        const refBoard = useRef<HTMLDivElement>(null);
        const refTextTyping = useRef<HTMLDivElement>(null);
        const refListDisplay = useRef<HTMLDivElement>(null);

        const isVisibleBoard = useIntersectionObserver(refBoard, { threshold: 0.1 });
        const isVisibleTextTyping = useIntersectionObserver(refTextTyping, { threshold: 0.1 });
        const isVisibleListDisplay = useIntersectionObserver(refListDisplay, { threshold: 0.1 });

        const staggeredBoard = {
          initial: { opacity: 0, y: 20 },
          animate: isVisibleBoard ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.5, delay: isVisibleBoard ? boardIndex * 0.5 : 0 }
        };

        const staggeredItem = {
          initial: { opacity: 0, y: 20 },
          animate: isVisibleListDisplay ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.5, delay: isVisibleListDisplay ? 0.5 : 0 }
        };

        const SvgComponent = svgs[boardIndex];

        return (
          <motion.div ref={refBoard} {...staggeredBoard} key={boardkey}>
            <div> 
              &nbsp;
              <div className="rounded-xl bg-gray-100 p-2 dark:bg-white/10">
                  <div className="rounded-xl bg-sky-300/10 p-10 text-black dark:bg-gray-950/10 dark:text-gray-300 border-2 border-blue-400/30 dark:border-teal-100">
                    <div className="space-y-16 ml-1 mr-1 lg:ml-16 lg:mr-16 md:ml-20 md:mr-20 sm:ml-8 sm:mr-8">
                      <div className="svg-element lg:size-96 justify-self-center sm:size-48">                                                
                        {svgs[boardIndex]}
                      </div>
              &nbsp;

                      <div ref={refTextTyping} className="text-dynamic-fontsize-2 text-center">
                        {item.focus.split(" ").map((word, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={isVisibleTextTyping ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.5, delay: isVisibleTextTyping ? index * 0.05 : 0 }}
                          >
                            {word}{" "}
                          </motion.span>
                        ))}
                      </div>
                      <motion.div ref={refListDisplay} {...staggeredItem}>
                        <ul className="space-y-3">
                          <li className="flex-row">
                            {Object.values(item.focusArea).map((area, index) => (
                              area?.writeup && (
                                <div key={index}>
                                  <motion.dl
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isVisibleListDisplay ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, delay: isVisibleListDisplay ? index * 0.5 : 0 }}
                                  >
                                    &nbsp;
                                    <div className="flex justify-start" >
                                      <div className="svg-element size-20 h-[1lh] shrink-0">
                                        <TickCircle />
                                      </div>
                                      <p className="text-dynamic-fontsize-3 text-left">{area.writeup}</p>
                                    </div>
                                  </motion.dl>
                                </div>
                              )
                            ))}
                          </li>
                        </ul>
                      </motion.div>
                    </div>
                  </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Board;