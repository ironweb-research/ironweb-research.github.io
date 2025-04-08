// components/ContentRenderer.tsx
import React from 'react';
import { MDXProvider } from '@mdx-js/react';

interface ContentRendererProps {
  content: React.ReactNode;
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {
  return (
    <MDXProvider>
      <div>{content}</div>
    </MDXProvider>
  );
};

export default ContentRenderer;

// // 'use client'

// // components/ContentRenderer.tsx
// // import React from 'react';
// import { MDXProvider } from '@mdx-js/react';
// import matter from 'gray-matter';
// import { MDXRemote } from "next-mdx-remote/rsc";
// import { getPageByFilename } from "@/lib/api";


// // interface ContentRendererProps {
// //   content: React.ReactNode;
// // }

// type Props = {
//   mdxFilename: string,
//   mdxFliePath: string
// };


// export function ContentRenderer({ mdxFilename, mdxFliePath }: Props ) {
//   const post = getPageByFilename(mdxFilename, mdxFliePath);

//   return (
//     <div>
//       <MDXRemote source={post.content || ""}  />
//     </div>
//   );
// };

// export default ContentRenderer;



// // graymatter story

// // 'use client'

// // // components/ContentRenderer.tsx
// // // import React from 'react';
// // import { MDXProvider } from '@mdx-js/react';
// // import matter from 'gray-matter';
// // import { MDXRemote } from "next-mdx-remote/rsc";

// // // interface ContentRendererProps {
// // //   content: React.ReactNode;
// // // }

// // type Props = {
// //   content: string;
// // };


// // export function ContentRenderer({ content }: matter.GrayMatterFile<string> ) {
// //   return (
// //     <div>

// //       <MDXRemote source={content || ""}  />
// //     </div>
// //   );
// // };

// // export default ContentRenderer;