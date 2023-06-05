import { Container, Stack } from "react-bootstrap";
import MainNav from "./MainNav";

export default function Layout(props) {
  return (
    <Container>
      <Stack direction="vertical" gap={5}>
        <MainNav />
        <br />
        <br />
        <Container>{props.children}</Container>
        <br />
      </Stack>
    </Container>
  );
}
