import Link from "next/link";
import MovieDetails from "@/components/MovieDetails";
import PageHeader from "@/components/PageHeader";
import { Container, Card, Nav } from "react-bootstrap";
const page = 1;
const perPage = 10;
const url = `https://blush-duck-slip.cyclic.app/api/movies/573a13bff29313caabd5f799`;

export function getStaticProps() {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve({ props: data });
      });
  });
}

export default function About(props) {
  return (
    <Container>
      <PageHeader text="About the Developer: IN HO HAN" />
      <br />
      <Card className="bg-light text-dark">
        <Card.Body>
          <p>Hello, my name is In ho Han</p>
          <p>
            Currently I am developing and expanding my programming skills at the
            Seneca College. With exposure to multiple culture and countries in
            my childhood, I am always have desire to explore and learn new
            information about the world. So far, I have lived and visited Japan,
            Korea, USA, Canada, Jamaica and Cuba but I am excited to expand my
            list in upcoming future!
          </p>
          <p>
            However, I also enjoy indoor activities such as online gaming and
            watching movies on Netflix.
          </p>
          <p>
            If I choose one movie,{" "}
            <Link href="/movies/Shutter Island" passHref legacyBehavior>
              Shutter Island
            </Link>{" "}
            is my all time favorite.
          </p>
        </Card.Body>
        <MovieDetails movie={props.movie} />
      </Card>
    </Container>
  );
}
