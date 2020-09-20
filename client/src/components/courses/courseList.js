import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setCourse,
  getCourse,
  getCourses,
  getSearch
} from "../../actions/courseActions";
import { Link, withRouter } from "react-router-dom";

class courseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Courses: [],
      Department: "THEA",
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
      function () {
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
    if (this.props.course.department) {
      this.props.getCourses(this.props.course.department);
    }
    // else {
    //   this.props.getSearch(this.props.course.search);
    // }

  }
  //On component initialization, set local variable Courses to courses (courses holds the courses in selected department)
  // if courseList was navigated to using the dropdown, else set it to search
  //(which holds the result of the search) 
  componentWillReceiveProps(nextProp) {
    if (nextProp.course.courses) {
      const courses = nextProp.course.courses;
      this.setState({
        Courses: courses
      });
    }
    else if (nextProp.course.search) {
      const search = nextProp.course.search;
      this.setState({
        Courses: search
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
        <div className="text-center">
          <h1 className="display-4 text-center"> Select Desired Course ({j} results)</h1>
          <form onSubmit={this.onSubmit}>
            <div className="btn-group-vertical">
              {this.state.Courses.map(
                function (course) {
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
            {/* <input
            type="submit"
            value="Submit"
            className="btn btn-primary btn-lg btn-block"
          /> */}
          </form>
        </div>
      </div>
    );
  }
}

courseList.propTypes = {
  //getCourse: PropTypes.func.isRequired,
  setCourse: PropTypes.func.isRequired,
  getCourses: PropTypes.func.isRequired,
  getSearch: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  courses: PropTypes.object.isRequired,
  department: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course
});

export default connect(
  mapStateToProps,
  { getCourses, setCourse, getSearch }
)(withRouter(courseList));
