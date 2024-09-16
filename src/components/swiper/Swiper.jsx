// import Swiper core and required modules
import { Navigation } from 'swiper/modules';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function SwiperComponent() {
  const [swiper, setSwiper] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const { t, i18n } = useTranslation("global");
  const projects = t("Projects.list", { returnObjects: true });
  const slideCount = Object.keys(projects).length;

  console.log("Translations object: ", projects);

  const handleNextSlide = () => {
    if (swiper) {
      swiper.slideNext();
      setActiveSlideIndex(swiper.realIndex); // Explicitly set after slide
      console.log('--------------------------------------');
      console.log("handleNextSlide pressed");
    }
  };

  const handlePrevSlide = () => {
    if (swiper) {
      swiper.slidePrev();
      setActiveSlideIndex(swiper.realIndex); // Explicitly set after slide
      console.log('--------------------------------------');
      console.log("handlePrevSlide pressed");
    }
  };

  const handleGoToSlide = (index) => {
    if (swiper) {
      swiper.slideTo(index); // Use slideToLoop for proper behavior with loop
      setTimeout(() => setActiveSlideIndex(swiper.realIndex), 50); // Add delay for updating active index
      console.log("handleGoToSlide pressed");
    }
  };

  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={setSwiper}
        onSlideChange={(swiperInstance) => {
          // console.log('realIndex', swiperInstance.realIndex);
          // console.log('activeSlideIndex', activeSlideIndex);
          setActiveSlideIndex(swiperInstance.realIndex);
        }} // Use realIndex for looped slides
        className="bg-black rounded-lg border-4 border-gray-500 hover:border-gray-300 duration-100 h-full"
      >
        {Object.keys(projects).map((key) => {
          const { title, img, description, tags } = projects[key];
          return (
            <SwiperSlide key={key}>
              <div className="w-full h-full flex">
                <div className="w-1/2 h-full">
                  {/* image on the first half */}
                  <img src={img} alt="imagen" className="w-full h-full object-cover opacity-70"/>
                </div>
                <div className="w-1/2 h-full text-left p-4 flex flex-col justify-between">
                  {/* content on the second half */}
                  <h1 className="text-sm md:text-xl lg:text-2xl font-bold text-white">
                    {title}
                  </h1>
                  <p className="text-white text-xs md:text-sm line-clamp-4">
                    {description}
                  </p>
                  {/* content to align at the bottom */}
                  <div className="mt-auto">
                    {tags.map((tag) => {
                      const colors = {
                        '#react': 'bg-blue-500 hover:bg-blue-700 text-white hover:text-gray-200',
                        '#django': 'bg-green-500 hover:bg-green-700 text-gray-600 hover:text-gray-800',
                        '#angular': 'bg-red-500 hover:bg-red-700 text-white hover:text-gray-200',
                        '#nodejs': 'bg-green-500 hover:bg-green-700 text-white hover:text-gray-200',
                      };
                      const color = colors[tag.toLowerCase()] || 'bg-gray-500 hover:bg-gray-700';
                      return (
                        <span key={tag} className={`${color} inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2`}>{tag}</span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="w-full mt-4 flex justify-between items-center">
        <div className="bg-black border-4 border-gray-500 hover:border-gray-300 rounded-md duration-100">
          <button onClick={handlePrevSlide} className="prev-slide text-white p-2 rounded-md">
            <svg width="20px" height="20px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#ffffff" /></svg>
          </button>
          <button onClick={handleNextSlide} className="next-slide text-white p-2 rounded-md">
            <svg width="20px" height="20px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#ffffff" /></svg>
          </button>
        </div>

        <div className="pagination-buttons flex space-x-2">
          {[...Array(slideCount)].map((_, index) => (
            <button
              key={index}
              onClick={() => handleGoToSlide(index)}
              className={`pagination-btn ${activeSlideIndex === index ? 'border-white' : 'border-gray-400 hover:border-gray-200 duration-150'} bg-black border-[3px] w-6 h-6 rounded-full`}
            />
          ))}
        </div>

      </div>
    </>
  );
}

export default SwiperComponent;

