import { Container, Row, Col } from "react-bootstrap";

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
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
