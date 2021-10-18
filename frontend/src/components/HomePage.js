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
        <div className="container testimonial pb-sm-5">
          <h2 className="text-center pb-4">Testimonials</h2>
          <div className="row text-center">
            <div className="col-lg-4 mb-3">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                className="rounded-circle"
                width="110"
                height="110"
                title="Customer"
                alt="Customer"
              />
              <h4 className="py-2">Customer 1</h4>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh.
              </p>
            </div>
            <div className="col-lg-4 mb-3">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                className="rounded-circle"
                width="110"
                height="110"
                title="Customer"
                alt="Customer"
              />
              <h4 className="py-2">Customer 2</h4>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh.
              </p>
            </div>
            <div className="col-lg-4 mb-3">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar5.png"
                className="rounded-circle"
                width="110"
                height="110"
                title="Customer"
                alt="Customer"
              />
              <h4 className="py-2">Customer 3</h4>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh.
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
