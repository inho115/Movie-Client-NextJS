import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

export default function PageHeader(props) {
  return (
    <Card className="bg-light text-dark">
      <Card.Body>
        <strong>{props.text}</strong>
      </Card.Body>
    </Card>
  );
}
