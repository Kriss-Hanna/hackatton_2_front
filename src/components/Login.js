import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import withContext from "../withContext";
import Helmet from 'react-helmet'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value, error: "" });

  login = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    if (!username || !password) {
      return this.setState({ error: "Fill all fields!" });
    }
    this.props.context.login(username, password)
      .then((loggedIn) => {
        if (!loggedIn) {
          this.setState({ error: "Invalid Credentails" });
        }
      })
  };

  render() {
    return !this.props.context.user ? (
      <>
      <Helmet>    
      <title>Connexion</title>
      <meta name="description" content="Formulaire de connexion pour le site MydreamHouse"></meta>
      <link href="https://silly-leavitt-399ea8.netlify.app/login"/>
    </Helmet>
        <div className="success is-primary ">
          <div className="hero-body container" className="login-container">
            <h1 className="login-title">Connexion</h1>
          </div>
        </div>
        <br />
        <br />
        <form onSubmit={this.login}>
          <div className="columns is-mobile is-centered">
            <div className="column is-one-third">
              <div className="field">
                <label className="label">Email: </label>
                <input
                  className="input"
                  type="email"
                  name="username"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Mot de passe: </label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.error && (
                <div className="has-text-danger">{this.state.error}</div>
              )}
              <div className="fiele">
                <button
                  className="buttoni"
                >
                  Valider
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
    ) : (
      <Redirect to="/products" />
    );
  }
}

export default withContext(Login);