const data1 = [
  {
    image_url: `/degods.webp`,
    id: 1,
  },
  {
    image_url: `/elephant.jpeg`,
    id: 2,
    sub: "Boom",
  },
  {
    image_url: `/boy.png`,
    id: 4,
  },
  {
    image_url: `/pics4.jpeg`,
    id: 3,
  },
  {
    image_url: `/horse.jpeg`,
    id: 5,
  },
  {
    image_url: `/strike.png`,
    id: 5,
  },
];

const data2 = [
  {
    image_url: `/pirate.jpeg`,
    id: 1,
  },
  {
    image_url: `/pics1.jpeg`,
    id: 2,
  },
  {
    image_url: `/pics5.jpeg`,
    id: 3,
  },
  {
    image_url: `/pics2.jpeg`,
    id: 4,
  },
  {
    image_url: `/hero.jpg`,
    id: 5,
  },
];
const data3 = [
  {
    image_url: `/dev.webp`,
    id: 1,
  },
  {
    image_url: `/crown.jpeg`,
    id: 2,
  },
  {
    image_url: `/horn.png`,
    id: 3,
  },
  {
    image_url: `/river.webp`,
    id: 4,
  },
  {
    image_url: `/shogun.jpeg`,
    id: 5,
  },
];

export default function useVerticalData() {
  return { data1, data2, data3 };
}
