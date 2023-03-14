import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Search from "./Components/Search/Search";
import Subscribe from "./Components/Subscribe/Subscribe";
import Travelers from "./Components/Travelers/Travelers";
import Lounge from "./Components/Lounge/Lounge";
import Support from "./Components/Support/Support";
import Info from "./Components/Info/Info";

const App = () => {
  return (
    <div>
      <div className="progress-bar"></div>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default App;
