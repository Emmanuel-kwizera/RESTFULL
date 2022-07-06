import React, { useState } from "react";
import { registerAdmin } from "../Api/auth";
import { Link } from "react-router-dom";
import './styles.css';

const Home = () => {
  const [admin, setAdmin] = useState({
    names: "",
    email: "",
    phone: "",
    nationalId: "",
    password: "",
  });
  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
    console.log(e.target.name);
  }
  useState(() => {
    registerAdmin(admin);
  })
  // const signUp= () => {
  //   console.log("Sign Up");
  // }

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
            <div className="header">
              <div className="heading font-serif pt-14 pb-6 px-52">Welcome! Sign Up</div>
            </div>
            <div className="right-div">
              <form>
                <input 
                  onChange={(e) => handleChange(e.target)} name={admin.names} type="text" placeholder="Names" />
                <input 
                  onChange={(e) => handleChange(e.target)} name={admin.email} type="email" placeholder="Email" />
                <input 
                  onChange={(e) => handleChange(e.target)} name={admin.phone} type="number" placeholder="Phone Number" />
                <input 
                  onChange={(e) => handleChange(e.target)} name={admin.nationalId} type="number" placeholder="NationalID" />
                <input 
                  onChange={(e) => handleChange(e.target)} name={admin.password} type="password" placeholder="Password"/>
                <button className="button font-serif font-thin">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home;
