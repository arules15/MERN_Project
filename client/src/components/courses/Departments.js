import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SelectListGroup from "../common/SelectListGroup";
import {
  getDepartments,
  getCourses,
  getCourse
} from "../../actions/courseActions";
import { Link } from "react-router-dom";

class Departments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Department: []
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    //this.props.getCourse();
    this.props.getDepartments();
  }

  componentWillReceiveProps(nextProp) {
    if (nextProp.course.department) {
      const department = nextProp.course.department;
      this.setState({
        Department: department
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { Department } = this.state;
    let empt = []; //= [4, 5, 9];
    let i;
    for (i = 0; i < Department.length; i++) {
      empt.push({
        label: Department[i],
        value: Department[i]
      });
    }

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12" />
            {/* {this.state.Department}
            {empt}
            {Department.length} */}
            <SelectListGroup
              placeholder="Departments"
              name="Departments"
              value={this.state.Department}
              onChange={this.onChange}
              options={empt}
              info="Select the Department"
            />
          </div>
        </div>
      </div>
    );
  }
}

Departments.propTypes = {
  //getCourse: PropTypes.func.isRequired,
  getDepartments: PropTypes.func.isRequired,
  Department: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course
});

export default connect(
  mapStateToProps,
  { getDepartments }
)(Departments);
