import { Container } from "react-bootstrap";
import MainNav from "./MainNav";

export default function Layout(props) {
  return (
    <Container>
      <MainNav />
      <br />
      <br />
      <Container>{props.children}</Container>
      <br />
    </Container>
  );
}
