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
          <div className="bg-gray-100 p-2 dark:bg-white/10">
            <div className="rounded-xl bg-slate-300 p-10 text-gray-700 dark:bg-gray-950/10 dark:text-gray-300 border">
              <div className="space-y-10 ml-10 mr-10">
                  <p className="lg:text-6xl md:text-5xl text-3xl text-left text-pretty">{item.focus}</p>
                  <ul className="space-y-3">
                    <li className="flex-row space-y-6">
                      {Object.values(item.focusArea).map((area, index) => (
                          area?.writeup && (
                            <div key={index} className="flex ml-10">
                              <div className="svg-element">
                                <TickCircle />
                              </div>
                              <p className="ml-6 text-3xl text-left text-pretty">{area.writeup}</p>
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