export type Genre = {
    id: string
    title: string 
  }

  export type Movie = {
    id: string
    title: string
    coverImage: string
    rating: number
    description: string
    genre: Genre
    createdAT: Date
    updatedAt: Date
  }