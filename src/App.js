import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./Css/styles.scss";
import Background from "./assets/background_pineapple.jpg";

const App = () => (
  <>
    <div className="main__container">
      <Header Background={Background} />
      <Main />
    </div>
  </>
);

export default App;
