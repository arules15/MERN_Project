import React, { Component } from "react";
import PostForm from "../posts/PostForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCourse } from "../../actions/courseActions";
import { Link, withRouter } from "react-router-dom";

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
    this.props.getCourse(this.props.course.course);
  }
  componentWillReceiveProps(nextProp) {
    if (nextProp.course.description) {
      const description = nextProp.course.description;
      this.setState({
        Description: description
      });
    }
  }

  render() {
    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {this.state.Description}
              <PostForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Review.propTypes = {
  //getCourse: PropTypes.func.isRequired,
  getCourse: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course
});

export default connect(
  mapStateToProps,
  { getCourse }
)(withRouter(Review));
