import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import CartsView from "./pages/CartsView";


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/carts" exact component={CartsView} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
