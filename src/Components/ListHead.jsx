import React from "react";
import ListCard from "./ListCard";

const ListHead = ({ title, movieData }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-lg  py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movieData.map((item) => (
            <ListCard key={item.id} info={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListHead;
