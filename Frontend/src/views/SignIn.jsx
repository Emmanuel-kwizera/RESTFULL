import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './styles.css';

const SignIn = () => {
    
  return (
    <React.Fragment>
      <main>
        <div className="body-container flex">
          {/* Left div */}
          <div className="lg:left-div-container lg:h-screen lg:bg-[#ffbfbf] lg:w-1/2 xl:left-div-container xl:h-screen xl:bg-[#ffbfbf] xl:w-1/2 ">
            <div className="left-content">
              <div className="header">
                <div className="flex-shrink-0 text-center mt-36 mb-20">
                  <Link to="/">
                    <h2 className="text-4xl text-white">RRA</h2>
                  </Link>
                </div>
              </div>
              <div className="buttons">
                <div className="sign-up mx-56">
                  <Link className="rounded-lg px-12 py-2 text-2xl font-serif font-thin bg-white text-[#8288ff]" to="/">
                    Sign Up
                  </Link>
                </div>
                <div className="sign-in mt-12 mx-56">
                  <Link className="rounded-lg px-14 py-2 text-2xl font-serif font-thin bg-white text-[#8288ff]" to="/signin">
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Right div */}
          <div className="right-div-container w-1/2 text-black">
            <div className="right-div my-24">
                <div className="header">
                <div className="heading font-serif pt-14 pb-6 px-48">Welcome Again ! Sign Up</div>
                </div>
                <div className="right-div">
                <form>
                    <input name="Email" type="email" placeholder="Email" className="mb-12 focus:mb-12"/>
                    <input name="password" type="password" placeholder="Password" className="mb-14 focus:mb-14"/>
                    <button className="button font-serif font-thin">Log In</button>
                </form>
                </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default SignIn;

