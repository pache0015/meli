import './Item.css'
import envio from '../img/ic.png'

function Item() {
  return (
    <div className="Item">
        <img src={'https://picsum.photos/seed/picsum/180/180'} />
        <div className='Info'>
            <div className='Info-top'>
                <span className='Info-top-l'>
                    $1980
                    <img src={envio} />
                </span>
                <span className='Info-top-r'>Mendoza</span>
            </div>
            <div className='Info-bottom'>
                Texto Nomb Del Prodcuto Texto Nomb Del Prodcuto Texto Nomb Del Prodcuto
            </div>
        </div>
    </div>
  );
}

export default Item;
