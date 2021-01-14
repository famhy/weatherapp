import {useState,useEffect} from 'react'

export const usePosition=()=>{
    const [position,setPosition]=useState({})
    const [error,setError]=useState(null)

    const onChange=({coords})=>{
        console.log('coords : '+coords.latitude)
        setPosition({coords})
    }
    const onError=(error)=>{
        console.log(error)
        setError(error.message)
    }

    useEffect(()=>{
        const geo=navigator.geolocation.Geolocation

        if(!geo){
            setError('geolocation is not supported')
            return;
        }
        console.log('log g '+navigator.geolocation,geo)
        let watcher = geo.watchPosition(function (cord){
            console.log('hello'+cord)
        });
    //    const pos= geo.getCurrentPosition(onChange,onError)
       console.log(geo.Geolocation,geo.getCurrentPosition(function (cord){
           console.log(cord)
       }))

       return () => geo.clearWatch(watcher);
    })
        // console.log('positin ::' +position)

    return {...position,error}
}