import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Users from './views/Users';
import User from './views/User';
import Cities from './views/Cities';
import City from './views/City';
import SearchBar from './components/SearchBar';

function App() {
  return (
  <div>
    <SearchBar />
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path = "/users" exact component={Users} />
        <Route path = "/users/:userId" exact component={User} />
        <Route path = "/cities" exact component={Cities} />
        <Route path = "/cities/:cityId" exact component={City} />
      </Switch>
    </Router>
  </div>

  );
}

export default App;
