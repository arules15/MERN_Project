import React, { Component } from "react";

class About extends Component {
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
                  interacting with Redux.js on the backend with node, the
                  Backend itself, and finally the choice of MongoDB as a
                  database and my overall takeaways from this project, so stay
                  tuned
                </p>
                <p className="display-4"> Front End Woes </p>
                <p className="lead">
                  I was pretty fortunate to have been able to use the bootstrap
                  template provided in the tutorial I used to learn react.js,I'm
                  also not too crazy about frontend web development in general,
                  so theres not much to comment on that, the choice of react was
                  also mainly influenced by the fact that I took a tutorial in
                  react and thus it was the only frontend framework I knew, from
                  whhat I know, I think React is a pretty simple framework to
                  work with given its really mostly just a library, I didn't
                  have many problems with React, and looking back theres not
                  much I would change in regards to the use of React in this
                  project, except I wish I used React more for interacting with
                  the API instead of deferring all the work to redux, now that
                  the project is done, having a abunch of redux mixed in with
                  react for simple things like storing the selected Department
                  as a redux state for queries, when I could have just stored in
                  react and cut out all the redux fluff.
                  <break />
                  In conclusion, I think the next time I pursue a web project,
                  I'll try to minimize the amount of complex redux I use, I find
                  it makes things unecessarily hard to change when you need to
                  interact with a bunch of different classes (3 or 4) on the
                  frontend to just make a simple change like changing an API
                  request.
                </p>
                <p className="display-4"> Redux and the Backend </p>
                <p className="lead">
                  I had it setup so that each componenet of the front end app
                  (i.e. courses, posts, login etc.) had a seperate javascript
                  file handling backend requests, I had a function for each
                  react component that interacted with the backent, and each
                  react componenet would import the specific function in this
                  file that performs the api call for it, I'm actually pretty
                  happey how this turned out, it really made the seperation of
                  pure frontend and frontend backend interaction really nice,
                  although there are still a few things I would change, once
                  again, outside of authentication and posts (maybe even posts),
                  redux could've been cut out, and instead replaced by a
                  parameter entered into the function, although since the files
                  were pretty basic, the redux was not that much of a hassle to
                  deal with, just a minor inconvenience
                </p>
                <p className="display-4"> The Backend </p>
                <p className="lead">
                  For the backend, I used node.js with express, and I had 4 main
                  route files, courses, posts, profile, and users. These files
                  corresponded to the mongodb Models I had created with the same
                  names, the backend was quite simple, I had a bunch of api
                  endpoints which recieved REST requests from the front end and
                  responded accordingly, probably the hardest part was the
                  authentication, since there were quite a few different aspects
                  involved, from storing a users jsonwebtoken in local storage
                  to remember that user, or validating and encrypting passwords,
                  overall no complaints with node.jsn and the libraries I used,
                  would use it again for sure.......
                </p>
                <p className="lead">
                  .....MongoDb on the other hand was a bit of a problem,
                  particularly regarding the insertion of the courses into the
                  database. For this project, I had to scrape over 5000 courses
                  from the york website (did this using selenium) and insert the
                  raw data into MongoDB, since mongo only accepts json data, I
                  had to convert this data to json, although this is really
                  inconvenient because there are plenty of anomalies that exist
                  (eg. when theres an apostrophe in a word, it completely screws
                  with the json), and at some point I was manually scanning the
                  data for irregularities which is a big no-no, in hind-sight
                  though the method I was using might've been extremely
                  inefficient, I converted the raw data to json using a script I
                  wrote in Java, when the more logical thing to do would've been
                  to use a mongoose and javascript procedure of some sort, to
                  directly insert the data into the database based on parameters
                  defined within the code, although I'm still not sure mongoose
                  provides such a procedure, I know for a fact that sql makes it
                  alot easier to do this kind of thing (don't need to worry
                  about how the data is stored, could probably just run some
                  JDBC or something similar that looks at the data and inserts
                  it based on parameters, its alot easier to think about how to
                  do this in sql terms looool ), and it seems I'll probably
                  abandon the choice of mongoose next time round
                </p>
                <p className="display-4"> Conclusion </p>
                <p className="lead">
                  This project was really fun to work on since it was my first
                  larger scale project that I've worked on, I walked away with
                  alot of knowledge on how things work in the modern day web
                  development-sphere, although there are still many things I'm
                  in the dark about (an experienced developer could probably
                  tell this by my vague explanations of some concepts up above
                  lool), and I don't intend this to be my last web project
                </p>
                <p className="lead">
                  Things I take away from this project are
                  <ul class="list-group">
                    <li class="list-group-item list-group-item-info">
                      {" "}
                      Try not to rely on redux too much, it creates alot of
                      redundancies and in some cases can make things harder{" "}
                    </li>
                    <li class="list-group-item list-group-item-info">
                      {" "}
                      Try to be more creative with my frontend, this means
                      taking an active role in the bootstrap design of the site,
                      even if this is a weakness of mine, its crucial to me
                      growing as a developer to understand the frontend
                      organization more clearly{" "}
                    </li>
                    <li class="list-group-item list-group-item-info">
                      {" "}
                      Not much of an advantage using mongodb, stick to sql next
                      time{" "}
                    </li>
                  </ul>
                </p>
                <p className="display-4"> The future </p>
                <p className="lead">
                  Two major changes coming up, 1. a search bar is desperatley
                  needed on this page 2. users will be able to favourite courses
                  that they may want to keep up with so that a link to that
                  course shows up on their timelines. Stay tuned!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
