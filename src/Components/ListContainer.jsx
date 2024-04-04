import React from "react";
import ListHead from "./ListHead";
import { useSelector } from "react-redux";

const ListContainer = () => {
  const nowPlayingInfo = useSelector((store) => store.movies.nowPlayingMvs);
  const popularInfo = useSelector((store) => store.movies.popularMvs);
  const topRatedInfo = useSelector((store) => store.movies.topRatedMvs);
  const upComingInfo = useSelector((store) => store.movies.upComingMvs);
  if (!nowPlayingInfo) return;
  if (!popularInfo) return;
  if (!topRatedInfo) return;
  if (!upComingInfo) return;
  return (
    <div className="bg-black">
      <div className=" -mt-80  pl-4  relative z-20">
        <ListHead title="Now Playing" movieData={nowPlayingInfo} />
        <ListHead title="Most Popular" movieData={popularInfo} />
        <ListHead title="Top Rated" movieData={topRatedInfo} />
        <ListHead title="Up Coming" movieData={upComingInfo} />
      </div>
    </div>
  );
};

export default ListContainer;
