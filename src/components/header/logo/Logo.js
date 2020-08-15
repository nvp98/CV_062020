import React from "react";
import "./Logo.scss";
import logo from "../../../assets/img/me1.jpg";
export default function Logo() {
  return (
    <div className="header--logo">
      <img src={logo} alt="" />
    </div>
  );
}
