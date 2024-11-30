import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import BannerContentBlock from "./components/BannerContentBlock/BannerContentBlock";
import AdvantagesBlock from "./components/AdvantagesBlock/AdvantagesBlock";


function App() {
  return (
    <div className="App">
      <section className="header-main">
        <Header />
        <BannerContentBlock />
      </section>
      <AdvantagesBlock />
    </div>
  );
}

export default App;
