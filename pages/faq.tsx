import Head from 'next/head';

export default function Faq() {
  return (
    <>
      <Head>
        <title>FAQ - Zoon Corp</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about Zoon Corp's products and services."
        />
      </Head>

      <main>
        <h1>Frequently Asked Questions</h1>

        <h2>1. What products does Zoon Corp export?</h2>
        <p>
          We export premium Kashmiri walnuts, almonds, saffron, dried berries, and other high-quality dried fruits.
        </p>

        <h2>2. What services does Zoon Corp offer?</h2>
        <p>
          Zoon Corp provides IT consulting, cloud solutions, software development, and cybersecurity services, in addition to its agricultural exports.
        </p>

        <h2>3. How can I place an order for products?</h2>
        <p>
          You can place an order by contacting us directly via email or phone. We handle bulk and container shipments for international customers.
        </p>

        <h2>4. Where does Zoon Corp operate?</h2>
        <p>
          We operate across India, the Middle East, GCC, Asia-Pacific, and Europe, providing services globally.
        </p>
      </main>
    </>
  );
}
