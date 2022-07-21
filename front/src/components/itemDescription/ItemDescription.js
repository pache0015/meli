import envio from '../../img/ic.png'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { useContext } from 'react';
import Context from '../../context/Context';

function ItemDescription({item}) {
    
    const {categories} = useContext(Context)
    const title = item ? item.title : ''
    const picture = item ? item.picture : ''
    const description = item ? item.description : ''
    const condition = item ? item.condition : ''
    const sold_quantity = item ? item.sold_quantity : ''
    const price = item ? item.price : ''
    const amount = price ? price.amount : 0
    const finalPrice = amount ? new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(amount) : 0
    
  return (
    <>
    <Breadcrumb categories={categories}/>
    <div className='ResultDescriptionContent'>
            <div className='ResultDescription-l'>
                <img src={picture} />
                <div className='description'>
                    <span className='description-title'>
                        {title}
                    </span>
                    <span className='description-text'>
                        {description}
                    </span>
                </div>
            </div>
            <div className='ResultDescription-r'>
                <span className='head'>
                    <span> {condition}</span>
                    <span> - {sold_quantity} vendidos</span>
                </span>
                <span className='titulo'>{title}</span>
                <span className='precio'>
                    {finalPrice} 
                    {/* <span className='centavos'>00</span> */}
                </span>
                <button className='comprar'>
                    Comprar
                </button>
            </div>
        </div>
        </>
  );
}

export default ItemDescription;
