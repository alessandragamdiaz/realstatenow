import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Nuestros contactos</span>
          <span className="primaryText">Conexion directa 24/7</span>
          <span className="secondaryText">
            Estamos siempre dispuestos para proveerle el mejor servicio a tiempo record ,
       Contestremos sus dudas y lo ayudaremos en cada pasa de su busqueda.{" "}
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Llamar</span>
                    <span className="secondaryText">1160976728</span>
                  </div>
                </div>
                <div className="flexCenter button">Llamar ahora</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Whatsapp</span>
                    <span className="secondaryText">1160976728</span>
                  </div>
                </div>
                <div className="flexCenter button"><a href='https://api.whatsapp.com/send?phone=+447378553493'  target='_blank' >Chatear</a>a</div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Facebook</span>
                    <span className="secondaryText">Diaz Rojaas</span>
                  </div>
                </div>
                <div className="flexCenter button"><a href='https://m.me/ale.gamdiaz' target='_blank'>Enviar Mensaje</a></div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Email</span>
                    <span className="secondaryText">Carmenrojas70@hotmail.com</span>
                  </div>
                </div>
                <div className="flexCenter button"><a href='mailto:carmenrojas70@hotmail.com' target='_blank'>Enviar email</a></div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
