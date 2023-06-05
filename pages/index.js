import { Container, Row, Col, Button } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <strong>
            <p>Movies</p>
          </strong>
        </Col>
      </Row>
      <br />
      <Row></Row>
    </Container>
  );
}
