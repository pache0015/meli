import Item from '../item/Item';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import './Result.css'
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import Context from '../../context/Context';

function ResultContent({items}) {

  const [content, setContent] = useState('')
  const {setItem} = useContext(Context)

  const handleContent = id =>{
    setItem(id)
  }
  return (
    <div className='ResultContent'>
        {items.map(({id, title, price, picture, free_shipping}) =>
                <Link to={`/items/${id}`} className='linkResult' onClick={handleContent(id)} key={id}>
                  <Item 
                  id={id}
                  title={title}
                  price={price}
                  picture={picture}
                  free_shipping={free_shipping}
                  />
                </Link>)}
    </div>
  );
}

export default ResultContent;
