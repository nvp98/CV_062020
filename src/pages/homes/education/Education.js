import React from "react";
import "./Education.scss";
export default function Education() {
  return (
    <section className="education__wrap" id="education">
      <div className="education col-10">
        <h3 className="title">Education</h3>
        <div className="row__wrap work__info">
          <div className="col-6 work_right">
            <h5>Ho Chi Minh University Technology and Education</h5>
            <p>Studying Computer Engineering Technology</p>
            <p>GPA 68%</p>
          </div>
          <div className="col-6 work__left">
            <h4>9/2016 - 8/2020</h4>
          </div>
        </div>
        <div className="row__wrap work__info">
          <div className="col-6 work_right">
            <h5>Learning Web development online</h5>
            <p>
              I have learned about online web Front-End and read docs from
              website such as W3school, reactjs.org, freecodecamp, ...
            </p>
          </div>
          <div className="col-6 work__left">
            <h4>2019-2020</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
