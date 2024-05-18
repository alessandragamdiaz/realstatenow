import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Nuestra Vision es encontrar La mejor opcion  de compra o venta. <br />
            Para que usted quede satifecho con una decision  <br />
            tan importante en su vida!
     
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Informacion</span>
          <span className="secondaryText">Av.rivadavia 2775</span>
          <div className="flexCenter f-menu">
            <span>
Propiedad</span>
            <span>Servicios</span>
            <span>Productos</span>
            <span>Acerca de nosotros</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
