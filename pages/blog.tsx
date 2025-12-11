import Head from 'next/head';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Zoon Corp</title>
        <meta
          name="description"
          content="Read the latest news, updates, and insights from Zoon Corp."
        />
      </Head>

      <main>
        <h1>Our Blog</h1>
        <p>
          Stay tuned for the latest updates, industry news, and insights from Zoon Corp.
        </p>

        <h2>Latest Posts</h2>
        <ul>
          <li><strong>Post 1:</strong> Zoon Corp&apos;s commitment to sustainability in the agro-tech sector.</li>
          <li><strong>Post 2:</strong> How cloud solutions are transforming agricultural supply chains.</li>
          <li><strong>Post 3:</strong> Key considerations for digital transformation in the agro-tech industry.</li>
        </ul>
      </main>
    </>
  );
}