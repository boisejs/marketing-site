import React, { useState } from "react";
import { Link } from "gatsby";

const Navi = ({ showSearch }) => {
  const [mobileNavShown, setMobileNavShown] = useState(false);
  const [show, ariaExpanded] = mobileNavShown
    ? ["show", "false"]
    : ["", "true"];

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <span style={{ paddingBottom: "0.1875rem" }}>
        <Link
          class="navbar-brand"
          to="/"
          activeClassName="navbar-brand text-primary"
        >
          Boise.JS
        </Link>
      </span>
      <button
        class="navbar-toggler"
        onClick={() => setMobileNavShown(!mobileNavShown)}
        type="button"
        data-toggle="collapse"
        data-target="#header-nav"
        aria-controls="header-nav"
        aria-expanded={ariaExpanded}
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="header-nav" class={`collapse ${show} navbar-collapse`}>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link
              class="nav-link"
              to="/events"
              activeClassName="nav-link text-primary"
            >
              Events
            </Link>
          </li>
          <li class="nav-item">
            <Link
              class="nav-link"
              to="/about"
              activeClassName="nav-link text-primary"
            >
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link
              class="nav-link"
              to="/members"
              activeClassName="nav-link text-primary"
            >
              Members
            </Link>
          </li>
        </ul>
        {showSearch && (
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        )}
      </div>
    </nav>
  );
};

export default Navi;
