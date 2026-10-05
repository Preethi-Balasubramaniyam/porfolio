import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { GetServerSideProps } from "next";
import PostPage from "@/components/journal/PostPage";
import { getPost } from "@/components/journal/posts";

type Props = { slug: string };

const slugFromPath = (path: string) => {
  const clean = path.split("?")[0].split("#")[0].replace(/\/$/, "");
  const slug = decodeURIComponent(clean.split("/").pop() ?? "");
  if (!slug || slug === "blog" || slug === "[slug]") return "";
  return slug;
};

export default function BlogPost({ slug }: Props) {
  const router = useRouter();
  const [path, setPath] = useState(slug ? `/blog/${slug}` : "");

  useEffect(() => {
    const sync = () => setPath(window.location.pathname);
    sync();
    router.events.on("routeChangeComplete", sync);
    return () => {
      router.events.off("routeChangeComplete", sync);
    };
  }, [router.events]);

  const live = slugFromPath(path) || slugFromPath(router.asPath) || slug;
  return <PostPage slug={live} />;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
  const slug = String(params?.slug ?? "");
  if (!getPost(slug)) return { notFound: true };
  return { props: { slug } };
};
