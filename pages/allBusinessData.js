import { useEffect } from "react";
import { useState } from "react";
import HomeComponent from "./CSSfile/ComponentStyle.module.css";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const AllBusinessData = () => {
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
  const [businessData, setBusinessData] = useState([]);
  const [hostedImage, setHostedImage] = useState("");
  const [updated, setUpdated] = useState(false); 
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
  useEffect(() => {
    fetch(`https://buisness-assignment.onrender.com/api/v1/onboarding/page1`)
      .then((res) => res.json())
      .then((data) => setBusinessData(data.data));
  }, [updated]);
  const [updateAbleUser, setUpdateAbleUser] = useState(); 
  const userData = {
    businessName: businessName,
    country: country,
    state: state,
    bannerImg: hostedImage || updateAbleUser?.bannerImg,
    city: city,
    email: email,
    address: address,
    contactNo: mobileNumber,
    openingTime: openingTime,
    closingTime: closingTime
  }
  const handleUpdateBusinessInformation = () =>{
    try {
        const Options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }
        fetch(`https://buisness-assignment.onrender.com/api/v1/onboarding/${updateAbleUser?._id}`, Options)
        .then(res => res.json())
        .then(data => setUpdated(true))
    } catch (error) {
        return (error);
    }
  }
  return ( 
    <div className="mr-4">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Name & Photo</th>
              <th>Email</th>
              <th>State</th>
              <th>City</th>
              <th>Contact No</th>
              <th>Opening time</th>
              <th>Closing time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {businessData.map((singleBusiness, index) => (
              <tr className={HomeComponent.tableRow} key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-squircle">
                        <img
                          src={singleBusiness.bannerImg}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {singleBusiness.businessName}
                      </div>
                      <div className="text-sm opacity-50">
                        {singleBusiness.address}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{singleBusiness.email}</td>
                <td>{singleBusiness.state}</td>
                <td>{singleBusiness.city}</td>
                <td>{singleBusiness.contactNo}</td>
                <td>{singleBusiness.openingTime}</td>
                <td>{singleBusiness.closingTime}</td>
                <th>
                  <label
                  onClick={()=>setUpdateAbleUser(singleBusiness)}
                    htmlFor="afterProceedModal"
                    style={{
                      backgroundImage:
                        "linear-gradient(45deg ,#5D9C59, #3E54AC)",
                      backgroundSize: "100%",
                      backgroundRepeat: "repeat",
                    }}
                    className={`normal-case btn ${HomeComponent.updateButton} border-0 text-white btn-sm`}
                  >
                    Update
                  </label>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <div>
          <input
            type="checkbox"
            id="afterProceedModal"
            className="modal-toggle"
          />
          <label className="cursor-pointer modal">
            <label
              style={{
                backgroundColor: "white",
                borderRadius: "5px",
              }}
              className="relative w-11/12 max-w-5xl modal-box"
            >
              <label
                htmlFor="afterProceedModal"
                className="absolute text-white bg-red-700 border-0 btn btn-sm btn-circle right-2 top-2"
              >
                ✕
              </label>

              <h3 className="flex justify-center text-black lg:text-2xl lg:font-bold">
                Update your business information
              </h3>
              <div>
                <div>
                  <div>
                    <div className="flex justify-between">
                      <div className=" form-control">
                        <label className="label">
                          <span className={`${HomeComponent.inputHead}`}>
                            Business Name
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
                            setBusinessName(e.target.value);
                          }}
                          
                          type="text"
                          placeholder={updateAbleUser?.businessName}
                          className={`w-[360px] input border-0 focus:outline-none ${HomeComponent.customInput}`}
                        />
                      </div>

                      <div className=" form-control">
                        <label className="label">
                          <span className={`${HomeComponent.inputHead}`}>
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
                          onChange={(e) => {
                            setCountry(e.target.value);
                          }}
                          type="text"
                          placeholder={updateAbleUser?.country}
                          className={`w-[360px] input border-0 focus:outline-none ${HomeComponent.customInput}`}
                        />
                      </div>
                    </div>

                    {/* Second input group */}
                    <div className="flex justify-between mt-[25px]">
                      <div className=" form-control">
                        <label className="label">
                          <span className={`${HomeComponent.inputHead}`}>
                            State
                          </span>
                          <span className="label-text-alt">
                            <BsFillInfoCircleFill
                              size={15}
                              color={"#DC3545"}
                            ></BsFillInfoCircleFill>
                          </span>
                        </label>
                        <select
                          onChange={(e) => {
                            setState(e.target.value);
                          }}
                          className={`w-[360px] input border-0 focus:outline-none ${HomeComponent.customInput}`}
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
                          <span className={`${HomeComponent.inputHead}`}>
                            City
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
                            setCity(e.target.value);
                          }}
                          type="text"
                          placeholder={updateAbleUser?.city}
                          className={`w-[360px] input border-0 focus:outline-none ${HomeComponent.customInput}`}
                        />
                      </div>
                    </div>

                    {/* Third input */}
                    <div>
                      <div className=" form-control mt-[25px]">
                        <label className="label">
                          <span className={`${HomeComponent.inputHead}`}>
                            Address
                          </span>
                          <span className="label-text-alt">
                            <BsFillInfoCircleFill
                              size={15}
                              color={"#DC3545"}
                            ></BsFillInfoCircleFill>
                          </span>
                        </label>

                        <div
                          className={`${HomeComponent.backGround} w-full flex justify-between items-center`}
                        >
                          <input
                            onChange={(e) => {
                              setAddress(e.target.value);
                            }}
                            type="text"
                            placeholder={updateAbleUser?.address}
                            className={`w-full input border-0 focus:outline-none ${HomeComponent.customInputDifferent}`}
                          />
                          <span className="mx-2">
                            <CiLocationOn
                              color="black"
                              size={20}
                            ></CiLocationOn>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* 4th and 5th input */}
                    <div className="flex justify-between mt-[25px]">
                      <div className=" form-control">
                        <label className="label">
                          <span className={`${HomeComponent.inputHead}`}>
                            Opening time
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
                            setOpeningTime(e.target.value);
                          }}
                          type="time"
                          placeholder={updateAbleUser?.openingTime}
                          className={`w-[360px] input border-0 focus:outline-none ${HomeComponent.customInput}`}
                        />
                      </div>

                      <div className=" form-control">
                        <label className="label">
                          <span className={`${HomeComponent.inputHead}`}>
                            Closing time
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
                            setClosingTime(e.target.value);
                          }}
                          placeholder={updateAbleUser?.closingTime}
                          type="time"
                          className={`w-[360px] input border-0 focus:outline-none ${HomeComponent.customInput}`}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between mt-[25px]">
                      <div className=" form-control">
                        <label className="label">
                          <span className={`${HomeComponent.inputHead}`}>
                            E-mail
                          </span>
                          <span className="label-text-alt">
                            <BsFillInfoCircleFill
                              size={15}
                              color={"#DC3545"}
                            ></BsFillInfoCircleFill>
                          </span>
                        </label>

                        <div
                          className={`${HomeComponent.backGround} w-[360px] flex justify-between items-center`}
                        >
                          <input
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            type="email"
                            placeholder={updateAbleUser?.email}
                            className={`w-full input border-0 focus:outline-none ${HomeComponent.customInputDifferent}`}
                          />
                          <button
                            className={` ${HomeComponent.sendingButton} m-[4px]`}
                          >
                            Sent OTP
                          </button>
                        </div>
                      </div>

                      <div className=" form-control">
                        <label className="label">
                          <span className={`${HomeComponent.inputHead}`}>
                            Mobile Number
                          </span>
                          <span className="label-text-alt">
                            <BsFillInfoCircleFill
                              size={15}
                              color={"#DC3545"}
                            ></BsFillInfoCircleFill>
                          </span>
                        </label>
                        <div
                          className={`${HomeComponent.backGround} w-[360px] flex justify-between items-center`}
                        >
                          <input
                            onChange={(e) => {
                              setMobileNumber(e.target.value);
                            }}
                            type="email"
                            placeholder={updateAbleUser?.contactNo}
                            className={`w-full input border-0 focus:outline-none ${HomeComponent.customInputDifferent}`}
                          />
                          <button
                            className={` ${HomeComponent.sendingButton} m-[4px]`}
                          >
                            Sent OTP
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Uploading image */}
                    <div className="mt-[40px]">
                      <div className="flex items-center justify-between">
                        <div className=" form-control w-[360px]">
                          <label className="label">
                            <span className={`${HomeComponent.inputHead}`}>
                              Upload image of your Restaurant
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
                              className={`$${HomeComponent.customInputImageUpload} w-[120px] h-[120px] cursor-pointer`}
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
                                  src={hostedImage ? hostedImage : updateAbleUser?.bannerImg}
                                  alt=""
                                />
                              </div>
                            )}
                          </div>
                        </div>

                        <label
                        onClick={handleUpdateBusinessInformation}
                        htmlFor="afterProceedModal"
                          style={{
                            backgroundImage:
                              "linear-gradient(45deg ,#5D9C59, #3E54AC)",
                            backgroundSize: "100%",
                            backgroundRepeat: "repeat",
                          }}
                          className={`normal-case btn ${HomeComponent.FinallyUpdateButton} border-0 text-white w-48`}
                        >
                          Update Information
                        </label>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </label>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AllBusinessData;
