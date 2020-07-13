import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Home from "./pages/homes/Home";
function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Home />
    </div>
  );
}

export default App;
