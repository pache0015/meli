//import './Content.css'
import '../resultContent/Result.css'
import Item from '../item/Item';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import { useItems } from '../../hooks/useItems';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import ResultDescription from '../resultDescription/ResultDescription';
import ResultContent from '../resultContent/ResultContent';
import Context from '../../context/Context';


function Content() {
  const {items, categories} = useItems()
  const [content, setContent] = useState('')
  const {item} = useContext(Context)

  useEffect( function(){
    if(item == ''){
      setContent(<ResultContent className='ResultContent' items={items} />)
    }
  }, item, items)

  const isNullContent = () => content === ''

  let render
  if (isNullContent){
    render = <ResultContent className='ResultContent' items={items} />
  }else{
    render = content
  }

  return (
    <div className="Result">
     <Breadcrumb categories={categories}/> 
      {/* <ResultDescription /> */}
      {content}
      {/* <ResultContent className='ResultContent' items={items} /> */}
    </div>
  );
}

export default Content;
