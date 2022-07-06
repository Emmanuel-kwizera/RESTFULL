import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "./table.css";

const Vehicles = () => {
  return (
    <React.Fragment>
      <Header title="Vehicles" />
      <main>

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
              <div className="col col-1">N01B1645</div>
              <div className="col col-1">Toyota</div>
              <div className="col col-1">Carina</div>
              <div className="col col-1">1 000$</div>
              <div className="col col-1">RAA 257C</div>
              <div className="col col-1">Kalisa</div>
              <div className="col col-1"><Link to="/vehicles" className="text-[#8288FF] font-serif">Edit</Link> | <Link to="/vehicles" className="text-[#FF0000] font-serif">Delete</Link></div>
            </li>
            <li className="table-row">
              <div className="col col-1">N01B1645</div>
              <div className="col col-1">Toyota</div>
              <div className="col col-1">Carina</div>
              <div className="col col-1">1 000$</div>
              <div className="col col-1">RAA 257C</div>
              <div className="col col-1">Kalisa</div>
              <div className="col col-1"><Link className="text-[#8288FF] font-serif">Edit</Link> | <Link to="/vehicles" className="text-[#FF0000] font-serif">Delete</Link></div>
            </li>
            <li className="table-row">
              <div className="col col-1">N01B1645</div>
              <div className="col col-1">Toyota</div>
              <div className="col col-1">Carina</div>
              <div className="col col-1">1 000$</div>
              <div className="col col-1">RAA 257C</div>
              <div className="col col-1">Kalisa</div>
              <div className="col col-1"><Link className="text-[#8288FF] font-serif">Edit</Link> | <Link to="/vehicles" className="text-[#FF0000] font-serif">Delete</Link></div>
            </li>
            <li className="table-row">
              <div className="col col-1">N01B1645</div>
              <div className="col col-1">Toyota</div>
              <div className="col col-1">Carina</div>
              <div className="col col-1">1 000$</div>
              <div className="col col-1">RAA 257C</div>
              <div className="col col-1">Kalisa</div>
              <div className="col col-1"><Link className="text-[#8288FF] font-serif">Edit</Link> | <Link to="/vehicles" className="text-[#FF0000] font-serif">Delete</Link></div>
            </li>
          </ul>
        </div>          
      </main>
    </React.Fragment>
  );
};

export default Vehicles;
