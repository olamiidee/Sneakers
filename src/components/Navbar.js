import { React, useState } from "react";
import { MenuData } from "./MenuData";
import logo from "./../images/logo.svg";
import menu from "./../images/icon-menu.svg";
import cart from "./../images/icon-cart.svg";
import avatar from "./../images/image-avatar.png";

function Navbar() {
  const [isActive, setIsActive] = useState("false");
  const [active, setActive] = useState("nav--menu");
  const [toggleIcon, setToggleIcon] = useState("nav--toggler");
  const navToggle = () => {
    active === "nav--menu"
      ? setActive("nav--menu nav--active")
      : setActive("nav--menu");

    // TogglerIcon

    toggleIcon === "nav--toggler"
      ? setToggleIcon("nav--toggler toggle")
      : setToggleIcon("nav--toggler");
  };

  // cart toggle
  const cartToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <nav className="hidden lg:flex text-black justify-between items-center text-[1rem] w-[80%] lg:w-[80%] h-[100px] mx-auto  bg-white fixed left-[50%] -translate-x-[50%] border-b-2">
        <a href="#" className="font-semibold text-4xl">
          sneakers
        </a>
        <ul className="flex space-x-8 text-gray-500 text-center font-normal h-[100%] w-fit">
          {MenuData.map((item, index) => {
            return (
              <li
                key={index}
                className="w-fit flex justify-between items-center hover:border-b-4 hover:border-orange-500"
              >
                <a href={item.url} className={item.cName}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-end space-x-10">
          <img
            src={cart}
            onClick={cartToggle}
            alt=""
            className="cursor-pointer hover:scale-125"
          />
          <img src={avatar} alt="" className="w-[30%] cursor-pointer" />
        </div>
      </nav>

      {/* mobile nav */}
      <nav className="lg:hidden text-black flex justify-between items-center text-[1rem] w-full h-[100px] mx-auto px-[20px] bg-white z-30">
        {/* logo and menu */}
        <div className="flex items-center justify-between space-x-4 ">
          {/* <img src={menu} onClick={navToggle} className={toggleIcon} /> */}
          {/* nav toggler */}
          <div onClick={navToggle} className={toggleIcon}>
            <div className="line1 w-[20px] h-[4px] m-[0.2rem] bg-[#69707D]"></div>
            <div className="line2 w-[20px] h-[4px] m-[0.2rem] bg-[#69707D]"></div>
            <div className="line3 w-[20px] h-[4px] m-[0.2rem] bg-[#69707D]"></div>
          </div>
          <div>
            <img src={logo} alt="sneakers-logo" className="h-[22px]" />
          </div>
        </div>
        {/* cart and avatar */}
        <div className="flex items-center justify-end space-x-5 w-fit">
          <img
            src={cart}
            alt="cart-icon"
            onClick={cartToggle}
            className="w-[20%] cursor-pointer"
          />
          <img
            src={avatar}
            alt="avatar-icon"
            className="w-[25%] cursor-pointer"
          />
        </div>
        {/* menu list */}
        <ul className={active}>
          {MenuData.map((item, index) => {
            return (
              <li key={index} className="text-xl font-bold">
                <a href={item.url} className={item.cName}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* cart modal */}
      <div className={isActive ? "hidden" : "block"}>
        <div className="absolute w-[100%] top-32 lg:right-10 lg:top-20 lg:w-[300px] lg:h-[250px] py-5 shadow-2xl rounded-md text-gray-500">
          <p className="px-6 font-bold">Cart</p>
          <div className="border-b-2 mt-4 w-[100%]"></div>
          <div className="flex h-[185px] flex-col items-center justify-center">
            <p className="font-bold">Your cart is empty</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
