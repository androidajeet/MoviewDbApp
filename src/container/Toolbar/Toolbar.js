import React, { Component } from "react";
import "./Toolbar.css";
import { connect } from "react-redux";
class Toolbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-light sticky-top shadow-sm  bg-white rounded">
        <a href="#" class="navbar-brand">
          <img src="assets/logo.png" height="58" alt="CoolBrand" />
        </a>
        <button
          type="button"
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav">
            <a href="#" class="nav-item nav-link active">
              Home
            </a>
            <a href="#" class="nav-item nav-link">
              Profile
            </a>
            <a href="#" class="nav-item nav-link">
              Messages
            </a>
            <a href="#" class="nav-item nav-link " tabindex="-1">
              Reports
            </a>
          </div>
          <div className="navbar-nav ml-auto text-muted">
            <p className="Welcome">
              Welcome
              <span className="text-muted"> {this.props.user.name} </span>
            </p>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.commanReducer
  };
};

//export default Toolbar;
export default connect(
  mapStateToProps,
  null
)(Toolbar);
//test

/* <nav className="navbar navbar-expand-lg navbar-light bg-light Navbar">
<p>{this.props.user.name}</p>
<div className="container-fluid">
  <div className="col-xs-4">
    <a className="navbar-brand" href="#">
      Movie App
    </a>
  </div>

  <div className="col-xs-8">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="col-xs-8 navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
</nav> */
