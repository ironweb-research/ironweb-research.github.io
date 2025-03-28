'use client'

import React from 'react';
import data_en from '@/lib/data_en.json';
import data_cn from '@/lib/data_cn.json';
import Card from '@/app/_components/main_frame/card';

interface BackgroundProps {
  language: string;
}

const Services: React.FC<BackgroundProps> = ({ language }) => {
  const { HomePage } = language === 'en' ? data_en: data_cn;
  const { story } = HomePage;

  return (
    <div>
      <h1 className="title">{HomePage.title}</h1>
      <a className="title">{HomePage.title}</a>
      <div className="title">
        <p className="feature-header">{HomePage.hero.description}</p>
      </div>
      <div className="story">
        <div className="flex flex-col">
          <h2 className="card-name text-6xl">{story.title.prefix}</h2><br></br>
          <h3 className="text-4xl">{story.title.suffix}</h3><br></br>
          <p className="card-description text-3xl text-left">{story.QuestionContact}</p>
        </div>

        <div className="flex flex-wrap items-start justify-start mt-16 mb-16 md:mb-12">
          {Object.values(story.items).map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3">
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