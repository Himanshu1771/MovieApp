import React from 'react'
import { useSelector } from 'react-redux'
import { getallmovies,getallshows } from '../redux/Movieslice'
import MovieCard from './MovieCard'
import '../css/MovieListing.scss'
import Slider from "react-slick";
import { Settings } from './Setting'


const MovieListing = () => {


  const movies = useSelector(getallmovies)
  const shows = useSelector(getallshows)
  console.log(movies)

  let renderMovies , renderShows= "";

  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie,index)=>(
      <MovieCard key={index} data={movie}/>
    ))
  ): (<div className = "error"><h3>{movies.Error
}</h3></div >)


renderShows = shows.Response === "True" ? (
  shows.Search.map((movie,index)=>(
    <MovieCard key={index} data={movie}/>
  ))
): (<div className = "error"><h3>{shows.Error
}</h3></div >)



return (
  <div className='movie-wrapper'>
    <div className='movie-list'>
      <h2>Movies</h2>
      <div className='movie-container'> <Slider {...Settings}>{renderMovies}</Slider></div>
    </div>
    <div className='shows-list'>
      <h2>Shows</h2>
      <div className='shows-container'> <Slider {...Settings}>{renderShows}</Slider></div>
    </div>
  </div>
)
}

export default MovieListing
