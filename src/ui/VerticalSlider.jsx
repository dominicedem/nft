import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const data = [
  {
    image_url: `/degods.webp`,
    id: 1,
    sub: "Space-star",
  },
  {
    image_url: `/light.webp`,
    id: 2,
    sub: "Boom",
  },
  {
    image_url: `/img1.webp`,
    id: 4,
    sub: "Plutonics",
  },
  {
    image_url: `/robot.webp`,
    id: 3,
    sub: "Azra-alpha",
  },
  {
    image_url: `/fly.webp`,
    id: 5,
    sub: "Twitter",
  },
  {
    image_url: `/newNft.webp`,
    id: 6,
    sub: "instagram",
  },
  {
    image_url: `/nft3.png`,
    id: 7,
    sub: "facebook",
  },
  {
    image_url: `/robot.webp`,
    id: 8,
    sub: "facebook",
  },
  {
    image_url: `/degods.webp`,
    id: 9,
    sub: "facebook",
  },
  {
    image_url: `/hero.jpg`,
    id: 10,
    sub: "facebook",
  },
];
const TestStyle = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  object-fit: cover;
  aspect-ratio: 1/2;
  border-radius: 1rem;
`;
function VerticalSlider({ type }) {
  return (
    <TestStyle>
      <Swiper
        spaceBetween={type ? -5 : -90}
        slidesPerView={type ? 2 : 3}
        loop={true}
        centeredSlides={!type && true}
        speed={type ? 2500 : 2000}
        direction="vertical"
        autoplay={
          type
            ? {
                delay: 10,
                disableOnInteraction: false,
                reverseDirection: true,
              }
            : {
                delay: 10,
                disableOnInteraction: false,
              }
        }
        modules={[Autoplay]}
        className={"verticalSlide mySwiper"}
      >
        {data.map((val, _) => (
          <SwiperSlide key={val.id}>
            <Img
              src={val.image_url}
              alt="logo"
              height={type ? "240" : "130"}
              width={type ? "150" : "110"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </TestStyle>
  );
}

export default VerticalSlider;
