import React, { Component } from "react";
import isEmpty from "../../validation/is-empty";

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    let socialMedia;

    if (profile.social == null) {
      socialMedia = "";
    } else {
      socialMedia = (
        <p>
          {isEmpty(profile.social.twitter) ? null : (
            <a
              className="text-white p-2"
              href={profile.social.twitter}
              target="_blank"
            >
              <i className="fab fa-twitter fa-2x" />
            </a>
          )}

          {isEmpty(profile.social.facebook) ? null : (
            <a
              className="text-white p-2"
              href={profile.social.facebook}
              target="_blank"
            >
              <i className="fab fa-facebook fa-2x" />
            </a>
          )}

          {isEmpty(profile.social.linkedin) ? null : (
            <a
              className="text-white p-2"
              href={profile.social.linkedin}
              target="_blank"
            >
              <i className="fab fa-linkedin fa-2x" />
            </a>
          )}

          {isEmpty(profile.social.instagram) ? null : (
            <a
              className="text-white p-2"
              href={profile.social.instagram}
              target="_blank"
            >
              <i className="fab fa-instagram fa-2x" />
            </a>
          )}

          {isEmpty(profile.social.youtube) ? null : (
            <a
              className="text-white p-2"
              href={profile.social.youtube}
              target="_blank"
            >
              <i className="fab fa-youtube fa-2x" />
            </a>
          )}

          {isEmpty(profile.social.github) ? null : (
            <a
              className="text-white p-2"
              href={profile.social.github}
              target="_blank"
            >
              <i className="fab fa-github fa-2x" />
            </a>
          )}

          {isEmpty(profile.social.behance) ? null : (
            <a
              className="text-white p-2"
              href={profile.social.behance}
              target="_blank"
            >
              <i className="fab fa-behance fa-2x" />
            </a>
          )}
        </p>
      );
    }
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-info text-white mb-3">
              <div className="row">
                <div className="col-4 col-md-3 m-auto">
                  <img
                    className="rounded-circle"
                    src={profile.user.avatar}
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="display-4 text-center">{profile.user.name}</h1>
                <p className="lead text-center">{profile.major} </p>
                {isEmpty(profile.second_major) ? null : (
                  <p>2nd Major: {profile.second_major}</p>
                )}
                {isEmpty(profile.minor) ? null : <p>Minor: {profile.minor}</p>}{" "}
                {isEmpty(profile.year) ? null : <p>{profile.year}</p>}
                {isEmpty(profile.bio) ? null : <p> {profile.bio}</p>}
                {socialMedia}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
