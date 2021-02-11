import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Background from "./assets/background_pineapple.jpg";
import Subscribed from "./components/Subscribed";

const App = () => {
  const session = sessionStorage.getItem("subscribed");

  const [Component, setComponent] = useState(<Main />);

  useEffect(() => {
    // console.log("usf");
    // console.log(sessionStorage.getItem("subscribed"));
    // console.log(session === "ok");
    if (session === "ok") {
      setComponent(<Subscribed />);
    }
  }, [sessionStorage.getItem("subscribed")]);

  return (
    <>
      <div className="main__container">
        <Header />
        <div className="content__warper">
          {Component}
          <Footer />
        </div>
      </div>
      <div
        className="background_pineapple"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
    </>
  );
};

export default App;
