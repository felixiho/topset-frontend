import { Genre } from "../types"

export type GenresProp = {
    genres: Genre[]
    filters: string[]
    setFilters: any
}
const Genres = ({ genres, filters, setFilters }: GenresProp) => {

    const handleClick = (id: string) => { 
        if (filters.includes(id)){
            setFilters((filt:string[]) => filt.filter((val: string)=> val !== id ))
        }else{
            setFilters((filt:string[]) => ([
                ...filt,
                id
            ]))
        }
    }

    return (
        <section className="my-6">
            {
                genres.map(genre => 
                    <span 
                        onClick={() => handleClick(genre.id)}
                        className={`${( filters.includes(genre.id)) ? " bg-topset-100 text-white" : ""} cursor-pointer text-sm mt-2 mx-4 border-topset-100 border rounded-full py-1 px-4`}>
                            {genre.title}
                    </span>
                )
            }
        </section>
    )
}

export default Genres