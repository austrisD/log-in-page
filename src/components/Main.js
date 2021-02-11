import React, { useState } from "react";
import Arrow_left from "../assets/arrow__left.svg";
import CheckBoxActiveIcon from "../assets/checkbox__active.svg";
import Subscribed from "./Subscribed";

export default function Main() {
  const [Email, setEmail] = useState("");
  const [CheckBoxActive, setCheckBoxActive] = useState(false);
  const [Error, setError] = useState("");
  const [IsSubscribed, setIsSubscribed] = useState(false);

  function handleSubmit(event) {
    sessionStorage.setItem("subscribed", true);
    console.log("submit");
    setIsSubscribed(true);
    event.preventDefault();
  }

  function handleErrors() {
    const email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const WrongEmail = !email.test(Email);
    const emailBlackList = /^[\w-\.]+@([\w-]+\.)+(co)$/g;
    const emailBlackListTest = emailBlackList.test(Email);
    const emptyEmailField = Email.length == 0;

    if (CheckBoxActive === false) {
      setError("You must accept the terms and conditions");
    }

    if (WrongEmail) {
      setError("Please provide a valid e-mail address");
    }

    if (emailBlackListTest) {
      setError("We are not accepting subscriptions from Colombia emails");
    }

    if (!WrongEmail && emptyEmailField && CheckBoxActive) {
      setError("");
    }
    if (!emailBlackListTest) {
      setError("");
    }

    //form does not remove terms if checkbox clicked
    // form after submitting does not change.
  }

  return (
    <>
      <main
        className="main"
        style={
          IsSubscribed === true ? { display: "none" } : { display: "block" }
        }
      >
        <div className="main__heading">
          <h2>Subscribe to newsletter</h2>
          <p>
            Subscribe to our newsletter and get 10% discount on pineapple
            glasses.
          </p>
        </div>

        <form
          method="post"
          className="subscribe__form"
          target="self"
          action="server.php"
          onSubmit={(values) => handleSubmit(values)}
        >
          <label htmlFor="email" className="form__email">
            <input
              type="email"
              name="email"
              className="email__input"
              onChange={(event) => setEmail(event.target.value)}
              onBlur={handleErrors}
              placeholder="Type your email address here…"
              value={Email}
            />

            <button
              type="submit"
              className="form__submit"
              disabled={Error === "" ? false : true}
            >
              <Arrow_left className="btn__svg" />
            </button>
          </label>
          <div className="form__checkbox">
            <label
              className="checkbox__edit"
              htmlFor="terms"
              onClick={() => {
                if (CheckBoxActive === false) {
                  setCheckBoxActive(true);
                  setError("");
                } else {
                  setCheckBoxActive(false);
                  setError("You must accept the terms and conditions");
                }
              }}
              style={
                Error.search("You must accept") != -1
                  ? { borderColor: "red" }
                  : { borderColor: "#e3e3e4" }
              }
            >
              <input
                type="checkbox"
                className="checkbox"
                name="terms"
                value={CheckBoxActive}
              ></input>
              {CheckBoxActive === true ? <CheckBoxActiveIcon /> : ""}
            </label>
            I agree to
            <a href="#" className="termsLink">
              terms of service
            </a>
          </div>
          <p className="Form__error">{Error}</p>
        </form>
      </main>
      {IsSubscribed === true ? <Subscribed /> : ""}
    </>
  );
}
