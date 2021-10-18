import React from "react";
import { Link } from "react-router-dom";

import "./NotFound.css";

function NotFound() {
  return (
    <div id="layoutError">
      <div id="layoutError_content">
        <main>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <div class="text-center mt-4">
                  <img
                    class="mb-4 img-error"
                    src="./error-404-monochrome.svg"
                  />

                  <p class="lead">
                    This requested URL was not found on this server.
                  </p>
                  <Link to="/">Return to Home</Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default NotFound;
