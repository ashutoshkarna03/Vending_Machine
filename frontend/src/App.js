import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import Home from "./components/home.component";
import Vending from "./components/vending.component";
import Stock from "./components/stock.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={Home} />
        <Route path="/vending" component={Vending} />
        <Route path="/stock" component={Stock} />
      </div>
    </Router>
  );
}

export default App;