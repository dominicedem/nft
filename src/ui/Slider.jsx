import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import Cards from "./Cards";
import { Navigation, Autoplay } from "swiper/modules";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// const data = [
//   {
//     image_url: `/degods.webp`,
//     id: 1,
//     sub: "Space-star",
//   },
//   {
//     image_url: `/light.webp`,
//     id: 2,
//     sub: "Boom",
//   },
//   {
//     image_url: `/img1.webp`,
//     id: 4,
//     sub: "Plutonics",
//   },
//   {
//     image_url: `/robot.webp`,
//     id: 3,
//     sub: "Azra-alpha",
//   },
//   {
//     image_url: `/fly.webp`,
//     id: 5,
//     sub: "Twitter",
//   },
//   {
//     image_url: `/newNft.webp`,
//     id: 6,
//     sub: "instagram",
//   },
//   {
//     image_url: `/nft3.png`,
//     id: 7,
//     sub: "facebook",
//   },
// ];

const DescriptionBox = styled.div`
  margin: 0 auto;
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;
const InnerBox = styled.div`
  margin: 0 auto;
  width: 95%;
  overflow-x: hidden;
  @media (min-width: 980px) {
    width: 90%;
  }
`;
const Img = styled.img`
  width: 40rem;
  height: 40rem;
`;

function Slider({ type, defaultCard, data, category, isLoading, Exhibition }) {
  const [enter, setEnter] = useState(false);
  // console.log(isLoading);
  return (
    <DescriptionBox
      onMouseEnter={() => setEnter(true)}
      onMouseLeave={() => setEnter(false)}
      className={type && "head"}
    >
      <InnerBox className={type && "head"}>
        <Swiper
          spaceBetween={type ? 200 : 30}
          slidesPerView={type ? 5 : 4}
          loop={true}
          speed={750}
          autoplay={
            type && {
              delay: 2500,
              disableOnInteraction: false,
            }
          }
          navigation={!type && enter}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            1300: {
              slidesPerView: `${type ? 6 : 5}`,
            },
            1200: {
              slidesPerView: `${type ? 5 : 4}`,
            },
          }}
          className={type ? "head" : "mySwiper"}
        >
          {data?.map((val, _) => (
            <SwiperSlide key={val.id}>
              <Cards
                Exhibition={Exhibition}
                category={category}
                defaultCard={defaultCard}
                all={type && "true"}
                key={val._id}
                data={val}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </InnerBox>
    </DescriptionBox>
  );
}

export default Slider;
