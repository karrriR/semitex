import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import BannerContentBlock from "./components/BannerContentBlock/BannerContentBlock";
import AdvantagesBlock from "./components/AdvantagesBlock/AdvantagesBlock";
import Manufacturers from "./components/Manufacturers/Manufacturers";
import Workflow from "./components/Workflow/Workflow";


function App() {
  return (
    <div className="App">
      <section className="header-main">
        <Header />
        <BannerContentBlock />
      </section>
      <AdvantagesBlock />
      <Manufacturers />
      <Workflow />
    </div>
  );
}

export default App;
