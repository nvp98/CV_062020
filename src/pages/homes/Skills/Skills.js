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
              <h2>Frameworks/ Platforms</h2>
              <ul>
                <li>ReactJS, Redux</li>
                <li>NodeJS, Express, SocketIO</li>
                <li>JSX, ES6</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
          <div className="col-4">
            <div className="section-box">
              <h2>Others</h2>
              <ul>
                <li>Git, SVN</li>
                <li>Used to use NodeJS and ReactJS to build basic project</li>
                <li>Teamwork</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
