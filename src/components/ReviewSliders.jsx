

import ReviewCard from "./ReviewCard"
import { heroGirl } from "../assets"

import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination,Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';






const reviews = [
  {
    name: 'James Conway',
    role: 'Developer',
    review: 'This is unbelievable. He is too fast and he work with details. I will hire him again.',
    stars: 5,
    image: heroGirl
  },
  {
    name: 'James Conway',
    role: 'Developer',
    review: 'This is unbelievable. He is too fast and he work with details. I will hire him again.',
    stars: 5,
    image: heroGirl
  },
  {
    name: 'James Conway',
    role: 'Developer',
    review: 'This is unbelievable. He is too fast and he work with details. I will hire him again.',
    stars: 5,
    image: heroGirl
  },
  {
    name: 'James Conway',
    role: 'Developer',
    review: 'This is unbelievable. He is too fast and he work with details. I will hire him again.',
    stars: 5,
    image: heroGirl
  },
  {
    name: 'James Conway',
    role: 'Developer',
    review: 'This is unbelievable. He is too fast and he work with details. I will hire him again.',
    stars: 5,
    image: heroGirl
  },
  {
    name: 'James Conway',
    role: 'Developer',
    review: 'This is unbelievable. He is too fast and he work with details. I will hire him again.',
    stars: 5,
    image: heroGirl
  },
  {
    name: 'James Conway',
    role: 'Developer',
    review: 'This is unbelievable. He is too fast and he work with details. I will hire him again.',
    stars: 5,
    image: heroGirl
  },
  
];





SwiperCore.use([Pagination, Navigation, Autoplay]);
const ReviewSliders = () => {
  return (
    <div className="w-full bg-white  min-h-screen  text-[#263959] py-24 ">
      <div className="max-w-full w-[90%] ml-8 md:m-auto ">
        <div className="text-[#263959] flex items-center mr-8 justify-center text-center font-bold text-5xl m-auto">
          <p>
            Check Out <span className="block pt-4"> Recent Review</span>
          </p>
        </div>

        <Swiper 
       
        className="mt-16 py-12 "

        
          spaceBetween={50} 
          slidesPerView={3} 
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={
            {clickable:true}}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          breakpoints={{
            // when window width is >= 640px
            360: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard 
                name={review.name}
                role={review.role}
                review={review.review}
                stars={review.stars}
                image={review.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      
      </div>
    </div>
  );
};

export default ReviewSliders;
