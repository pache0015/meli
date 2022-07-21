import './ResultDescription.css'
import { useItem } from '../../hooks/useItem';
import ItemDescription from '../../components/itemDescription/ItemDescription';

function ResultDescription({params}) {
  //el parametro de la url viene del componente Item(es el item seleccionado)
  // o bien se puede poner un id valido directamente

  // Se cargan el detalle del item que trae el custom 
  //    hook usando como parametro lo que se manda por la url
    const {item} = useItem({id: params.id})


    //luego se renderiza el componenten que tiene todos los detalles enviando por props
    // el obj que tiene la info del item
  return (
    <div className="ResultDescription">
        <ItemDescription {...item} />
    </div>
  );
}

export default ResultDescription;