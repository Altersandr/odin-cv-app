import "./components/styles/index.css";
import { Body } from "./components/Body";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    );
  }
}
export default App;
