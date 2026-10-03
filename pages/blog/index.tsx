import Head from "next/head";
import Header from "@/components/common/Header";
import Journal from "@/components/journal/Journal";

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog — Preethi Balasubramaniyam</title>
        <meta name="description" content="Notes on software engineering, AI, and how the role is changing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Journal />
      </main>
    </>
  );
}
