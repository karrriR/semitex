import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import BannerContentBlock from "./components/BannerContentBlock/BannerContentBlock";


function App() {
  return (
    <div className="App">
      <section className="header-main">
        <Header />
        <BannerContentBlock />
      </section> 
    </div>
  );
}

export default App;
