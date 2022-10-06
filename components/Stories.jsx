import React, { useEffect, useState } from 'react'
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/Stories.module.scss'
export default function Stories() {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch(`https://mocki.io/v1/c0395fbd-fcf1-4871-bf74-7b2672e33e76`)
            .then((response) => response.json())
            .then((actualData) => setdata(actualData));
    }, []);
    return (
        <main className={`d-none d-md-flex ${styles.main}`}>
            <Swiper
                slidesPerView={4}
                centeredSlides={false}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    992: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                }}
                scrollbar={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper"
            >
                {
                    data.map((story) => {
                        return (
                            <SwiperSlide className={styles.slider} key={story.id}>
                                <div className={styles.storybox}>                                  
                                    <div className={styles.chiled}>
                                        <div className={styles.iconimg}>
                                            <img  src={story.src}  height="38"/>
                                        </div>
                                        <div className={styles.titlebox}>
                                            <h5>{story.title}</h5>
                                        </div>
                                    <img height={230} src={story.src} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </main>
    )
}
