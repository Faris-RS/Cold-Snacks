import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselImages = [
  {
    image:
      "https://images.unsplash.com/photo-1711645372528-cddb2c6eb565?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    legend: "Legend 1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1710607292812-b45077aba7f1?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    legend: "Legend 2",
  },
  {
    image:
      "https://images.unsplash.com/photo-1682687982502-b05f0565753a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    legend: "Legend 3",
  },
  {
    image:
      "https://images.unsplash.com/photo-1711635101367-0d70297e9645?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D",
    legend: "Legend 4",
  },
];

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {carouselImages.map((obj) => {
          return (
            <div className="w-full h-full">
              <img src={obj.image} alt={obj.legend} className="h-[400px] md:h-[500px] lg:h-[600px] 2xl:h-[700px] w-full object-cover"/>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
