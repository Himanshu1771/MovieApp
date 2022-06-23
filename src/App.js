import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieDetails from './components/MovieDetails';
import PageNotFound from './components/PageNotfound';
import './App.scss';

function App() {
  return (
    <div className='App'>
       <Header />
       <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movie/:imdbID' element={<MovieDetails/>} />
        <Route element={<PageNotFound/>} />
      </Routes>
      </div>
      <Footer />

    </div>
  );
}

export default App;
