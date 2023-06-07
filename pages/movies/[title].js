import { useRouter } from "next/router";
import useSWR from "swr";
import MovieDetails from "@/components/MovieDetails";
import Error from "next/error";
import PageHeader from "@/components/PageHeader";

export default function Title() {
  const router = useRouter();
  const { title } = router.query;

  const { data, error, isLoading } = useSWR(
    title
      ? `https://blush-duck-slip.cyclic.app/api/movies?page=1&perPage=10&title=${title}`
      : null
  );

  if (isLoading) {
    return <p>Loading ...</p>;
  } else if (data == null && data == undefined) {
    return null;
  } else {
    if (data.movies?.length == 0) {
      return <Error statusCode={404} />;
    }
    if (data.movies?.length > 0) {
      return data?.movies?.map((movie) => {
        return (
          <div key={movie._id}>
            <PageHeader text={movie.title} />
            <br />
            <MovieDetails movie={movie} />
          </div>
        );
      });
    }
  }
}
