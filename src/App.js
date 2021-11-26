import React from "react";
import { Route, Switch, Redirect } from "react-router";
import HomePageContainer from "./pages/homepage.container";

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
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/tech" />;
            }}
          />
          <Route exact path="/:categoryId" component={HomePageContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
