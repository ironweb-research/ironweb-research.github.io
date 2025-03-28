// Board.tsx
import React from 'react';
import { TickCircle } from '@/app/_components/main_frame/svg_icon';


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
  items: { [key: string]: Item };
}

const Board: React.FC<BoardProps> = ({ items }) => {
  return (
    <div>
      {Object.entries(items).map(([key, item]) => (
        <div key={key} >
          &nbsp;
          <div className="rounded-xl bg-gray-300/10 p-2 dark:bg-white/10">
            <div className="rounded-xl bg-sky-300/10 p-10 text-black dark:bg-gray-950/10 dark:text-gray-300 border-2 border-blue-400/30 dark:border-teal-100 ">
              <div className="space-y-10 ml-1 mr-1 lg:ml-15 lg:mr-25 md:ml-20 md:mr-20 sm:ml-8 sm:mr-8">
                  <p className="text-dynamic-fontsize-2 text-center">{item.focus}</p>
                  <ul className="space-y-3">
                    <li className="flex-row space-y-6">
                      {Object.values(item.focusArea).map((area, index) => (
                          area?.writeup && (
                            <div key={index} className="flex ml-4">
                              <div className="svg-element">
                                <TickCircle />
                              </div>
                              <p className="ml-1 text-dynamic-fontsize-3 text-left">{area.writeup}</p>
                            </div>
                          )
                        ))}
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
      &nbsp;
    </div>

  );
};

export default Board;