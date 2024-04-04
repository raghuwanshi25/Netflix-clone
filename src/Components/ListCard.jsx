import React from "react";

const ListCard = ({ info }) => {
  return (
    <div className="w-36  pr-4">
      <img
        className="w-full rounded-md"
        alt="movie-poster"
        src={"https://image.tmdb.org/t/p/w92/" + info.poster_path}
      />
    </div>
  );
};

export default ListCard;
