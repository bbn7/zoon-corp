import Head from 'next/head';
import { useState } from 'react';
import Modal from '../components/Modal';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <Head>
        <title>Contact Us - Zoon Corp</title>
        <meta
          name="description"
          content="Contact Zoon Corp for business inquiries, trade opportunities, and technology solutions."
        />
      </Head>

      <main className="container">
        {/* Hero Section */}
        <section style={{textAlign: 'center', padding: 'var(--space-xl) 0'}}>
          <h1 style={{fontSize: 'var(--font-size-3xl)', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: 'var(--space-lg)'}}>
            Contact <span style={{color: 'var(--primary-color)'}}>Zoon Corp</span>
          </h1>
          <p style={{fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', maxWidth: '64rem', margin: '0 auto var(--space-xl) auto', lineHeight: '1.6'}}>
            We look forward to hearing from you! Reach out for business inquiries, trade opportunities, 
            and technology solutions.
          </p>
          <button onClick={toggleModal} className="primary-button">
            Get Detailed Contact Info
          </button>
        </section>

        {/* Contact Information Grid */}
        <section style={{padding: 'var(--space-xl) 0'}}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-xl)'
          }}>
            <div className="card" style={{textAlign: 'center', padding: 'var(--space-xl)'}}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'var(--gradient-primary)',
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-lg)',
                boxShadow: 'var(--shadow-lg)'
              }}>
                <svg style={{width: '40px', height: '40px', color: 'white'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 style={{fontSize: 'var(--font-size-lg)', fontWeight: '600', color: 'var(--text-primary)', marginBottom: 'var(--space-sm)'}}>Email Us</h3>
              <p style={{color: 'var(--text-secondary)', marginBottom: 'var(--space-md)'}}>For business inquiries and support</p>
              <a 
                href="mailto:info@zooncpl.com" 
                style={{color: 'var(--secondary-color)', textDecoration: 'none', fontWeight: '500'}}
              >
                info@zooncpl.com
              </a>
            </div>

            <div className="card" style={{textAlign: 'center', padding: 'var(--space-xl)'}}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'var(--gradient-secondary)',
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-lg)',
                boxShadow: 'var(--shadow-lg)'
              }}>
                <svg style={{width: '40px', height: '40px', color: 'white'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 style={{fontSize: 'var(--font-size-lg)', fontWeight: '600', color: 'var(--text-primary)', marginBottom: 'var(--space-sm)'}}>Call Us</h3>
              <p style={{color: 'var(--text-secondary)', marginBottom: 'var(--space-md)'}}>24/7 customer support</p>
              <a 
                href="tel:+911800999999" 
                style={{color: 'var(--secondary-color)', textDecoration: 'none', fontWeight: '500'}}
              >
                +91 1800 999999
              </a>
            </div>

            <div className="card" style={{textAlign: 'center', padding: 'var(--space-xl)'}}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'var(--gradient-dark)',
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-lg)',
                boxShadow: 'var(--shadow-lg)'
              }}>
                <svg style={{width: '40px', height: '40px', color: 'white'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 style={{fontSize: 'var(--font-size-lg)', fontWeight: '600', color: 'var(--text-primary)', marginBottom: 'var(--space-sm)'}}>Visit Us</h3>
              <p style={{color: 'var(--text-secondary)', marginBottom: 'var(--space-md)'}}>Headquarters location</p>
              <address style={{color: 'var(--secondary-color)', fontStyle: 'normal', fontWeight: '500'}}>
                Srinagar, Kashmir, India 190017
              </address>
            </div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section style={{
          background: 'var(--gradient-light)',
          padding: 'var(--space-xl)',
          borderRadius: 'var(--radius-xl)',
          marginBottom: 'var(--space-2xl)'
        }}>
          <div style={{textAlign: 'center', marginBottom: 'var(--space-xl)'}}>
            <h2 style={{fontSize: 'var(--font-size-2xl)', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: 'var(--space-md)'}}>
              Global Operational Regions
            </h2>
            <p style={{fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', maxWidth: '48rem', margin: '0 auto'}}>
              Zoon Corp operates across multiple regions worldwide, bringing quality products and services to global markets.
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-lg)'
          }}>
            {[
              { name: "India", icon: "🇮🇳" },
              { name: "Middle East (Saudi Arabia)", icon: "🇸🇦" },
              { name: "GCC", icon: "🏜️" },
              { name: "Asia-Pacific", icon: "🌏" },
              { name: "Europe", icon: "🇪🇺" }
            ].map((region, index) => (
              <div key={index} className="card" style={{textAlign: 'center', padding: 'var(--space-lg)'}}>
                <div style={{fontSize: '2rem', marginBottom: 'var(--space-sm)'}}>
                  {region.icon}
                </div>
                <h3 style={{fontSize: 'var(--font-size-base)', fontWeight: '600', color: 'var(--text-primary)', margin: 0}}>
                  {region.name}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Business Hours Section */}
        <section style={{padding: 'var(--space-xl) 0'}}>
          <div style={{textAlign: 'center'}}>
            <h2 style={{fontSize: 'var(--font-size-2xl)', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: 'var(--space-lg)'}}>
              Business Hours
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'var(--space-lg)',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <div className="card" style={{padding: 'var(--space-lg)', textAlign: 'center'}}>
                <h3 style={{fontSize: 'var(--font-size-lg)', fontWeight: '600', color: 'var(--text-primary)', marginBottom: 'var(--space-sm)'}}>
                  Monday - Friday
                </h3>
                <p style={{color: 'var(--text-secondary)', margin: 0}}>
                  9:00 AM - 6:00 PM IST
                </p>
              </div>
              <div className="card" style={{padding: 'var(--space-lg)', textAlign: 'center'}}>
                <h3 style={{fontSize: 'var(--font-size-lg)', fontWeight: '600', color: 'var(--text-primary)', marginBottom: 'var(--space-sm)'}}>
                  Saturday
                </h3>
                <p style={{color: 'var(--text-secondary)', margin: 0}}>
                  10:00 AM - 4:00 PM IST
                </p>
              </div>
              <div className="card" style={{padding: 'var(--space-lg)', textAlign: 'center'}}>
                <h3 style={{fontSize: 'var(--font-size-lg)', fontWeight: '600', color: 'var(--text-primary)', marginBottom: 'var(--space-sm)'}}>
                  Sunday
                </h3>
                <p style={{color: 'var(--text-secondary)', margin: 0}}>
                  Closed
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Modal 
        isOpen={isModalOpen} 
        onClose={toggleModal}
        title="Get In Touch"
      />
    </>
  );
}

