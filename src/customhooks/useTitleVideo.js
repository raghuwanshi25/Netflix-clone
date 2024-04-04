import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTitleMovie } from "../utils/moviesSlice";

const useTitleVideo = (videoId) => {
  
  useEffect(() => {
    
    getTitleVideo();
    
  }, []);
  const dispatch = useDispatch();
  const getTitleVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+videoId+"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterTrailer = json.results.filter((x) => x.type === "Trailer");
    const trailerMain = filterTrailer.length
      ? filterTrailer[0]
      : json.results[0];
    dispatch(addTitleMovie(trailerMain));
  };
};
export default useTitleVideo;
