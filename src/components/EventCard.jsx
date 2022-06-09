import React from "react";
import "../styles/components/eventCard.scss";

function EventCard(props) {
  return (
    <>
      <div className="event-card">
        <div className="event-soon-info">
          <div className="event-image-container">
            <img className="event-image" src={props.img} alt="" />
          </div>
        </div>
        <div className="event-info-container">
          <h4 className="event-title">{props.title}</h4>
          <p className="event-date">{props.date}</p>
        </div>
      </div>
    </>
  );
}

export default EventCard;
