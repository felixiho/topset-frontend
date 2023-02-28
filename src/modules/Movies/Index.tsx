 
import Head from 'next/head' 
import { useEffect, useState } from 'react'
import { fetchGenres } from './api/genre'
import Header from './components/Header'
import { Genre } from './types'

 

export default function Index() {
  const [genres, setGenres] = useState<Genre[]>([])

  useEffect(() => {
    fetchGenres()
      .then(genres => {
        setGenres(genres)
      })
  }, [])

  return (
    <>
        <Header genres={genres}/>
    </>
  )
}
