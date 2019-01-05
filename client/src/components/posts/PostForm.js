import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { addPost } from "../../actions/postActions";

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
    if (newProps.errprs) {
      this.setState({ errors: newProps.error });
    }
  }

  onSubmitAnon(e) {
    const newPost = {
      text: this.state.text,
      name: "Anonymous",
      Course: this.state.Course
    };
    this.props.addPost(newPost);
    this.setState({ text: " " });
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;
    let newPost;
    if (user === null) {
      newPost = {
        text: this.state.text,
        name: "Anonymous",
        Course: this.state.Course
      };
    } else {
      newPost = {
        text: this.state.text,
        name: user.name,
        avatar: user.avatar,
        Course: this.state.Course
      };
    }
    const newPosts = newPost;
    this.props.addPost(newPosts);
    this.setState({ text: " " });
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
              Say Somthing...
            </div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <TextAreaFieldGroup
                    placeholder="Create a post"
                    name="text"
                    value={this.state.text}
                    onChange={this.onChange}
                    error={errors.text}
                  />
                </div>
                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
                <button onClick="onSubmitAnon" className="btn btn-dark">
                  Submit Anonymous
                </button>
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
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addPost }
)(PostForm);
