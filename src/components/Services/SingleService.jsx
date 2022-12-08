const SingleService = ({img,title}) => {
  return (
    <div className="flex-col gap-3 items-start flexible">
      <img src={img} alt="img" />
      <h5 className="text-[#00215B] font-[700]">{title}</h5>
      <p className="tracking-tight w-[350px]">
        There are many variations of passages of lorem <br /> Ipsum available.
      </p>
    </div>
  );
};

export default SingleService;
