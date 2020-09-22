import React, { useState } from "react";
import "./Header.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  Container,
  Row,
  Col,
} from "reactstrap";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import {
  faHome,
  faUser,
  faMicrochip,
  faListUl,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const setIsClose = () => setIsOpen(false);

  return (
    <div id="menu">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <Navbar light expand="md" className="nav" fixed="top">
              <Col
                xs={{ size: 1 }}
                sm={{ size: 1 }}
                md={{ size: 1, offset: 1 }}
              >
                <NavbarBrand href="">
                  <FontAwesomeIcon icon={faSmile} className="mainImg" />
                  <span className="mainTitle">4ix.me</span>
                </NavbarBrand>
              </Col>
              <Col xs={3} sm={2} md={{ size: 1, offset: 1 }}>
                <NavbarToggler onClick={toggle} navbar />
              </Col>
              <Collapse isOpen={isOpen} navbar className="navbar-collapse">
                <Nav navbar className="navbar-ul">
                  <NavItem className="navItem">
                    <NavLink href="#home" onClick={setIsClose}>
                      <FontAwesomeIcon icon={faHome} className="mainImg" />
                      HOME
                    </NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="#about" onClick={setIsClose}>
                      <FontAwesomeIcon icon={faUser} className="mainImg" />
                      ABOUT
                    </NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="#skills" onClick={setIsClose}>
                      <FontAwesomeIcon icon={faMicrochip} className="mainImg" />
                      SKILLS
                    </NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="#projects" onClick={setIsClose}>
                      <FontAwesomeIcon icon={faListUl} className="mainImg" />
                      PROJECTS
                    </NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="#contact" onClick={setIsClose}>
                      <FontAwesomeIcon
                        icon={faAddressBook}
                        className="mainImg"
                      />
                      CONTACT
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
