
import Button from "@/components/Button";
import Input from "@/components/Input";
import SelectInput from "@/components/SelectInput";
import {  useState, ChangeEvent } from "react";
import Modal from "react-modal";
import { addMovieToCatalogue } from "../api/movies"; 
import { Genre, Movie } from "../types";

export type AddMovieProps = {
    isOpen: boolean;
    closeModal: () => void;
    genres: Genre[]
    setMovies: (movie: Movie[]) => void
}


const AddMovie = ({
    isOpen,
    closeModal,
    genres,
    setMovies
}: AddMovieProps) => {
    let initialError = {
        title: "",
        coverImage: "",
        rating: "",
        genre: "",
        description: ""
    }
    let initialValues = {
        title: "",
        coverImage: "",
        rating: "",
        genre: {},
        description: ""
    }
    const [error, setError] = useState<any>(initialError)

    const [values, setValues] = useState<any>(initialValues)

    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)

    const validateInput = () => {
        setError((prev:any) => ({ ...prev, ...initialError })) //reset errors 
        let isValid = true 

        if (!values.title) {
            setError((prev:any) => ({
                ...prev,
                title: "Movie title invalid"
            }))
            isValid = false
        }
        if (values.coverImage == "") {
            setError((prev:any) => ({
                ...prev,
                coverImage: "Cover Image invalid"
            }))
            isValid = false
        }
        if (!values.rating) {
            setError((prev:any) => ({
                ...prev,
                rating: "Movie rating invalid"
            }))
            isValid = false
        }
        if (!values.description) {
            setError((prev:any) => ({
                ...prev,
                description: "Movie description invalid"
            }))
            isValid = false
        }
        if (Object.values(values.genre).length < 1) {
            setError((prev:any) => ({
                ...prev,
                genre: "Invalid genre selected"
            }))
            isValid = false
        } 
        return isValid
    }

    const submit = (e: any) => {
        e.preventDefault()
        setLoading(true)
        setDisabled(true)
        //validate 
        if (!validateInput()) { 
            setLoading(false)
            setDisabled(false)
            return
        }
        const data = {
            ...values,
            genre: values.genre.id,
            rating: values.rating.id
        }
        try {
            addMovieToCatalogue(data)
                .then(movies => { 
                    setMovies(movies)
                    setLoading(false)
                    setDisabled(false)
                    setValues((prev:any) => ({ ...prev, ...initialValues })) //reset errors 
                    closeModal() 

                })
        } catch (error) {
            //handle error here
            console.log(error)
        }

    }



    return (
        <Modal
            closeTimeoutMS={100}
            isOpen={isOpen}
            onRequestClose={closeModal}
            className=" w-11/12 md:w-7/12 lg:w-6/12 xl:w-6/12 modal-categories-center "
            contentLabel="Add movie to catalogue moddal"
        >
            <div className="w-full flex pt-1 pb-4 px-6 flex-wrap">
                <div className="w-full inline-flex justify-end">
                    <button onClick={closeModal}>x</button>
                </div>

                <form className="flex flex-wrap w-full" onSubmit={submit}>
                    <h2 className="text-xl text-center w-full text-topset-100 font-medium mb-8">
                        Add Movie to Catalogue
                    </h2>

                    <div className="md:w-1/2  w-full px-2 my-4 md:my-0" >
                        <Input
                            label="Movie Title"
                            value={values.title}
                            type="text"
                            error={error.title}
                            name="title"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setValues((val: any) => ({
                                ...val,
                                title: e.target.value
                            }))}
                        />
                    </div>
                    <div className="md:w-1/2  w-full px-2 my-4 md:my-0">
                        <Input
                            label="Cover Image Url"
                            value={values.coverImage}
                            type="text"
                            error={error.coverImage}
                            name="coverImage"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setValues((val: any) => ({
                                ...val,
                                coverImage: e.target.value
                            }))}
                        />
                    </div>
                    <div className="md:w-1/2  w-full px-2 my-4">
                        <SelectInput
                            options={genres}
                            label="Genre"
                            error={error.genre}
                            name="genre"
                            setSelected={(genre: any) => setValues((val: any) => ({
                                ...val,
                                genre
                            }))}
                            selected={values.genre}
                        />
                    </div>
                    <div className="md:w-1/2 w-full px-2 my-4">
                        <SelectInput
                            options={[{ id: 1, title: 1 }, { id: 2, title: 2 }, { id: 3, title: 3 }, { id: 4, title: 4 }, { id: 5, title: 5 },]}
                            label="Ratings"
                            error={error.rating}
                            name="rating"
                            setSelected={(rating: any) => setValues((val: any) => ({
                                ...val,
                                rating
                            }))}
                            selected={values.rating}
                        />
                    </div>

                    <div className="w-full px-2 my-4 md:my-0">
                        <Input
                            label="Description"
                            value={values.description}
                            error={error.description}
                            name="description"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setValues((val: any) => ({
                                ...val,
                                description: e.target.value
                            }))}
                        />
                    </div>

                    <Button
                        type="submit"
                        loading={loading}
                        disabled={disabled}
                    >
                        Add Movie
                    </Button>

                </form>
            </div>
        </Modal>
    )
}

export default AddMovie