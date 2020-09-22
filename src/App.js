import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
    </div>
  );
};

export default App;
