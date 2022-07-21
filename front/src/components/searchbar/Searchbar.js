import './Searchbar.css';
import logo from '../../img/Logo.png'
import { useState } from 'react';
import searchImg from '../../img/search.png'
import React from 'react';
import { Link, useLocation } from "wouter";

function Searchbar() {

  // eslint-disable-next-line
  const [_, pushLocation] = useLocation()
  const [inputText, setInputText] = useState('');
  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const handleSearch = ()=>{
    if (inputText !== '') {
      pushLocation(`/items/search=${inputText}`)
    }
  }
  const goHome = () => {
    pushLocation(`/`)
  }

  return (
    <div 
      className="Searchbar"
      onChange={inputHandler}>
        <Link to={'/'} onClick={goHome}>
          <img src={logo} alt={'logo'}/>
        </Link>
        <div className="Searcher" >
        <input type='text' className='input-text' placeholder='Nunca dejes de buscar'/>
        
          <button onClick={handleSearch} className='search'>
              <img src={searchImg} alt={'search'}/>
          </button>
    </div>
    </div>
  );
}

export default Searchbar;
