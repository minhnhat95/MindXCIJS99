import React from "react";

const Header = () => {
  return (
    <div className="w-full h-18.64 bg-blue-800 text-white py-3 px-8 flex justify-between">
      <h1 className="font-bold text-3xl">
        <i className="fa-solid fa-id-card-clip" /> Contact Keeper
      </h1>
      <div className="flex gap-2 text-base font-weight: 500">
        <a className="p-1.8" href="">
          Home
        </a>
        <a className="p-1.8" href="">
          About
        </a>
      </div>
    </div>
  );
};

export default Header;
