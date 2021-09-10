import React from "react";
import { Link } from "react-router-dom";

import "./HomePage.css";

import HomeNav from "./HomeNav";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <HomeNav />
      <main>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">CRM Application</h1>
            <p className="col-md-8 fs-5">
              Customer relationship management (CRM) is a process in which a
              business or other organization administers its interactions with
              customers, typically using data analysis to study large amounts of
              information.
            </p>
            <p>
              <a
                className="btn btn-primary btn-lg"
                href="https://en.wikipedia.org/wiki/Customer_relationship_management"
                role="button"
                target="_blank"
              >
                Learn more »
              </a>
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>Heading</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.{" "}
              </p>
            </div>
            <div className="col-md-4">
              <h2>Heading</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.{" "}
              </p>
            </div>
            <div className="col-md-4">
              <h2>Heading</h2>
              <p>
                Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Vestibulum id ligula porta felis euismod
                semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
