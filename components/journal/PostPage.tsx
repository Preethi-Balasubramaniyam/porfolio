import Head from "next/head";
import Header from "@/components/common/Header";
import Essay from "./Essay";
import { getPost } from "./posts";

const PostPage = ({ slug }: { slug: string }) => {
  const post = getPost(slug);
  if (!post) return null;

  return (
    <>
      <Head>
        <title>{`${post.title} - Preethi Balasubramaniyam`}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Essay post={post} />
      </main>
    </>
  );
};

export default PostPage;
