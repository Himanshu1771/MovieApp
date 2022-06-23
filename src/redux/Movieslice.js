import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import MovieApi from '../common/MovieApi'
import {ApiKey} from '../common/ApiKey'




///////////////////////MOVIES///////////////////

 export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
  // const movieText ="Harry"
  const response = await MovieApi.get(`?apikey=${ApiKey}&s=${term}&type=movie`)
  return response.data;
})



///////////////////////SERIES///////////////////



export const fetchAsyncShows = createAsyncThunk('shows/fetchAsyncShows', async (term) => {
  // const seriesText ="friends"
  const response = await MovieApi.get(`?apikey=${ApiKey}&s=${term}&type=series`)
  return response.data;
})


///////////////////////Details///////////////////


export const fetchAsyncDetails = createAsyncThunk('shows/fetchAsyncDetails', async (id) => {

  const response = await MovieApi.get(`?apikey=${ApiKey}&i=${id}&plot=full`)
  return response.data;
})



export const MovieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: {},
    shows:{},
    Details:{}
  },
  reducers: {

    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    // }
    removeDetails:(state) =>{
      state.Details = {};

    }
  },

  extraReducers:{

    [fetchAsyncMovies.pending]:() =>{
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]:(state,{payload}) =>{
      console.log("fulfilled");
      return {...state,movies:payload}
    },
    [fetchAsyncMovies.rejected]:() =>{
      console.log("rejected");
    },
    [fetchAsyncShows.fulfilled]:(state,{payload}) =>{
      console.log("fulfilled");
      return {...state,shows:payload}
    },
    [fetchAsyncDetails.fulfilled]:(state,{payload}) =>{
      console.log("fulfilled");
      return {...state,Details:payload}
    }
  }
})


export const { removeDetails } = MovieSlice.actions;

export const getallmovies = (state) => state.movies.movies

export const getallshows = (state) => state.movies.shows

export const getalldetails = (state) => state.movies.Details

export default MovieSlice.reducer
