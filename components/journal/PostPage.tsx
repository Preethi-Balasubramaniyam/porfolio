import Head from "next/head";
import Link from "next/link";
import Header from "@/components/common/Header";
import Essay from "./Essay";
import { getPost } from "./posts";
import styles from "../../styles/journal.module.css";

const PostPage = ({ slug }: { slug: string }) => {
  const post = slug ? getPost(slug) : undefined;
  const title = post ? post.title : slug ? "Essay not found" : "Blog";

  return (
    <>
      <Head>
        <title>{`${title} - Preethi Balasubramaniyam`}</title>
        <meta name="description" content={post?.excerpt ?? "Notes on building software."} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {post ? (
          <Essay key={post.slug} post={post} />
        ) : slug ? (
          <section className={styles.container}>
            <article className={styles.article}>
              <Link href="/blog" className={styles.back}>
                Back to blog
              </Link>
              <h1 className={styles.title}>This essay is not on the blog.</h1>
            </article>
          </section>
        ) : null}
      </main>
    </>
  );
};

export default PostPage;
