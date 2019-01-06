import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCourse, getCourse, getCourses } from "../../actions/courseActions";
import { Link, withRouter } from "react-router-dom";

class courseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Courses: [],
      Department: "",
      Course: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ Course: e.target.value });
    //timeout so that the state has enough time to update
    setTimeout(
      function() {
        this.props.setCourse(this.state.Course);
        this.props.history.push("/review");
      }.bind(this),
      500
    );
  }

  //Not necessary, may need in the future though
  onChange(e) {
    this.setState({ Course: e.target.value });
  }

  componentDidMount() {
    //this.props.getCourse();
    this.props.getCourses(this.props.course.department);
  }

  componentWillReceiveProps(nextProp) {
    if (nextProp.course.courses) {
      const courses = nextProp.course.courses;
      this.setState({
        Courses: courses
      });
    }
  }

  render() {
    let cours = <div />;
    let i;
    // for (i = 0; i < this.state.Courses.length; i++) {
    //   cours.insertAdjacentHTML(
    //     <button
    //       type="button"
    //       className="btn btn-primary"
    //       onClick={this.onChange}
    //       name={this.state.Courses[i]}
    //       value={this.state.Courses[i]}
    //     >
    //       {this.state.Courses[i]}
    //     </button>
    //   );
    // }
    let j = this.state.Courses.length;
    return (
      <div>
        <h1 className="display-4 text-center"> Select Desired Course </h1>
        <form onSubmit={this.onSubmit}>
          <div className="btn-group-vertical">
            {this.state.Courses.map(
              function(course) {
                return (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.onSubmit}
                    name={course}
                    value={course}
                  >
                    {course}
                  </button>
                );
              }.bind(this)
            )}
          </div>
          {j}
          {/* <input
            type="submit"
            value="Submit"
            className="btn btn-primary btn-lg btn-block"
          /> */}
        </form>
      </div>
    );
  }
}

courseList.propTypes = {
  //getCourse: PropTypes.func.isRequired,
  setCourse: PropTypes.func.isRequired,
  getCourses: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  courses: PropTypes.object.isRequired,
  department: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course
});

export default connect(
  mapStateToProps,
  { getCourses, setCourse }
)(withRouter(courseList));
