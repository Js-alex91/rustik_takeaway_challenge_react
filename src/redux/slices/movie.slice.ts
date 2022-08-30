import { createSlice } from "@reduxjs/toolkit"
import { RootObject } from "../../types/movies.types"
import { fetchMovieByName, fetchMovies } from "../thunks/movies.thunk"


const initialState: RootObject = {
    results: [],
}

export const moviesSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.fulfilled, (state, { payload }) => {
                payload ? state.results = [...payload] : []
            })

            .addCase(fetchMovieByName.fulfilled, (state, { payload }) => {
                payload ? state.results = [...payload] : []
            })
    }
})




export default moviesSlice.reducer