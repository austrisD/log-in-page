<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React from "react";
>>>>>>> 5554d37d280e701981633ce0cae591f399b90e97
import Arrow_left from "../assets/arrow__left.svg";
import CheckBoxActiveIcon from "../assets/checkbox__active.svg";
import Subscribed from "./Subscribed";

<<<<<<< HEAD
export default function Main() {
  const [Email, setEmail] = useState("");
  const [CheckBoxActive, setCheckBoxActive] = useState(false);
  const [Error, setError] = useState("");
  const [IsSubscribed, setIsSubscribed] = useState(false);
  const [ErrorDelay, setErrorDelay] = useState("");

  const email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const WrongEmail = !email.test(Email);
  const emailBlackList = /^[\w-\.]+@([\w-]+\.)+(co)$/g;
  const emailBlackListTest = emailBlackList.test(Email);

  function handleSubmit() {
    console.log("submit");
    setIsSubscribed(true);
    sessionStorage.setItem("subscribed", true);
    document.form.target = "myActionWin";
    window.open("", "myActionWin", "width=500,height=300,toolbar=0");
    document.form.submit();
  }

  function handleInputErrors() {
    if (CheckBoxActive === false) {
      setErrorDelay("ErrorDelay");
      setError("You must accept the terms and conditions");
    }

    if (WrongEmail) {
      setErrorDelay("ErrorDelay");
      setError("Please provide a valid e-mail address");
    }

    if (emailBlackListTest) {
      setErrorDelay("ErrorDelay");
      setError("We are not accepting subscriptions from Colombia emails");
    }

    if (!WrongEmail && !emailBlackListTest && CheckBoxActive) {
      setErrorDelay("");
      setError("");
    }

    //form does not remove terms if checkbox clicked
    // form after submitting does not change.
  }
  useEffect(() => {
    if (Email != "") {
      handleInputErrors();
    }
  }, [CheckBoxActive, Email]);

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
          target="_blank"
          action="server.php"
          name="form"
          onSubmit={(values) => handleSubmit(values)}
          noValidate
        >
          <label
            htmlFor="email"
            className="form__email"
            style={
              Error.search("Please provide") != -1 ||
              Error.search("Colombia emails") != -1
                ? { borderColor: "red" }
                : {}
            }
          >
            <input
              type="email"
              name="email"
              className="email__input"
              onChange={(event) => setEmail(event.target.value)}
              // onBlur={handleInputErrors}
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
                  setErrorDelay("ErrorDelay");
                  setCheckBoxActive(true);
                } else {
                  setCheckBoxActive(false);
                  setErrorDelay("");
                }
              }}
              style={
                Error.search("You must accept") != -1
                  ? { borderColor: "red" }
                  : { borderColor: "#e3e3e4" }
              }
            >
              <input type="hidden" name="terms" value={CheckBoxActive} />
              {CheckBoxActive === true ? <CheckBoxActiveIcon /> : ""}
            </label>
            I agree to
            <a href="#" className="termsLink">
              terms of service
            </a>
          </div>
          <p className={`Form__error ${ErrorDelay}`}>{Error}</p>
        </form>
      </main>
      {IsSubscribed === true ? <Subscribed /> : ""}
    </>
  );
}
=======
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }
  render() {
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
              // style={
              //   IsEmailInputActive === true
              //     ? { boxShadow: "0px 30px 40px 0px #1317200f" }
              //     : { boxShadow: "none" }
              // }
            >
              <input
                type="email"
                name="email"
                id="form_email"
                className="email__input"
                placeholder="Type your email address here…"
                required
              />

              <button
                type="submit"
                className="form__submit"
         
              >
                <Arrow_left className="btn__svg" />
              </button>
            </label>

            <div className="form__checkbox">
              <label className="checkbox__edit">
                <input
                  type="checkbox"
                  className="checkbox"
      
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
  }
}

export default Main;
>>>>>>> 5554d37d280e701981633ce0cae591f399b90e97
