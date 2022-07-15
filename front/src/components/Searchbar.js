import './Searchbar.css';
import logo from '../img/Logo.png'
import Searcher from './Searcher';

function Searchbar() {
  return (
    <div className="Searchbar">
        <img src={logo} />
        <Searcher />
    </div>
  );
}

export default Searchbar;
