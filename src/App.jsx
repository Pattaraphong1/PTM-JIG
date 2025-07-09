import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Footer from "./components/Footer";
function App() {

  return (
    <>
      <Header />
      <Menu />
      <Content />
      <Footer />
    </>
  );
}

export default App;
