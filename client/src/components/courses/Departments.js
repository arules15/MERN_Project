import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SelectListGroup from "../common/SelectListGroup";
import { setDepartments, getDepartments } from "../../actions/courseActions";
import { Link, withRouter } from "react-router-dom";

class Departments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Departments: [],
      Department: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    //this.props.getCourse();
    this.props.getDepartments();
  }

  componentWillReceiveProps(nextProp) {
    if (nextProp.course.departments) {
      const departments = nextProp.course.departments;
      this.setState({
        Departments: departments
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.setDepartments(this.state.Department);
    this.props.history.push("/courseList");
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { Departments, Department } = this.state;
    let empt = []; //= [4, 5, 9];
    let i;
    for (i = 0; i < Departments.length; i++) {
      empt.push({
        label: Departments[i],
        value: Departments[i]
      });
    }

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12" />
            <form onSubmit={this.onSubmit}>
              {/* {this.state.Department}
            {empt}
            {Department.length} */}
              <SelectListGroup
                placeholder="Departments"
                name="Department"
                value={this.state.Department}
                onChange={this.onChange}
                options={empt}
                info="Select the Department"
              />
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary btn-lg btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Departments.propTypes = {
  //getCourse: PropTypes.func.isRequired,
  setDepartments: PropTypes.func.isRequired,
  getDepartments: PropTypes.func.isRequired,
  departments: PropTypes.object.isRequired,
  department: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course
});

export default connect(
  mapStateToProps,
  { getDepartments, setDepartments }
)(withRouter(Departments));
