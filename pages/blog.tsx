import Head from 'next/head';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Zoon Corp's Commitment to Sustainability in the Agro-Tech Sector",
      excerpt: "Discover how we're revolutionizing sustainable agriculture through innovative technology solutions and ethical sourcing practices.",
      category: "Sustainability",
      date: "December 15, 2024",
      readTime: "5 min read",
      image: "/images/walnuts-lifestyle.svg"
    },
    {
      id: 2,
      title: "How Cloud Solutions Are Transforming Agricultural Supply Chains",
      excerpt: "Explore the transformative power of cloud technology in optimizing agricultural logistics and supply chain management.",
      category: "Technology",
      date: "December 10, 2024",
      readTime: "7 min read",
      image: "/images/almonds-lifestyle.svg"
    },
    {
      id: 3,
      title: "Key Considerations for Digital Transformation in the Agro-Tech Industry",
      excerpt: "A comprehensive guide to successfully navigating digital transformation in the agricultural technology sector.",
      category: "Digital Transformation",
      date: "December 5, 2024",
      readTime: "6 min read",
      image: "/images/saffron-lifestyle.svg"
    }
  ];

  const categories = ["All", "Sustainability", "Technology", "Digital Transformation", "Industry Insights"];

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
    if (index !== 0) {
      e.currentTarget.style.background = 'var(--gradient-secondary)';
      e.currentTarget.style.color = 'var(--text-white)';
      e.currentTarget.style.borderColor = 'transparent';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
    if (index !== 0) {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = 'var(--text-secondary)';
      e.currentTarget.style.borderColor = 'var(--text-secondary)';
    }
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = 'var(--primary-color)';
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = 'var(--text-light)';
  };

  return (
    <>
      <Head>
        <title>Blog - Zoon Corp</title>
        <meta
          name="description"
          content="Read the latest news, updates, and insights from Zoon Corp about agro-tech, sustainability, and digital transformation."
        />
      </Head>

      <main className="container">
        {/* Hero Section */}
        <section style={{textAlign: 'center', padding: 'var(--space-xl) 0'}}>
          <h1 style={{fontSize: 'var(--font-size-3xl)', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: 'var(--space-lg)'}}>
            Our <span style={{color: 'var(--primary-color)'}}>Blog</span>
          </h1>
          <p style={{fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', maxWidth: '64rem', margin: '0 auto var(--space-xl) auto', lineHeight: '1.6'}}>
            Stay tuned for the latest updates, industry news, and insights from Zoon Corp. 
            Explore our thoughts on sustainability, technology, and the future of agro-tech.
          </p>
        </section>

        {/* Category Filter */}
        <section style={{padding: 'var(--space-lg) 0', textAlign: 'center'}}>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-sm)'}}>
            {categories.map((category, index) => (
              <button 
                key={index}
                style={{
                  padding: 'var(--space-xs) var(--space-md)',
                  background: index === 0 ? 'var(--gradient-primary)' : 'transparent',
                  color: index === 0 ? 'var(--text-white)' : 'var(--text-secondary)',
                  border: `2px solid ${index === 0 ? 'transparent' : 'var(--text-secondary)'}`,
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all var(--transition-normal)'
                }}
                onMouseEnter={(e) => handleMouseEnter(e, index)}
                onMouseLeave={(e) => handleMouseLeave(e, index)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section style={{padding: 'var(--space-xl) 0'}}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: 'var(--space-xl)'
          }}>
            {blogPosts.map((post, index) => (
              <article key={post.id} className="card" style={{overflow: 'hidden', transition: 'all var(--transition-normal)'}}>
                <div style={{position: 'relative', height: '200px', overflow: 'hidden'}}>
                  <img 
                    src={post.image}
                    alt={post.title}
                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 'var(--space-sm)',
                    left: 'var(--space-sm)',
                    background: 'var(--gradient-primary)',
                    color: 'var(--text-white)',
                    padding: 'var(--space-xs) var(--space-sm)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: '600',
                    textTransform: 'uppercase'
                  }}>
                    {post.category}
                  </div>
                </div>
                
                <div style={{padding: 'var(--space-lg)'}}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 'var(--space-sm)',
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--text-light)'
                  }}>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 style={{
                    fontSize: 'var(--font-size-lg)',
                    fontWeight: 'bold',
                    color: 'var(--text-primary)',
                    marginBottom: 'var(--space-sm)',
                    lineHeight: '1.4'
                  }}>
                    {post.title}
                  </h3>
                  
                  <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: 'var(--space-lg)'
                  }}>
                    {post.excerpt}
                  </p>
                  
                  <button className="secondary-button" style={{width: '100%'}}>
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section style={{
          background: 'var(--gradient-light)',
          padding: 'var(--space-2xl)',
          borderRadius: 'var(--radius-xl)',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'var(--font-size-2xl)',
            fontWeight: 'bold',
            color: 'var(--text-primary)',
            marginBottom: 'var(--space-md)'
          }}>
            Stay Updated
          </h2>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            color: 'var(--text-secondary)',
            marginBottom: 'var(--space-xl)',
            maxWidth: '48rem',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Subscribe to our newsletter and never miss the latest insights from Zoon Corp.
          </p>
          
          <div style={{
            display: 'flex',
            gap: 'var(--space-sm)',
            maxWidth: '400px',
            margin: '0 auto',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <input 
              type="email"
              placeholder="Enter your email"
              style={{
                flex: '1',
                minWidth: '200px',
                padding: 'var(--space-sm) var(--space-md)',
                border: '2px solid var(--text-light)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-base)',
                outline: 'none',
                transition: 'border-color var(--transition-normal)'
              }}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <button className="primary-button">
              Subscribe
            </button>
          </div>
        </section>

        {/* Featured Topics */}
        <section style={{padding: 'var(--space-xl) 0'}}>
          <h2 style={{
            fontSize: 'var(--font-size-2xl)',
            fontWeight: 'bold',
            color: 'var(--text-primary)',
            marginBottom: 'var(--space-xl)',
            textAlign: 'center'
          }}>
            Featured Topics
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--space-lg)'
          }}>
            {[
              {
                title: "Sustainable Agriculture",
                description: "Explore sustainable farming practices and eco-friendly solutions.",
                icon: "🌱",
                count: "12 articles"
              },
              {
                title: "Cloud Technology",
                description: "Latest insights on cloud infrastructure and digital solutions.",
                icon: "☁️",
                count: "8 articles"
              },
              {
                title: "Digital Innovation",
                description: "Cutting-edge technologies transforming the agro-tech industry.",
                icon: "⚡",
                count: "15 articles"
              },
              {
                title: "Industry Trends",
                description: "Market analysis and future predictions for the sector.",
                icon: "📈",
                count: "10 articles"
              }
            ].map((topic, index) => (
              <div key={index} className="card" style={{padding: 'var(--space-lg)', textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', marginBottom: 'var(--space-sm)'}}>
                  {topic.icon}
                </div>
                <h3 style={{
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-xs)'
                }}>
                  {topic.title}
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-sm)',
                  fontSize: 'var(--font-size-sm)'
                }}>
                  {topic.description}
                </p>
                <span style={{
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--primary-color)',
                  fontWeight: '500'
                }}>
                  {topic.count}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

