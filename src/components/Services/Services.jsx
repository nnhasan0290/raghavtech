import { useState } from "react";
import SingleService from "./SingleService";

const servicesData = [
  {
    image: "/imgs/image 7.png",
    title: "Electrical",
  },
  {
    image: "/imgs/image 2.png",
    title: "Plumbing",
  },
  {
    image: "/imgs/image 37.png",
    title: "Title Settlers",
  },
  {
    image: "/imgs/painting.png",
    title: "Painting",
  },
  {
    image: "/imgs/cctv.png",
    title: "CCTV installation",
  },
  {
    image: "/imgs/const.png",
    title: "Construction of house",
  },
  {
    image: "/imgs/firm.png",
    title: "Firm alarm sensors",
  },
];

const Services = () => {
  const [serviceItems, setServiceItems] = useState(servicesData.slice(0, 3));
  return (
    <div className="container flex-col gap-0 mx-auto flexible my-[5rem]">
      <h4 className="red-text">Our Works</h4>
      <h2 className="main-heading text-[#16213E]">Services</h2>
      <div className="flex justify-center gap-[100px] mt-[2rem] mb-[5rem] w-full mx-auto flex-wrap">
        {serviceItems.map((service, i) => (
          <SingleService key={i} img={service.image} title={service.title} />
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            serviceItems.length === 3
              ? setServiceItems(servicesData)
              : setServiceItems(servicesData.slice(0, 3));
          }}
          className="bg-[#D2153D] w-[240px] h-[64px] text-white leading-[24px] text-[20px]"
        >
          Show {serviceItems.length === 3 ? "More" : "Less"}{" "}
        </button>
      </div>
    </div>
  );
};

export default Services;
