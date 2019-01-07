import React, { Component } from "react";
import PropTypes from "prop-types";
import PostItem from "./PostItem";

class PostFeed extends Component {
  render() {
    const { posts, course } = this.props;

    return posts.map(post => (
      <PostItem key={post._id} post={post} course={course} />
    ));
  }
}

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired
};

export default PostFeed;
