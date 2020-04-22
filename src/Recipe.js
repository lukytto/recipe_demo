import React from 'react';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className='col-4 mb-3'>
            <div className='card'>
                <div className='card-header'>{title}</div>
                <div class="card-body">
                    <div className='product-img'>
                        <img src={image} className='mb-3'
                            style={{ maxHeight: '100%', maxWidth: '100%' }}></img>
                    </div>
                    <ol>
                        {ingredients.map(ingredient => (
                            <li class="card-text">{ingredient.text}</li>
                        ))}
                        <p class="card-text">Kcal {calories}s</p>
                    </ol>
                    <button className='btn btn-outline-success my-2 my-sm-0'>
                        View Recipe
                         </button>

                </div>
            </div>
        </div>
    );
};

export default Recipe;