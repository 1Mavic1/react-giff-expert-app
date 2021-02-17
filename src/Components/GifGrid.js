import React from 'react';
import { useFetchGif } from '../Hooks/useFetchGif';
// import { getGifs } from '../Helpers/GetGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
        
        const {data:images,loading} = useFetchGif();
        console.log(images);
        console.log(loading);




        // const [images, setimages] = useState([])

        // useEffect( ()=>{
        //     getGifs( category ).then(setimages);
        // },[category])

   
    
    //getGifs();

    return (
        <>
            <h3>{category}</h3>
            { loading && 'Cargando'}
             <div className="card-grid">
                    {
                        images.map( (img) => (
                            <GifGridItem 
                            key ={img.id}
                            {...img}
                            />
                        )
                    )
                    }
            </div>
            
        </>
    )
}
