import React from "react";
import Arrow_left from "../assets/arrow__left.svg";
import CheckBoxActive from "../assets/checkbox__active.svg";

const emailReEex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { CheckBoxActive: false, email: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // alert("A name was submitted: " + this.state.value + this.state.email);
    // console.log(this.state.CheckBoxActive);
    // console.log(this.state.email);
    // console.log(values);
    console.log(this.state);

    console.log(emailReEex.test(this.state.email));
    if (emailReEex.test(this.state.email)) return;
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

          <form
            method="post"
            className="subscribe__form"
            target="self"
            onSubmit={(values) => this.handleSubmit(values)}
          >
            <label htmlFor="email" className="form__email">
              <input
                type="email"
                name="email"
                className="email__input"
                value={this.state.email}
                onChange={(event) =>
                  this.setState({ email: event.target.value })
                }
                placeholder="Type your email address here…"
              />

              <button
                type="submit"
                className="form__submit"
                disabled={!this.state.CheckBoxActive}
              >
                <Arrow_left className="btn__svg" />
              </button>
            </label>
            <p className="Form__error">Error text</p>

            <div className="form__checkbox">
              <label className="checkbox__edit">
                <input
                  type="checkbox"
                  className="checkbox"
                  value={this.state.CheckBoxActive}
                  onClick={() =>
                    this.setState(
                      this.state.CheckBoxActive == false
                        ? { CheckBoxActive: true }
                        : { CheckBoxActive: false }
                    )
                  }
                ></input>
                <CheckBoxActive
                  style={
                    this.state.CheckBoxActive === true
                      ? { display: "block" }
                      : { display: "none" }
                  }
                />
              </label>
              I agree to
              <a href="#" className="termsLink">
                terms of service
              </a>
            </div>
          </form>
        </main>
      </>
    );
  }
}
