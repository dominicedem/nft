import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

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
function VerticalSlider({ type, data }) {
  return (
    <TestStyle>
      <Swiper
        spaceBetween={type ? -5 : -60}
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
        {data?.map((val, _) => (
          <SwiperSlide key={val.id}>
            <Img
              src={val.image_url}
              alt="logo"
              height={type ? "240" : "140"}
              width={type ? "150" : "110"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </TestStyle>
  );
}

export default VerticalSlider;
