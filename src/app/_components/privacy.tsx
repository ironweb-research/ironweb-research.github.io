'use client'

import React from 'react';
// import {ContentRenderer} from '@/app/_components/language_handler/mdx_lang_renderer';



import { useLanguage } from "@/app/_components/language_handler/languageContent";



const Privacy: React.FC = () => {
  const { language } = useLanguage();
  const mdxFilename = language === 'en' ? "en.mdx": "cn.mdx";



  return (
    <div>
      {/* <ContentRenderer mdxFilename={mdxFilename} mdxFliePath="lib/privacy_statement/"/> */}

    </div>
  );
};

export default Privacy;