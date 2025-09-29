import Head from 'next/head';
import Header from '../components/common/Header';
import Tools from '../components/tools';

export default function ToolsPage() {
  return (
    <>
      <Head>
        <title>Tech Stack & Tools - Preethi Balasubramaniyam</title>
        <meta name="description" content="Explore the technologies and tools I use to build modern web applications" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <main>
        <Tools />
      </main>
    </>
  );
}