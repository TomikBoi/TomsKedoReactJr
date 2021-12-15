import React from "react";
import { Route, Switch } from "react-router";
import CategoryPageContainer from "./pages/categorypage/categorypage.container";
import HomePageContainer from "./pages/homepage/homepage.container";
import ProductPageContainer from "./pages/productpage/productpage.container";
import CartPage from "./pages/cartpage/cartpage.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route path="/cart" component={CartPage} />
          <Route
            exact
            path="/category/:categoryId"
            component={CategoryPageContainer}
          />
          <Route
            exact
            path="/product/:productId"
            component={ProductPageContainer}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
