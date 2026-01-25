import React from 'react'
import {useState, useEffect} from 'react'

export default function Github(){
    const[data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response => response.json())
        .then(data => setData(data))
    },[])
    return (
        <>
        <h1 className="bg-green-100 text-center text-black p-2 m-1">
            Github followers: {data.followers}
        </h1>
        <img src={data.avatar_url} alt='Git pic'/>
        </>
    )
}