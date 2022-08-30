import { FormikValues, useFormik } from 'formik'
import { url } from 'inspector'
import React from 'react'

interface IFormik {

    filter: string

}
export const Header = () => {
    const formik = useFormik<FormikValues>({
        initialValues: {
            filter: ''
        },
        onSubmit: () => { },
    })

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
                value={formik.values.filter}
                onChange={formik.handleChange}
            />

        </div >
    )
}
