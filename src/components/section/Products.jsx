import React from "react";
import "../../styles/components/section/products.scss";
import Caroussel from "../utils/Caroussel";

function Products() {
  return (
    <>
      <div className="products-section-container">
        <div>
          <h4>Découvrez nos produits</h4>
          <p className="primary">
            Le plus grand choix d’affiches BD de la région, un large rayon Para
            BD approvisionné par la licence Moulinsart et la maison Tsume, et
            bien d’autres choses encore !
          </p>
        </div>
        <a href="#">Accéder à la boutique</a>
      </div>
      <Caroussel/>
    
    </>
  );
}

export default Products;
