import './App.css';
import SignUp from './components/SignUp';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <Router>
    <div>
      {/* <Home/> */}
      <Switch>
      <Route path="/home" exact component={Home}/>
      <Route path="/signup" exact component={SignUp}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
