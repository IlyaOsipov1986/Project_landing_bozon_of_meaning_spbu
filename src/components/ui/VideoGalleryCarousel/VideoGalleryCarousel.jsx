import { useState, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import './VideoGalleryCarousel.scss';

const VideoGalleryCarousel= () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const videos = [
    {
      id: 1,
      thumbnail: "https://vkvideo.ru/video_ext.php?oid=-218344798&id=456240194&hd=2&autoplay=0",
    },
    {
      id: 2,
      thumbnail: "https://vkvideo.ru/video_ext.php?oid=-218344798&id=456240201&hd=2",
    },
    {
      id: 3,
      thumbnail: "https://vkvideo.ru/video_ext.php?oid=-218344798&id=456240167&hd=2",
    },
    {
      id: 4,
      thumbnail: "https://vkvideo.ru/video_ext.php?oid=-218344798&id=456240182&hd=2",
    },
     {
      id: 5,
      thumbnail: "https://vkvideo.ru/video_ext.php?oid=-218344798&id=456240167&hd=2",
    },
     {
      id: 6,
      thumbnail: "https://vkvideo.ru/video_ext.php?oid=-218344798&id=456240170&hd=2",
    },
  ];

  const handleSlideChange = useCallback((swiper) => {
    setActiveIndex(swiper.activeIndex);
  }, []);

  const handleRangeChange = useCallback((event) => {
    const index = parseInt(event.target.value);
    setActiveIndex(index);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  }, []);

  return (
    <div className="vk-video-carousel">
      <div className="carousel-container">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, FreeMode, Mousewheel, Keyboard]}
          spaceBetween={20}
          slidesPerView={'auto'}
          centeredSlides={false}
          navigation={{
            nextEl: '.carousel-next',
            prevEl: '.carousel-prev',
          }}
          freeMode={{
            enabled: true
          }}
          onSlideChange={handleSlideChange}
          className="video-swiper"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={video.id} className="video-slide">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    width="100%"
                    height="100%" 
                    src={video.thumbnail} 
                    alt={video.title}
                    className={index === activeIndex ? 'active' : ''}
                    allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                    style={{
                      border: 'none'
                    }}
                    ></iframe>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <button className="carousel-nav carousel-prev">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>
        
        <button className="carousel-nav carousel-next">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
          </svg>
        </button>
      </div>

      <div className="carousel-controls">
        <div className="range-container">
          <input
            type="range"
            min="0"
            max={videos.length - 1}
            step="1"
            value={activeIndex}
            onChange={handleRangeChange}
            className="carousel-range"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoGalleryCarousel;