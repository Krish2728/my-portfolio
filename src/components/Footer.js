import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <h1 className="nav_logo">K.Kumar</h1>
          <span className="quote">Turning Vision into Reality</span>
          </Col>
          <Col size={12} sm={6} className="footer_text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/krish-kumar-0363212b7/"><img src={navIcon1} alt="linkedIn" /></a>
              <a href="https://github.com/Krish2728"><img src={navIcon2} alt="Github" /></a>
              <a href="https://www.instagram.com/kr.ish4543/"><img src={navIcon3} alt="Insta" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
