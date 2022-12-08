import SingleService from "./SingleService";

const servicesData = [
    {
        image: "/imgs/image 7.png",
        title: "Electrical"
    },
    {
        image: "/imgs/image 2.png",
        title: "Plumbing"
    },
    {
        image: "/imgs/image 37.png",
        title: "Title Settlers"
    },
]

const Services = () => {
  return (
    <div className="container flex-col gap-0 mx-auto flexible my-[5rem]">
      <h4 className="red-text">
        Our Works
      </h4>
      <h2 className="main-heading text-[#16213E]">Services</h2>
      <div className="flex justify-between mt-[2rem] mb-[5rem] w-full">
        {
            servicesData.map((service,i) => (
                <SingleService img={service.image} title={service.title}/>
            ))
        }
        
      </div>
      <div>
        <button className="bg-[#D2153D] w-[240px] h-[64px] text-white leading-[24px] text-[20px]">Show More</button>
      </div>
    </div>
  );
};

export default Services;
