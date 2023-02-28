import { apiFetchJson, requestJsonHeaders } from "@/config/api";
import { Genre, Movie } from "../types";

export async function fetchMovies(page:number): Promise<Movie[]| []> {

    const resp = await apiFetchJson<Movie[]>(
      `/api/movies?page=${page}`
    );
    if (!resp.isError) {
      return resp.result;
    }
  
    return [];
}


export async function addMovieToCatalogue(body: any): Promise<Movie[]| []> {
    const resp = await apiFetchJson<Movie[]>(
      "/api/movie", {
        method: "POST",
        headers: requestJsonHeaders(),
        body: JSON.stringify(body)
      }
    );
    if (resp.isError) {
        throw new Error(`Error adding movie to catalogue: ${resp.message}`);
    }
  
    return resp.result
}



  