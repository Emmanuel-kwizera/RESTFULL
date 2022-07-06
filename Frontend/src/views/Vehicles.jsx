import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "./table.css";

const Vehicles = () => {
  return (
    <React.Fragment>
      <Header title="Vehicles" />
        <div className="button-container mx-48 my-4 block">
          <button className="float-right h-10 w-20 bg-[#8288FF] text-white font-serif font-thin">
             Add
          </button>
        </div>
        <div className="container">
          <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-1">Chesis</div>
              <div className="col col-1">Manufacturer</div>
              <div className="col col-1">Model</div>
              <div className="col col-1">Price</div>
              <div className="col col-1">PlateNo</div>
              <div className="col col-1">Owner</div>
              <div className="col col-1">Actions</div>
            </li>
            <li className="table-row">
              <div className="col col-1" data-label="Chesis">N01B1645</div>
              <div className="col col-1" data-label="Manufacturer">Toyota</div>
              <div className="col col-1" data-label="Model">Carina</div>
              <div className="col col-1" data-label="Price">1 000$</div>
              <div className="col col-1" data-label="PlateNo">RAA 257C</div>
              <div className="col col-1" data-label="Owner">Kalisa Emmanuel</div>
              <div className="col col-1 actions" data-label="Actions"><Link to="/vehicles" className="text-[#8288FF] font-serif">Edit</Link>&emsp;<Link to="/vehicles" className="text-[#FF0000] font-serif"> Delete</Link></div>
            </li>
            <li className="table-row">
              <div className="col col-1"data-label="Chesis">N01B1645</div>
              <div className="col col-1" data-label="Manufacturer">Toyota</div>
              <div className="col col-1" data-label="Model">Carina</div>
              <div className="col col-1" data-label="Price">1 000$</div>
              <div className="col col-1" data-label="PlateNo">RAA 257C</div>
              <div className="col col-1" data-label="Owner">Kalisa Emmanuel</div>
              <div className="col col-1 actions" data-label="Actions"><Link to="/vehicles" className="text-[#8288FF] font-serif">Edit</Link>  &emsp;  <Link to="/vehicles" className="text-[#FF0000] font-serif">Delete</Link></div>
            </li>
            <li className="table-row">
              <div className="col col-1"data-label="Chesis">N01B1645</div>
              <div className="col col-1" data-label="Manufacturer">Toyota</div>
              <div className="col col-1" data-label="Model">Carina</div>
              <div className="col col-1" data-label="Price">1 000$</div>
              <div className="col col-1" data-label="PlateNo">RAA 257C</div>
              <div className="col col-1" data-label="Owner">Kalisa Emmanuel</div>
              <div className="col col-1 actions" data-label="Actions"><Link to="/vehicles" className="text-[#8288FF] font-serif">Edit</Link>  &emsp;  <Link to="/vehicles" className="text-[#FF0000] font-serif">Delete</Link></div>
            </li>
            <li className="table-row">
              <div className="col col-1"data-label="Chesis">N01B1645</div>
              <div className="col col-1" data-label="Manufacturer">Toyota</div>
              <div className="col col-1" data-label="Model">Carina</div>
              <div className="col col-1" data-label="Price">1 000$</div>
              <div className="col col-1" data-label="PlateNo">RAA 257C</div>
              <div className="col col-1" data-label="Owner">Kalisa Emmanuel</div>
              <div className="col col-1 actions" data-label="Actions"><Link to="/vehicles" className="text-[#8288FF] font-serif">Edit</Link>  &emsp;  <Link to="/vehicles" className="text-[#FF0000] font-serif">Delete</Link></div>
            </li>
            <li className="table-row">
              <div className="col col-1"data-label="Chesis">N01B1645</div>
              <div className="col col-1" data-label="Manufacturer">Toyota</div>
              <div className="col col-1" data-label="Model">Carina</div>
              <div className="col col-1" data-label="Price">1 000$</div>
              <div className="col col-1" data-label="PlateNo">RAA 257C</div>
              <div className="col col-1" data-label="Owner">Kalisa Emmanuel</div>
              <div className="col col-1 actions" data-label="Actions"><Link to="/vehicles" className="text-[#8288FF] font-serif">Edit</Link>  &emsp;  <Link to="/vehicles" className="text-[#FF0000] font-serif">Delete</Link></div>
            </li>
          </ul>
        </div> 
    </React.Fragment>
  );
};

export default Vehicles;
