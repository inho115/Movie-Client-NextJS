import Link from "next/link";
import MovieDetails from "@/components/MovieDetails";
import PageHeader from "@/components/PageHeader";
import { Container, Card } from "react-bootstrap";
const page = 1;
const perPage = 10;
const url = `https://blush-duck-slip.cyclic.app/api/movies/573a13c5f29313caabd6ee61`;

export function getStaticProps() {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve({ props: { movie: data } });
      });
  });
}

export default function About(props) {
  console.log(props.movie);
  return (
    <Container>
      <PageHeader text="About the Developer: IN HO HAN" />
      <Card className="bg-light text-dark">
        <Card.Body></Card.Body>
        <MovieDetails />
      </Card>
    </Container>
  );
}
