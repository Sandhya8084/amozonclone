
//import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout"
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <switch>
          <Route path="/Checkout">
            <Checkout />
          </Route>
          <Route Path="/">
            <Home /> 
          </Route>
        </switch>
      </div>
    </Router>
  );
}

export default App;
