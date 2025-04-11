'use client';

import { useState, useEffect } from 'react';
import LanguageSwitcher from '@/app/_components/language_handler/language-switcher';
import { useLanguage } from "@/app/_components/language_handler/languageContent";
import Container from "@/app/_components/container";
import MDXRender from '@/app/_components/post_generation/MDXRender';
import enContent from '@/lib/privacy_statement/en.mdx';
import cnContent from '@/lib/privacy_statement/cn.mdx';

const PrivacyPage = () => {
  const { language } = useLanguage();
  const [ContentComponent, setContentComponent] = useState<React.ElementType>(() => enContent); 

  useEffect(() => {
    language === 'en' ? setContentComponent(() => enContent) : setContentComponent(() => cnContent);
  }, [language]);

  return (
    <div>
      <main>
      <Container>
        <div className="prose prose-lg md:prose-lg lg:prose-lg mx-auto prose-headings:text-indigo-900 dark:prose-headings:text-slate-100">
          <div className="prose-a:text-blue-600 dark:prose-a:text-blue-300 dark:text-slate-300 prose dark:prose-invert">
          <MDXRender>
            <ContentComponent />
          </MDXRender>
          </div>
        </div>
      {/* <LanguageSwitcher /> */}
      </Container>
      </main>
    </div>
  );
};

export default PrivacyPage;