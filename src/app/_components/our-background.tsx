import data from '@/lib/data_en.json';
import Card from '@/app/_components/main_frame/card';

const Background: React.FC = () => {
  const { HomePage } = data;
  const { background } = HomePage;

  return (
    <div>
      <div className="bg-gray-100 p-2 dark:bg-white/10">
        <div className="rounded-xl bg-white p-10 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
          <div className="space-y-6">
            <p className="ml-10 mr-10 lg:text-7xl lg:ml-16 lg:mr-16 text-6xl text-center text-pretty svg-element">{background.description}</p>
          </div>
        </div> {/* // end of box */}
      </div>

      &nbsp;       {/* //focus */}

      <div className="bg-gray-100 p-2 dark:bg-white/10">
        <div className="rounded-xl bg-white p-10 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
          <div className="space-y-10">
            <div className="ml-10 mr-10">
              <p className="lg:text-6xl text-3xl text-left text-pretty">{background.aboutus.focus}</p>
            </div>
            <ul className="space-y-3">
              <li className="flex-row space-y-6">
                {Object.values(background.aboutus.items).map((item, index) => (
                <div key={index} className="flex ml-10">
                  <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
                  <path d="M8 11.5L10.5 14L14 8" className="stroke-sky-800 dark:stroke-sky-300" />
                  </svg>

                  <p className="ml-6 text-3xl text-left text-pretty">{item.writeup}</p>

                </div>   
                )) 
                }
              </li>
            </ul>
          </div>
        </div> {/* // end of box */}

      </div>

      &nbsp;       {/* //committment*/}

      <div className="bg-gray-100 p-2 dark:bg-white/10">
        <div className="rounded-xl bg-white p-10 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
          <div className="space-y-6">
          <p className="ml-10 mr-10 lg:text-5xl text-3xl text-center text-pretty">{background.commitment}</p>
          </div>
        </div> {/* // end of box */}

      </div>

      &nbsp;       {/* //helpyou*/}
      

      <div className="bg-gray-100 p-2 dark:bg-white/10">
        <div className="rounded-xl bg-white p-10 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
          <div className="space-y-6">
          <p className="ml-10 mr-10 text-3xl text-center text-pretty">{background.helpyou}</p>
          </div>
        </div> {/* // end of box */}
      </div>
      &nbsp;       {/* //gettoknow*/}
      <div className="bg-gray-100 p-2 dark:bg-white/10">
        <div className="rounded-xl bg-white p-10 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
          <p className="mb-3">Get to know us?</p>
          <hr className="my-6 w-full border-(--pattern-fg)" />
          <p className="mb-3 text-3xl text-left">{background.onboard}</p>


        </div> {/* // end of box */}

      </div>


      <div>
        <div className="flex flex-wrap features-start justify-start mt-16 mb-16 md:mb-12">
          {Object.values(background.features).map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
          <Card 
            name={feature.title} 
            summary={""} 
            description={feature.description} 
          />
        </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Background;