import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Background from "./assets/background_pineapple.jpg";
import Subscribed from './components/Subscribed';

const App = () => (
  <>
    <div className="main__container">
      <Header />
      <div className="content__warper">
        <Main />
        {/* <Subscribed /> */}
        <Footer />
      </div>
    </div>
    <div
      className="background_pineapple"
      style={{ backgroundImage: `url(${Background})` }}
    ></div>
  </>
);

export default App;
