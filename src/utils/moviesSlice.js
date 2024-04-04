import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMvs: null,
    titleMovie : null,
    popularMvs:null,
    topRatedMvs:null,
    upComingMvs:null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMvs = action.payload;
    },
    addTitleMovie : (state,action)=>{
      state.titleMovie=action.payload
    },
    addPopularMovie : (state,action)=>{
      state.popularMvs=action.payload
    },
    addTopRatedMovie:(state,action)=>{
      state.topRatedMvs=action.payload
    },
    addUpComingMovie:(state,action)=>{
      state.upComingMvs=action.payload
    }
  },
});
export const { addNowPlayingMovies , addTitleMovie , addPopularMovie , addTopRatedMovie , addUpComingMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
