import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Example from './views/Example';
import Home from './views/Home';
import Users from './views/Users';

function App() {
  return (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path = "/users" exact component={Users} />
      <Route path = "/example" exact component={Example} />
    </Switch>
  </Router>
  );
}

export default App;
