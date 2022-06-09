import React from "react";
import Buttons from "../utils/Button.jsx";
import "../../styles/components/section/discover.scss";
import onAdore from "../../images/onadore.png";

function Discover() {
  return (
    <div className="discover-container">
      <div>
        <p>ON ADORE !</p>
        <div className="frame-container">
          <img className="frame" src={onAdore} alt="" />
        </div>
        <p className="discover-paragraph">
          On vous aide à y voir plus clair parmi toutes ces sorties BD.
        </p>

        <div>
          <Buttons type="discover">Découvrir nos coups de coeur</Buttons>
        </div>
      </div>
    </div>
  );
}

export default Discover;
