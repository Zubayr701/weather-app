import React from "react";
import "./Sidebar.css";
import Left from "../Left/Left";
import Right from "../Right/Right";

export default function SideBar({ currentWeather, forecast, air }) {

  return (
    <div className="sidebar">
      <div className="container">
        <div className="sidebar__inner">
          <Left currentWeather={currentWeather} forecast={forecast} />
          <Right forecast={forecast} currentWeather={currentWeather} air={air} />
        </div>
      </div>
    </div>
  );
}