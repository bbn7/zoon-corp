import Head from 'next/head';
import ProductSlider from '../components/ProductSlider';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zoon Corp - Innovating Global Trade & Technology</title>
        <meta
          name="description"
          content="Zoon Corp merges Kashmiri agricultural excellence with modern technology solutions in trade, IT, cloud services, and digital transformation."
        />
      </Head>

      <main>
        <h1>Welcome to Zoon Corp</h1>
        <p>
          Zoon Corp Pvt Ltd is a diversified global enterprise operating across agriculture-based exports, technology consulting, and digital transformation services. We are committed to merging Kashmiri heritage in global trade with cutting-edge IT systems to provide businesses with high-quality agricultural products and advanced technology solutions.
        </p>

        <h2>Our Vision</h2>
        <p>
          To establish Zoon Corp as a globally recognized brand for premium agricultural exports and enterprise-grade technology solutions, strengthening international trade and digital modernization with reliability, trust, and innovation.
        </p>

        <h2>Our Products</h2>
        <ProductSlider />
      </main>
    </>
  );
}
