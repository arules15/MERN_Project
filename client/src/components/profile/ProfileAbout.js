import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div class="row">
        <div class="col-md-12">
          <div class="card card-body bg-light mb-3">
            <h3 class="text-center text-info">{profile.user.name}'s bio</h3>
            <p class="lead">
              {isEmpty(profile.bio) ? null : <span>{profile.bio}</span>}
            </p>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileAbout;
