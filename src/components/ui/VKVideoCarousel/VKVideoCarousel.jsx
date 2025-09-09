import { useState, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import './VKVideoCarousel.scss';

const VKVideoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const videos = [
    {
      id: 1,
      title: "Что такое углеродная единица? Кому её можно продать, зачем это нужно, и почему в России она стоит так дешево?",
      thumbnail: "https://vkvideo.ru/video_ext.php?oid=-218344798&id=456240203&hd=2&autoplay=1",
      vkUrl: "https://vkvideo.ru/clip-218344798_456240203"
    },
    {
      id: 2,
      title: "Соответствие",
      author: "Предыдущая",
      views: "8.7K",
      duration: "1:15",
      thumbnail: "https://via.placeholder.com/300x450/764ba2/ffffff?text=Video+2",
      vkUrl: "https://vk.com/video-123456_456790"
    },
    {
      id: 3,
      title: "Определение",
      author: "Внезапная дама или религия",
      views: "15.2K",
      duration: "0:32",
      thumbnail: "https://via.placeholder.com/300x450/f093fb/ffffff?text=Video+3",
      vkUrl: "https://vk.com/video-123456_456791"
    },
    {
      id: 4,
      title: "Истории путешествий",
      author: "Путешественник",
      views: "23.1K",
      duration: "2:01",
      thumbnail: "https://via.placeholder.com/300x450/f5576c/ffffff?text=Video+4",
      vkUrl: "https://vk.com/video-123456_456792"
    },
    {
      id: 5,
      title: "Утренний кофе",
      author: "Кофеман",
      views: "18.9K",
      duration: "1:30",
      thumbnail: "https://via.placeholder.com/300x450/4fd1c5/ffffff?text=Video+5",
      vkUrl: "https://vk.com/video-123456_456793"
    },
    {
      id: 6,
      title: "Вечерний закат",
      author: "Природолюб",
      views: "31.2K",
      duration: "0:58",
      thumbnail: "https://via.placeholder.com/300x450/ed8936/ffffff?text=Video+6",
      vkUrl: "https://vk.com/video-123456_456794"
    }
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
          modules={[Navigation, FreeMode]}
          spaceBetween={20}
          slidesPerView={'auto'}
          centeredSlides={true}
          freeMode={true}
          navigation={{
            nextEl: '.carousel-next',
            prevEl: '.carousel-prev',
          }}
          onSlideChange={handleSlideChange}
          className="video-swiper"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={video.id} className="video-slide">
              <div className="video-card">
                <div className="video-thumbnail">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className={index === activeIndex ? 'active' : ''}
                  />
                  <div className="video-overlay">
                    <div className="play-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="video-info">
                  <h3 className="video-title">{video.title}</h3>
                </div>

                {index === activeIndex && (
                  <div className="active-indicator">
                    <div className="active-pulse"></div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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

export default VKVideoCarousel;