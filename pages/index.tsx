import Head from 'next/head';
import Image from 'next/image';
import ProductSlider from '../components/ProductSlider';
import { useState } from 'react';
import Modal from '../components/Modal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Zoon Corp - Innovating Global Trade & Technology</title>
        <meta
          name="description"
          content="Zoon Corp merges Kashmiri agricultural excellence with modern technology solutions in trade, IT, cloud services, and digital transformation."
        />
      </Head>

      <main className="container">
        {/* Hero Section */}
        <section style={{textAlign: 'center', padding: 'var(--space-2xl) 0'}}>
          <h1 style={{fontSize: 'var(--font-size-3xl)', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: 'var(--space-lg)'}}>
            Welcome to <span style={{color: 'var(--primary-color)'}}>Zoon Corp</span>
          </h1>
          <p style={{fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', maxWidth: '64rem', margin: '0 auto var(--space-xl) auto', lineHeight: '1.6'}}>
            Zoon Corp Pvt Ltd is a diversified global enterprise operating across agriculture-based exports, 
            technology consulting, and digital transformation services. We are committed to merging Kashmiri 
            heritage in global trade with cutting-edge IT systems to provide businesses with high-quality 
            agricultural products and advanced technology solutions.
          </p>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', justifyContent: 'center', alignItems: 'center'}}>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="primary-button"
            >
              Contact Us
            </button>
            <button className="ghost-button">
              Learn More
            </button>
          </div>
        </section>

        {/* Features Grid */}
        <section style={{padding: 'var(--space-2xl) 0'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-xl)'}}>
            <div className="card">
              <div style={{
                width: '64px', 
                height: '64px', 
                background: 'var(--gradient-primary)', 
                borderRadius: 'var(--radius-lg)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: 'var(--space-lg)',
                boxShadow: 'var(--shadow-md)'
              }}>
                <svg style={{width: '32px', height: '32px', color: 'white'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 style={{fontSize: 'var(--font-size-xl)', fontWeight: '600', color: 'var(--text-primary)', marginBottom: 'var(--space-sm)'}}>Premium Quality</h3>
              <p style={{color: 'var(--text-secondary)', lineHeight: '1.6'}}>Premium Kashmiri agricultural products sourced directly from local farmers.</p>
            </div>
            
            <div className="card">
              <div style={{
                width: '64px', 
                height: '64px', 
                background: 'var(--gradient-secondary)', 
                borderRadius: 'var(--radius-lg)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: 'var(--space-lg)',
                boxShadow: 'var(--shadow-md)'
              }}>
                <svg style={{width: '32px', height: '32px', color: 'white'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 style={{fontSize: 'var(--font-size-xl)', fontWeight: '600', color: 'var(--text-primary)', marginBottom: 'var(--space-sm)'}}>Innovation</h3>
              <p style={{color: 'var(--text-secondary)', lineHeight: '1.6'}}>Cutting-edge technology solutions for modern business challenges.</p>
            </div>
            
            <div className="card">
              <div style={{
                width: '64px', 
                height: '64px', 
                background: 'var(--gradient-dark)', 
                borderRadius: 'var(--radius-lg)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: 'var(--space-lg)',
                boxShadow: 'var(--shadow-md)'
              }}>
                <svg style={{width: '32px', height: '32px', color: 'white'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 style={{fontSize: 'var(--font-size-xl)', fontWeight: '600', color: 'var(--text-primary)', marginBottom: 'var(--space-sm)'}}>Global Reach</h3>
              <p style={{color: 'var(--text-secondary)', lineHeight: '1.6'}}>International trade and export services connecting Kashmir to the world.</p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section style={{
          background: 'var(--gradient-light)', 
          padding: 'var(--space-2xl)', 
          borderRadius: 'var(--radius-xl)', 
          marginBottom: 'var(--space-2xl)'
        }}>
          <div style={{textAlign: 'center'}}>
            <h2 style={{fontSize: 'var(--font-size-2xl)', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: 'var(--space-lg)'}}>
              Our Vision
            </h2>
            <p style={{fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', maxWidth: '64rem', margin: '0 auto', lineHeight: '1.6'}}>
              To establish Zoon Corp as a globally recognized brand for premium agricultural exports and 
              enterprise-grade technology solutions, strengthening international trade and digital modernization 
              with reliability, trust, and innovation.
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section style={{padding: 'var(--space-2xl) 0'}}>
          <ProductSlider />
        </section>

        {/* Statistics Section */}
        <section style={{
          background: 'var(--gradient-dark)', 
          color: 'var(--text-white)',
          padding: 'var(--space-2xl) 0', 
          borderRadius: 'var(--radius-xl)',
          marginBottom: 'var(--space-2xl)'
        }}>
          <div style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: 'var(--space-xl)', 
            textAlign: 'center'
          }}>
            <div>
              <div style={{
                fontSize: 'var(--font-size-3xl)', 
                fontWeight: 'bold', 
                color: 'var(--text-white)', 
                marginBottom: 'var(--space-sm)'
              }}>500+</div>
              <div style={{color: 'rgba(255, 255, 255, 0.8)', fontWeight: '500'}}>Happy Customers</div>
            </div>
            <div>
              <div style={{
                fontSize: 'var(--font-size-3xl)', 
                fontWeight: 'bold', 
                color: 'var(--text-white)', 
                marginBottom: 'var(--space-sm)'
              }}>50+</div>
              <div style={{color: 'rgba(255, 255, 255, 0.8)', fontWeight: '500'}}>Products</div>
            </div>
            <div>
              <div style={{
                fontSize: 'var(--font-size-3xl)', 
                fontWeight: 'bold', 
                color: 'var(--text-white)', 
                marginBottom: 'var(--space-sm)'
              }}>15+</div>
              <div style={{color: 'rgba(255, 255, 255, 0.8)', fontWeight: '500'}}>Countries</div>
            </div>
            <div>
              <div style={{
                fontSize: 'var(--font-size-3xl)', 
                fontWeight: 'bold', 
                color: 'var(--text-white)', 
                marginBottom: 'var(--space-sm)'
              }}>10+</div>
              <div style={{color: 'rgba(255, 255, 255, 0.8)', fontWeight: '500'}}>Years Experience</div>
            </div>
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
              Contact us today to explore how our products and services can benefit your business.
            </p>
            <div style={{display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap'}}>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="primary-button"
              >
                Contact Us Today
              </button>
              <button className="ghost-button">
                View Our Products
              </button>
            </div>
          </div>
        </section>
      </main>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Get In Touch"
      />
    </>
  );
}

