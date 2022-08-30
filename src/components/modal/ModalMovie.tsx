import { Backdrop, Fade, makeStyles, Modal } from '@material-ui/core'
import React from 'react'
import { keys } from '../../keys'

import { Result } from '../../types/movies.types'

interface IProps {
    movie: Result,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    show: boolean
}

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
export const ModalMovie = ({ movie, setShow, show }: IProps) => {
    const classes = useStyles();
    const handleToggle = () => {
        setShow(false);
        console.log(show)
    }

    return (

        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={show}
            onClose={handleToggle}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}

        >
            <Fade in={show}>
                <div className='bg-slate-100 p-3 w-1/2 flex flex-col rounded-lg outline-none overflow-auto'>

                    <div className='flex justify-end m-3'>
                        <button className='font-bold bg-slate-200 rounded-full p-2' onClick={handleToggle} >x</button>
                    </div>

                    <div className=' grid grid-cols-1 lg:grid-cols-2 gap-3'>
                        <div className='m-1 flex justify-center items-center'>
                            <img className='rounded-md' style={{ objectFit: 'cover' }} src={`${keys.basePosterURLModal}${movie.poster_path}`} alt="" />
                        </div>

                        <div className='m-1  flex flex-col gap-3 p-3 shadow-sm'>
                            <span className='text-lg font-thin text-gray-900 '>Original Title: {movie.title}</span>
                            <span className='text-lg font-thin text-gray-900 '>Lang: {movie.original_language}</span>
                            <span className='text-lg font-thin text-gray-900 '>Released: {movie.release_date.toString()}</span>
                            <span className='text-lg font-thin text-gray-900 '>Public: {movie.adult === true ? 'Adult' : 'Everyone'}</span>
                            <span className='text-lg font-thin text-gray-900 '>Rating: {movie.popularity}</span>
                            <span className='text-lg font-thin text-gray-900 '>Votes Qty: {movie.vote_count}</span>
                        </div>
                    </div>

                    <div className='m-2'>
                        <p className='font-bold'>Overview</p>

                        <p className='text-justify text-lg font-thin text-gray-900'>{movie.overview}</p>
                    </div>

                </div>
            </Fade>
        </Modal>
    )
}


