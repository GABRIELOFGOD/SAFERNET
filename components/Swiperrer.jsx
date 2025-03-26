import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };

  return (
    <div className="w-screen overflow-hidden">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <div className='relative w-full h-fit md:h-[90vh] bg-[url("/images/h1.jpg")] bg-cover bg-center text-white flex flex-col items-center justify-center gap-5 px-6 py-12 md:px-24'>
              <div className='absolute inset-0 bg-primary opacity-80'></div>
              <div className='relative justify-center items-center flex flex-col gap-5 z-10 text-center'>
                <p className="md:text-5xl text-3xl font-bold">Safety in the Digital Realm, Societal Rights</p>
                <p className='md:text-xl text-base w-full md:w-[800px]'>We aim to enhance digital inclusion by creating a more accessible and supportive online space, particularly for vulnerable groups.</p>
              </div>
            </div>
          </div>
          <div>
            <div className='relative w-full h-fit md:h-[90vh] bg-cover bg-center text-white flex flex-col items-center justify-center gap-5 px-6 py-12 md:px-24  bg-[url("/images/h2.jpg")]'>
              <div className='absolute inset-0 bg-primary opacity-80'></div>
              <div className='relative justify-center items-center flex flex-col gap-5 z-10 text-center'>
                <p className="md:text-5xl text-3xl font-bold">Promoting Cybersecurity and Digital Equity</p>
                <p className='md:text-xl text-base w-full md:w-[800px]'>Our goal is to diminish digital disparities by shaping a digital world that is safer and more secure, especially for women and children.</p>
              </div>
            </div>
          </div>
          <div>
            <div className='relative w-full h-fit md:h-[90vh] bg-cover bg-center text-white flex flex-col items-center justify-center gap-5 px-6 py-12 md:px-24  bg-[url("/images/h3.jpg")]'>
              <div className='absolute inset-0 bg-primary opacity-80'></div>
              <div className='relative justify-center items-center flex flex-col gap-5 z-10 text-center'>
                <p className="md:text-5xl text-3xl font-bold">Advancing Online Protection and Community Welfare</p>
                <p className='md:text-xl text-base w-full md:w-[800px]'>Our mission is to bridge the digital divide by fostering an inclusive and protective online environment for all.</p>
              </div>
            </div>
          </div>
          <div>
            <div className='relative w-full h-fit md:h-[90vh] bg-cover bg-center text-white flex flex-col items-center justify-center gap-5 px-6 py-12 md:px-24  bg-[url("/images/h5.jpg")]'>
              <div className='absolute inset-0 bg-primary opacity-80'></div>
              <div className='relative justify-center items-center flex flex-col gap-5 z-10 text-center'>
                <p className="md:text-5xl text-3xl font-bold">Advancing Online Safety and Digital Inclusion</p>
                <p className='md:text-xl text-base w-full md:w-[800px]'>Our goal is to close the digital gap by cultivating a safe and inclusive online space for everyone.</p>
              </div>
            </div>
          </div>
          <div>
            <div className='relative w-full h-fit md:h-[90vh] bg-cover bg-center text-white flex flex-col items-center justify-center gap-5 px-6 py-12 md:px-24  bg-[url("/images/h4.jpg")]'>
              <div className='absolute inset-0 bg-primary opacity-80'></div>
              <div className='relative justify-center items-center flex flex-col gap-5 z-10 text-center'>
                <p className="md:text-5xl text-3xl font-bold">Security in the Digital Space, Social Justice.</p>
                <p className='md:text-xl text-base w-full md:w-[800px]'>Our aim is to reduce digital inequalities by creating a safer and more secure online environment, particularly for women and children.</p>
              </div>
            </div>
          </div>
          <div>
            <div className='relative w-full h-fit md:h-[90vh] bg-cover bg-center text-white flex flex-col items-center justify-center gap-5 px-6 py-12 md:px-24  bg-[url("/images/5.png")]'>
              <div className='absolute inset-0 bg-primary opacity-80'></div>
              <div className='relative justify-center items-center flex flex-col gap-5 z-10 text-center'>
                <p className="md:text-5xl text-3xl font-bold">AI Colaboration for Digital Safety</p>
                <p className='md:text-xl text-base w-full md:w-[800px]'>We educate, engage and collaborate for a safer and Beneficial Artificial Intelligence and Internet as a whole</p>
              </div>
            </div>
          </div>
          {/* <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div> */}
        </Slider>
      </div>
    </div>
  );
}

export default SimpleSlider;
