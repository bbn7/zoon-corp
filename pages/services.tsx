import Head from 'next/head';

export default function Services() {
  const services = [
    {
      title: "Dry-Fruit Export Services",
      description: "We specialize in exporting premium-grade agricultural products sourced from verified farmers. Our offerings include Kashmiri walnuts, almonds, saffron, dried berries, and other premium dried fruits. We ensure high-quality standards through ethical sourcing and compliance with international food safety standards. Whether you're looking to distribute to retail chains or secure bulk shipments, Zoon Corp is your trusted partner.",
      strengths: "Sustainable farming practices, packaging designed for global distribution, rigorous quality control.",
      icon: "🌰",
      color: "var(--primary-color)"
    },
    {
      title: "IT Consulting & Modernization",
      description: "Zoon Corp provides IT consulting and system integration services, helping businesses modernize their infrastructure and enhance their digital capabilities. We specialize in enterprise digital transformation, system integrations, and managed IT support. Our team is well-versed in the latest technologies and can guide you through your digital journey.",
      strengths: "Expertise in cloud platforms, tailored IT solutions, reducing operational overhead.",
      icon: "💻",
      color: "var(--secondary-color)"
    },
    {
      title: "Cloud Solutions & Infrastructure",
      description: "Our cloud services help businesses optimize their cloud infrastructure across AWS, Azure, GCP, and other leading cloud platforms. We provide cloud migration, deployment, optimization, and security services to ensure scalable, cost-effective, and secure cloud environments.",
      strengths: "Comprehensive cloud strategies, cost management, high availability, and security hardening.",
      icon: "☁️",
      color: "var(--secondary-color)"
    },
    {
      title: "Software Development & Digital Solutions",
      description: "From custom web applications to mobile app development, Zoon Corp creates digital solutions tailored to your business needs. Our expertise in SaaS, API integrations, and frontend/backend engineering makes us a reliable partner for your digital transformation journey.",
      strengths: "Custom web apps, mobile apps, SaaS platforms, digital branding, UI/UX design.",
      icon: "⚡",
      color: "var(--primary-color)"
    },
    {
      title: "Cybersecurity & Compliance",
      description: "With the growing risks of cyber threats, Zoon Corp offers robust cybersecurity services to protect your digital assets. Our services include vulnerability assessments, identity and access management, compliance mapping (ISO, SOC2), and security posture enhancement. We also help businesses achieve regulatory compliance to meet industry standards.",
      strengths: "Comprehensive risk assessments, implementation of zero-trust frameworks, proactive threat monitoring.",
      icon: "🔒",
      color: "var(--secondary-color)"
    }
  ];

  return (
    <>
      <Head>
        <title>Our Services - Zoon Corp</title>
        <meta
          name="description"
          content="Explore the premium services offered by Zoon Corp in agro-tech, IT solutions, cloud services, and digital transformation."
        />
      </Head>

      <main className="container">
        {/* Hero Section */}
        <section style={{textAlign: 'center', padding: 'var(--space-xl) 0'}}>
          <h1 style={{fontSize: 'var(--font-size-3xl)', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: 'var(--space-lg)'}}>
            Our <span style={{color: 'var(--primary-color)'}}>Services</span>
          </h1>
          <p style={{fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', maxWidth: '64rem', margin: '0 auto var(--space-xl) auto', lineHeight: '1.6'}}>
            Zoon Corp Pvt Ltd offers a diverse range of services aimed at providing sustainable agro-tech 
            solutions and advanced digital services. Our services cater to businesses looking to scale 
            operations and modernize their technology infrastructure.
          </p>
        </section>

        {/* Services Grid */}
        <section style={{padding: 'var(--space-xl) 0'}}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: 'var(--space-xl)'
          }}>
            {services.map((service, index) => (
              <div key={index} className="card" style={{padding: 'var(--space-xl)', position: 'relative', overflow: 'hidden'}}>
                {/* Background gradient overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${service.color}, ${service.color}88)`
                }}></div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 'var(--space-lg)'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                    borderRadius: 'var(--radius-xl)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 'var(--space-lg)',
                    boxShadow: 'var(--shadow-lg)',
                    flexShrink: 0
                  }}>
                    <span style={{fontSize: '2.5rem'}}>{service.icon}</span>
                  </div>
                  <h2 style={{
                    fontSize: 'var(--font-size-xl)',
                    fontWeight: 'bold',
                    color: 'var(--text-primary)',
                    margin: 0,
                    lineHeight: '1.3'
                  }}>
                    {service.title}
                  </h2>
                </div>
                
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.7',
                  marginBottom: 'var(--space-lg)',
                  fontSize: 'var(--font-size-base)'
                }}>
                  {service.description}
                </p>
                
                <div style={{
                  background: 'var(--gradient-light)',
                  padding: 'var(--space-md)',
                  borderRadius: 'var(--radius-lg)',
                  borderLeft: `4px solid ${service.color}`
                }}>
                  <h4 style={{
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: 'var(--space-xs)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Key Benefits:
                  </h4>
                  <p style={{
                    color: 'var(--text-secondary)',
                    margin: 0,
                    fontSize: 'var(--font-size-sm)',
                    lineHeight: '1.5'
                  }}>
                    {service.strengths}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Process Section */}
        <section style={{
          background: 'var(--gradient-dark)',
          color: 'var(--text-white)',
          padding: 'var(--space-2xl)',
          borderRadius: 'var(--radius-xl)',
          textAlign: 'center',
          marginTop: 'var(--space-2xl)'
        }}>
          <h2 style={{
            fontSize: 'var(--font-size-2xl)',
            fontWeight: 'bold',
            color: 'var(--text-white)',
            marginBottom: 'var(--space-lg)'
          }}>
            Our Service Process
          </h2>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            lineHeight: '1.6',
            marginBottom: 'var(--space-xl)',
            maxWidth: '64rem',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            We follow a structured approach to ensure every project delivers exceptional results and exceeds expectations.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-lg)'
          }}>
            {[
              { step: "01", title: "Consultation", desc: "Understanding your needs" },
              { step: "02", title: "Strategy", desc: "Planning the approach" },
              { step: "03", title: "Implementation", desc: "Executing with precision" },
              { step: "04", title: "Support", desc: "Ongoing maintenance" }
            ].map((process, index) => (
              <div key={index} style={{textAlign: 'center'}}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-md)',
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'bold',
                  color: 'var(--text-white)'
                }}>
                  {process.step}
                </div>
                <h3 style={{
                  fontSize: 'var(--font-size-base)',
                  fontWeight: '600',
                  color: 'var(--text-white)',
                  marginBottom: 'var(--space-xs)'
                }}>
                  {process.title}
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: 'var(--font-size-sm)',
                  margin: 0
                }}>
                  {process.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{padding: 'var(--space-2xl) 0', textAlign: 'center'}}>
          <div className="card" style={{padding: 'var(--space-2xl)'}}>
            <h2 style={{
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 'bold',
              color: 'var(--text-primary)',
              marginBottom: 'var(--space-md)'
            }}>
              Ready to Get Started?
            </h2>
            <p style={{
              fontSize: 'var(--font-size-lg)',
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-xl)',
              maxWidth: '48rem',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Contact us today to discuss how our services can help transform your business and drive growth.
            </p>
            <div style={{display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap'}}>
              <button className="primary-button">
                Get Started Today
              </button>
              <button className="ghost-button">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

