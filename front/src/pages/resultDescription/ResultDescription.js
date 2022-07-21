import './ResultDescription.css'
//import envio from '../../img/ic.png'
//import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { useItem } from '../../hooks/useItem';
import ItemDescription from '../../components/itemDescription/ItemDescription';
//import { useEffect, useState } from 'react';

function ResultDescription({params}) {
    const {item, isLoading, isError} = useItem({id: params.id})
    //console.log(item)
    // const title = item ? item.title : ''
    
    // if (isLoading) {
    //     return (
          
    //           <title>Cargando...{title}</title>
          
    //     )
    //   }
    //   if (isError) return <span>Error</span>
    //   if (!item) return null

    // if (item) return null

  return (
    <div className="ResultDescription">
        {/* <Breadcrumb/> */
        }
        <ItemDescription {...item} />
        
        
    </div>
  );
}

export default ResultDescription;