import React, { useEffect } from 'react'
import { keys } from '../keys'

export const MovieCard = () => {

    useEffect(() => {
        console.log(keys)
    }, [])

    return (
        <div className='bg-slate-500'><p className='font-thin'>hola</p></div>
    )
}
