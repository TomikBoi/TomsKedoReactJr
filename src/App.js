import React, { Component } from "react";
import HomePage from "./pages/homepage.component";
import HomePageContainer from "./pages/homepage.container";


class App extends Component {
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
       <HomePageContainer/>
      </div>
    );
  }
}

export default App;
