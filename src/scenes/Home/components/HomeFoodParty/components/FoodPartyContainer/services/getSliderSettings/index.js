export default function getSliderSettings(cardsCount) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: cardsCount >= 6,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          infinite: cardsCount >= 5,
        },
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 4,
          infinite: cardsCount >= 4,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          infinite: cardsCount >= 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          infinite: cardsCount >= 2,
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

  return settings;
}
