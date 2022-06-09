import React from "react";
import "../../styles/components/utils/button.scss";

function Buttons(props) {
  console.log(props);

  switch (props.type) {
    case "more-info":
      return (
        <a href="#">
          <button className="exp-button button-infos">{props.children}</button>
        </a>
      );

    case "shop-visit":
      return (
        <a href="#">
          <button className="exp-button button-shop">{props.children}</button>
        </a>
      );

    case "discover":
      return (
        <a href="#">
          <button className="exp-button button-discover">{props.children}</button>
        </a>
      );

    default:
      return (
        <button className="exp-button button-default">{props.children}</button>
      );
  }
}

export default Buttons;
