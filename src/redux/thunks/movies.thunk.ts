import { createAsyncThunk } from "@reduxjs/toolkit"
import { moviesAPI } from "../../api/movie.client"
import { keys } from "../../keys"

export const fetchMovies = createAsyncThunk(
    'movies/getMovies',
    async () => {

        try {
            const { data } = await moviesAPI.get(`${keys.baseURL}/movie/popular?api_key=${keys.api_key}`)
            return data.results
        } catch (error) {
            console.log(error)
        }

    }
)