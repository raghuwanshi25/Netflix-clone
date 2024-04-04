import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addPopularMovie } from "../utils/moviesSlice"

const usePopular=()=>{
    const dispatch=useDispatch()
    useEffect(()=>{popularData()},[])

    const popularData=async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/popular",API_OPTIONS)
        const json = await data.json()
        dispatch(addPopularMovie(json.results))
        
        
        

    }
}
export default usePopular