import React from "react";
import author from "../images/me.jpeg";

function AboutMe() {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-5 col-sm-12">
          <div className="photo-wrap">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-7 col-sm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Hello! I am Dung Hoang. I am a 3rd year IT student at South-Eastern
            Finland University of Applied Sciences - XAMK. My background has
            prepared me to excel in a programming capacity, enabling me to
            evaluate knowledge and experience in web development. My core
            expertise is understanding Javascript framework (especially React),
            using Webpack and familiar with Typescript to develop a website.
            Besides that, I have done some projects about REST APIs using Nodejs
            and Mongodb. Therefore, I can understand how a website operates, how
            to connect the front-end to the server, and how to decorate the
            website by using CSS. Moreover, using Git is one of my exciting
            hobbies to ensure the safety of the projects. Over the past few
            years, university projects have greatly developed my teamwork
            skills, but I am also skilled in completing tasks that require
            working responsibly and independently. In addition, doing projects
            gave me experience and confidence to work in a dynamic environment,
            to solve the problems and fully contribute to the team to make the
            best possible products.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
