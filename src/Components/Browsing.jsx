import Header from "./Header";
import useNowPlayingMovies from "../customhooks/useNowPlayingMovies";
import TitleContainer from "./TitleContainer";
import ListContainer from "./ListContainer";
import usePopular from "../customhooks/usePopular";
import useTopRated from "../customhooks/useTopRated";
import useUpComing from "../customhooks/useUpComing";

const Browsing = () => {
  useNowPlayingMovies();
  usePopular();
  useTopRated();
  useUpComing();

  return (
    <div>
      <Header />

      <TitleContainer />
      <ListContainer />
    </div>
  );
};

export default Browsing;
