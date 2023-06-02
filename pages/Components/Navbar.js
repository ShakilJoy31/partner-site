import Link from "next/link";
import React from "react";
import { BsFillBagFill, BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiFillSetting } from "react-icons/ai";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import NavbarStyle from "./ComponentStyle.module.css";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "#247f9e",
      }}
      className="px-3 lg:px-12 md:px-8"
    >
      <div className="flex items-center justify-between navbar">
        <Link href="/" className={` normal-case focus:cursor-pointer`}>
          {" "}
          <span className="">
            <span
              style={{
                color: "#FFE15D",
              }}
              className="text-xl lg:text-3xl md:text-2xl"
            >
              Papita
            </span>
            <span
              style={{
                color: "#FFE15D",
              }}
              className="hidden lg:block md:block"
            >
              Nationwide! FREE Shipping on All Orders
            </span>
          </span>{" "}
        </Link>

        <div className="flex-none">
          {/* Mens fashion */}
          <div className=" dropdown-hover dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="m-1">
              <span className="cursor-pointer">
                Mens Fashion
              </span>
            </label>
            <ul
              style={{
                borderRadius: "5px",
                backgroundImage: "linear-gradient(45deg, #884A39, #FCE9F1)",
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
              }}
              tabIndex={0}
              className="w-64 p-2 shadow dropdown-content menu rounded-box"
            >
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>Top wear</a>
              </li>
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>Festive Wear</a>
              </li>
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>Bottom Wear</a>
              </li>
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>Foot Wear</a>
              </li>
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>Fashion Accessories</a>
              </li>
            </ul>
          </div>

          {/* Woman's fashion */}

          <div className="mx-6 dropdown-hover dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="m-1">
              <span className="cursor-pointer">
                Womens Fashion
              </span>
            </label>
            <ul
              style={{
                borderRadius: "5px",
                backgroundImage: "linear-gradient(45deg, #884A39, #FCE9F1)",
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
              }}
              tabIndex={0}
              className="w-64 p-2 shadow dropdown-content menu rounded-box"
            >
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>Saress</a>
              </li>
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>Western Wear</a>
              </li>
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>Bottom Wear</a>
              </li>
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>Lingerie $ Personal Care</a>
              </li>
            </ul>
          </div>

          {/* Beauty */}
          <div className=" dropdown-hover dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="m-1">
              <span className="cursor-pointer">
                Beauty
              </span>
            </label>
            {/* <ul
              style={{
                borderRadius: "5px",
                backgroundImage: "linear-gradient(45deg, #884A39, #FCE9F1)",
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
              }}
              tabIndex={0}
              className="w-64 p-2 shadow dropdown-content menu rounded-box"
            >
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>Shops by brand</a>
              </li>
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>Shops all products</a>
              </li>
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>The company</a>
              </li>
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>Contact Us</a>
              </li>
            </ul> */}
          </div>

          {/* Electronics */}
          <div className="mx-6 dropdown-hover dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="m-1">
              <span className="cursor-pointer">
                Electronics
              </span>
            </label>
            <ul
              style={{
                borderRadius: "5px",
                backgroundImage: "linear-gradient(45deg, #884A39, #FCE9F1)",
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
              }}
              tabIndex={0}
              className="w-64 p-2 shadow dropdown-content menu rounded-box"
            >
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>Mobile @ Phone</a>
              </li>
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>Laptop</a>
              </li>
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>Accessories</a>
              </li>
            </ul>
          </div>


          {/* Kids */}
          <div className="mr-6  dropdown-hover dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="m-1">
              <span className="cursor-pointer">
                Kids
              </span>
            </label>
            {/* <ul
              style={{
                borderRadius: "5px",
                backgroundImage: "linear-gradient(45deg, #884A39, #FCE9F1)",
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
              }}
              tabIndex={0}
              className="w-64 p-2 shadow dropdown-content menu rounded-box"
            >
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>Shops by brand</a>
              </li>
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>Shops all products</a>
              </li>
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>The company</a>
              </li>
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>Contact Us</a>
              </li>
            </ul> */}
          </div>



          {/* Search for the product */}
          <div className="form-control">
            <input style={{
                borderRadius: "5px",
                backgroundImage: "linear-gradient(45deg, #884A39, #FCE9F1)",
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
                color:"black"
              }}
              type="text"
              placeholder="Search Products"
              className="px-10 py-2 ml-2 rounded-sm w-80 focus:outline-none"
            />
            <span
              style={{
                position: "absolute",
                top: "41px",
                marginLeft: "20px"
              }}
            >
              <BsSearch color={'white'}></BsSearch>
            </span>
          </div>


          {/* Cart Item */}
          <div className="mx-6 dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="m-1">
              <span className="cursor-pointer">
                <BsFillBagFill size={35}></BsFillBagFill>
              </span>
            </label>
            <ul
              style={{
                borderRadius: "5px",
                backgroundImage: "linear-gradient(45deg, #884A39, #FCE9F1)",
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
              }}
              tabIndex={0}
              className="w-64 p-2 shadow dropdown-content menu rounded-box"
            >
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>Shops by brand</a>
              </li>
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>Shops all products</a>
              </li>
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>The company</a>
              </li>
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>


          {/* Humburger menu */}
          <div className="mr-6 dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="m-1">
              <span className="cursor-pointer">
                <IoMdMenu size={35}></IoMdMenu>
              </span>
            </label>
            <ul
              style={{
                borderRadius: "5px",
                backgroundImage: "linear-gradient(45deg, #884A39, #FCE9F1)",
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
              }}
              tabIndex={0}
              className="w-64 p-2 shadow dropdown-content menu rounded-box"
            >
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>Shops by brand</a>
              </li>
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>Shops all products</a>
              </li>
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>The company</a>
              </li>
              <li className={`${NavbarStyle.blackShadowWithColor}`}>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-end mr-[10px] lg:mr-[0px] md:mr-[0px]">
            <label tabIndex={0} className=" avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU"
                  alt=""
                />
              </div>
            </label>
            <ul
              style={{
                backgroundColor: "#19A7CE",
                borderRadius: "5px",
              }}
              tabIndex={0}
              className="w-64 p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box"
            >
              <li>
                <Link
                  className="block lg:hidden md:hidden"
                  href="/userReservation"
                >
                  Reservation
                </Link>
              </li>

              <li>
                <Link
                  className="block lg:hidden md:hidden hover:text-black"
                  href="/cart"
                >
                  My Cart
                </Link>
              </li>

              <li>
                <Link
                  className="block lg:hidden md:hidden hover:text-black"
                  href="/feedback"
                >
                  Feedback
                </Link>
              </li>

              <li>
                <Link
                  className="justify-between text-white hover:bg-white hover:text-black"
                  href="/myProfile"
                >
                  My Profile{" "}
                  <span>
                    <CgProfile size={20} color={"black"}></CgProfile>
                  </span>
                </Link>
              </li>

              <li className="text-white rounded-lg hover:bg-white hover:text-black">
                <label
                  className="flex items-center justify-between"
                  htmlFor="settingsModal"
                >
                  <a>Settings</a>{" "}
                  <span>
                    <AiFillSetting size={20} color={"black"}></AiFillSetting>
                  </span>
                </label>
              </li>

              <label htmlFor="logOutModal" className="">
                <li>
                  <a className="flex items-end justify-between text-white hover:bg-white hover:text-black">
                    <span>Logout</span>
                    <RiLogoutCircleRLine
                      size={20}
                      color={"red"}
                    ></RiLogoutCircleRLine>
                  </a>
                </li>
              </label>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
