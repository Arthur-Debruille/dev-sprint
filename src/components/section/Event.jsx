import React from "react";
import "../../styles/components/section/event.scss";
import Buttons from "../utils/Button.jsx";
import EventCard from "../EventCard";
import imgEvent from "../../images/event.png";

function Event() {
  return (
    <>
      <div className="event-container">
        <div className="event">
          <div className="all-event-container">
            <h4 className="h4-event-title">Demandez le programme</h4>
            <p className="event-info">
              À la librairie, on adore faire rencontrer lecteurs et auteurs.
              Entre dédicaces, festivals, soirées à l’atelier de sérigraphies…
              nos événements sont nombreux et réguliers
            </p>
            <div className="button-event">
              <Buttons type="shop">Tous nos événements</Buttons>
            </div>
          </div>

          <div className="event-soon-container">
            <EventCard
              img={imgEvent}
              title={"Priscilla et les enfants d'abord !"}
              date={"01/01/2022"}
            />
            <EventCard
              img={imgEvent}
              title={"Priscilla et les enfants d'abord !"}
              date={"01/01/2022"}
            />
            <EventCard
              img={imgEvent}
              title={"Priscilla et les enfants d'abord !"}
              date={"01/01/2022"}
            />
          </div>
        </div>
      </div>
      <div className="slider-event-arrows">
        <svg
          width="74"
          height="32"
          viewBox="0 0 74 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="57.5996" cy="16" r="16" fill="#1D1D1D" />
          <circle cx="16" cy="16" r="16" fill="#FFF5E5" />
          <path
            d="M16.0004 22.4L17.1284 21.272L12.6644 16.8L22.4004 16.8L22.4004 15.2L12.6644 15.2L17.1364 10.736L16.0004 9.59998L9.60039 16L16.0004 22.4Z"
            fill="#1D1D1D"
          />
          <path
            d="M57.6002 9.60002L56.4722 10.728L60.9362 15.2L51.2002 15.2L51.2002 16.8L60.9362 16.8L56.4642 21.264L57.6002 22.4L64.0002 16L57.6002 9.60002Z"
            fill="#FFF5E5"
          />
        </svg>
      </div>
    </>
  );
}

export default Event;
