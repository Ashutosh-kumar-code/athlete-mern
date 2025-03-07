


import React from "react";
import Slider from "react-slick";
import img from "../assets/images/about-2.avif"
import img2 from "../assets/images/about.jpg"


const Aboutus = () => {
  var settings = {
    dots: true,
  
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
   
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const slides = [
    {
      title: "Our Mission",
      description: "Promoting fair play and clean sports by educating athletes on the dangers of doping.",
      image: img
    },
    {
      title: "Why It Matters",
      description: "Doping not only affects performance but also poses serious health risks and damages reputations.",
      image: img2
    },
    {
      title: "Anti-Doping Regulations",
      description: "We follow WADA guidelines to ensure fair competition and ethical sportsmanship.",
      image:img
    },
    {
      title: "How We Help",
      description: "Providing education, testing, and resources to support athletes in staying clean.",
      image: img
    }
  ];

  return (
    <div className="container mx-auto py-10 text-white">
    <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">About Anti-Doping</h2>
    <div className="slider-container ">
    <Slider {...settings} className="px-10  ">

        {slides.map((slide, index) => (
          <div className="px-2 ">
             <div key={index} className="border  text-gray-200  rounded-lg text-center  border-gray-300 h-[370px]  flex flex-col items-center ">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-52  object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold  text-blue-400">{slide.title}</h3>
            <p className="text-gray-600 mt-2">{slide.description}</p>
          </div>
          </div>
         
        ))}
      </Slider>
    </div>
  </div>
  );
};

export default Aboutus;

