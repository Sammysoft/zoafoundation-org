
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Components/Pages/Home/index';
import Team from './Components/Pages/Team/index';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component= { Home } />
      <Route path="/Home" exact component= { Home } />
      <Route path="/Team" exact component = { Team } />
    </div>
  );
}

export default App;
