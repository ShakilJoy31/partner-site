import { useState } from "react";
import HomeComponentCss from "./CSSfile/ComponentStyle.module.css";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManagerDetails = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [image, setImage] = useState();
  const [hostedImage, setHostedImage] = useState("");

  const userData = {
    fullName: fullName,
    country: country,
    state: state,
    image: hostedImage,
    city: city,
    email: email,
    address: address,
    mobileNumber: mobileNumber,
  }
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
  const handleSaveOwnerInformationToDatabase = () =>{
    try {
      const Option = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
      }
      fetch(`https://buisness-assignment.onrender.com/api/v1/onboarding/page2`, Option)
      .then(res => res.json())
      .then(data => {
        if(data.success === true){
        toast.success('Operation is Success!')
        }
      })
  } catch (error) {
      return (error.message);
  }
  }
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <h1 className={`${HomeComponentCss.BusinessInfo}`}>
          Owner & Manager Details
        </h1>
        
        <div>
          <label
          onClick={()=>router.push('/allInfo')}
            style={{
              backgroundImage: "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
            }}
            className={`normal-case btn border-0 text-xl text-black w-32 mx-4`}
          >
            See All
          </label>

          <label onClick={handleSaveOwnerInformationToDatabase}
            style={{
              backgroundImage: "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
            }}
            className={`normal-case btn border-0 text-xl text-black w-32`}
            disabled={!hostedImage}
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
                <input onChange={(e)=> setFullName(e.target.value)}
                  type="text"
                  placeholder="Type here"
                  className={`w-[360px] input border-0 focus:outline-none ${HomeComponentCss.customInput}`}
                />
              </div>

              <div className=" form-control mt-[25px]">
                <label className="label">
                  <span className={`${HomeComponentCss.inputHead}`}>
                    State *
                  </span>
                  <span className="label-text-alt">
                    <BsFillInfoCircleFill
                      size={15}
                      color={"#DC3545"}
                    ></BsFillInfoCircleFill>
                  </span>
                </label>
                <input onChange={(e)=> setState(e.target.value)}
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


              <div className="flex items-center justify-between">
                <div
                  style={{
                    borderRadius: "8px",
                    border: "1px solid rgba(18, 18, 18, 0.16)",
                    background: "rgba(229, 229, 229, 0.4)",
                    color: "black",
                  }}
                  className={`$${HomeComponentCss.customInputImageUpload} w-[120px] h-[120px] cursor-pointer`}
                >
                  <input
                    onChange={(e) => {
                      setImage(e?.target?.files[0]);
                    }}
                    style={{ position: "absolute", opacity: "0" }}
                    type="file"
                    className="h-[120px]"
                  />
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
                {hostedImage && (
                  <div>
                    <img
                      className="w-[120px] h-[120px] rounded-sm"
                      src={hostedImage}
                      alt=""
                    />
                  </div>
                )}
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
              <input onChange={(e)=> setCity(e.target.value)}
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
              <input onChange={(e)=> setCountry(e.target.value)}
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
              <input onChange={(e)=> setAddress(e.target.value)}
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
                <input onChange={(e)=> setEmail(e.target.value)}
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
                <input onChange={(e)=> setMobileNumber(e.target.value)}
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
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ManagerDetails;
