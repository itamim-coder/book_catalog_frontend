import React from "react";
import { Link } from "react-router-dom";

function BookCard() {
  return (
    <>
      <section>
        <div className="relative mx-auto max-w-7xl ">
          <div className="grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
            <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
              <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="/images/stock/photo-1635805737707-575885ab0820.jpg"
                    alt="Movie"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">New movie is released!</h2>
                  <p>Click the button to watch on Jetflix app.</p>
                  <div className="card-actions justify-end">
                    <Link to="/details">
                      <button className="btn btn-primary">Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
              <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="/images/stock/photo-1635805737707-575885ab0820.jpg"
                    alt="Movie"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">New movie is released!</h2>
                  <p>Click the button to watch on Jetflix app.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
              <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="/images/stock/photo-1635805737707-575885ab0820.jpg"
                    alt="Movie"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">New movie is released!</h2>
                  <p>Click the button to watch on Jetflix app.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
              <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="/images/stock/photo-1635805737707-575885ab0820.jpg"
                    alt="Movie"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">New movie is released!</h2>
                  <p>Click the button to watch on Jetflix app.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookCard;
