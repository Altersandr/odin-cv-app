import "./components/styles/index.css";
import { Body } from "./components/Body";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <>
        <Header />
        <Body methods={this.handleChange} name={this.state.name} />
        <Footer />
      </>
    );
  }

  // <Header />
  // <Body />
  // <Footer />
}
export default App;
