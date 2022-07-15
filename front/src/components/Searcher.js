import './Searcher.css';
import search from '../img/search.png'

function Searcher() {
  return (
    <div className="Searcher" >
        <input type='text' className='input-text' placeholder='Nunca dejes de buscar'/>
        <button>
            <img src={search}/>
        </button>
    </div>
  );
}

export default Searcher;
