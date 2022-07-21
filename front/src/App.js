import './App.css';
import Content from './pages/content/Content';
import ResultContent from './pages/resultContent/ResultContent';
import ResultDescription from './pages/resultDescription/ResultDescription';
import Searchbar from './components/searchbar/Searchbar';
import { ContextProvider } from "./context/Context";
import { Route, Switch } from "wouter";

function App() {
  return (
    <div className="App">
        <ContextProvider>
          <Searchbar />
          <Switch>
            <Route component={Content} path="/" />
            <Route component={ResultContent} path="/items/search=:search" />
            <Route component={ResultDescription} path="/items/:id" />
          </Switch>
        </ContextProvider>
    </div>
  );
}

export default App;
