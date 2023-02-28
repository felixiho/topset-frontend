
import { useCallback, useEffect, useState } from 'react'
import { fetchGenres } from './api/genre'
import { fetchMovies, fetchMoviesByGenres } from './api/movies'
import Genres from './components/Genres'
import Header from './components/Header'
import MovieList from './components/MovieList'
import { Genre, Movie } from './types'
import { debounce } from "ts-debounce";




export default function Index() {
  const [genres, setGenres] = useState<Genre[]>([])
  const [movies, setMovies] = useState<Movie[]>([])
  const [page, setPage] = useState(1)

  const [filters, setFilters] = useState<string[]>([])

  useEffect(() => {
    if (filters.length > 0) {
      filterByGenre(filters.toString())
    }else {
      fetchMovies(page)
        .then(result => {
          setMovies(result)
        })
    }
  }, [filters])


  const filterByGenre = useCallback(
    debounce((filters:string) => {
      fetchMoviesByGenres(filters)
      .then(result => {
        setMovies(result) 
      }).catch(error => {
        console.log(error)
      })
    }, 200),
    []
  );

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
      <Genres genres={genres} filters={filters} setFilters={setFilters} />
      <MovieList movies={movies} />
    </>
  )
}
