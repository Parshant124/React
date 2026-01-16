import {useEffect, useState} from 'react'

function useCurrencyinfo(currency){
    const[data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res)=>res.json( ))
        .then((res)=>setData(res[currency]))  // res conatins the object data and via currency we are accessing that particular key in the object
    },[currency])   // whenever currency type is changed, api will be fetched for that currency
    console.log(data)
    return data
}

export default useCurrencyinfo