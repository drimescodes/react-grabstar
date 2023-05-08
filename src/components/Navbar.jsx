import { logo } from "../assets";
// import {HiBars3} from 'react-icons/hi'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(true);
  };
  const handleClick1 = () => {
    setToggle(false);
  };

  return (
    <div className="w-full bg-[#263959] sticky top-[-2px] z-50">
      <div className="max-w-full w-[90%] m-auto flex justify-between items-center text-white py-4  ">
        <div className="">
          <img src={logo} alt="" className="h-25 w-25" />
        </div>
        <div>
          <ul className="hidden  lg:flex gap-6">
            <li>Home</li>
            <li>Rate a client</li>
            <li>Rate a Freelancer</li>
            <li>Log in</li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <button className="px-4 py-2 rounded-md bg-[#b376b3] font-semibold">
            Create Account
          </button>
        </div>

        <div className="lg:hidden text-[#1A906B]">
          {toggle ? (
            <RiCloseLine size={40} onClick={handleClick1} />
          ) : (
            <RiMenu3Line
              className="cursor-pointer"
              onClick={handleClick}
              size={30}
            />
          )}
        </div>
      </div>

      <div
        className={`absolute z-10 p-4 bg-white w-full px-8 lg:hidden transform transition-all duration-500 ease-in-out ${toggle ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <ul>
          <li className="p-4 hover:bg-gray-100 font-bold">Home</li>
          <li className="p-4 hover:bg-gray-100 font-bold">Rate a Client</li>
          <li className="p-4 hover:bg-gray-100 font-bold">Rate a Freelancer</li>
          <li className="p-4 hover:bg-gray-100 font-bold">Log in</li>
        </ul>
        <div className="my-4">
          <button className="px-4 py-2 rounded-md bg-[#1A906B] font-bold">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
