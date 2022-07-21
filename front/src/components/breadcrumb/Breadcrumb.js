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
