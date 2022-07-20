import './Searchbar.css';
import logo from '../../img/Logo.png'
import { useContext, useState } from 'react';
import searchImg from '../../img/search.png'
import { Link , useLocation} from 'react-router-dom';
import React from 'react';
import Context from '../../context/Context';

// Custom hook
// function useQuery() {
//   const { search } = useLocation();

//   return React.useMemo(() => new URLSearchParams(search), [search]);
// }

function Searchbar() {

  //let query = useQuery()
  const {setSearch} = useContext(Context)
  const {setItems} = useContext(Context)
  const {setCategories} = useContext(Context)

  const [inputText, setInputText] = useState('');
  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const handleSearch = ()=>{
    if (inputText !== '') {
      setSearch(inputText)
    }
  }
  const goHome = () => {
    setCategories([])
    setItems([]) 
    setSearch('')
    setInputText('')
  }

  return (
    <div 
      className="Searchbar"
      onChange={inputHandler}>
        <Link to={'/'} onClick={goHome}>
          <img src={logo} />
        </Link>
        <div className="Searcher" >
        <input type='text' className='input-text' placeholder='Nunca dejes de buscar'/>
        <Link to={`/items?search=${inputText}`} className='linkButton' onClick={handleSearch}>
              <img src={searchImg}/>
          {/* <button onClick={handleSearch}>
          </button> */}
        </Link>
    </div>
    </div>
  );
}

export default Searchbar;
