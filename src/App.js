import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Product from "./components/Product";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Product} />
          <Route path="/carts" exact component={Cart} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
