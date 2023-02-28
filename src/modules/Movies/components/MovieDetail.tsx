
/* eslint-disable react/prop-types */

import Button from "@/components/Button";
import Input from "@/components/Input";
import SelectInput from "@/components/SelectInput";
import { Formik, Field } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, ChangeEvent, SyntheticEvent } from "react";
import Modal from "react-modal";
import { addMovieToCatalogue } from "../api/movies";
import TopsetLogo from "../assets/topset-logo.png"
import { Movie } from "../types";

export type AddMovieProps = {
    isOpen: boolean;
    closeModal: () => void;
    movie?: Movie
}


const MovieDetails = ({
    isOpen,
    closeModal,
    movie
}: AddMovieProps) => {

    if (!movie) return null

    console.log(movie)
    return (
        <Modal
            closeTimeoutMS={100}
            isOpen={isOpen}
            onRequestClose={closeModal}
            className=" w-11/12 md:w-7/12 lg:w-8/12 xl:w-6/12 modal-details-center "
            contentLabel="Add movie to catalogue moddal"
        >
            <div className="w-full flex pt-1 pb-4 px-6 flex-wrap">
                <div className="w-full inline-flex justify-end">
                    <button onClick={closeModal}>x</button>
                </div>

                <h2 className="text-xl text-center w-full text-topset-100 font-medium mb-8">
                    Movie Detail
                </h2>




                <img alt="" className="w-full object-cover h-80" src={movie.coverImage} />
                <h1 className="text-2xl w-full text-topset-100 mt-4">{movie.title}</h1>
                <span className=" text-sm mt-2 border-topset-100 border rounded-full py-1 px-4">{movie.genre.title}</span>
                <h1 className="text-sm w-full text-topset-100 mt-4">{movie.description}</h1>


            </div>
        </Modal>
    )
}

export default MovieDetails