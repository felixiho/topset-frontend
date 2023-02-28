
 import { useEffect, useState } from 'react'
import { fetchGenres } from './api/genre'
import { fetchMovies } from './api/movies'
import Header from './components/Header'
import MovieList from './components/MovieList'
import { Genre, Movie } from './types'



export default function Index() {
  const [genres, setGenres] = useState<Genre[]>([])
  const [movies, setMovies] = useState<Movie[]>([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    Promise.all([fetchGenres(), fetchMovies(page)])
      .then(result => {
        setGenres(result[0])
        setMovies(result[1])
      }).catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <Header genres={genres} />
      <MovieList movies={movies} />
    </>
  )
}
