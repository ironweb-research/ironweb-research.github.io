'use client'

// components/ContentRenderer.tsx
// import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import matter from 'gray-matter';
import { MDXRemote } from "next-mdx-remote/rsc";

// interface ContentRendererProps {
//   content: React.ReactNode;
// }

type Props = {
  content: string;
};


export function ContentRenderer({ content }: Props ) {
  return (
    <div>

      <MDXRemote source={content || ""}  />
    </div>
  );
};

export default ContentRenderer;



// graymatter story

// 'use client'

// // components/ContentRenderer.tsx
// // import React from 'react';
// import { MDXProvider } from '@mdx-js/react';
// import matter from 'gray-matter';
// import { MDXRemote } from "next-mdx-remote/rsc";

// // interface ContentRendererProps {
// //   content: React.ReactNode;
// // }

// type Props = {
//   content: string;
// };


// export function ContentRenderer({ content }: matter.GrayMatterFile<string> ) {
//   return (
//     <div>

//       <MDXRemote source={content || ""}  />
//     </div>
//   );
// };

// export default ContentRenderer;