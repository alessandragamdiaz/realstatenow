import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Empiza con Carmen Diaz</span>
          <span className="secondaryText">
   Subscribete para para recibir alertas de promociones
            <br />
         Encuentra tu residencia pronto
          </span>
          <button className="button" href>
       <a href='https://api.whatsapp.com/send?phone=+5491160976728'  target='_blank' >Contactanos</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
