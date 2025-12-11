


import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../styles/ProductSlider.module.css';
import ImageLightbox from './ImageLightbox';

interface Product {
  name: string;
  img: string;
  lifestyleImg?: string;
  description: string;
  longDescription?: string;
  price?: string;
  features?: string[];
  usps?: string[];
  origin?: string;
  category: 'agricultural' | 'technology';
}

const ProductSlider: FC = () => {
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
    isOpen: boolean;
  }>({ src: '', alt: '', isOpen: false });

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt, isOpen: true });
  };

  const closeLightbox = () => {
    setLightboxImage({ src: '', alt: '', isOpen: false });
  };

  const products: Product[] = [
    {
      name: 'Kashmiri Walnuts',
      img: '/images/walnuts.svg',
      lifestyleImg: '/images/walnuts-lifestyle.svg',
      description: 'Premium Kashmiri walnuts, perfect for retail or bulk distribution.',
      longDescription: 'Hand-selected from the pristine valleys of Kashmir, our walnuts are naturally rich in omega-3 fatty acids and antioxidants. Each walnut is carefully processed to maintain its natural flavor and nutritional value.',
      price: 'From ₹1500/kg',
      features: ['Organic', 'Fresh', 'Premium Quality'],
      usps: ['100% Natural', 'Rich in Omega-3', 'Hand-selected'],
      origin: 'Kashmir Valley',
      category: 'agricultural'
    },
    {
      name: 'Premium Almonds',
      img: '/images/almonds.svg',
      lifestyleImg: '/images/almonds-lifestyle.svg',
      description: 'High-quality almonds, freshly processed and packaged.',
      longDescription: 'Our premium almonds are sourced from the finest orchards and are naturally rich in vitamin E, protein, and healthy fats. Perfect for snacking, baking, or culinary applications.',
      price: 'From ₹900/kg',
      features: ['Rich in Protein', 'Vitamin E', 'Healthy Fats'],
      usps: ['Premium Grade', 'Vitamin E Rich', 'Perfect for Baking'],
      origin: 'California & Kashmir',
      category: 'agricultural'
    },
    {
      name: 'Kashmiri Saffron',
      img: '/images/saffron.svg',
      lifestyleImg: '/images/saffron-lifestyle.svg',
      description: 'Premium saffron from Kashmir, known for its rich flavor.',
      longDescription: 'The world\'s most precious spice, hand-harvested from our Kashmir saffron fields. Each strand is carefully selected for its vibrant color, intense aroma, and exceptional quality.',
      price: 'From ₹800/gram',
      features: ['Pure Kashmiri', 'A1 Grade', 'Laboratory Tested'],
      usps: ['World\'s Most Expensive Spice', 'Intense Aroma', 'Vibrant Color'],
      origin: 'Pampore, Kashmir',
      category: 'agricultural'
    },
    {
      name: 'Cloud Computing Solutions',
      img: '/images/cloud-computing.svg',
      description: 'Scalable cloud infrastructure and migration services for businesses.',
      longDescription: 'Transform your business with our comprehensive cloud solutions. We provide secure, scalable, and cost-effective cloud infrastructure that grows with your business needs.',
      price: 'Custom Quote',
      features: ['Scalable Infrastructure', '99.9% Uptime', '24/7 Support'],
      usps: ['Enterprise Security', 'Auto-scaling', 'Cost-effective'],
      origin: 'Technology Solutions',
      category: 'technology'
    },
    {
      name: 'Cybersecurity Services',
      img: '/images/cybersecurity.svg',
      description: 'Comprehensive security solutions to protect your digital assets.',
      longDescription: 'Protect your digital assets with our advanced cybersecurity solutions. Our multi-layered approach ensures comprehensive protection against evolving threats.',
      price: 'Custom Quote',
      features: ['Threat Detection', 'Data Protection', 'Compliance Ready'],
      usps: ['AI-powered Detection', 'Zero Trust Security', 'Compliance Ready'],
      origin: 'Enterprise Security',
      category: 'technology'
    },
    {
      name: 'AI & Machine Learning',
      img: '/images/ai-solutions.svg',
      description: 'Machine learning and AI integration for business automation.',
      longDescription: 'Harness the power of artificial intelligence to automate processes and gain valuable insights. Our AI solutions are tailored to your specific business requirements.',
      price: 'Custom Quote',
      features: ['Machine Learning', 'Process Automation', 'Data Analytics'],
      usps: ['Custom AI Models', 'Predictive Analytics', 'Process Optimization'],
      origin: 'AI Innovation Lab',
      category: 'technology'
    },
    {
      name: 'Premium Pistachios',
      img: '/images/walnut-svgrepo-com.svg',
      description: 'Premium Kashmiri pistachios with rich taste and nutritional value.',
      longDescription: 'Crispy, flavorful pistachios that are naturally high in antioxidants and protein. These premium nuts make for a perfect healthy snack or ingredient.',
      price: 'From ₹1200/kg',
      features: ['Premium Grade', 'Rich in Antioxidants', 'Energy Dense'],
      usps: ['Premium Quality', 'High in Protein', 'Natural Snack'],
      origin: 'Kashmir Mountains',
      category: 'agricultural'
    },
    {
      name: 'Dried Apricots',
      img: '/images/almonds.svg',
      description: 'Sun-dried apricots from Kashmir valleys, naturally sweet.',
      longDescription: 'Naturally sweet dried apricots that retain their nutritional value and authentic flavor. Perfect for healthy snacking or culinary applications.',
      price: 'From ₹600/kg',
      features: ['Natural Sweetness', 'Vitamin A Rich', 'No Preservatives'],
      usps: ['Naturally Sweet', 'Vitamin A Rich', 'Sun-dried'],
      origin: 'Kashmir Valleys',
      category: 'agricultural'
    },
  ];

  return (
    <section className={styles.productSection}>

      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Products & Services
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our range of premium Kashmiri agricultural products and cutting-edge technology solutions, 
          carefully selected and developed to maintain the highest quality standards.
        </p>
      </div>

      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className={styles.productSwiper}
        >
          {products.map((product, index) => (

            <SwiperSlide key={index}>
              <div className={styles.productCard}>
                <div 
                  className={styles.productImage}
                  style={{ backgroundImage: `url(${product.img})` }}
                >
                  <div className={styles.imageOverlay}>
                    <span className={styles.viewDetails}>View Details</span>
                  </div>
                </div>
                
                <div className={styles.productInfo}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productDescription}>{product.description}</p>
                  
                  {product.price && (
                    <div className={styles.productPrice}>
                      <span className={styles.priceLabel}>Starting from</span>
                      <span className={styles.priceValue}>{product.price}</span>
                    </div>
                  )}
                  
                  {product.features && (
                    <div className={styles.productFeatures}>
                      {product.features.map((feature, idx) => (
                        <span key={idx} className={styles.featureBadge}>
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <button className={styles.ctaButton}>
                    Learn More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation Arrows */}
        <div className={`${styles.navArrow} ${styles.prevArrow}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className={`${styles.navArrow} ${styles.nextArrow}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
