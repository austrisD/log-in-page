import React, { useState } from "react";
import Arrow_left from "../assets/arrow__left.svg";
import Footer from "./Footer";
import CheckBoxActive from "../assets/checkbox__active.svg";

const Main = () => {
  const [IsCheckBoxClicked, setIsCheckBoxClicked] = useState(false);
  const [IsEmailInputActive, setEmailInputActive] = useState(false);

  return (
    <>
      <main className="main">
        <div className="main__heading">
          <h2>Subscribe to newsletter</h2>
          <p>
            Subscribe to our newsletter and get 10% discount on pineapple
            glasses.
          </p>
        </div>

        <form method="post" className="subscribe__form" target="self">
          <label
            htmlFor="email"
            className="form__email"
            style={
              IsEmailInputActive === true
                ? { boxShadow: "0px 30px 40px 0px #1317200f" }
                : { boxShadow: "none" }
            }
          >
            <input
              type="email"
              name="email"
              id="form_email"
              className="email__input"
              placeholder="Type your email address here…"
              onFocus={() => {
                setEmailInputActive(true);
              }}
            />

            <button
              type="submit"
              className="form__submit"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              <Arrow_left className="btn__svg" />
            </button>
          </label>

          <div className="form__checkbox">
            <label className="checkbox__edit">
              {IsCheckBoxClicked === true ? <CheckBoxActive /> : ""}
              <input
                type="checkbox"
                className="checkbox"
                onClick={(event) => {
                  event.target.checked === true
                    ? setIsCheckBoxClicked(true)
                    : setIsCheckBoxClicked(false);
                }}
              ></input>
            </label>
            I agree to
            <a href="#" className="termsLink">
              terms of service
            </a>
          </div>
        </form>
        <Footer />
      </main>
    </>
  );
};

export default Main;
