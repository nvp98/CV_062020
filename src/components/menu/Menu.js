import React from "react";
import "./Menu.scss";

export default function Menu() {
  function chec() {
    document.getElementById("repo_menu").checked = true;
  }
  return (
    <section className="menu__wrap">
      <input type="checkbox" id="repo_menu"></input>
      <label for="repo_menu">Menu</label>
      <div className="menu">
        <ul>
          <li>
            <a href="#about" onClick={chec}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={chec}>
              Experience
            </a>
          </li>
          <li>
            <a href="#education" onClick={chec}>
              Education
            </a>
          </li>
          <li>
            <a href="#skills" onClick={chec}>
              Skills
            </a>
          </li>
          {/* <li>
            <a href="#projects" onClick={chec}>
              My projects
            </a>
          </li> */}
          <li>
            <a href="#contact" onClick={chec}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
