// components/ContentRenderer.tsx
import { useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import enContent from '../content/en_data.mdx';
import cnContent from '../content/cn_data.mdx';

const ContentRenderer = () => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'cn' : 'en'));
  };

  const content = language === 'en' ? enContent : cnContent;

  return (
    <MDXProvider>
      <div>
        <button onClick={toggleLanguage}>
          {language === 'en' ? 'Switch to Chinese' : 'Switch to English'}
        </button>
        {/* <div>{content}</div> */}
      </div>
    </MDXProvider>
  );
};

export default ContentRenderer;