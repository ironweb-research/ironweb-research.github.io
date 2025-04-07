import { Post } from "@/interfaces/post";
import { REPO_NAME } from '@/lib/constants';
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

function useBasePath(): string {
  return process.env.GITHUB_ACTIONS ? REPO_NAME : '';
} //add repo prod, dev at localhost to ignore

function postsDirectory(pathtoMDX: string): string{
  fs.readdir((join(process.cwd(), pathtoMDX)), (err) => {
    if (err) {
      console.error('Error reading directory:', err);
    }
  })
  return join(process.cwd(), pathtoMDX);
}

export function getPostSlugs(pathtoMDX: string) {
  return fs.readdirSync(postsDirectory(pathtoMDX));
} // returns filename with ext

export function getPostBySlug(slug: string, pathtoMDX: string){
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory(pathtoMDX), `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const BASE_PATH = useBasePath();

  // Update URLs based on the environment
  data.coverImage = data.coverImage.startsWith(BASE_PATH) ? data.coverImage : `${BASE_PATH}${data.coverImage}`;
  data.author.picture = data.author.picture.startsWith(BASE_PATH) ? data.author.picture : `${BASE_PATH}${data.author.picture}`;
  data.ogImage.url = data.ogImage.url.startsWith(BASE_PATH) ? data.ogImage.url : `${BASE_PATH}${data.ogImage.url}`;
  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(pathtoMDX: string): Post[] {
  const slugs = getPostSlugs(pathtoMDX); // returns list of md/mdx filenames with ext
  const posts = slugs.map((slug) => getPostBySlug(slug, pathtoMDX));
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}