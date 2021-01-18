import React from "react";
import Arrow_left from "../assets/arrow__left.svg";
import Footer from "./Footer";
import CheckBoxActive from "../assets/checkbox__active.svg";

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
