import React from "react";
import "../App.scss";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div id="contact" className="background-color-gray padding-top-btm-5e">
      <div>
        <p className="menu-name font-color-yellow">CONTACT</p>
      </div>
      <Container>
        <Row>
          <Col xs={4} sm={4} md={4} className="padding-top-btm-05e">
            <FontAwesomeIcon icon={faEnvelope} className="icon-size" />
            <p className="font-bold font-1H font-color-bl">Email</p>
            <p className="font-bold font-color-lightgray">
              jinjihoon@gmail.com
            </p>
          </Col>
          <Col xs={4} sm={4} md={4} className="padding-top-btm-05e">
            <FontAwesomeIcon icon={faCommentDots} className="icon-size" />
            <p className="font-bold font-1H font-color-bl">KakaoTalk</p>
            <p className="font-bold font-color-lightgray">jinmilton</p>
          </Col>
          <Col xs={4} sm={4} md={4} className="padding-top-btm-05e">
            <a href="https://github.com/4ix" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="icon-size icon-color"
              />
              <p className="font-bold font-1H font-color-bl">Github</p>
              <p className="font-bold font-color-lightgray">
                https://github.com/4ix
              </p>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
