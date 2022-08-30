import { createAsyncThunk } from "@reduxjs/toolkit"
import { moviesAPI } from "../../api/movie.client"
import { keys } from "../../keys"

export const fetchMovies = createAsyncThunk(
    'movies/getMovies',
    async () => {

        try {
            const { data } = await moviesAPI.get(`${keys.baseURL}/movie/popular?api_key=${keys.api_key}`)
            return data.results ? data.results : []
        } catch (error) {
            console.log(error)
        }

    }
)

export const fetchMovieByName = createAsyncThunk(
    'movies/fetchMovieByName',

    //https://api.themoviedb.org/3/search/movie?api_key=e49d12e9045c1d84386d348c7dc2d991&language=en-US&query=thor
    async (name: string) => {
        try {
            const { data } = await moviesAPI.get(`${keys.baseURL}/search/movie?api_key=${keys.api_key}&language=en-US&query=${name}`)
            return data.results ? data.results : []
        } catch (error) {
            console.log(error)
        }

    }
)