import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            <img
              src={profile.user.avatar}
              alt="avatar"
              className="rounded-circle"
            />
          </div>

          <div className="col-lg-6 col-md-4 col-8">
            <h3> {profile.user.name}</h3>
            <p>
              {profile.major}{" "}
              {isEmpty(profile.second_major) ? null : (
                <span>at {profile.second_major}</span>
              )}
              {isEmpty(profile.minor) ? null : <span> {profile.minor}</span>}
              {isEmpty(profile.year) ? null : <span>{profile.year}</span>}
            </p>
            <p>{isEmpty(profile.bio) ? null : <span> {profile.bio}</span>}</p>
            <Link to={`/profile/${profile.handle}`} className="btn btn-info">
              View Profile
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
