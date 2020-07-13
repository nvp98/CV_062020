import React from "react";
import "./About.scss";

export default function About() {
  return (
    <section className="about__wrap col-12" id="about">
      <div className="about col-10">
        <h3 className="title">About me</h3>
        <div className="row__wrap col-12">
          <div className="col-8">
            <p>
              I'm a 4th year student with 6 months of experience in front-end
              Web Development, with knowledge of Object-Oriented Analysis and
              Data Structures and algorithms, Design. Learning new technologies
              and improving myself is what I like. In the work, I have ability
              to work independently and in a team.
            </p>
          </div>
          <div className="col-4">
            <p>
              I usually read IT blogs, Medium, and Quora in my free time. This
              helps research new technologies and learn from experienced people.
              In my free time, I also work on some persional projects. They can
              be found at my online CV cv.toidicodedao.com and my GitHub profile
              https://github.com/conanak99
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
