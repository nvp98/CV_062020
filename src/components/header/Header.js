import React from "react";
import Logo from "./logo/Logo";
import Info from "./info/Info";
import "./Header.scss";
export default function Header() {
  return (
    <section className="header__wrapper">
      <div className="header">
        <Logo />
        <Info />
      </div>
    </section>
  );
}
