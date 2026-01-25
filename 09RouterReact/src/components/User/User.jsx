import React from 'react'
import {useParams} from 'react-router-dom'

export default function User(){
    const {userid} = useParams()
    return(
        <>
        <h1
        className = "text-3xl bg-green-200 p-4 text-center text-black"
        >User : {userid } </h1>
        </>
    )
}