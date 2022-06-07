import React from "react";
import "../../styles/components/caroussel.scss";
import ProductsCards from "../ProductsCards";

import img1 from "../../images/1.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";
import img4 from "../../images/4.png";
import img5 from "../../images/5.png";

function Caroussel() {
  return (
    <>
      <div className="slider-container">
        <ProductsCards img={img1} />
        <ProductsCards img={img2} />
        <ProductsCards img={img3} />
        <ProductsCards img={img4} />
        <ProductsCards img={img5} />
      </div>

      <div className="arrows">
        <div>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#1D1D1D" />
            <path
              d="M20 28L21.41 26.59L15.83 21L28 21L28 19L15.83 19L21.42 13.42L20 12L12 20L20 28Z"
              fill="#FFF5E5"
            />
          </svg>
        </div>
        <div>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#1D1D1D" />
            <path
              d="M20 12L18.59 13.41L24.17 19L12 19L12 21L24.17 21L18.58 26.58L20 28L28 20L20 12Z"
              fill="#FFF5E5"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Caroussel;
