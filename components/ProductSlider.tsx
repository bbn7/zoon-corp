import { FC } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Product {
  name: string;
  img: string;
  description: string;
}

const ProductSlider: FC = () => {
  const products: Product[] = [
    {
      name: 'Kashmiri Walnuts',
      img: '/images/walnuts.jpg',
      description: 'Premium Kashmiri walnuts, perfect for retail or bulk distribution.',
    },
    {
      name: 'Almonds',
      img: '/images/almonds.jpg',
      description: 'High-quality almonds, freshly processed and packaged.',
    },
    {
      name: 'Saffron',
      img: '/images/saffron.jpg',
      description: 'Premium saffron from Kashmir, known for its rich flavor.',
    },
  ];

  return (
    <div>
      <h2>Our Products</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="slider-item">
              <Image src={product.img} alt={product.name} width={300} height={200} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
