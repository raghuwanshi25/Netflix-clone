import React from "react";
import TitleText from "./TitleText";
import TitleBg from "./TitleBg";
import { useSelector } from "react-redux";

const TitleContainer = () => {
  const moviesNowPlaying = useSelector((store) => store.movies.nowPlayingMvs);
  if (!moviesNowPlaying) return;
  const { overview, title, id } = moviesNowPlaying[0];
  return (
    <div>
      <TitleText brief={overview} name={title} />
      <TitleBg videoId={id} />
    </div>
  );
};

export default TitleContainer;
