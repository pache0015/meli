import './Item.css'
import envio from '../../img/ic.png'
import { Link } from 'react-router-dom';

function Item({id, title, price, picture, free_shipping}) {
    const { amount,currency } = price
    const finalPrice = new Intl.NumberFormat('es-AR', {currency: currency, style: 'currency'}).format(amount)
    //console.log(new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(number));

  return (
    <div className="Item">
        <div className='linkItem'>
            <img className='producto' src={picture} />
            <div className='Info'>
                <div className='Info-top'>
                    <span className='Info-top-l'>
                        {finalPrice}
                        {free_shipping ? <img className='envio' src={envio} /> : ''}
                    </span>
                    {/* <span className='Info-top-r'>Mendoza</span> */}
                </div>
                <div className='Info-bottom'>
                    {title}
                </div>
            </div>
        </div>
    </div>
  );
}

export default Item;
