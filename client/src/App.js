
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import CreatingVideogame from './components/CreatingVideogame';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/create' component={CreatingVideogame}/>
    </BrowserRouter>
  );
}

export default App;
