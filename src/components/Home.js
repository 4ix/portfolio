import React from "react";
import "./Home.scss";
import { Container, Row, Col } from "reactstrap";

const Home = () => {
  return (
    <div id="home">
      <Container className="home-container">
        <Row>
          <Col xs={12} sm={12} md={12}>
            <div className="title">
              <div className="font-bold">
                안녕하세요. 블록체인 기획 및 개발자를 꿈꾸는
                <span className="font-color-yellow"> 진지훈</span>의
              </div>
              <div className="font-bold">개인 포트폴리오 사이트입니다.</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
