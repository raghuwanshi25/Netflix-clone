import React from "react";

const TitleText = ({ brief, name }) => {
  return (
    <div className="absolute w-screen pt-[15%] px-12 bg-gradient-to-r from-black aspect-video text-white">
      <h1 className="font-bold text-4xl ">{name}</h1>
      <p className="w-3/12 text-lg py-6">{brief}</p>
      <div>
        <button className="bg-white text-black py-1 px-4 rounded-md text-lg  hover:bg-opacity-[80%]">
          Play
        </button>
        <button className="bg-gray-400 text-white py-1 px-4 rounded-md ml-2 text-lg hover:bg-opacity-[80%]">
          More Info
        </button>
      </div>
    </div>
  );
};

export default TitleText;
