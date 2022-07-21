import './ResultDescription.css'
import { useItem } from '../../hooks/useItem';
import ItemDescription from '../../components/itemDescription/ItemDescription';

function ResultDescription({params}) {
    const {item} = useItem({id: params.id})

  return (
    <div className="ResultDescription">
        <ItemDescription {...item} />
    </div>
  );
}

export default ResultDescription;