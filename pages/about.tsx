import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Zoon Corp</title>
        <meta
          name="description"
          content="Learn about Zoon Corp Pvt Ltd - a global leader in trade, IT solutions, cloud services, and digital transformation."
        />
      </Head>

      <main>
        <h1>About Zoon Corp</h1>
        <p>
          Zoon Corp Pvt Ltd is a diversified global enterprise operating across agriculture-based exports, technology consulting, and digital transformation services. Founded with the objective of merging Kashmiri heritage in global trade with the precision of modern IT systems, we deliver comprehensive solutions that support businesses in scaling their operations, modernizing their digital presence, and streamlining their supply chains.
        </p>

        <h2>Core Values</h2>
        <ul>
          <li><strong>Integrity:</strong> Every interaction rooted in honesty and transparency.</li>
          <li><strong>Quality:</strong> Premium-grade products and world-class digital solutions.</li>
          <li><strong>Innovation:</strong> Continuous improvement through modern technology and research.</li>
          <li><strong>Customer Trust:</strong> Long-term relationships built on performance and reliability.</li>
          <li><strong>Sustainability:</strong> Ethical sourcing and environmentally aligned operations.</li>
        </ul>

        <h2>Business Divisions</h2>
        <p>
          Zoon Corp operates across five primary divisions:
        </p>
        <ul>
          <li><strong>Dry-Fruit Export Division</strong>: Premium-grade agricultural products, including Kashmiri walnuts, almonds, saffron, and more.</li>
          <li><strong>Information Technology Services</strong>: IT modernization, consulting, and system integration services.</li>
          <li><strong>Cloud Solutions & Infrastructure</strong>: Optimizing cloud technology for businesses.</li>
          <li><strong>Software Development & Digital Solutions</strong>: Custom web applications, mobile apps, SaaS solutions, and more.</li>
          <li><strong>Cybersecurity & Compliance</strong>: Ensuring secure, compliant digital systems for enterprises.</li>
        </ul>
      </main>
    </>
  );
}