"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const cards = [
  { name: "Carousel Image", logo: "/71wF9ChrIfL._AC_SR920,736_.jpg" },
  { name: "Carousel Image", logo: "/mens-shoe/mens2.jpeg" },
  {
    name: "Carousel Image", logo:"/womens-shoe/womens1.jpeg" ,
    
  },
  { name: "Carousel Image", logo: "/kids-shoe/kids5.jpeg" },
  { name: "Carousel Image", logo: "/JORDAN+LUKA+3.png" },
  { name: "Carousel Image", logo: "/kids-shoe/kids4.jpeg" },
  { name: "Carousel Image", logo: "/JORDAN+LUKA+3.png" },
  {
    name: "Carousel Image",
    logo: "/mens-shoe/mens4.jpeg",
  },
  { name: "Carousel Image", logo: "/white-casual-shoes-for-men-1000x1000 (1).webp", },
  {
    name: "Carousel Image",
    logo: "/white-casual-shoes-for-men-1000x1000.webp",
  },
];

const CarouselCards = () => {
  return (
    <div className="relative w-full h-full -mt-28 px-6 z-90">
      <Swiper
        slidesPerView={1} // Default for smallest screens
        spaceBetween={20} // Space between slides
        loop={true} // Enable infinite loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2 }, // Small screens
          640: { slidesPerView: 3 }, // Medium screens
          1024: { slidesPerView: 4 }, // Large screens
        }}
        modules={[Autoplay]}
        className="w-full h-full" // Ensuring Swiper fills the container
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className="bg-white rounded-lg shadow-lg p-2 flex items-center justify-center w-full h-full z-90">
              <div className="w-full h-48 flex items-center justify-center z-90">
                <img
                  src={card.logo}
                  alt={card.name}
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselCards;
