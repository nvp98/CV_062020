import React from "react";
import "./Skills.scss";
export default function Skills() {
  return (
    <section className="skill__wrap " id="skills">
      <div className="skill col-8">
        <h3 className="title">Skills</h3>
        <div className="skill__flex ">
          <div className="col-4">
            <div className="section-box">
              <h2>Programming languages</h2>
              <ul>
                <li>JavaScript</li>
                <li>HTML,CSS</li>
              </ul>
            </div>
          </div>
          <div className="col-4">
            <div className="section-box">
              <h2>Database</h2>
              <ul>
                <li>JavaScript</li>
                <li>HTML,CSS</li>
              </ul>
            </div>
          </div>
          <div className="col-4">
            <div className="section-box">
              <h2>Others</h2>
              <ul>
                <li>JavaScript</li>
                <li>HTML,CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
