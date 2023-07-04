import HomeComponentCss from "./CSSfile/ComponentStyle.module.css";
import { BsArrowRight } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs";

const ManagerDetails = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <h1 className={`${HomeComponentCss.BusinessInfo}`}>
          Owner & Manager Details
        </h1>
        
        <div>
          <label
            style={{
              backgroundImage: "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
            }}
            className={`normal-case btn border-0 text-xl text-black w-32 mx-4`}
          >
            See All
          </label>

          <label
            style={{
              backgroundImage: "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
            }}
            className={`normal-case btn border-0 text-xl text-black w-32`}
          >
            Save
          </label>
        </div>
      </div>

      <div className={`${HomeComponentCss.ownerDetails} my-[44px]`}>
        <p
          className={`flex justify-center pt-[10px] ${HomeComponentCss.OwnerHeading}`}
        >
          Owner Details
        </p>
      </div>

      <div>
        <div>
          <div className="flex items-center justify-between">
            <div>
              <div className=" form-control">
                <label className="label">
                  <span className={`${HomeComponentCss.inputHead}`}>
                    Full Name *
                  </span>
                  <span className="label-text-alt">
                    <BsFillInfoCircleFill
                      size={15}
                      color={"#DC3545"}
                    ></BsFillInfoCircleFill>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className={`w-[360px] input border-0 focus:outline-none ${HomeComponentCss.customInput}`}
                />
              </div>

              <div className=" form-control mt-[25px]">
                <label className="label">
                  <span className={`${HomeComponentCss.inputHead}`}>
                    Country
                  </span>
                  <span className="label-text-alt">
                    <BsFillInfoCircleFill
                      size={15}
                      color={"#DC3545"}
                    ></BsFillInfoCircleFill>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className={`w-[360px] input border-0 focus:outline-none ${HomeComponentCss.customInput}`}
                />
              </div>
            </div>

            <div className=" form-control w-[360px]">
              <label className="label">
                <span className={`${HomeComponentCss.inputHead}`}>
                  Profile pic
                </span>
                <span className="label-text-alt">
                  <BsFillInfoCircleFill
                    size={15}
                    color={"#DC3545"}
                  ></BsFillInfoCircleFill>
                </span>
              </label>

              <div
                style={{
                  borderRadius: "8px",
                  border: "1px solid rgba(18, 18, 18, 0.16)",
                  background: "rgba(229, 229, 229, 0.4)",
                  color: "black",
                }}
                className={`$${HomeComponentCss.customInputImageUpload} w-[120px] h-[120px]`}
              >
                <img
                  className="block mx-auto mt-[32px]"
                  src="https://i.ibb.co/HrSFsdc/upload-cloud.png"
                  alt=""
                />
                <p className="flex justify-center text-black">
                  Click to upload
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-[25px]">
            <div className=" form-control">
              <label className="label">
                <span className={`${HomeComponentCss.inputHead}`}>City *</span>
                <span className="label-text-alt">
                  <BsFillInfoCircleFill
                    size={15}
                    color={"#DC3545"}
                  ></BsFillInfoCircleFill>
                </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className={`w-[360px] input border-0 focus:outline-none ${HomeComponentCss.customInput}`}
              />
            </div>

            <div className=" form-control">
              <label className="label">
                <span className={`${HomeComponentCss.inputHead}`}>
                  Country *
                </span>
                <span className="label-text-alt">
                  <BsFillInfoCircleFill
                    size={15}
                    color={"#DC3545"}
                  ></BsFillInfoCircleFill>
                </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className={`w-[360px] input border-0 focus:outline-none ${HomeComponentCss.customInput}`}
              />
            </div>
          </div>

          {/* Third input */}
          <div>
            <div className=" form-control mt-[25px]">
              <label className="label">
                <span className={`${HomeComponentCss.inputHead}`}>
                  Address *
                </span>
                <span className="label-text-alt">
                  <BsFillInfoCircleFill
                    size={15}
                    color={"#DC3545"}
                  ></BsFillInfoCircleFill>
                </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className={`w-full input border-0 focus:outline-none ${HomeComponentCss.customInput}`}
              />
            </div>
          </div>

          {/* 5th input */}

          <div className="flex justify-between mt-[25px]">
            <div className=" form-control">
              <label className="label">
                <span className={`${HomeComponentCss.inputHead}`}>
                  E-mail *
                </span>
                <span className="label-text-alt">
                  <BsFillInfoCircleFill
                    size={15}
                    color={"#DC3545"}
                  ></BsFillInfoCircleFill>
                </span>
              </label>
              <div
                className={`${HomeComponentCss.backGround} w-[360px] flex justify-between items-center`}
              >
                <input
                  type="email"
                  placeholder="Type here"
                  className={`w-full input border-0 focus:outline-none ${HomeComponentCss.customInputDifferent}`}
                />
                <button
                  className={` ${HomeComponentCss.sendingButton} m-[4px]`}
                >
                  Sent OTP
                </button>
              </div>
            </div>

            <div className=" form-control">
              <label className="label">
                <span className={`${HomeComponentCss.inputHead}`}>
                  Mobile Number *
                </span>
                <span className="label-text-alt">
                  <BsFillInfoCircleFill
                    size={15}
                    color={"#DC3545"}
                  ></BsFillInfoCircleFill>
                </span>
              </label>
              <div
                className={`${HomeComponentCss.backGround} w-[360px] flex justify-between items-center`}
              >
                <input
                  type="email"
                  placeholder="Type here"
                  className={`w-full input border-0 focus:outline-none ${HomeComponentCss.customInputDifferent}`}
                />
                <button
                  className={` ${HomeComponentCss.sendingButton} m-[4px]`}
                >
                  Sent OTP
                </button>
              </div>
            </div>
          </div>

          {/* Button to proceed */}

          <div className="flex items-center mt-[129px]">
            <p className="text-black">Do you want to fill manager details?</p>
            <button className={`${HomeComponentCss.yesNoButton} mx-[20px]`}>
              Yes
            </button>
            <button className={`${HomeComponentCss.yesNoButton}`}>No</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerDetails;
