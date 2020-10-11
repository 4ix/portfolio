import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <div id="footer" className="padding-top-btm-1e">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <div>
              <span className="font-color-gray font-07">
                Copyrighted by 4ix{" "}
                <span className="font-color-yellow font-bold">@2020</span>
              </span>
              <span className="font-color-gray font-07 margin-left-1e">
                / Referenced by devseung2{" "}
                <span className="font-color-yellow font-bold">@2020</span>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
