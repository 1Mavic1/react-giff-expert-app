import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const HanddleAdd = () => {
    //     //setCategories([...categories,'Hola']);
    //     setCategories(cats => [...categories,'Hola'] );
    // }
    return (
        <>
            <h2>GiffExpertApp</h2>
            <AddCategory setCategories = {setCategories} />
            <hr/>
            <ol>
                {
                    categories.map( category =>
                    <GifGrid 
                    key = {category}
                    category = {category}/>
                    )
                }
            </ol>
            
        </>
        )
}
