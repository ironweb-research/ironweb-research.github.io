import data from '@/lib/data_en.json';
import Card from '@/app/_components/main_frame/card';

const Services: React.FC = () => {
  const { HomePage } = data;
  const { story } = HomePage;

  return (
    <div>
      <h1 className="title">{HomePage.title}</h1>
      <div className="title">
        <p className="feature-header">{HomePage.hero.description}</p>
      </div>
      <div className="story">
        <h2 className="card-name text-6xl">{story.title.prefix} {story.title.suffix}</h2>
        <p className="card-description text-3xl text-left">{story.description}</p>
        <div className="flex flex-wrap items-start justify-start mt-16 mb-16 md:mb-12">
          {Object.values(story.items).map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
          <Card 
            name={item.name} 
            summary={item.summary} 
            description={item.description} 
          />
        </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;