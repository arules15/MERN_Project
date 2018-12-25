import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom"; //for redirecting in the authActions redux action
import classnames from "classnames";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
    //the below is used for setting any occurence of this.onChange to bind with this so that this.setState will work
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //lifecycle method to check if logged in, if logged in, Login component should not be accessible
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  //if the property contains an error field, we set errors state of the componeent to be the error field of the property
  //this is a react lifecycle method btw
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  //onChange function for changing the state of input boxes  texts, e is an event parameter, this function will take
  //the values inputted into it, and set it to its corresponding state variable
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(
      newUser,
      this.props.history
    ); /*allows us to use this.props.history to redirect from within an action using the
    withRouter library and wrapping Register with withRouter*/

    //console.log(newUser);
  }

  render() {
    const { errors } = this.state; // similar to this const errors = this.state.errors, curly braces allows you to pull errors variable
    //out of this.state

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">
                Create your YUReview account today to make unanonymous
                contributions and tally likes
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    //added a value field and called it this.state.username
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.name //so class will ne form-control unless errors.name exists, then
                      //the class will be is-invalid which enables bootstrap to do form validation
                    })}
                    placeholder="Username"
                    name="username"
                    value={this.state.username}
                    //the below is for updating text when entered into the field, this is how react does it
                    onChange={this.onChange}
                    //required // not needed since error checking is done on the backend anyways
                    //the below is for displaying specific errors below the required fields
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.email //so class will ne form-control unless errors.name exists, then
                      //the class will be is-invalid which enables bootstrap to do form validation
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    //the below is for updating text when entered into the field, this is how react does it
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                  <small className="form-text text-muted">
                    This site uses Gravatar so if you want a profile image, use
                    a Gravatar email
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password //so class will be form-control unless errors.name exists, then
                      //the class will be is-invalid which enables bootstrap to do form validation (highlight imput box in red)
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    //the below is for updating text when entered into the field, this is how react does it
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password2 //so class will ne form-control unless errors.name exists, then
                      //the class will be is-invalid which enables bootstrap to do form validation
                    })}
                    placeholder="Confirm Password"
                    name="password2"
                    value={this.state.password2}
                    //the below is for updating text when entered into the field, this is how react does it
                    onChange={this.onChange}
                  />
                  {errors.password2 && (
                    <div className="invalid-feedback">{errors.password2}</div>
                  )}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

//below is to get auth state into the component
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register)); //allows us to export the component Register, with handy router tools to route within an action
