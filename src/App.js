import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CalculatorUI from './components/Calculator';
import NavBar from './components/NavBar';
import FetchData from './components/Quote';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/calculator"><CalculatorUI /></Route>
          <Route path="/quotes"><FetchData /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
