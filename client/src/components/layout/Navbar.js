import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux"; //connecting it to redux
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
import { setSearch, getSearch } from "../../actions/courseActions";
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onLogoutClick(e) {
    //e is type of event
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });

  }
  //Set search parameter and get search results from backend (set search might be redundant, need to look into it)
  onSubmit(e) {
    e.preventDefault();
    this.props.setSearch(this.state.search);
    //this.props.getSearch(this.ptops.course.search);
    setTimeout(
      function () {
        this.props.getSearch(this.props.course.search);
      }.bind(this),
      500
    );
    this.props.history.push("/courseList");
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    //if user is logged in, display authLinks , or else, display guestLinks
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "25px", marginRight: "5px" }}
              title="You'll need to make a gravatar connected to your email to display an image"
            />{" "}
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            YUReview
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/courses">
                  {" "}
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  Profiles
                </Link>
              </li>
            </ul>
            <form class="form-inline" onSubmit={this.onSubmit}>
              <input
                name="search"
                id="search"
                class="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
                value={this.state.search}
                onChange={this.onChange}
              />
            </form>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired,
  courses: PropTypes.object.isRequired,
  setSearch: PropTypes.func.isRequired,
  getSearch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  course: state.course
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile, setSearch, getSearch }
)(withRouter(Navbar));
