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
      Department: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    //this.props.getCourse();
    this.props.getDepartments();
  }

  componentWillRecieveProps(nextProp) {
    if (nextProp.department.department) {
      const department = nextProp.department.department;
      this.setState({
        Department: department.sort()
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { Department } = this.state;
    let empt = [];
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
  Department: state.Department
});

export default connect(
  mapStateToProps,
  { getDepartments }
)(Departments);
