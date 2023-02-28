import { apiFetchJson } from "@/config/api";
import { Genre } from "../types";

export async function fetchGenres( ): Promise<Genre[]| []> {

    const resp = await apiFetchJson<Genre[]>(
      "/api/genres"
    );
    if (!resp.isError) {
      return resp.result;
    }
  
    return [];
  }
  