import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
import InputGroup from "../common/InputGroup";
import { createProfile, getCurrentProfile } from "../../actions/profileActions";
import isEmpty from "../../validation/is-empty";
import { Link } from "react-router-dom";
//import classnames from "classnames";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      faculty: "",
      major: "",
      year: "",
      second_major: "",
      minor: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instgram: "",
      github: "",
      behance: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      // If profile field doesn't exist, make empty string
      profile.faculty = !isEmpty(profile.faculty) ? profile.faculty : "";
      profile.major = !isEmpty(profile.major) ? profile.major : "";
      profile.year = !isEmpty(profile.year) ? profile.year : "";
      profile.second_major = !isEmpty(profile.second_major)
        ? profile.second_major
        : "";
      profile.minor = !isEmpty(profile.minor) ? profile.minor : "";
      profile.bio = !isEmpty(profile.bio) ? profile.bio : "";
      profile.social = !isEmpty(profile.social) ? profile.social : {};
      profile.twitter = !isEmpty(profile.social.twitter)
        ? profile.social.twitter
        : "";
      profile.facebook = !isEmpty(profile.social.facebook)
        ? profile.social.facebook
        : "";
      profile.linkedin = !isEmpty(profile.social.linkedin)
        ? profile.social.linkedin
        : "";
      profile.youtube = !isEmpty(profile.social.youtube) ? profile.youtube : "";
      profile.instagram = !isEmpty(profile.social.instagram)
        ? profile.social.instagram
        : "";
      profile.behance = !isEmpty(profile.social.behance)
        ? profile.social.behance
        : "";
      profile.github = !isEmpty(profile.social.github)
        ? profile.social.github
        : "";

      //Set componenet fiels state, this has the effect of filling the input boxes with whatever the user entered before
      this.setState({
        faculty: profile.faculty,
        major: profile.major,
        year: profile.year,
        second_major: profile.second_major,
        minor: profile.minor,
        bio: profile.bio,
        twitter: profile.twitter,
        facebook: profile.facebook,
        linkedin: profile.linkedin,
        youtube: profile.youtube,
        instagram: profile.instagram,
        github: profile.github,
        behance: profile.behance
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const profileData = {
      //handle: this.state.handle
      faculty: this.state.faculty,
      major: this.state.major,
      year: this.state.year,
      second_major: this.state.second_major,
      minor: this.state.minor,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram,
      github: this.state.github,
      behance: this.state.behance
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />

          <InputGroup
            placeholder="Facebook Profile URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />

          <InputGroup
            placeholder="Instagram Profile URL"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />

          <InputGroup
            placeholder="Youtube Channel URL"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />

          <InputGroup
            placeholder="Linkedin Profile URL"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />

          <InputGroup
            placeholder="Github Profile URL"
            name="github"
            icon="fab fa-github"
            value={this.state.github}
            onChange={this.onChange}
            error={errors.github}
          />

          <InputGroup
            placeholder="Behance Profile URL"
            name="behance"
            icon="fab fa-behance"
            value={this.state.behance}
            onChange={this.onChange}
            error={errors.behance}
          />
        </div>
      );
    }
    //Select options for year
    const yearOptions = [
      { label: "Select Your Year of Study", value: 0 },
      { label: "1st-Year", value: "1st-Year" },
      { label: "2nd-Year", value: "2nd-Year" },
      { label: "3rd-Year", value: "3rd-Year" },
      { label: "4th-Year", value: "4th-Year" },
      { label: "5th-Year +", value: "5th-Year + " }
    ];
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8-m-auto">
              <Link className="btn btn-light" to="/dashboard">
                Go Back
              </Link>

              <h1 className="display-4 text-center"> Edit Profile</h1>
              {/* <p className="lead text-center">
                Enter Some info below to let other yorkies know a bit about
                yourself
              </p> */}
              {/* Faculty Form */}
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Faculty"
                  name="faculty"
                  value={this.state.faculty}
                  onChange={this.onChange}
                  error={errors.faculty}
                  info="Enter Your Faculty"
                />
                <SelectListGroup
                  placeholder="Year"
                  name="year"
                  value={this.state.year}
                  onChange={this.onChange}
                  options={yearOptions}
                  error={errors.year}
                  info="Enter Your Year of Study"
                />

                <TextFieldGroup
                  placeholder="Major"
                  name="major"
                  value={this.state.major}
                  onChange={this.onChange}
                  error={errors.major}
                  info="Enter Your Major"
                />
                <TextFieldGroup
                  placeholder="2nd Major"
                  name="second_major"
                  value={this.state.second_major}
                  onChange={this.onChange}
                  error={errors.second_major}
                  info="Enter Your Second Major (if you have one very impressive I must say)"
                />
                <TextFieldGroup
                  placeholder="Minor"
                  name="minor"
                  value={this.state.minor}
                  onChange={this.onChange}
                  error={errors.minor}
                  info="Enter Your Minor (if you have one, also pretty impressive)"
                />
                <TextAreaFieldGroup
                  placeholder="Short Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Tell your fellow yorkistanis a bit about yourself"
                />

                {/* For Social Media Links */}
                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-light"
                  >
                    Add Social Media Links?
                  </button>
                  <span className="text-muted">Optional</span>
                </div>
                {socialInputs}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(CreateProfile));
