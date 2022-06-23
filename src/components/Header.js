import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import logo from '../Images/logo.jpg';
import '../css/Header.scss';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../redux/Movieslice';


const Header = () => {

  const[term ,setTerm] = useState('')
  const dispatch = useDispatch()

  const submitHandler = (e) =>{
    e.preventDefault();
    if(term == "") return alert("Please Enter Search Term")
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term))

  }

  return (
    <div className='header'>
      <div className='logo'>
      <Link to="/">Movie App</Link>
      </div>
      <div className='search-bar'>
        <form onSubmit={submitHandler}>
          <input type='text' value={term} placeholder='Search Here' onChange={(e)=>setTerm(e.target.value)}/>
          <button  type='submit'> <i className='fa fa-search'></i> </button>
        </form>
      </div>
      <div className='image'>
        <img src={logo}/>
      </div>
      
    </div>
  )
}

export default Header
