// Privacy Statement - main
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPages, getPageByFilename } from "@/lib/api";
import Container from "@/app/_components/container";
import SubpageHeader from "@/app/_components/main_frame/subpage-header";
import { SectionSeparator } from "@/app/_components/main_frame/section-separator";
import { PostBody } from "@/app/_components/post_generation/post-body";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPageByFilename(params.lang, "_privacy");
  if (!post) {
    return notFound();
  }
  return (
    <main>
      <Container>
        <SubpageHeader />
        <SectionSeparator />
        <article className="mb-32">
          <PostBody content={post.content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    lang: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPageByFilename(params.lang, "_privacy");

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Welcome to our site.`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPages("_privacy");

  return posts.map((post) => ({
    lang: post.slug,
  }));
}