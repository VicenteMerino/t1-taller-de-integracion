import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Users from './views/Users';
import User from './views/User';

function App() {
  return (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path = "/users" exact component={Users} />
      <Route path = "/users/:userId" exact component={User} />
      <Route path = "/cities" exact />
      <Route path = "/cities/:cityId" exact />
    </Switch>
  </Router>
  );
}

export default App;
