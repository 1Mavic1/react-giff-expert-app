import { useEffect, useState } from "react";
import { getGifs } from "../Helpers/GetGifs";


export const useFetchGif = ( category ) => {
    const [state, setstate] = useState({
        data:[],
        loading: true
    });

    useEffect(() => {
        getGifs()
            .then(imgs => {

                setTimeout(() => {
                    console.log(imgs);
                    setstate({
                        data:imgs,
                        loading:false
                    })
                }, 3000); 
            })
    }, [category])

    return state;

}
