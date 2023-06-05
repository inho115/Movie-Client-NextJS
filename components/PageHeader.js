import Card from "react-bootstrap/Card";

export default function PageHeader(props) {
  return (
    <Card className="bg-light text-dark">
      <Card.Body>props.name</Card.Body>
      <br />
    </Card>
  );
}
