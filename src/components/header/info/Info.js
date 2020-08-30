import React from "react";
import "./Info.scss";
export default function Info() {
  return (
    <div className="header--info">
      <h2>Hello</h2>
      <p>I'm Phuoc Nguyen</p>
      <h6>Web Front-End Developer</h6>
      <div className="header__info--address">
        <p>
          D.O.B <span>25-07-1998</span>
        </p>
        <p>
          PHONE <span>0368149497</span>
        </p>
        <p>
          ADDRESS <span>Go Vap District, Ho Chi Minh City</span>
        </p>
        <p>
          E-MAIL <span>vinhphuoc1892@gmail.com</span>
        </p>
        <p>
          WEBSITE{" "}
          <span>
            <a href="https://nguyenvinhphuoc.herokuapp.com/">
              https://nguyenvinhphuoc.herokuapp.com
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
