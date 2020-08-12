import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['Chivas', 'Pumas', 'Cruz Azul'];
    const [categories, setCategories] = useState(['Chivas'/*, 'Pumas', 'Cruz Azul'*/]);

    // const handleAdd = () => {
    //     /*Cuando se hace el setCategories se "sobreescribe"
    //       el estado anterior por lo cual marca un error
    //     */
    //     // setCategories(categories.push('América'));

    //     // Esta es una solución
    //     // setCategories([...categories,'América']);

    //     // Otra solución
    //     setCategories(categorias => [...categorias,'America']);
    // }



    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />



            <ol>
                {categories.map(category =>
                    (<GifGrid
                        key={category}
                        category={category}
                    />)
                )}
            </ol>


        </>
    );

}
