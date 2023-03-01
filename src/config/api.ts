import { AnyDict } from "@/utils/types";
import config from "./core"; 
import { ApiResponse } from "./types";

let apiUrl: string | false = config("API_URL"); 
export const apiFetch = (
  path: string,
  opts?: RequestInit,
): Promise<Response> => {
  try {
    console.log(apiUrl)
    const baseUrl = apiUrl 
    if (!baseUrl) {
      throw new Error(" API URL not set");
    }

    opts = opts || {};
    const headers = opts.headers || {};
    opts.headers = headers;

    return fetch(`${baseUrl}${path}`, opts);
  } catch (error) {
    console.log(error);
    return error as any;
  }
};

export async function apiFetchJson<K>(
  path: string,
  opts?: RequestInit, 
): Promise<ApiResponse<K>> {
  const req = await apiFetch(path, opts, );
  return await req.json();
}

export const requestJsonHeaders = () => {
    return new Headers({
      "Content-Type": "application/json",
    });
};

export class ApiError {
  readonly statusCode: number;
  readonly data: AnyDict;
  readonly id: string;
  readonly apiPath: string;

  constructor(
    statusCode: number,
    data: AnyDict,
    apiPath: string,
    id: string = "api-error"
  ) {
    this.statusCode = statusCode;
    this.apiPath = apiPath;
    this.data = data;
    this.id = id;
  }
}
