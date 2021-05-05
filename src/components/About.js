import React from "react";
import "../App.scss";
import "./About.scss";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUniversity,
  faBuilding,
  faUserGraduate,
  faCertificate,
  faCar,
  faDesktop,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div id="about" className="padding-top-btm-5e">
      <div>
        <p className="menu-name font-color-yellow">ABOUT</p>
      </div>
      <Container>
        {/* profile */}
        <Row>
          <Col xs={12} sm={6} md={6} className="background-color-gray">
            <div className="padding-top-2e">
              <p className="font-bold-900 font-1H font-color-bl">PROFILE</p>
            </div>
            <img src="./img/profile2.jpg" alt="프로필 사진" id="profile-img" />
            <div>
              <span>항상 새로운 것에 도전하려고 하는</span>
              <p className="font-bold-700 font-1H font-color-lightgray">
                <span className="padding-left-right-05e">진지훈</span>입니다.
              </p>
            </div>
          </Col>

          <Col xs={12} sm={6} md={6}>
            <div className="padding-top-2e">
              <div>
                <p className="font-bold-900 font-1H font-color-bl align-left">
                  EDUCATION
                </p>
              </div>
              <div>
                <p className="font-color-lightgray font-bold-700 align-left">
                  <FontAwesomeIcon
                    icon={faUserGraduate}
                    className="icon-size-1e icon-color align-left"
                  />
                  <span className="padding-left-right-1e">2014.08</span>
                  <span className="padding-left-right-1e">
                    서울시립대학교 영어영문학과/경영학부 졸업
                  </span>
                </p>
                <p className="font-color-lightgray font-bold-700 align-left">
                  <FontAwesomeIcon
                    icon={faUniversity}
                    className="icon-size-1e icon-color align-left"
                  />
                  <span className="padding-left-right-1e">
                    2015.08 ~ 2016.02
                  </span>
                  <span className="padding-left-right-1e">
                    무역아카데미 무역마스터 과정 수료
                  </span>
                </p>
                <p className="font-color-lightgray font-bold-700 align-left">
                  <FontAwesomeIcon
                    icon={faUniversity}
                    className="icon-size-1e icon-color align-left"
                  />
                  <span className="padding-left-right-1e">2020.05 ~ 11</span>
                  <span className="padding-left-right-1e">
                    한국블록체인교육연구원 청년혁신가 양성과정 수료
                  </span>
                </p>
              </div>
            </div>
            <div className="padding-top-2e">
              <div>
                <p className="font-bold-900 font-1H font-color-bl align-left">
                  CERTIFICATION
                </p>
              </div>
              <div>
                <p className="font-color-lightgray font-bold-700 align-left">
                  <FontAwesomeIcon
                    icon={faDesktop}
                    className="icon-size-1e icon-color align-left"
                  />
                  <span className="padding-left-right-1e">2001.05</span>
                  <span className="padding-left-right-1e">
                    워드프로세서 2급 취득
                  </span>
                </p>
                <p className="font-color-lightgray font-bold-700 align-left">
                  <FontAwesomeIcon
                    icon={faDesktop}
                    className="icon-size-1e icon-color align-left"
                  />
                  <span className="padding-left-right-1e">2001.07</span>
                  <span className="padding-left-right-1e">
                    정보처리기능사 취득
                  </span>
                </p>
                <p className="font-color-lightgray font-bold-700 align-left">
                  <FontAwesomeIcon
                    icon={faDesktop}
                    className="icon-size-1e icon-color align-left"
                  />
                  <span className="padding-left-right-1e">2002.07</span>
                  <span className="padding-left-right-1e">
                    컴퓨터활용능력 2급 취득
                  </span>
                </p>
                <p className="font-color-lightgray font-bold-700 align-left">
                  <FontAwesomeIcon
                    icon={faCar}
                    className="icon-size-1e icon-color align-left"
                  />
                  <span className="padding-left-right-1e">2008.01</span>
                  <span className="padding-left-right-1e">
                    운전면허 1종 보통 취득
                  </span>
                </p>
                <p className="font-color-lightgray font-bold-700 align-left">
                  <FontAwesomeIcon
                    icon={faCertificate}
                    className="icon-size-1e icon-color align-left"
                  />
                  <span className="padding-left-right-1e">2018.08</span>
                  <span className="padding-left-right-1e">
                    TOEIC 880점 취득
                  </span>
                </p>
              </div>
            </div>
            <div className="padding-top-2e">
              <div>
                <p className="font-bold-900 font-1H font-color-bl align-left">
                  CAREER
                </p>
              </div>
              <div>
                <p className="font-color-lightgray font-bold-700 align-left">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">
                    2014.06 ~ 2015.05
                  </span>
                  <span className="padding-left-right-1e">
                    서울시립대학교 대학영어센터 행정인턴
                  </span>
                </p>
                <p className="font-color-lightgray font-bold-700 align-left">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">
                    2016.02 ~ 2020.04
                  </span>
                  <span className="padding-left-right-1e">
                    (주)화성산업 해외영업관리부 대리
                  </span>
                </p>
                <p className="font-color-lightgray font-bold-700 align-left">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">
                    2020.12 ~ 2021.05
                  </span>
                  <span className="padding-left-right-1e">
                    (주)코인플러그 사업개발팀 매니저
                  </span>
                </p>
              </div>
            </div>
            <div className="padding-top-1e">
              <a
                href="https://drive.google.com/file/d/1R17O-vMFYArf0WObKqKnPVlYHABTpOwz/view?usp=sharing"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faFilePdf}
                  className="icon-size-2e icon-color"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
