import React from "react";
import Layout from "components/layout";

const Members = ({ data, location }) => {
  return (
    <Layout location={location}>
      <div className="container">
        <br />
        <h1 className="heading-1 text-center text-primary">Coming Soon...</h1>
        <br />
        <div className="container">
          <form name="contact" method="POST" data-netlify="true">
            <legend className="text-center">
              ... but you should sign up for updates!
            </legend>
            <br />
            <fieldset>
              <div class="form-group row required">
                <div className="col-6 mx-auto">
                  <label for="name">Your Name</label>
                  <input
                    name="name"
                    type="text"
                    class="form-control"
                    id="name"
                    aria-describedby="nameHelp"
                    placeholder="Enter name"
                  />
                  <small id="nameHelp" class="form-text text-muted">
                    A name you'd want printed on a name badge.
                  </small>
                </div>
              </div>
              <div class="form-group row required">
                <div className="col-6 mx-auto">
                  <label for="email">Email address</label>
                  <input
                    name="email"
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
              </div>
              <p className="row">
                <button type="submit" className="btn btn-primary mx-auto">
                  Sign Up
                </button>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Members;
