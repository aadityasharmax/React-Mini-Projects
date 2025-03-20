import React from "react";
import { FcContacts } from "react-icons/fc";

const NavBar = () => {
  return (
    <div className="flex text-lg gap-2 font-bold justify-center items-center h-[60px]  rounded-lg bg-white my-2 ">
      <FcContacts className="text-4xl" />
      <h1>Contact App</h1>
    </div>
  );
};

export default NavBar;
