import React from "react";
import Layout from "components/layout";

const About = ({ data, location }) => {
  return (
    <Layout location={location}>
      <div className="jumbotron">
        <div className="container">
          <div className="row"></div>
          <h1 className="heading-1 text-primary">About</h1>
          <br />
          <p>
            <h3 className="title-3">
              Mission:{" "}
              <small className="text-muted">
                Bring JavaScript developers from across the Treasure Valley
                together to create a united and self-enriching community for
                networking, exploration, and continued education.
              </small>
            </h3>
          </p>
          <p>
            <h3 className="title-3">
              Audience:{" "}
              <small className="text-muted">
                JavaScript enthusiasts of all skill levels: curious newcomers,
                high school hackers, after hours hobbyists, and professionals
                from across the industry are welcome.
              </small>
            </h3>
          </p>

          <p>
            <h3 className="title-3">
              Event Format:{" "}
              <small className="text-muted">
                A monthly two-hour social event split between
                networking/socialising and two educational presentations (20
                minute talks with 10 minutes of Q&A).
              </small>
            </h3>
          </p>
        </div>
      </div>
      <div className="container">
        <h2 className="title-2 text-primary">Get involved!</h2>
        <br />
        <p>
          <h3 className="title-3">
            Socializing:{" "}
            <small className="text-muted">
              Each event will feature light faire and a pony keg of beer (must
              be 21 with ID to drink). The event will begin with 30 minutes of
              unstructured social time to allow attendees a chance to eat and
              drink before presentations begin. After presentations are complete
              another 30 minutes are given to mingle, discuss the night’s
              presentations, and finish the beer.
            </small>
          </h3>
        </p>

        <p>
          <h3 className="title-3">
            Presenters:{" "}
            <small className="text-muted">
              Presentations will be sourced from the community, and both
              professional and hobby developers may submit presentations.
              Presenters should bring their own laptop to present from and be
              prepared to speak authoritatively and answer detailed questions
              about their topic in a group setting.
            </small>
          </h3>
        </p>

        <p>
          <h3 className="title-3">
            Presentation Guidelines:{" "}
            <small className="text-muted">
              Presentations will be prioritized based on their relevance to
              current industry best practices. Proposed presentation outlines
              should be submitted to event organizers via email no later than 1
              week before the event. All presentations should include a visual
              component or demonstration (not required at time of submission).
              Presentations should not include content which is offensive, off
              topic, illegal, or protected by the rights of employers or other
              interested parties.
            </small>
          </h3>
        </p>

        <p>
          <h3 className="title-3">
            Resources & Information:{" "}
            <small className="text-muted">
              All event details will be managed through and available via
              boisejs.com. Upcoming events, past presentation content, shareable
              links, and printable advertising materials will be available
              there.
            </small>
          </h3>
        </p>
      </div>
    </Layout>
  );
};

export default About;
