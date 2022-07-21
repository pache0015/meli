import { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import './Breadcrumb.css'

function Breadcrumb({categories}) {
  
  
  return (
    <div className="Breadcrumb">
      {
        categories.map( c => { 
           return <span key={c}>{c + ' > '}</span>
          })        
      }
    </div>
  )
}

export default Breadcrumb;
