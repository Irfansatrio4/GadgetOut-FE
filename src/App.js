
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from '../src/page/homepage'
import Detail from '../src/page/detail'
import Page from '../src/page/page'



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Page}></Route>
        <Route path="/:search" exact component={(props) => <HomePage {...props} />}>
        </Route>
        <Route path="/detail/:id" component={(props) => <Detail {...props} />}>
        </Route>
        <Route path="/detail" exact component={Detail}></Route>
      </Switch>
    </Router>
  );
}

export default App;