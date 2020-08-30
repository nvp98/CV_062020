import React from "react";
import "./Exp.scss";

export default function Exp() {
  return (
    <section className="experience__wrap" id="experience">
      <div className="experience col-10">
        <h3 className="title">Work Experience</h3>
        <div className="row__wrap work__info">
          <div className="col-6 work__left">
            <h4>2018-2019</h4>
          </div>
          <div className="col-6 work_right">
            <h5>DHS CO.,LTD</h5>
            <p>Practice and become familiar with the working environment</p>
            <p>Learn experiences from leaders and team members</p>
          </div>
        </div>
        <div className="row__wrap work__info">
          <div className="col-6 work__left">
            <h4>03/2020-08/2020</h4>
          </div>
          <div className="col-6 work_right">
            <h5>Renesas Design Vietnam Co., Ltd</h5>
            <p>
              Building, testing products through strict packaging process.
              Devices are built and maintained on V model
            </p>
            <p>Join the project of team</p>
            <p>Implement Run test case and Debug</p>
          </div>
        </div>
        <div className="row__wrap work__info">
          <div className="col-6 work__left">
            <h4>04/2020 – 06/2020</h4>
          </div>
          <div className="col-6 work_right">
            <h5>Project Learning Online (self-study team)</h5>
            <p>Participate in rewriting the homepage</p>
            <p>Discuss with other members to resolve the issues</p>
          </div>
        </div>
      </div>
    </section>
  );
}
