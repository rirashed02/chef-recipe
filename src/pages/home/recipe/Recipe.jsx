import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';

const Recipe = () => {
    const [recipe,setRecipe] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/recipe')
        .then(res => res.json())
        .then(data => setRecipe(data))
    },  [])
    return (
        <div className='grid grid-cols-3 gap-2'>
            {
                recipe.map(rec => <RecipeCard key={rec} rec={rec}></RecipeCard>)
            }
        </div>
    );
};

export default Recipe;