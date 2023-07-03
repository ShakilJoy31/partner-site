import { useState } from "react";
import HomeComponentCss from "../CSSfile/ComponentStyle.module.css";
import { BsArrowRight } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { useEffect } from "react";

const HomeComponent = () => {
  const [businessName, setBusinessName] = useState();
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [address, setAddress] = useState();
  const [openingTime, setOpeningTime] = useState();
  const [closingTime, setClosingTime] = useState();
  const [email, setEmail] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [image, setImage] = useState();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("businessName"))) {
      setBusinessName(JSON.parse(localStorage.getItem("businessName")));
    }
     if (JSON.parse(localStorage.getItem("country"))) {
      setCountry(JSON.parse(localStorage.getItem("country")));
    }
     if (JSON.parse(localStorage.getItem("state"))) {
      setState(JSON.parse(localStorage.getItem("state")));
    }
     if (JSON.parse(localStorage.getItem("city"))) {
      setCity(JSON.parse(localStorage.getItem("city")));
    }
     if (JSON.parse(localStorage.getItem("address"))) {
      setAddress(JSON.parse(localStorage.getItem("address")));
    }
     if (JSON.parse(localStorage.getItem("openingTime"))) {
      setOpeningTime(JSON.parse(localStorage.getItem("openingTime")));
    }
     if (JSON.parse(localStorage.getItem("closingTime"))) {
      setClosingTime(JSON.parse(localStorage.getItem("closingTime")));
    }
     if (JSON.parse(localStorage.getItem("email"))) {
      setEmail(JSON.parse(localStorage.getItem("email")));
    }
     if (JSON.parse(localStorage.getItem("mobile"))) {
      setMobileNumber(JSON.parse(localStorage.getItem("mobile")));
    }
  }, []);

  const [hostedImage, setHostedImage] = useState("");
  const ImageStorageKey = "1f2e07ae412954d520f52351b07dee66";
  if (image) {
    const formDataImage = new FormData();
    formDataImage.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${ImageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formDataImage,
    })
      .then((res) => res.json())
      .then((result) => {
        setHostedImage(result?.data?.display_url);
      });
    setImage("");
  }


  const handleProceedToOwnerAndManagerDetails = () => {
    console.log(
      businessName,
      country,
      state,
      city,
      address,
      openingTime,
      closingTime,
      email,
      mobileNumber
    );
  };
  return (
    <div className="mb-8">
      <h1 className={`${HomeComponentCss.BusinessInfo} mb-[48px]`}>
        Business Information
      </h1>
      <div>
        <div>
          <div className="flex justify-between">
            <div className=" form-control">
              <label className="label">
                <span className={`${HomeComponentCss.inputHead}`}>
                  Business Name *
                </span>
                <span className="label-text-alt">
                  <BsFillInfoCircleFill
                    size={15}
                    color={"#DC3545"}
                  ></BsFillInfoCircleFill>
                </span>
              </label>
              <input
                onChange={(e) => {
                  localStorage.setItem(
                    "businessName",
                    JSON.stringify(e.target.value)
                  );
                  setBusinessName();
                }}
                value={businessName}
                type="text"
                placeholder="Type here"
                className={`w-[360px] input border-0 focus:outline-none ${HomeComponentCss.customInput}`}
              />
            </div>

            <div className=" form-control">
              <label className="label">
                <span className={`${HomeComponentCss.inputHead}`}>Country</span>
                <span className="label-text-alt">
                  <BsFillInfoCircleFill
                    size={15}
                    color={"#DC3545"}
                  ></BsFillInfoCircleFill>
                </span>
              </label>
              <input
                onChange={(e) => {
                  localStorage.setItem(
                    "country",
                    JSON.stringify(e.target.value)
                  );
                  setCountry(e.target.value);
                }}
                value={country}
                type="text"
                placeholder="Type here"
                className={`w-[360px] input border-0 focus:outline-none ${HomeComponentCss.customInput}`}
              />
            </div>
          </div>

          {/* Second input group */}
          <div className="flex justify-between mt-[25px]">
            <div className=" form-control">
              <label className="label">
                <span className={`${HomeComponentCss.inputHead}`}>State *</span>
                <span className="label-text-alt">
                  <BsFillInfoCircleFill
                    size={15}
                    color={"#DC3545"}
                  ></BsFillInfoCircleFill>
                </span>
              </label>
              <select
                onChange={(e) => {
                  localStorage.setItem("state", JSON.stringify(e.target.value));
                  setState(e.target.value);
                }}
                value={state}
                className={`w-[360px] input border-0 focus:outline-none ${HomeComponentCss.customInput}`}
              >
                <option disabled selected>
                  Delhi
                </option>
                <option>Mumbai</option>
                <option>Kolkata</option>
                <option>Chennai</option>
                <option>Uttar pradesh</option>
                <option>Tamilnadu</option>
              </select>
            </div>

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
                onChange={(e) => {
                  localStorage.setItem("city", JSON.stringify(e.target.value));
                  setCity(e.target.value);
                }}
                value={city}
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

              <div
                className={`${HomeComponentCss.backGround} w-full flex justify-between items-center`}
              >
                <input
                  onChange={(e) => {
                    localStorage.setItem(
                      "address",
                      JSON.stringify(e.target.value)
                    );
                    setAddress(e.target.value);
                  }}
                  value={address}
                  type="text"
                  placeholder="Type here"
                  className={`w-full input border-0 focus:outline-none ${HomeComponentCss.customInputDifferent}`}
                />
                <span className="mx-2">
                  <CiLocationOn color="black" size={20}></CiLocationOn>
                </span>
              </div>
            </div>
          </div>

          {/* 4th and 5th input */}
          <div className="flex justify-between mt-[25px]">
            <div className=" form-control">
              <label className="label">
                <span className={`${HomeComponentCss.inputHead}`}>
                  Opening time *
                </span>
                <span className="label-text-alt">
                  <BsFillInfoCircleFill
                    size={15}
                    color={"#DC3545"}
                  ></BsFillInfoCircleFill>
                </span>
              </label>
              <input
                onChange={(e) => {
                  localStorage.setItem(
                    "openingTime",
                    JSON.stringify(e.target.value)
                  );
                  setOpeningTime(e.target.value);
                }}
                value={openingTime}
                type="time"
                placeholder="Type here"
                className={`w-[360px] input border-0 focus:outline-none ${HomeComponentCss.customInput}`}
              />
            </div>

            <div className=" form-control">
              <label className="label">
                <span className={`${HomeComponentCss.inputHead}`}>
                  Closing time *
                </span>
                <span className="label-text-alt">
                  <BsFillInfoCircleFill
                    size={15}
                    color={"#DC3545"}
                  ></BsFillInfoCircleFill>
                </span>
              </label>
              <input
                onChange={(e) => {
                  localStorage.setItem(
                    "closingTime",
                    JSON.stringify(e.target.value)
                  );
                  setClosingTime(e.target.value);
                }}
                value={closingTime}
                type="time"
                className={`w-[360px] input border-0 focus:outline-none ${HomeComponentCss.customInput}`}
              />
            </div>
          </div>

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
                  onChange={(e) => {
                    localStorage.setItem(
                      "email",
                      JSON.stringify(e.target.value)
                    );
                    setEmail(e.target.value);
                  }}
                  value={email}
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
                  onChange={(e) => {
                    localStorage.setItem(
                      "mobile",
                      JSON.stringify(e.target.value)
                    );
                    setMobileNumber(e.target.value);
                  }}
                  value={mobileNumber}
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

          {/* Uploading image */}
          <div className="mt-[40px]">
            <div className=" form-control w-[360px]">
              <label className="label">
                <span className={`${HomeComponentCss.inputHead}`}>
                  Upload image of your Restaurant
                </span>
                <span className="label-text-alt">
                  <BsFillInfoCircleFill
                    size={15}
                    color={"#DC3545"}
                  ></BsFillInfoCircleFill>
                </span>
              </label>

              <div className="flex justify-between items-center">
              <div
                style={{
                  borderRadius: "8px",
                  border: "1px solid rgba(18, 18, 18, 0.16)",
                  background: "rgba(229, 229, 229, 0.4)",
                  color: "black",
                }}
                className={`$${HomeComponentCss.customInputImageUpload} w-[120px] h-[120px] cursor-pointer`}
              >
                <input onChange={(e)=>{
                  setImage(e?.target?.files[0])
                }} style={{position:'absolute', opacity:'0'}} type="file" className="h-[120px]"/>
                <img
                  className="block mx-auto mt-[32px]"
                  src="https://i.ibb.co/HrSFsdc/upload-cloud.png"
                  alt=""
                />
                <p className="flex justify-center text-black">
                  Click to upload
                </p>
              </div>

                {/* Image preview */}
                {
                  hostedImage && <div>
                    <img className="w-[120px] h-[120px] rounded-sm" src={hostedImage} alt="" />
                  </div>
                }
              </div>

              


            </div>
          </div>

          {/* Button to proceed */}

          <div className="flex justify-end cursor-pointer">
            <div
              onClick={handleProceedToOwnerAndManagerDetails}
              className={`${HomeComponentCss.proceedButton} w-[464px] h-[50px]`}
            >
              <p className="flex justify-center mt-3">
                Proceed to Owner and manager details{" "}
                <span className="mt-[4px] ml-2">
                  <BsArrowRight size={20}></BsArrowRight>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
