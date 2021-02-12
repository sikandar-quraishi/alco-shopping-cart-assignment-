import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/carts" exact component={Cart} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
