import './ResultDescription.css'
import envio from '../img/ic.png'

function ResultDescription() {
  return (
    <div className="ResultDescription">
        <div className='ResultDescription-l'>
            <img src={'https://picsum.photos/seed/picsum/680/680'} />
            <div className='description'>
                <span className='description-title'>
                    Descripcion del producto
                </span>
                <span className='description-text'>
                    Descripcion del pructo Dipcion del producto Descripcdel procto
                    Descrip del procripcion del pcto Descion del producto
                    Despcion del procto Descion del prodo ripcion del podo
                    Descripcion del pructo Dipcion del producto Descripcdel procto
                    Descrip del procripcion del pcto Descion del producto
                    Despcion del procto Descion del prodo ripcion del podo
                    Descripcion del pructo Dipcion del producto Descripcdel procto
                    Descrip del procripcion del pcto Descion del producto
                    Despcion del procto Descion del prodo ripcion del podo
                </span>
            </div>
        </div>
        <div className='ResultDescription-r'>
            <span className='head'>
                <span> Nuevo</span>
                <span> - 224 vendidos</span>
            </span>
            <span className='titulo'>Titulo del producto Re Piola FUA</span>
            <span className='precio'>
                $1.980
                <span className='centavos'>00</span>
            </span>
            <button className='comprar'>
                Comprar
            </button>
        </div>
        
    </div>
  );
}

export default ResultDescription;