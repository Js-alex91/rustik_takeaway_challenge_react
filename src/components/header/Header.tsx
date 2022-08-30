import { FormikValues, useFormik } from 'formik'
import { url } from 'inspector'
import React, { useState } from 'react'
import { useAppDispatch } from '../../redux/store/store'
import { fetchMovieByName, fetchMovies } from '../../redux/thunks/movies.thunk'


export const Header = () => {
    const dispatch = useAppDispatch()
    const [filter, setFilter] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value)
        if (e.target.value.length > 0) {
            setTimeout(() => {
                dispatch(fetchMovieByName(e.target.value))
            }, 1500);

        } else {
            setTimeout(() => {
                dispatch(fetchMovies())
            }, 1500);
        }
    }
    return (
        <div className='w-[100%] flex h-[30rem] bg-black  justify-center items-center'
            style={{
                backgroundImage: `url("https://gcdn.emol.cl/mitos-y-enigmas/files/2016/07/morfeo-kia-super-bowl.jpg")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center ',
            }}>
            < input
                type="text"
                name="filter"
                className='bg-slate-200 rounded-full p-2 focus:outline-none'
                placeholder='filter by name'
                value={filter}
                onChange={handleChange}
            />

        </div >
    )
}
