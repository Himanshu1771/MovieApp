import React, { useEffect } from 'react'
import MovieListing from './MovieListing'
// import MovieApi from '../common/MovieApi'
// import {ApiKey} from '../common/ApiKey'
import{useDispatch} from 'react-redux'
// import { addMovies } from '../redux/Movieslice'
import { fetchAsyncMovies,fetchAsyncShows } from '../redux/Movieslice'


const Home = () => {
// const movieText ="Harry"
const dispatch = useDispatch();
const movieText ="Harry"
const showText ="friends"
useEffect(()=>{

  // const fetchMovies =async() =>{
  //         //  const response = await MovieApi.get(`?apikey=${ApiKey}&s=${movieText}&type=movie`)

  //         //  .catch((err)=>{
  //         //    console.log(err);
  //         //  })
  //         //  console.log(response)
  //         //  dispatch(addMovies(response.data))
  // }
  // fetchMovies()

  dispatch(fetchAsyncMovies(movieText))
  dispatch(fetchAsyncShows(showText))

},[dispatch])

  return (
    <>
    <div className='banner-img'></div>
    <MovieListing/>
    </>
  )
}

export default Home
