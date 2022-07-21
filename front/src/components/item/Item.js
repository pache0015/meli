import './Item.css'
import envio from '../../img/ic.png'
import { Link } from 'wouter';

function Item({id, title, price, picture, free_shipping}) {
    const { amount,currency } = price
    const finalPrice = new Intl.NumberFormat('es-AR', {currency: currency, style: 'currency'}).format(amount)
  return (
    <div className="Item">
        {/* Se usa el link englobando todo el resto del item para poder ahcer
                la redireccion en la url y enviar el parametro id */}
        <Link to={`/items/${id}`} className='linkItem'>
            <img className='producto' src={picture} alt={'img'}/>
            <div className='Info'>
                <div className='Info-top'>
                    <span className='Info-top-l'>
                        {finalPrice}
                        {free_shipping ? <img className='envio' src={envio} alt={'img'} /> : ''}
                    </span>
                    {/* <span className='Info-top-r'>Mendoza</span> */}
                </div>
                <div className='Info-bottom'>
                    {title}
                </div>
            </div>
        </Link>
    </div>
  );
}

export default Item;
