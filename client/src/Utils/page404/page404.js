import React from "react";
import "./page404.css";

export default function page404 () {
  return (
    <div>
      <body className="bg-purple">
        <div className="stars">
          {/* <div className="custom-navbar">
            <div className="brand-logo">
              <img
                src="http://salehriaz.com/404Page/img/logo.svg"
                width="80px"
                alt="logo"
              />
            </div>
            <div className="navbar-links">
              <ul>
                <li>
                  <a
                    href="http://salehriaz.com/404Page/404.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="http://salehriaz.com/404Page/404.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="http://salehriaz.com/404Page/404.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="http://salehriaz.com/404Page/404.html"
                    className="btn-request"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Request A Demo
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="central-body">
            <img
              className="image-404"
              src="http://salehriaz.com/404Page/img/404.svg"
              width="300px"
                alt="404"
            />
            <a
              href="/"
              className="btn-go-home"
            >
              GO BACK HOME
            </a>
          </div>
          <div className="objects">
            <img
              className="object_rocket"
              src="http://salehriaz.com/404Page/img/rocket.svg"
              width="40px"
              alt="a flying rocket"
            />
            <div className="earth-moon">
              <img
                className="object_earth"
                src="http://salehriaz.com/404Page/img/earth.svg"
                width="100px"
                alt="a flying earth"
              />
              <img
                className="object_moon"
                src="http://salehriaz.com/404Page/img/moon.svg"
                width="80px"
                alt="a flying moon"
              />
            </div>
            <div className="box_astronaut">
              <img
                className="object_astronaut"
                src="http://salehriaz.com/404Page/img/astronaut.svg"
                width="140px"
                alt="a floating astronaut"
              />
            </div>
          </div>
          <div className="glowing_stars">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
          </div>
        </div>
      </body>
    </div>
  );
}
