import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider = ({ categories }) => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Autoplay, Navigation, Pagination, A11y]}
            >
                {
                    categories?.map((category, i) => (
                        <SwiperSlide key={i}>
                            <div
                                className='relative bg-[#F3F6FB] mb-10 overflow-hidden shadow-lg h-38 lg:w-[300px]'
                            >
                                <img
                                    className='min-w-full min-h-full '
                                    src={category.image}
                                />
                                <div className="badge bg-accent border-none absolute right-0 top-5">{category.category}</div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>

    );
};

export default Slider