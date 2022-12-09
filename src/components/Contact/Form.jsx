import { FaArrowRight } from "react-icons/fa";

const Form = () => {
    return(
        <form action="" className="container flex flex-wrap mx-auto my-[100px]">
        <div className="p-3 basis-1/2">
          <input
            type="text"
            class="input-common-class"
            id="exampleFormControlInput1"
            placeholder="Your first name"
          />
        </div>
        <div className="p-3 basis-1/2">
          <input
            type="text"
            class="input-common-class"
            id="exampleFormControlInput1"
            placeholder="Your last name "
          />
        </div>
        <div className="p-3 basis-1/2">
          <input
            type="text"
            class="input-common-class"
            id="exampleFormControlInput1"
            placeholder="Your Phone Number"
          />
        </div>
        <div className="p-3 basis-1/2">
          <input
            type="text"
            class="input-common-class"
            id="exampleFormControlInput1"
            placeholder="Your Address "
          />
        </div>
        <div className="p-3 basis-full">
          <textarea
            type="textarea"
            class="input-common-class h-[153px]"
            id="exampleFormControlInput1"
            placeholder="Enter your message here... "
          />
        </div>
        <div className="p-3">
          <button className="bg-[#D2153D] w-[240px] h-[64px] text-white flexible leading-[24px] text-[20px]">
            Submit Message{" "}
            <span>
              <FaArrowRight size={15} />
            </span>
          </button>
        </div>
      </form>
    )
}

export default Form;