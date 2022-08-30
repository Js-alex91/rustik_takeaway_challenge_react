import React, { useEffect, useState } from 'react'
import { keys } from '../../keys'
import { Result } from '../../types/movies.types'
import { ModalMovie } from '../modal/ModalMovie'


interface IProps {
    movie: Result
}
export const MovieCard = ({ movie }: IProps) => {
    const [show, setShow] = useState<boolean>(false)

    return (
        <div className='bg-slate-800 rounded-lg cursor-pointer' onClick={() => setShow(true)} >
            <img className='rounded-md' src={`${keys.basePosterURL}${movie.poster_path}`} alt="" />
            {
                show && <ModalMovie movie={movie} setShow={setShow} show={show} />
            }
        </div>
    )
}
