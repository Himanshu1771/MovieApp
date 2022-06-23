import {configureStore } from '@reduxjs/toolkit'
import moviesReducer from './Movieslice'

export const store = configureStore({
    reducer: {
        movies:moviesReducer
    }
  })
