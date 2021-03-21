import './App.css';
import { BrowserRouter as Router, Switch, Route ,Link} from 'react-router-dom';
import ListOfPockemom from './Component/ListOfPockmon';
import SinglePockemom from './Component/SinglePockemon';

function App() {
  return (
    <div className='container'>

    <Router>
        <Link to="/">
          <h1>Pokédex</h1>
        </Link>
        <Switch>
            <Route path="/" exact >
              <ListOfPockemom />
            </Route>
            <Route path="/details/:id" exact >
              <SinglePockemom />
            </Route>

        </Switch>
    </Router>

    </div>
  );
}

export default App;
