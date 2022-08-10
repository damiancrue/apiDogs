import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import DogCreate from './components/DogCreate';
import Detail from './components/Detail';



function App() {
  return (
    <HashRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route path="/create" component={DogCreate} />
        <Route path="/home/:id" component={Detail} />
      </Switch>
    </div>
    </HashRouter>
  );
}

export default App;
