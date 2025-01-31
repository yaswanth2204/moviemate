import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";
import { useFetch } from "../hooks/useFetch";
export const MovieList = ({api}) => {
  const [searchParams]=useSearchParams();
  const queryTerm=searchParams.get("q")
  const { data: movies } = useFetch(api,queryTerm);
  
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies &&
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </section>
    </main>
  );
};
