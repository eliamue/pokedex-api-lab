import Header from './Header.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListPage from './ListPage.js';
import Footer from './Footer.js';
import Home from './Home.js';
import './App.css';
import PokeDetail from './PokemonDetail.js'

function App() {
  return (
    <BrowserRouter>
      <div className="full">
        <Header />
        <Switch>
          <Route path="/pokemon/:id" exact component={PokeDetail}/>
          <Route path="/pokemon" exact component={ListPage}/>
          <Route path="/" exact component={Home}/>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
