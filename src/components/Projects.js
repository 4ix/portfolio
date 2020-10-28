import React from "react";
import "../App.scss";
import { Container, Row, Col, UncontrolledCarousel } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faCode,
  faCheck,
  faUsers,
  faCalendarAlt,
  faFilePdf,
  faFile,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const carousel_heartlink = [
  {
    src: "./img/heartlink1.png",
  },
  {
    src: "./img/heartlink2.png",
  },
  {
    src: "./img/heartlink3.png",
  },
  {
    src: "./img/heartlink4.png",
  },
  {
    src: "./img/heartlink5.png",
  },
];

const carousel_yakiyo = [
  {
    src: "./img/yakiyo1.png",
  },
  {
    src: "./img/yakiyo2.png",
  },
  {
    src: "./img/yakiyo3.png",
  },
  {
    src: "./img/yakiyo4.png",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="padding-top-btm-5e">
      <div>
        <p className="menu-name font-color-yellow">PROJECTS</p>
      </div>
      <Container>
        <Row>
          {/* 프로젝트 1번 포트폴리오 */}
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <div>
              <p className="font-bold-900 font-2">하트링크(heartlink)</p>
              <p className="font-color-lightgray font-bold">
                기획의도 : 블록체인 기반 크라우드 소싱 마케팅 플랫폼 구축
              </p>
              <span className="padding-left-right-1e keyword-yellow">
                2020 경기도 온라인 블록체인 해커톤 장려상 수상
              </span>
              <div className="padding-top-btm-1e">
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">4명</span>
                  <span className="keyword-gray margin-left-right-03e">
                    기여도 <span className="font-red">50</span> %
                  </span>
                </p>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">
                    2020.08.11 - 2020. 10. 26
                  </span>
                </p>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCode}
                    className="icon-size-1e icon-color"
                  />
                  <span className="keyword-yellow margin-left-1e margin-right-03e">
                    HTML5
                  </span>
                  <span className="keyword-yellow margin-left-right-03e">
                    CSS3
                  </span>
                  <span className="keyword-yellow margin-left-right-03e">
                    React
                  </span>
                </p>
                <p className="font-bold">
                  <span className="keyword-yellow">Klaytn</span>
                  <span className="keyword-yellow margin-left-right-03e">
                    Node.js
                  </span>
                  <span className="keyword-yellow margin-left-right-03e">
                    MongoDB
                  </span>
                </p>
              </div>
              <div>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="icon-size-1e icon-color"
                  />
                  <span className="keyword-gray margin-left-1e margin-right-03e">
                    기획
                  </span>
                  <span className="keyword-gray margin-left-right-03e">
                    디자인
                  </span>
                  <span className="keyword-gray margin-left-right-03e">
                    개발
                  </span>
                </p>
              </div>
              <div className="padding-top-1e">
                <a href="https://github.com/hammer-kaytn" target="_blank">
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="icon-size-2e icon-color"
                  />
                </a>
                <a
                  href="https://drive.google.com/file/d/12q5NV35LjoayZaPnKjQTTN0GfK-HvODW/view?usp=sharing"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faFilePdf}
                    className="icon-size-2e icon-color margin-left-1e"
                  />
                </a>
                <a
                  href="https://drive.google.com/file/d/1P8vjrTKvQly_kdFVGY-5aBVrju1oRz80/view?usp=sharing"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faVideo}
                    className="icon-size-2e icon-color margin-left-1e"
                  />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <UncontrolledCarousel items={carousel_heartlink} />
          </Col>
        </Row>

        <div className="bottom-line"></div>

        {/* 프로젝트 2번 블로그페이지 */}
        <Row>
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <UncontrolledCarousel items={carousel_yakiyo} />
          </Col>
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <div>
              <p className="font-bold-900 font-2">약이요(yakiyo)</p>
              <p className="font-color-lightgray font-bold">
                기획의도 : 비대면 처방전 전송 시스템 구축
              </p>
              <div className="padding-top-btm-1e">
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">5명</span>
                  <span className="keyword-gray margin-left-right-03e">
                    기여도 <span className="font-red">20</span> %
                  </span>
                </p>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">
                    2020.07.07 - 2020.08.06 (4주)
                  </span>
                </p>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCode}
                    className="icon-size-1e icon-color"
                  />
                  <span className="keyword-yellow margin-left-1e margin-right-03e">
                    HTML5
                  </span>
                  <span className="keyword-yellow margin-left-right-03e">
                    React
                  </span>
                  <span className="keyword-yellow margin-left-right-03e">
                    MongoDB
                  </span>
                </p>
              </div>
              <div>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="icon-size-1e icon-color"
                  />
                  <span className="keyword-gray margin-left-1e margin-right-03e">
                    기획
                  </span>
                  <span className="keyword-gray margin-left-right-03e">
                    개발
                  </span>
                </p>
              </div>
              <div className="padding-top-1e">
                <a href="https://github.com/purple-chain" target="_blank">
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="icon-size-2e icon-color"
                  />
                </a>
                <a
                  href="https://www.notion.so/yakiyo-6fffa5abc24c4d72b19de4b752971b67"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faFile}
                    className="icon-size-2e icon-color margin-left-1e"
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
