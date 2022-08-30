import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { MovieCard } from '../components/card/MovieCard'
import { RootState, useAppDispatch } from '../redux/store/store'
import { fetchMovies } from '../redux/thunks/movies.thunk'
import { Result } from '../types/movies.types'

export const ContainerList = () => {
    const { results: movies } = useSelector((state: RootState) => state.movies)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    console.log(movies)
    return (
        <div className='m-10 flex flex-wrap justify-center gap-5'>
            {
                movies.length > 0 && movies.map((movie: Result) => (
                    <MovieCard key={`movie-${movie.id}`} movie={movie} />
                ))
            }
        </div>
    )
}
