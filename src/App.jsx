import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import BannerContentBlock from "./components/BannerContentBlock/BannerContentBlock";
import AdvantagesBlock from "./components/AdvantagesBlock/AdvantagesBlock";
import Manufacturers from "./components/Manufacturers/Manufacturers";
import Workflow from "./components/Workflow/Workflow";
import FAQ from "./components/FAQ/FAQ";


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
      <FAQ />
    </div>
  );
}

export default App;
