import React from "react";
import Slider from "react-slick";
import FoodPartyCard from "./components/FoodPartyCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

class FoodPartyContainer extends React.Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      speed: 500,
      arrows: false,
      autoplay: true,
      slidesToShow: 6,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div className="foodparty-container">
        <Slider {...settings}>
          <FoodPartyCard />
          <FoodPartyCard />
          <FoodPartyCard />
          <FoodPartyCard />
          <FoodPartyCard />
          <FoodPartyCard />
          <FoodPartyCard />
          <FoodPartyCard />
          <FoodPartyCard />
          <FoodPartyCard />
          <FoodPartyCard />
          <FoodPartyCard />
          <FoodPartyCard />
          <FoodPartyCard />
        </Slider>
      </div>
    );
  }
}

export default FoodPartyContainer;
