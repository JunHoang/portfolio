import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import coding from "../images/hobbies-icon/coding.jpg";
import coffee from "../images/hobbies-icon/coffee.jpg";
import music from "../images/hobbies-icon/music.gif";
import traveling from "../images/hobbies-icon/traveling.jpg";

export default function TestimonialsCarousel() {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={4000}
    >
      <div>
        <img className="rounded-circle" src={coding} alt="coding" />
        <div className="myCarousel">
          <h3>Programming</h3>
          <p>
            Long time ago, people who sacrified their sleep, family, food,
            laughter and other luxuries of life were called SAINTS. Now, they
            are called PROGRAMMERS.
          </p>
        </div>
      </div>
      {/* - */}
      <div>
        <img className="rounded-circle" src={coffee} alt="coffee" />
        <div className="myCarousel">
          <h3>Coffee</h3>
          <p>The Vodka Of Morning!</p>
        </div>
      </div>
      {/* - */}
      <div>
        <img className="rounded-circle" src={music} alt="music" />
        <div className="myCarousel">
          <h3>Music</h3>
          <p>I Don't Sing In The Shower I Perform !!!</p>
        </div>
      </div>
      {/* - */}
      <div>
        <img className="rounded-circle" src={traveling} alt="traveling" />
        <div className="myCarousel">
          <h3>Traveling</h3>
          <p>I want to make memories all over the world.</p>
        </div>
      </div>
    </Carousel>
  );
}
