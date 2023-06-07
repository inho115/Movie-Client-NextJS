/*********************************************************************************
 *  WEB422 – Assignment 3
 *  I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: IN HO HAN Student ID: 106053218 Date: 2023/06/06
 *
 *
 ********************************************************************************/

import useSWR from "swr";
import { useState, useEffect } from "react";
import { Pagination, Accordion, Container } from "react-bootstrap";
import MovieDetails from "@/components/MovieDetails";
import PageHeader from "@/components/PageHeader";

export default function Home() {
  const [page, setPage] = useState(1);
  const [movie, setMovie] = useState([]);
  const { data, error, isLoading } = useSWR(
    `https://blush-duck-slip.cyclic.app/api/movies?page=${page}&perPage=10`
  );

  function previous(e) {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function next(e) {
    setPage(page + 1);
  }

  useEffect(() => {
    if (data) {
      setMovie(data);
    }
  }, [page]);

  if (isLoading) {
    return <p>Loading ...</p>;
  } else {
    if (data.movies?.length > 0) {
      return (
        <Container>
          <PageHeader text={"Film Collection : Sorted by Date"} />
          <br />
          <Accordion>
            {data?.movies &&
              data.movies?.map((p) => {
                return (
                  <Accordion.Item eventKey={p._id} key={p._id}>
                    <Accordion.Header>
                      <strong>
                        <p className="title">{p.title}</p>
                      </strong>
                      <p className="year">({p.year}:</p>
                      <p className="directors">
                        Directed By {p.directors.join(", ")})
                      </p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <MovieDetails movie={p} />
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
          </Accordion>
          <br />
          <Pagination>
            <Pagination.Prev onClick={previous}></Pagination.Prev>
            <Pagination.Item>{page}</Pagination.Item>
            <Pagination.Next onClick={next}></Pagination.Next>
          </Pagination>
        </Container>
      );
    }
  }
}
