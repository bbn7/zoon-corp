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

      <main className="container">
        {/* Hero Section */}
        <section style={{textAlign: 'center', padding: 'var(--space-xl) 0'}}>
          <h1 style={{fontSize: 'var(--font-size-3xl)', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: 'var(--space-lg)'}}>
            About <span style={{color: 'var(--primary-color)'}}>Zoon Corp</span>
          </h1>
          <p style={{fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', maxWidth: '64rem', margin: '0 auto', lineHeight: '1.6'}}>
            Zoon Corp Pvt Ltd is a diversified global enterprise operating across agriculture-based exports, 
            technology consulting, and digital transformation services. Founded with the objective of merging 
            Kashmiri heritage in global trade with the precision of modern IT systems, we deliver comprehensive 
            solutions that support businesses in scaling their operations, modernizing their digital presence, 
            and streamlining their supply chains.
          </p>
        </section>

        {/* Core Values Section */}
        <section style={{
          background: 'var(--gradient-light)',
          padding: 'var(--space-xl)',
          borderRadius: 'var(--radius-xl)',
          marginBottom: 'var(--space-2xl)'
        }}>
          <h2 style={{fontSize: 'var(--font-size-2xl)', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: 'var(--space-lg)', textAlign: 'center'}}>
            Core Values
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--space-lg)'
          }}>
            {[
              {
                title: "Integrity",
                description: "Every interaction rooted in honesty and transparency.",
                icon: "🤝"
              },
              {
                title: "Quality",
                description: "Premium-grade products and world-class digital solutions.",
                icon: "⭐"
              },
              {
                title: "Innovation",
                description: "Continuous improvement through modern technology and research.",
                icon: "💡"
              },
              {
                title: "Customer Trust",
                description: "Long-term relationships built on performance and reliability.",
                icon: "🤝"
              },
              {
                title: "Sustainability",
                description: "Ethical sourcing and environmentally aligned operations.",
                icon: "🌱"
              }
            ].map((value, index) => (
              <div key={index} className="card" style={{textAlign: 'center', padding: 'var(--space-lg)'}}>
                <div style={{fontSize: '2rem', marginBottom: 'var(--space-sm)'}}>
                  {value.icon}
                </div>
                <h3 style={{fontSize: 'var(--font-size-lg)', fontWeight: '600', color: 'var(--text-primary)', marginBottom: 'var(--space-sm)'}}>
                  {value.title}
                </h3>
                <p style={{color: 'var(--text-secondary)', margin: 0}}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Business Divisions Section */}
        <section>
          <h2 style={{fontSize: 'var(--font-size-2xl)', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: 'var(--space-lg)', textAlign: 'center'}}>
            Business Divisions
          </h2>
          <p style={{fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: 'var(--space-xl)'}}>
            Zoon Corp operates across five primary divisions:
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-lg)'
          }}>
            {[
              {
                title: "Dry-Fruit Export Division",
                description: "Premium-grade agricultural products, including Kashmiri walnuts, almonds, saffron, and more.",
                icon: "🌰",
                color: "var(--primary-color)"
              },
              {
                title: "Information Technology Services",
                description: "IT modernization, consulting, and system integration services.",
                icon: "💻",
                color: "var(--secondary-color)"
              },
              {
                title: "Cloud Solutions & Infrastructure",
                description: "Optimizing cloud technology for businesses.",
                icon: "☁️",
                color: "var(--secondary-color)"
              },
              {
                title: "Software Development & Digital Solutions",
                description: "Custom web applications, mobile apps, SaaS solutions, and more.",
                icon: "⚡",
                color: "var(--primary-color)"
              },
              {
                title: "Cybersecurity & Compliance",
                description: "Ensuring secure, compliant digital systems for enterprises.",
                icon: "🔒",
                color: "var(--secondary-color)"
              }
            ].map((division, index) => (
              <div key={index} className="card" style={{padding: 'var(--space-lg)'}}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: `linear-gradient(135deg, ${division.color}, ${division.color}dd)`,
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-md)',
                  boxShadow: 'var(--shadow-md)'
                }}>
                  <span style={{fontSize: '2rem'}}>{division.icon}</span>
                </div>
                <h3 style={{fontSize: 'var(--font-size-lg)', fontWeight: '600', color: 'var(--text-primary)', marginBottom: 'var(--space-sm)'}}>
                  {division.title}
                </h3>
                <p style={{color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6'}}>
                  {division.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Statement */}
        <section style={{
          textAlign: 'center',
          background: 'var(--gradient-dark)',
          color: 'var(--text-white)',
          padding: 'var(--space-2xl)',
          borderRadius: 'var(--radius-xl)',
          marginTop: 'var(--space-2xl)'
        }}>
          <h2 style={{fontSize: 'var(--font-size-2xl)', fontWeight: 'bold', color: 'var(--text-white)', marginBottom: 'var(--space-lg)'}}>
            Our Mission
          </h2>
          <p style={{fontSize: 'var(--font-size-lg)', lineHeight: '1.6', margin: 0, maxWidth: '64rem', marginLeft: 'auto', marginRight: 'auto'}}>
            To bridge the gap between traditional Kashmiri agricultural excellence and modern technology solutions, 
            creating sustainable value for businesses worldwide while preserving our cultural heritage and promoting 
            environmental responsibility.
          </p>
        </section>
      </main>
    </>
  );
}

