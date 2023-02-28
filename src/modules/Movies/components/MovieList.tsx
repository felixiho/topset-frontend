import { useState } from "react"
import { Movie } from "../types"
import MovieCard from "./MovieCard"
import MovieDetails from "./MovieDetail"

export type MovieListProps = {
    movies: Movie[]
}

const MovieList = ({movies}: MovieListProps) => {
    const [selectedMovie, setSelectedMovie] = useState<any>()
    const [detailsModal, setDetailsModal] = useState(false)

    const handleMovieClick = (movie: Movie) => {
        console.log('adsfsdfasdfasdf')
        setSelectedMovie(movie)
        setDetailsModal(true)
    }
        return (
        <section className=" mt-8 w-full flex flex-wrap">
            {
                movies.map(movie => <MovieCard key={movie.id} movie={movie} handleMovieClick={handleMovieClick} /> )
            }
        <MovieDetails
            movie={selectedMovie}
            isOpen={detailsModal}
            closeModal={() => setDetailsModal(false)}
        />
        </section>
    )
}

export default MovieList