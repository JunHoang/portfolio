import React from "react";
import { skills } from "../data/skillsData";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Image from "react-bootstrap/Image";

export default function Skills() {
  return (
    <div id="skills" className="skills">
      <h1 className="py-5">my skills</h1>

      <div className="container">
        <CardColumns>
          {skills.map((skills) => {
            return (
              <Card className="focus my-2" key={skills.title}>
                <Card.Body>
                  <Card.Title className="text-center card-title">
                    {skills.title}
                  </Card.Title>
                  <hr className="skill-line" />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skills.tech.map((techItem) => (
                      <span
                        className="item px-lg-5 px-md-2 px-4 py-2 text-left"
                        key={techItem.name}
                      >
                        <a
                          className="text-dark text-decoration-none"
                          href={techItem.link}
                          target="_blank"
                          rel="noreferrer noopener"
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
