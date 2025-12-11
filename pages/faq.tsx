import Head from 'next/head';
import { useState } from 'react';

export default function Faq() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What products does Zoon Corp export?",
      answer: "We export premium Kashmiri walnuts, almonds, saffron, dried berries, and other high-quality dried fruits. All our products are sourced from verified farmers and meet international food safety standards."
    },
    {
      question: "What services does Zoon Corp offer?",
      answer: "Zoon Corp provides IT consulting, cloud solutions, software development, and cybersecurity services, in addition to its agricultural exports. We offer comprehensive digital transformation solutions for businesses worldwide."
    },
    {
      question: "How can I place an order for products?",
      answer: "You can place an order by contacting us directly via email or phone. We handle bulk and container shipments for international customers. Our team will guide you through the entire process from order placement to delivery."
    },
    {
      question: "Where does Zoon Corp operate?",
      answer: "We operate across India, the Middle East (Saudi Arabia), GCC, Asia-Pacific, and Europe, providing services globally. Our headquarters are located in Srinagar, Kashmir, India."
    },
    {
      question: "What is the minimum order quantity for bulk orders?",
      answer: "For bulk orders, our minimum quantity varies by product type. For walnuts and almonds, the minimum order is typically 100kg, while for saffron, it's 10kg. Contact us for specific requirements and pricing."
    },
    {
      question: "Do you provide quality certifications for your products?",
      answer: "Yes, all our products come with relevant quality certifications including ISO standards, organic certifications where applicable, and compliance with international food safety regulations. We ensure complete traceability of our products."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including bank transfers, letters of credit, and other secure payment options. Payment terms are flexible and can be discussed based on your business requirements."
    },
    {
      question: "How long does international shipping take?",
      answer: "Shipping times vary by destination and product type. Typically, international shipments take 15-30 days via sea freight and 5-10 days via air freight. We provide tracking information for all shipments."
    }
  ];

  return (
    <>
      <Head>
        <title>FAQ - Zoon Corp</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about Zoon Corp's products and services."
        />
      </Head>

      <main className="container">
        {/* Hero Section */}
        <section style={{textAlign: 'center', padding: 'var(--space-xl) 0'}}>
          <h1 style={{fontSize: 'var(--font-size-3xl)', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: 'var(--space-lg)'}}>
            Frequently Asked <span style={{color: 'var(--primary-color)'}}>Questions</span>
          </h1>
          <p style={{fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', maxWidth: '64rem', margin: '0 auto var(--space-xl) auto', lineHeight: '1.6'}}>
            Find answers to the most common questions about our products, services, and business operations. 
            If you can't find what you're looking for, feel free to contact us directly.
          </p>
        </section>

        {/* FAQ Accordion */}
        <section style={{padding: 'var(--space-xl) 0'}}>
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="card" 
                style={{marginBottom: 'var(--space-md)', overflow: 'hidden'}}
              >
                <button
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: 'var(--space-lg)',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'background-color var(--transition-normal)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--gradient-light)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                  onClick={() => toggleItem(index)}
                >
                  <h3 style={{
                    fontSize: 'var(--font-size-lg)',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    margin: 0,
                    flex: 1,
                    paddingRight: 'var(--space-lg)'
                  }}>
                    {faq.question}
                  </h3>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform var(--transition-normal)',
                    transform: openItems.includes(index) ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      style={{color: 'var(--secondary-color)'}}
                    >
                      <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                  </div>
                </button>
                
                <div style={{
                  maxHeight: openItems.includes(index) ? '500px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height var(--transition-normal)'
                }}>
                  <div style={{
                    padding: `0 var(--space-lg) var(--space-lg) var(--space-lg)`,
                    borderTop: '1px solid var(--text-light)',
                    marginTop: 'var(--space-sm)'
                  }}>
                    <p style={{
                      color: 'var(--text-secondary)',
                      lineHeight: '1.7',
                      margin: 0,
                      fontSize: 'var(--font-size-base)'
                    }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
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
            marginBottom: 'var(--space-md)'
          }}>
            Still Have Questions?
          </h2>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: 'var(--space-xl)',
            maxWidth: '48rem',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Our team is here to help! Contact us directly for personalized assistance 
            with your inquiries about our products and services.
          </p>
          <div style={{display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap'}}>
            <button className="primary-button">
              Contact Us
            </button>
            <button 
              className="ghost-button"
              style={{
                background: 'transparent',
                color: 'var(--text-white)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                padding: 'var(--space-sm) var(--space-lg)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-base)',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all var(--transition-normal)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
            >
              Email Support
            </button>
          </div>
        </section>

        {/* Quick Links */}
        <section style={{padding: 'var(--space-xl) 0'}}>
          <h2 style={{
            fontSize: 'var(--font-size-2xl)',
            fontWeight: 'bold',
            color: 'var(--text-primary)',
            marginBottom: 'var(--space-xl)',
            textAlign: 'center'
          }}>
            Quick Links
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-lg)'
          }}>
            {[
              { title: "Product Catalog", desc: "Browse our premium products" },
              { title: "Services Overview", desc: "Explore our IT solutions" },
              { title: "Quality Standards", desc: "Learn about our certifications" },
              { title: "Shipping Info", desc: "Delivery and logistics details" }
            ].map((link, index) => (
              <div key={index} className="card" style={{padding: 'var(--space-lg)', textAlign: 'center'}}>
                <h3 style={{
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-xs)'
                }}>
                  {link.title}
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--font-size-sm)',
                  margin: 0
                }}>
                  {link.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

