import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { addComment, addCommentAnon } from "../../actions/postActions";

class CommentForm extends Component {
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

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;
    const { postId } = this.props;

    let newComment;
    if (this.props.auth.isAuthenticated == false) {
      newComment = {
        text: this.state.text,
        name: "Anon"
      };
      const newPosts = newComment;
      this.props.addCommentAnon(postId, newPosts);
      this.setState({ text: " " });
    } else {
      newComment = {
        text: this.state.text,
        name: user.name,
        avatar: user.avatar
      };

      const newPosts = newComment;
      this.props.addComment(postId, newPosts);
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
              Make a comment on this Review...
            </div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <TextAreaFieldGroup
                    placeholder="Reply to Review"
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CommentForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  addPostAnon: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  course: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course,
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addComment, addCommentAnon }
)(CommentForm);
