import PostPage from "@/components/journal/PostPage";
import { getPost } from "@/components/journal/posts";
import type { GetServerSideProps } from "next";

type Props = { slug: string };

export default function BlogPost({ slug }: Props) {
  return <PostPage slug={slug} />;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
  const slug = String(params?.slug ?? "");
  if (!getPost(slug)) return { notFound: true };
  return { props: { slug } };
};
