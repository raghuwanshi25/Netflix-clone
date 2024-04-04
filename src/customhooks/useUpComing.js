import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpComingMovie } from "../utils/moviesSlice";

const useUpComing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    upComingData();
  }, []);

  const upComingData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpComingMovie(json.results));
  };
};
export default useUpComing;
