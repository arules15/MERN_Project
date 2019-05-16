import React, { Component } from "react";

class About extends Componenet {
  render() {
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-1">About</h1>
              <div>
                <p className="display-4"> Intro </p>
                <p className="lead">
                  Hi there, welcome to this About Page, on this page I hope to
                  cover all the challenges and considerations I made in the
                  process of creating this site, from Front end and styling,
                  React and interacting with Redux.js on the frontend,
                  interacting with Redux.js on the backend with node, the Bckend
                  itself, and finally the choice of MongoDB as a database and my
                  overall takeaways from this project, so stay tuned
                </p>
                <p className="display-4"> Front End Woes </p>
                <p className="lead" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
