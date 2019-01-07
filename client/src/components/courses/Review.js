import React, { Component } from "react";
import PostForm from "../posts/PostForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCourse } from "../../actions/courseActions";
import { Link, withRouter } from "react-router-dom";
import { getPosts } from "../../actions/postActions";
import Spinner from "../common/Spinner";
import PostFeed from "../posts/PostFeed";

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Description: "",
      Course: ""
    };
  }

  componentDidMount() {
    //this.props.getCourse();
    this.props.getPosts(this.props.course.course);
    this.props.getCourse(this.props.course.course);
  }
  componentWillReceiveProps(nextProp) {
    if (nextProp.course.description) {
      const description = nextProp.course.description;
      this.setState({
        Description: description
      });
    }
    if (nextProp.course.course) {
      const course = nextProp.course.course;
      this.setState({
        Course: course
      });
    }
  }

  render() {
    const { posts, loading } = this.props.post;
    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      //give PostFeed course from review
      postContent = (
        <PostFeed posts={posts} course={this.props.course.course} />
      );
    }
    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title"> {this.state.Course}</h3>
                  <p class="card-text">{this.state.Description}</p>
                </div>
              </div>
              <PostForm />
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Review.propTypes = {
  //getCourse: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  getCourse: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  course: state.course
});

export default connect(
  mapStateToProps,
  { getCourse, getPosts }
)(withRouter(Review));
