import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import moviesReducer from '../slices/movie.slice'
export const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

