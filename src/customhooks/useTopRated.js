import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovie } from "../utils/moviesSlice";

const useTopRated = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    topRatedData();
  }, []);

  const topRatedData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovie(json.results));
  };
};
export default useTopRated;
