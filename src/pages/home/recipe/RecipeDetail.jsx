import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RecipeDetail = () => {
    const recipeDetails = useLoaderData()
    console.log(recipeDetails)
    const { name,image,id, recipeName, details } = recipeDetails;
    console.log(name)
    return (
        <div className='d-flex mt-5'>
            <div style={{width:"50%"}}>
                <img style={{width:'100%',height:"60%"}} src={image} alt="" />
            </div>
            <div style={{width:'50%', padding:'10px 15px',}}>
                <h4>{name}</h4>
                <p>{recipeName}</p>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default RecipeDetail;