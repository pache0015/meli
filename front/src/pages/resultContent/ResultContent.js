import Item from '../../components/item/Item';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import './Result.css'
import { useItems } from '../../hooks/useItems';
import Context from '../../context/Context';
import { useContext } from 'react';


function ResultContent({params}) {
  // Se cargan los items del custom hook usando como parametro lo que se manda por la url
  //    en la searchbar
  const {items } = useItems({search: params.search})

  //Se usa el contexto para cargar las props del breadcrumb
  const {categories} = useContext(Context)
  return (
     <>
    <Breadcrumb categories={categories}/>

    // Se mapea la lista de items traida por el hook y se pasa por props el desgloce
    //    del obj contenido en el array
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
