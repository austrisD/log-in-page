import React from "react";
import Arrow_left from "../assets/arrow__left.svg";
import CheckBoxActive from "../assets/checkbox__active.svg";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { CheckBoxActive: false, email: "", error: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  handleSubmit(event) {
    // alert("A name was submitted: " + this.state.value + this.state.email);
    // console.log(this.state.CheckBoxActive);
    // console.log(this.state.email);
    // console.log(values);
    // event.preventDefault();
    // if (emailReEex.test(this.state.email)) {
    //   this.state.error = "Please provide a valid e-mail address";
    // }
    // console.log(emailReEex.test(this.state.email));
    // if (emailReEex.test(this.state.email));
  }

  handleErrors() {
    const email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const WrongEmail = !email.test(this.state.email);

    const ColombiaEmails = /^[\w-\.]+@([\w-]+\.)+(co)$/g;
    const ColombiaEmailsTest = ColombiaEmails.test(this.state.email);

    const termsFalse = this.state.CheckBoxActive != true;

    if (WrongEmail) {
      this.setState({ error: "Please provide a valid e-mail address" });
      console.log("WrongEmail");
    }

    if (ColombiaEmailsTest) {
      console.log("CO email");
      this.setState({
        error: "We are not accepting subscriptions from Colombia emails",
      });
    }

    if (termsFalse) {
      this.setState({ error: "You must accept the terms and conditions" });
      console.log("teamsFalse");
    }

    if (!WrongEmail && !termsFalse && !ColombiaEmailsTest) {
      this.setState({ error: "" });
      console.log("reset");
    }
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
            action="server.php"
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
                onBlur={this.handleErrors}
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
            <p className="Form__error">{this.state.error}</p>
            <div className="form__checkbox">
              <label className="checkbox__edit" onClick={this.handleErrors}>
                <input
                  type="checkbox"
                  className="checkbox"
                  value={this.state.CheckBoxActive}
                  onClick={() => {
                    this.setState(
                      this.state.CheckBoxActive == false
                        ? { CheckBoxActive: true }
                        : { CheckBoxActive: false }
                    );
                    if (this.state.CheckBoxActive) {
                      this.setState({ error: "" });
                    }
                  }}
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
