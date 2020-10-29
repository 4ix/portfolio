import React from "react";
import "../App.scss";
import "./Skills.scss";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3,
  faHtml5,
  faJs,
  faReact,
  faNode,
  faEthereum,
  faUbuntu,
} from "@fortawesome/free-brands-svg-icons";

import {
  faCode,
  faShip,
  faEnvelope,
  faCar,
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div id="skills" className="background-color-gray padding-top-btm-5e">
      <div>
        <p className="menu-name font-color-yellow">SKILLS</p>
      </div>
      <Container>
        <Row>
          <Col xs={4} sm={3} md={2} className="padding-top-btm-05e">
            <FontAwesomeIcon icon={faHtml5} className="icon-size" />
            <p className="font-bold font-color-gray">HTML5</p>
          </Col>
          <Col xs={4} sm={3} md={2} className="padding-top-btm-05e">
            <FontAwesomeIcon icon={faCss3} className="icon-size" />
            <p className="font-bold font-color-gray">CSS3</p>
          </Col>

          <Col xs={4} sm={3} md={2} className="padding-top-btm-05e">
            <FontAwesomeIcon icon={faJs} className="icon-size" />
            <p className="font-bold font-color-gray">JavaScript</p>
          </Col>

          <Col xs={4} sm={3} md={2} className="padding-top-btm-05e">
            <FontAwesomeIcon icon={faReact} className="icon-size" />
            <p className="font-bold font-color-gray">React</p>
          </Col>

          <Col xs={4} sm={3} md={2} className="padding-top-btm-05e">
            <FontAwesomeIcon icon={faNode} className="icon-size" />
            <p className="font-bold font-color-gray">Node.js</p>
          </Col>
          <Col xs={4} sm={3} md={2} className="padding-top-btm-05e">
            <FontAwesomeIcon icon={faBootstrap} className="icon-size" />
            <p className="font-bold font-color-gray">Bootstrap</p>
          </Col>
          <Col xs={4} sm={3} md={2} className="padding-top-btm-05e">
            <FontAwesomeIcon icon={faEthereum} className="icon-size" />
            <p className="font-bold font-color-gray">Klaytn</p>
          </Col>
          <Col xs={4} sm={3} md={2} className="padding-top-btm-05e">
            <FontAwesomeIcon icon={faCode} className="icon-size" />
            <p className="font-bold font-color-gray">VS Code</p>
          </Col>
          <Col xs={4} sm={3} md={2} className="padding-top-btm-05e">
            <FontAwesomeIcon icon={faUbuntu} className="icon-size" />
            <p className="font-bold font-color-gray">Ubuntu</p>
          </Col>
          <Col xs={4} sm={3} md={2} className="padding-top-btm-05e">
            <FontAwesomeIcon icon={faShip} className="icon-size" />
            <p className="font-bold font-color-gray">Trading</p>
          </Col>
          <Col xs={4} sm={3} md={2} className="padding-top-btm-05e">
            <FontAwesomeIcon icon={faEnvelope} className="icon-size" />
            <p className="font-bold font-color-gray">Business Mail</p>
          </Col>
          <Col xs={4} sm={3} md={2} className="padding-top-btm-05e">
            <FontAwesomeIcon icon={faCar} className="icon-size" />
            <p className="font-bold font-color-gray">Driving</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
