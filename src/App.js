import React from "react";
import { Route, Switch } from "react-router";
import CategoryPageContainer from "./pages/categorypage/categorypage.container";
import HomePageContainer from "./pages/homepage/homepage.container";
import Header from "./components/header/header.component";
import "./App.css"


class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route
            exact
            path="/category/:categoryId"
            component={CategoryPageContainer}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
