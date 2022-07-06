import React from "react";
import { Link } from "react-router-dom";
import './home.css';

const Home = () => {
  return (
    <React.Fragment>
      <main>
        <div className="body-container flex">
          {/* Left div */}
          <div className="left-div-container h-screen bg-[#ffbfbf] w-1/2">
            <div className="left-content">
              <div className="header">
                <div className="flex-shrink-0 text-center mt-36 mb-28">
                  <Link to="/">
                    <h2 className="text-4xl text-white">RRA</h2>
                  </Link>
                </div>
              </div>
              <div className="buttons">
                <div className="sign-up mx-60">
                  <Link className="rounded-lg px-8 py-3 text-3xl font-serif font-thin bg-white text-[#063970]" to="/">
                    Sign Up
                  </Link>
                </div>
                <div className="sign-in mt-12 mx-60">
                  <Link className="rounded-lg px-10 py-3 text-3xl font-serif font-thin bg-white text-[#063970]" to="/signin">
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Right div */}
          <div className="right-div-container bg-white w-1/2">
            <div className="header">
              
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home;
