import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import TopsetLogo from "../assets/topset-logo.png"
import { Genre } from "../types";
import AddMovie from "./AddMovie";

export type HeaderProps = {
    genres: Genre[]
}
export default function Header({
    genres
}: HeaderProps) {

    const [addMovieModalOpen, setAddMovieModal] = useState(false)
 

    return (
        <header className=" w-full flex flex-wrap my-auto justify-between text-topset-100">
            <Image src={TopsetLogo} alt="topset logo" className=" h-full" />
            <h2 onClick={() => setAddMovieModal(true)} className="text-xl underline my-auto cursor-pointer">Add Movie</h2>
            <AddMovie
                isOpen={addMovieModalOpen}
                closeModal={() => setAddMovieModal(false)}
                genres={genres}
            />

        </header>
    )
}