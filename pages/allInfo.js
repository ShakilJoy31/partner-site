import { useEffect, useState } from "react";
import HomeComponent from "./CSSfile/ComponentStyle.module.css";


const AllInfo = () => {
    const [businessData, setBusinessData] = useState([]);
    const [updateAbleUser, setUpdateAbleUser] = useState(); 
    useEffect(() => {
        fetch(`https://buisness-assignment.onrender.com/api/v1/onboarding`)
          .then((res) => res.json())
          .then((data) => setBusinessData(data.data));
      }, []);
      console.log(businessData)
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
                          src={singleBusiness?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {singleBusiness?.fullName}
                      </div>
                      <div className="text-sm opacity-50">
                        {singleBusiness.address}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{singleBusiness?.email}</td>
                <td>{singleBusiness?.state}</td>
                <td>{singleBusiness?.city}</td>
                <td>{singleBusiness?.mobileNumber}</td>
                
                <th>
                  <label
                  onClick={()=>setUpdateAbleUser(singleBusiness)}
                    htmlFor="afterProceedModalManager"
                    style={{
                      backgroundImage:
                        "linear-gradient(45deg ,#5D9C59, #3E54AC)",
                      backgroundSize: "100%",
                      backgroundRepeat: "repeat",
                    }}
                    className={`normal-case btn ${HomeComponent.updateButton} border-0 text-white btn-sm`}
                  >
                    Details
                  </label>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {/* Modal to see user details */}
      <div>
        <div>
          <input
            type="checkbox"
            id="afterProceedModalManager"
            className="modal-toggle"
          />
          <label className="cursor-pointer modal">
            <label
              style={{
                backgroundColor: "#247f9e",
                borderRadius: "5px",
              }}
              className="relative w-11/12 max-w-5xl modal-box"
            >
              <label
                htmlFor="afterProceedModalManager"
                className="absolute text-white bg-red-700 border-0 btn btn-sm btn-circle right-2 top-2"
              >
                ✕
              </label>

              <h3 className="flex justify-center text-black lg:text-2xl lg:font-bold">
                See the Owner information
              </h3>

              <div className="flex items-center">
                <div className="">
                    <img className="rounded-sm h-36 w-36" src={updateAbleUser?.image || 'https://img.freepik.com/free-icon/user_318-159711.jpg'} alt="" />
                </div>
                <div className="mx-8">
                  <p>Email: {updateAbleUser?.email}</p>
                  <p className="my-5">Address: {updateAbleUser?.address}</p>
                  <p>State: {updateAbleUser?.state}</p>
                </div>
                <div>
                <p>City: {updateAbleUser?.city}</p>
                  <p className="my-5">Country: {updateAbleUser?.country}</p>
                  <p>Contact Number: {updateAbleUser?.mobileNumber}</p>
                </div>
              </div>
              <p className="mt-3">Hello, {updateAbleUser?.fullName}</p>
            </label>
          </label>
        </div>
      </div>


    </div>
    );
};

export default AllInfo;