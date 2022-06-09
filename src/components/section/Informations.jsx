import React from "react";
import "../../styles/components/section/informations.scss";
import Apropos from "../../images/apropos.png";
import Buttons from "../utils/Button.jsx";

function Informations() {
  return (
    <>
      <div className="info-shop-container">
        <div className="info-image-container">
          <img src={Apropos} alt="" />
        </div>
        <div className="info-wrapper">
          <div className="info-container">
            <h4>100% indépendante depuis 1973 ! </h4>
            <p className="primary">
              Expérience c’est avant tout une équipe, quatre libraires amoureux
              de la BD prêts à partager avec vous leurs plus belles lectures !
              C’est aussi un lieu atypique où les plafonds sont recouverts de
              centaines de dédicaces.
            </p>
            <p className="primary">
              On allait oublier ! Expérience c’est aussi un atelier de
              sérigraphie où nous fabriquons nos propres productions.
            </p>
            <div>
              <Buttons type="more-info">En savoir plus</Buttons>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Informations;
