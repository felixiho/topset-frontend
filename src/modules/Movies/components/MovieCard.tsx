import Image from "next/image"
import { Movie } from "../types"

export type MovieListProps = {
    movie: Movie
    handleMovieClick: (movie: Movie) => void
}

const MovieCard = ({movie, handleMovieClick}: MovieListProps) => {


    return (
        <div onClick={ () => handleMovieClick(movie)} className=" cursor-pointer my-3 w-1/3 px-2 flex flex-wrap bg-white pb-6">
            <img alt="" className="w-full object-cover h-72" src={movie.coverImage} />
            <h1 className="text-2xl w-full text-topset-100 mt-4">{movie.title}</h1>
            <span className=" text-sm mt-2 border-topset-100 border rounded-full py-1 px-4">{movie.genre.title}</span>
        </div>
    )
}

export default MovieCard