import Head from 'next/head';
import Image from 'next/image';

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Kashmiri Walnuts",
      description: "Sourced from the rich orchards of Kashmir, our walnuts are available both as kernels and in-shell. Known for their rich flavor and high nutritional value, our walnuts are perfect for retail and bulk orders. They are harvested from the pristine valleys of Kashmir, ensuring the best quality.",
      image: "/images/walnuts.svg",
      features: ["Rich in Omega-3", "High Protein", "Natural Energy"],
      price: "From ₹800/kg"
    },
    {
      id: 2,
      name: "Premium Almonds",
      description: "We offer top-quality almonds sourced from trusted farms. Our almonds are carefully processed and packaged to maintain freshness and quality, suitable for both retail and wholesale needs. Packed with essential nutrients, they are perfect for snacks, cooking, and retail markets.",
      image: "/images/almonds.svg",
      features: ["Vitamin E Rich", "Heart Healthy", "Protein Source"],
      price: "From ₹600/kg"
    },
    {
      id: 3,
      name: "Kashmiri Saffron",
      description: "Zoon Corp exports premium saffron, grown in the fertile lands of Kashmir. Known for its distinctive aroma and flavor, our saffron is widely sought after in both culinary and medicinal uses. We follow sustainable harvesting practices to ensure the highest quality saffron.",
      image: "/images/saffron.svg",
      features: ["A1 Grade", "Laboratory Tested", "Pure Kashmir"],
      price: "From ₹25,000/kg"
    }
  ];

  const additionalProducts = [
    {
      name: "Dried Berries & Nuts",
      description: "We provide a range of dried berries, including cranberries, blueberries, and more. Paired with our premium nuts, our dried fruit and nut offerings are perfect for healthy snacks and retail markets. We ensure each product is carefully sorted and packaged for freshness.",
      features: ["Antioxidant Rich", "Natural Sweetness", "Healthy Snacks"]
    },
    {
      name: "Premium Dried Fruits",
      description: "We also export other high-quality dried fruits such as apricots, figs, and dates. All products are carefully sorted, packed, and shipped to meet international food safety standards. Our dried fruits are a healthy addition to your pantry, ideal for both retail and wholesale distribution.",
      features: ["No Preservatives", "Natural Process", "Export Quality"]
    }
  ];

  return (
    <>
      <Head>
        <title>Our Products - Zoon Corp</title>
        <meta
          name="description"
          content="Explore our premium-grade agricultural products, including Kashmiri walnuts, almonds, saffron, and more."
        />
      </Head>

      <main className="container">
        {/* Hero Section */}
        <section style={{textAlign: 'center', padding: 'var(--space-xl) 0'}}>
          <h1 style={{fontSize: 'var(--font-size-3xl)', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: 'var(--space-lg)'}}>
            Our <span style={{color: 'var(--secondary-color)'}}>Products</span>
          </h1>
          <p style={{fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', maxWidth: '64rem', margin: '0 auto', lineHeight: '1.6'}}>
            Zoon Corp is a leading exporter of premium-grade agricultural products, ensuring quality and sustainability. 
            Below are some of our key offerings that bring the finest Kashmiri produce to global markets.
          </p>
        </section>

        {/* Main Products Grid */}
        <section style={{padding: 'var(--space-xl) 0'}}>
          <div style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: 'var(--space-xl)',
            marginBottom: 'var(--space-2xl)'
          }}>
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className="card"
                style={{overflow: 'hidden'}}
              >
                <div style={{position: 'relative', height: '200px', overflow: 'hidden'}}>
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    width={400}
                    height={300}
                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 'var(--space-sm)',
                    right: 'var(--space-sm)',
                    background: 'var(--gradient-primary)',
                    color: 'var(--text-white)',
                    padding: 'var(--space-xs) var(--space-sm)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: '600'
                  }}>
                    {product.price}
                  </div>
                </div>
                
                <div style={{padding: 'var(--space-lg)'}}>
                  <h3 style={{fontSize: 'var(--font-size-xl)', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: 'var(--space-sm)'}}>
                    {product.name}
                  </h3>
                  <p style={{color: 'var(--text-secondary)', marginBottom: 'var(--space-md)', lineHeight: '1.6'}}>
                    {product.description}
                  </p>
                  
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)'}}>
                    {product.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="badge"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <button className="secondary-button" style={{width: '100%'}}>
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Products Section */}
        <section style={{
          padding: 'var(--space-xl) 0',
          background: 'var(--gradient-light)',
          borderRadius: 'var(--radius-xl)'
        }}>
          <div style={{textAlign: 'center', marginBottom: 'var(--space-xl)'}}>
            <h2 style={{fontSize: 'var(--font-size-2xl)', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: 'var(--space-md)'}}>
              Additional Products
            </h2>
            <p style={{fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', maxWidth: '48rem', margin: '0 auto'}}>
              Beyond our flagship products, we offer a comprehensive range of premium agricultural exports.
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-xl)'}}>
            {additionalProducts.map((product, index) => (
              <div key={index} className="card" style={{padding: 'var(--space-xl)'}}>
                <h3 style={{fontSize: 'var(--font-size-xl)', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: 'var(--space-md)'}}>
                  {product.name}
                </h3>
                <p style={{color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)', lineHeight: '1.6'}}>
                  {product.description}
                </p>
                
                <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)'}}>
                  {product.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="badge"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quality Assurance Section */}
        <section style={{padding: 'var(--space-xl) 0'}}>
          <div style={{textAlign: 'center'}}>
            <h2 style={{fontSize: 'var(--font-size-2xl)', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: 'var(--space-xl)'}}>
              Quality Assurance
            </h2>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-xl)'}}>
              <div style={{textAlign: 'center'}}>
                <div style={{
                  width: '64px', 
                  height: '64px', 
                  background: 'var(--gradient-secondary)', 
                  borderRadius: 'var(--radius-full)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto var(--space-md)',
                  boxShadow: 'var(--shadow-md)'
                }}>
                  <svg style={{width: '32px', height: '32px', color: 'white'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 style={{fontSize: 'var(--font-size-lg)', fontWeight: '600', color: 'var(--text-primary)', marginBottom: 'var(--space-sm)'}}>International Standards</h3>
                <p style={{color: 'var(--text-secondary)'}}>All our products meet international food safety and quality standards.</p>
              </div>
              
              <div style={{textAlign: 'center'}}>
                <div style={{
                  width: '64px', 
                  height: '64px', 
                  background: 'var(--gradient-primary)', 
                  borderRadius: 'var(--radius-full)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto var(--space-md)',
                  boxShadow: 'var(--shadow-md)'
                }}>
                  <svg style={{width: '32px', height: '32px', color: 'white'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 style={{fontSize: 'var(--font-size-lg)', fontWeight: '600', color: 'var(--text-primary)', marginBottom: 'var(--space-sm)'}}>Secure Packaging</h3>
                <p style={{color: 'var(--text-secondary)'}}>Advanced packaging solutions to preserve freshness during transit.</p>
              </div>
              
              <div style={{textAlign: 'center'}}>
                <div style={{
                  width: '64px', 
                  height: '64px', 
                  background: 'var(--gradient-secondary)', 
                  borderRadius: 'var(--radius-full)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto var(--space-md)',
                  boxShadow: 'var(--shadow-md)'
                }}>
                  <svg style={{width: '32px', height: '32px', color: 'white'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 style={{fontSize: 'var(--font-size-lg)', fontWeight: '600', color: 'var(--text-primary)', marginBottom: 'var(--space-sm)'}}>Fast Delivery</h3>
                <p style={{color: 'var(--text-secondary)'}}>Quick and reliable shipping to ensure product freshness.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

