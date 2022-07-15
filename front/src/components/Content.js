import './Content.css'
import Breadcrumb from './Breadcrumb'
import Result from './Result'
import ResultDescription from './ResultDescription'

function Content() {
  return (
    <div className="Content">
      <Breadcrumb />
      <Result /> 
      <ResultDescription />
    </div>
  );
}

export default Content;
