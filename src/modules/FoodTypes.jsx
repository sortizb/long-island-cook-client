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
            <div className='swiper-container slideToTopNoFade'>
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
                    <SwiperSlide >
                        <div className='slide-container'>
                            <img src={types[0].image} alt="Italian Food" />
                            <div className='slide-content'>
                                <h3 className="slide-title">{types[0].title}</h3>
                                <p className="slide-text">{types[0].text}</p>
                                <button className="slide-button">BOOK AN APPOINTMENT</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide-container'>
                            <img src={types[1].image} alt="Mexican Food" />
                            <div className='slide-content'>
                                <h3 className="slide-title">{types[1].title}</h3>
                                <p className="slide-text">{types[1].text}</p>
                                <button className="slide-button">BOOK AN APPOINTMENT</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide-container'>
                            <img src={types[2].image} alt="Greek Food" />
                            <div className='slide-content'>
                                <h3 className="slide-title">{types[2].title}</h3>
                                <p className="slide-text">{types[2].text}</p>
                                <button className="slide-button">BOOK AN APPOINTMENT</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide-container'>
                            <img src={types[3].image} alt="Japanese Food" />
                            <div className='slide-content'>
                                <h3 className="slide-title">{types[3].title}</h3>
                                <p className="slide-text">{types[3].text}</p>
                                <button className="slide-button">BOOK AN APPOINTMENT</button>
                            </div>
                        </div>
                    </SwiperSlide>
      
                </Swiper>
            </div>
        );
    }
}