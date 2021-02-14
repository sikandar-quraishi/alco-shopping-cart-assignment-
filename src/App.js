import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/carts" exact component={Cart} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
