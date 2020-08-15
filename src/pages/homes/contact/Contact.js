import React from "react";
import "./Contact.scss";
import iconfb from "../../../assets/img/facebook.svg";
import iconmail from "../../../assets/img/mail.svg";
import iconagenda from "../../../assets/img/cellphone.svg";
import iconin from "../../../assets/img/linkedin.svg";
import iconattach from "../../../assets/img/attach.svg";
import iconinternet from "../../../assets/img/internet.svg";
export default function Contact() {
  return (
    <section className="contact__wrap" id="contact">
      <div className="contact col-10">
        <h3 className="title">Contact</h3>
        <div className="content">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3918.4886287957393!2d106.64717405020096!3d10.850391242233442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s237%20pham%20van%20chieu!5e0!3m2!1svi!2s!4v1594571744808!5m2!1svi!2s"
            width={600}
            height={450}
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          />
          <div className="content__right">
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  viewBox="0 0 24 24"
                  width="30"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <h6>vinhphuoc1892@gmail.com</h6>
              </li>
              <li>
                <img src={iconfb}></img>
                <span>
                  <a href="https://www.facebook.com/phuoc.nguyen.79827803">
                    Facebook
                  </a>
                </span>
              </li>
              <li>
                <img src={iconagenda}></img>
                <h6>0368149497</h6>
              </li>
              <li>
                <img src={iconin}></img>
                <span>
                  <a href="https://www.linkedin.com/in/kop-the-923107171/">
                    Linkedin
                  </a>
                </span>
              </li>
              <li>
                <img src={iconinternet}></img>
                <h6>vinhphuoc1892@gmail.com</h6>
              </li>
              <li>
                <img src={iconattach}></img>
                <span>
                  <a href="https://github.com/vinhphuoc1892">GitHub</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
