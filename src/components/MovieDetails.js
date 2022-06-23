import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncDetails, getalldetails,removeDetails } from '../redux/Movieslice'
import '../css/MovieDetails.scss'


const MovieDetails = () => {
  const { imdbID } = useParams()
  const dispatch = useDispatch();
  const data = useSelector(getalldetails)
  console.log(data)

  useEffect(() => {
    dispatch(fetchAsyncDetails(imdbID))
    return () =>{
      dispatch(removeDetails());
    }
  }, [dispatch, imdbID])
  return (
    <div className='movie-section'>
      <div className='section-left'>
        <div className='movie-title'>{data.Title}</div>
        <div className='movie-rating'>
          <span>IMDB Rating <i className='fa fa-star'></i>: {data.imdbRating}</span>
          <span>IMDB votes <i className='fa fa-thumbs-up'></i>: {data.imdbVotes}</span>
          <span>Runtime <i className='fa fa-film'></i>: {data.Runtime}</span>
          <span>Year <i className='fa fa-calender'></i>: {data.Year}</span>
        </div>
        <div className='movie-plot'>
          {data.Plot}
        </div>
        <div className='movie-info'>
          <div>
          <span>Director</span>
          <span>{data.Director}</span>
          </div>
          <div>
          <span>Actors</span>
          <span>{data.Actors}</span>
          </div>
          <div>
          <span>Genre</span>
          <span>{data.Genre}</span>
          </div>
          <div>
          <span>Languages</span>
          <span>{data.Language}</span>
          </div>
          <div>
          <span>Awards</span>
          <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className='section-right'>
        <img src={data.Poster} />
      </div>
      
    </div>
  )
}

export default MovieDetails
