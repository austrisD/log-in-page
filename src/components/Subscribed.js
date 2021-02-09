import React from "react";
import SC_ico from "../assets/ic_success.svg";

const Subscribed = () => {
  return (
    <main className="main">
      <div className="SC__warper">
        <SC_ico className="SC__icon" />
        <h2 className="SC__heading">Thanks for subscribing!</h2>
        <p className="SC__paragraph">
          You have successfully subscribed to our email listing. Check your
          email for the discount code.
        </p>
      </div>
    </main>
  );
};

export default Subscribed;
