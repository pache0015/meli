import Item from '../../components/item/Item';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import './Result.css'
import { useItems } from '../../hooks/useItems';
import Context from '../../context/Context';
import { useContext } from 'react';


function ResultContent({params}) {
  const {items } = useItems({search: params.search})
  const {categories} = useContext(Context)
  return (
     <>
    <Breadcrumb categories={categories}/>
    <div className='ResultContent'>
        {
        items.map(({id, title, price, picture, free_shipping}) =>
                  <Item
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  picture={picture}
                  free_shipping={free_shipping}
                  />
        )}
    </div>
     </>
  );
}

export default ResultContent;
