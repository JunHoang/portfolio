import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { skills } from "../data/skillsData";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Skills() {
  return (
    // <div id="skills" className="skills">
    //   <h1 className="py-5">my skills</h1>
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-6 col-md-6">
    //         <div className="box">
    //           <div className="circle">
    //             <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
    //           </div>
    //           <h3>Web Design</h3>
    //           <p>
    //             I approach each project individually and always focus on the
    //             result.
    //           </p>
    //         </div>
    //       </div>
    //       {/* - */}
    //       <div className="col-lg-6 col-md-6">
    //         <div className="box">
    //           <div className="circle">
    //             <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
    //           </div>
    //           <h3>Web Development</h3>
    //           <p>Your website will be build with a new proven technologies.</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div id="skills" className="skills">
      <h1 className="py-5">my skills</h1>

      <div className="container">
        <CardColumns>
          {skills.map((skills) => {
            return (
              <Card className="focus my-2">
                <Card.Body>
                  <Card.Title className="text-center card-title">
                    {skills.title}
                  </Card.Title>
                  <hr className="skill-line" />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skills.tech.map((techItem) => (
                      <span
                        className="px-lg-5 px-md-2 px-4 py-2 text-left"
                        key={techItem.name}
                      >
                        <a
                          className="text-dark text-decoration-none"
                          href={techItem.link}
                          target="_blank"
                        >
                          <Image
                            src={techItem.imgSrc}
                            alt={techItem.imgAltText}
                            rounded
                            className="image-item m-1"
                          ></Image>
                          {techItem.name}
                        </a>
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </div>
    </div>
  );
}
