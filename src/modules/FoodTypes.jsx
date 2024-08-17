import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import '../css/FoodTypes.css'
import { SlideContent } from './sub-modules/SlideContent';

export class FoodTypes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
        }
    }

    render() {
        const types = this.props.types;
        return(
            <div className='swiper-container'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    autoplay={{
                        delay: 6500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    loop={true}
                    speed={700}
                    effect='fade'
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {types.map(slide_info => {
                        return <SwiperSlide>
                                <SlideContent 
                                    image={slide_info.image}
                                    alt={slide_info.alt}
                                    title={slide_info.title}
                                    text={slide_info.text}
                                />
                               </SwiperSlide>
                    })}
      
                </Swiper>
            </div>
        );
    }
}