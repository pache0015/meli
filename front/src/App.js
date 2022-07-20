import './App.css';
import Content from './components/content/Content';
import Searchbar from './components/searchbar/Searchbar';
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <div className="App">
        <ContextProvider>
          <Searchbar />
          <Content />
        </ContextProvider>
    </div>
  );
}

export default App;
