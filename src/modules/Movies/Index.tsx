
import { useCallback, useEffect, useState } from 'react'
import { fetchGenres } from './api/genre'
import { fetchMovies, fetchMoviesByGenres } from './api/movies'
import Genres from './components/Genres'
import Header from './components/Header'
import MovieList from './components/MovieList'
import { Genre, Movie } from './types'
import { debounce } from "ts-debounce";
import Paginator from './components/Paginator'




export default function Index() {
  const [genres, setGenres] = useState<Genre[]>([])
  const [movies, setMovies] = useState<Movie[]>([])
  const [page, setPage] = useState(1)

  const [filters, setFilters] = useState<string[]>([])
  const [disabled, setDisabled] = useState(false)
  const [loading, setLoading] = useState(false)

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

  useEffect(() => {
    setDisabled(true)
    setLoading(true)
    fetchMovies(page)
      .then(result => {
        setDisabled(false)
        setLoading(false)
        setMovies(result)
      })

  },[page])


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
    setLoading(true)
    Promise.all([fetchGenres(), fetchMovies(page)])
      .then(result => {
        setGenres(result[0])
        setMovies(result[1])
        setLoading(false)
      }).catch(error => {
        setLoading(false)
        console.log(error)
      })
  }, [])

  if (loading){
    return <section>
      loading...
    </section>
  }
  return (
    <>
      <Header genres={genres} setMovies={setMovies} />
      <Genres genres={genres} filters={filters} setFilters={setFilters} />
      <MovieList movies={movies} />
      <Paginator setPage={setPage} disabled={disabled} page={page} maxPage={4} />
    </>
  )
}
