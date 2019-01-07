import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { addPost, addPostAnon } from "../../actions/postActions";
import isEmpty from "../../validation/is-empty";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      //will be passed into the component in the Courses component
      Course: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillRecieveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.error });
    }
  }

  componentDidMount() {
    this.setState({ Course: this.props.course.course });
  }

  onSubmitAnon(e) {
    const newPost = {
      text: this.state.text,
      name: "Anonymous",
      Course: this.state.Course
    };
    this.props.addPostAnon(newPost);
    this.setState({ text: " " });
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;
    let newPost;
    if (this.props.auth.isAuthenticated == false) {
      newPost = {
        text: this.state.text,
        name: "Anonymous",
        Course: this.state.Course
      };
      const newPosts = newPost;
      this.props.addPostAnon(newPosts);
      this.setState({ text: " " });
    } else {
      newPost = {
        text: this.state.text,
        name: user.name,
        avatar: user.avatar,
        Course: this.state.Course
      };

      const newPosts = newPost;
      this.props.addPost(newPosts);
      this.setState({ text: " " });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="post-form mb-3">
          <div className="card card-info">
            <div className="card-header bg-info text-white">
              Leave a Review to share your wisdom with future students of our
              Prestigous Instituion (kek)
            </div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <TextAreaFieldGroup
                    placeholder="Create a Revuew"
                    name="text"
                    value={this.state.text}
                    onChange={this.onChange}
                    error={errors.text}
                  />
                </div>
                <div className="btn-group btn-group-justified">
                  <button type="submit" className="btn btn-dark">
                    Submit
                  </button>
                  <button onClick="onSubmitAnon" className="btn btn-dark">
                    Submit Anonymous
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  addPostAnon: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course,
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addPost, addPostAnon }
)(PostForm);
