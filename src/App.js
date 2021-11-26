import React from "react";
import { Route, Switch, Redirect } from "react-router";
import CategoryPageContainer from "./pages/categorypage/categorypage.container";
import HomePageContainer from "./pages/homepage/homepage.container";

class App extends React.Component {
  state = {
    counter: 0,
  };
  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    return (
      <div className="App">
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
